import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserStatus } from '@prisma/client';

import { LoginResponse } from '../../auth.types';
import { AuthInvalidCredentialsError } from '../../domain/entities/errors/auth-invalid-credentials.error';
import { AuthUserInactiveError } from '../../domain/entities/errors/auth-user-inactive.error';
import { PasswordHasherPort } from '../ports/password-hasher.port';
import { TokenGeneratorPort } from '../ports/token-generator.port';
import { UserAuthRepositoryPort } from '../ports/user-auth.repository';
import { LoginDto } from '../dto/login.dto';

@Injectable()
export class LoginUseCase {
  constructor(
    @Inject(UserAuthRepositoryPort)
    private readonly userRepository: UserAuthRepositoryPort,
    @Inject(PasswordHasherPort)
    private readonly passwordHasher: PasswordHasherPort,
    @Inject(TokenGeneratorPort)
    private readonly tokenGenerator: TokenGeneratorPort,
  ) {}

  async execute(dto: LoginDto): Promise<LoginResponse> {
    const email = dto.email.trim().toLowerCase();

    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException(new AuthInvalidCredentialsError().message);
    }

    if (user.status !== UserStatus.ACTIVE) {
      throw new UnauthorizedException(new AuthUserInactiveError().message);
    }

    const isPasswordValid = await this.passwordHasher.compare(
      dto.password,
      user.passwordHash,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException(new AuthInvalidCredentialsError().message);
    }

    await this.userRepository.updateLastLogin(user.id);

    const accessToken = await this.tokenGenerator.sign({
      sub: user.id,
      email: user.email,
      role: user.role,
      status: user.status,
    });

    return {
      accessToken,
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
        status: user.status,
        avatarUrl: user.avatarUrl,
      },
    };
  }
}