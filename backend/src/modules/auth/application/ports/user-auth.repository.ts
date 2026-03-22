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

export abstract class UserAuthRepositoryPort {
  abstract findByEmail(email: string): Promise<AuthUserRecord | null>;
  abstract findById(id: string): Promise<AuthUserRecord | null>;
  abstract updateLastLogin(userId: string): Promise<void>;
}
