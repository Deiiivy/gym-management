import { Injectable } from '@nestjs/common';
import { UserRole } from '@prisma/client';

import { PrismaService } from '../../../../shared/infrastructure/prisma/prisma.service';
import {
  AuthUserRecord,
  CreateAuthUserParams,
  UserAuthRepositoryPort,
} from '../../application/ports/user-auth.repository';

@Injectable()
export class PrismaUserAuthRepository implements UserAuthRepositoryPort {
  constructor(private readonly prisma: PrismaService) {}

  async findByEmail(email: string): Promise<AuthUserRecord | null> {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  async findById(id: string): Promise<AuthUserRecord | null> {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async gymExists(gymId: string): Promise<boolean> {
    const gym = await this.prisma.gym.findUnique({
      where: { id: gymId },
      select: { id: true },
    });

    return !!gym;
  }

  async createUser(params: CreateAuthUserParams): Promise<AuthUserRecord> {
    return this.prisma.user.create({
      data: {
        firstName: params.firstName,
        lastName: params.lastName,
        email: params.email,
        passwordHash: params.passwordHash,
        phone: params.phone ?? null,
        role: params.role,
        status: params.status,
      },
    });
  }

  async createGymForOwner(params: {
    ownerUserId: string;
    gymName: string;
    slug: string;
    email?: string | null;
    phone?: string | null;
  }): Promise<{ id: string; name: string; slug: string }> {
    return this.prisma.gym.create({
      data: {
        name: params.gymName,
        slug: params.slug,
        ownerId: params.ownerUserId,
        email: params.email ?? null,
        phone: params.phone ?? null,
      },
      select: {
        id: true,
        name: true,
        slug: true,
      },
    });
  }

  async addGymUser(params: {
    gymId: string;
    userId: string;
    role: UserRole;
    isPrimary?: boolean;
  }): Promise<void> {
    await this.prisma.gymUser.create({
      data: {
        gymId: params.gymId,
        userId: params.userId,
        role: params.role,
        isPrimary: params.isPrimary ?? false,
      },
    });
  }

  async createTrainerProfile(params: {
    userId: string;
    gymId: string;
  }): Promise<void> {
    await this.prisma.trainerProfile.create({
      data: {
        userId: params.userId,
        gymId: params.gymId,
      },
    });
  }

  async createClientProfile(params: {
    userId: string;
    gymId: string;
  }): Promise<void> {
    await this.prisma.clientProfile.create({
      data: {
        userId: params.userId,
        gymId: params.gymId,
      },
    });
  }

  async updateLastLogin(userId: string): Promise<void> {
    await this.prisma.user.update({
      where: { id: userId },
      data: { lastLoginAt: new Date() },
    });
  }
}