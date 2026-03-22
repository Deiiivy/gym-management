import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { PrismaModule } from '../../../shared/infrastructure/prisma/prisma.module';
import { PasswordHasherPort } from '../application/ports/password-hasher.port';
import { TokenGeneratorPort } from '../application/ports/token-generator.port';
import { UserAuthRepositoryPort } from '../application/ports/user-auth.repository';
import { GetMeUseCase } from '../application/use-cases/get-me.use-case';
import { LoginUseCase } from '../application/use-cases/login.use-case';
import { AuthController } from './controllers/auth.controller';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { PermissionsGuard } from './guards/permissions.guard';
import { PrismaUserAuthRepository } from './repositories/prisma-user-auth.repository';
import { BcryptPasswordHasherService } from './security/bcrypt-password-hasher.service';
import { JwtTokenGeneratorService } from './security/jwt-token-generator.service';
import { JwtStrategy } from './security/jwt.strategy';

@Module({
  imports: [
    PrismaModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController],
  providers: [
    LoginUseCase,
    GetMeUseCase,
    JwtStrategy,
    JwtAuthGuard,
    PermissionsGuard,
    {
      provide: UserAuthRepositoryPort,
      useClass: PrismaUserAuthRepository,
    },
    {
      provide: PasswordHasherPort,
      useClass: BcryptPasswordHasherService,
    },
    {
      provide: TokenGeneratorPort,
      useClass: JwtTokenGeneratorService,
    },
  ],
  exports: [LoginUseCase, GetMeUseCase, PermissionsGuard],
})
export class AuthModule {}
