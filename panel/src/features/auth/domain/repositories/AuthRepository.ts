import type { AuthSession } from '../entities/AuthSession';
import type { AuthUser } from '../entities/AuthUser';

export abstract class AuthRepository {
  abstract login(input: {
    email: string;
    password: string;
  }): Promise<AuthSession>;

  abstract register(input: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: string;
    phone?: string;
    gymId?: string;
    gymName?: string;
    gymSlug?: string;
  }): Promise<AuthSession>;

  abstract me(token: string): Promise<AuthUser>;
}