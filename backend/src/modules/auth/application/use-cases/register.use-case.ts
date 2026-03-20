import {
  BadRequestException,
  ConflictException,
  Inject,
  Injectable,
} from '@nestjs/common';
import { UserRole, UserStatus } from '@prisma/client';

import { RegisterResponse } from '../../auth.types';
import { PasswordHasherPort } from '../ports/password-hasher.port';
import { TokenGeneratorPort } from '../ports/token-generator.port';
import { UserAuthRepositoryPort } from '../ports/user-auth.repository';
import { RegisterDto } from '../dto/register.dto';
import { getPermissionsByRole } from './get-permissions-by-role';

@Injectable()
export class RegisterUseCase {
  constructor(
    @Inject(UserAuthRepositoryPort)
    private readonly userRepository: UserAuthRepositoryPort,
    @Inject(PasswordHasherPort)
    private readonly passwordHasher: PasswordHasherPort,
    @Inject(TokenGeneratorPort)
    private readonly tokenGenerator: TokenGeneratorPort,
  ) {}

  async execute(dto: RegisterDto): Promise<RegisterResponse> {
    const email = dto.email.trim().toLowerCase();

    const existingUser = await this.userRepository.findByEmail(email);
    if (existingUser) {
      throw new ConflictException('Email is already registered');
    }

    if (dto.role === UserRole.PLATFORM_ADMIN) {
      throw new BadRequestException(
        'PLATFORM_ADMIN cannot be registered publicly',
      );
    }

    if (dto.role === UserRole.TRAINER || dto.role === UserRole.CLIENT) {
      if (!dto.gymId) {
        throw new BadRequestException(
          `${dto.role} registration requires gymId`,
        );
      }

      const gymExists = await this.userRepository.gymExists(dto.gymId);
      if (!gymExists) {
        throw new BadRequestException('Gym not found');
      }
    }

    if (dto.role === UserRole.GYM_OWNER) {
      if (!dto.gymName || !dto.gymSlug) {
        throw new BadRequestException(
          'GYM_OWNER registration requires gymName and gymSlug',
        );
      }
    }

    const passwordHash = await this.passwordHasher.hash(dto.password);

    const user = await this.userRepository.createUser({
      firstName: dto.firstName.trim(),
      lastName: dto.lastName.trim(),
      email,
      passwordHash,
      phone: dto.phone?.trim() ?? null,
      role: dto.role,
      status: UserStatus.ACTIVE,
    });

    if (dto.role === UserRole.GYM_OWNER) {
      const gym = await this.userRepository.createGymForOwner({
        ownerUserId: user.id,
        gymName: dto.gymName!.trim(),
        slug: dto.gymSlug!.trim().toLowerCase(),
        email: user.email,
        phone: dto.phone ?? null,
      });

      await this.userRepository.addGymUser({
        gymId: gym.id,
        userId: user.id,
        role: UserRole.GYM_OWNER,
        isPrimary: true,
      });
    }

    if (dto.role === UserRole.TRAINER) {
      await this.userRepository.addGymUser({
        gymId: dto.gymId!,
        userId: user.id,
        role: UserRole.TRAINER,
        isPrimary: true,
      });

      await this.userRepository.createTrainerProfile({
        userId: user.id,
        gymId: dto.gymId!,
      });
    }

    if (dto.role === UserRole.CLIENT) {
      await this.userRepository.addGymUser({
        gymId: dto.gymId!,
        userId: user.id,
        role: UserRole.CLIENT,
        isPrimary: true,
      });

      await this.userRepository.createClientProfile({
        userId: user.id,
        gymId: dto.gymId!,
      });
    }

    const accessToken = await this.tokenGenerator.sign({
      sub: user.id,
      email: user.email,
      role: user.role,
      status: user.status,
    });

    return {
      message: 'User registered successfully',
      accessToken,
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        phone: user.phone,
        role: user.role,
        status: user.status,
        createdAt: user.createdAt,
        permissions: getPermissionsByRole(user.role),
      },
    };
  }
}
