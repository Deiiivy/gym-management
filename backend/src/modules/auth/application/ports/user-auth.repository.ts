import { UserRole, UserStatus } from '@prisma/client';

export type AuthUserRecord = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  passwordHash: string;
  phone: string | null;
  birthDate: Date | null;
  gender: string | null;
  avatarUrl: string | null;
  role: UserRole;
  status: UserStatus;
  createdAt: Date;
  updatedAt: Date;
  lastLoginAt: Date | null;
};

export type CreateAuthUserParams = {
  firstName: string;
  lastName: string;
  email: string;
  passwordHash: string;
  phone?: string | null;
  role: UserRole;
  status: UserStatus;
};

export abstract class UserAuthRepositoryPort {
  abstract findByEmail(email: string): Promise<AuthUserRecord | null>;
  abstract findById(id: string): Promise<AuthUserRecord | null>;
  abstract gymExists(gymId: string): Promise<boolean>;
  abstract createUser(params: CreateAuthUserParams): Promise<AuthUserRecord>;
  abstract createGymForOwner(params: {
    ownerUserId: string;
    gymName: string;
    slug: string;
    email?: string | null;
    phone?: string | null;
  }): Promise<{ id: string; name: string; slug: string }>;
  abstract addGymUser(params: {
    gymId: string;
    userId: string;
    role: UserRole;
    isPrimary?: boolean;
  }): Promise<void>;
  abstract createTrainerProfile(params: {
    userId: string;
    gymId: string;
  }): Promise<void>;
  abstract createClientProfile(params: {
    userId: string;
    gymId: string;
  }): Promise<void>;
  abstract updateLastLogin(userId: string): Promise<void>;
}