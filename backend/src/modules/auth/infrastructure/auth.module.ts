import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { PrismaModule } from '../../../shared/infrastructure/prisma/prisma.module';
import { GetMeUseCase } from '../application/use-cases/get-me.use-case';
import { LoginUseCase } from '../application/use-cases/login.use-case';
import { RegisterUseCase } from '../application/use-cases/register.use-case';
import { PasswordHasherPort } from '../application/ports/password-hasher.port';
import { TokenGeneratorPort } from '../application/ports/token-generator.port';
import { UserAuthRepositoryPort } from '../application/ports/user-auth.repository';
import { AuthController } from './controllers/auth.controller';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
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
    RegisterUseCase,
    LoginUseCase,
    GetMeUseCase,
    JwtStrategy,
    JwtAuthGuard,
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
  exports: [RegisterUseCase, LoginUseCase, GetMeUseCase],
})
export class AuthModule {}
