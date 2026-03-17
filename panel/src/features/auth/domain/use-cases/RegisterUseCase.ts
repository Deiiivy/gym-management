import type { AuthSession } from '../entities/AuthSession';
import { AuthRepository } from '../repositories/AuthRepository';

export class RegisterUseCase {
  constructor(private readonly repository: AuthRepository) {}

  execute(input: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: string;
    phone?: string;
    gymId?: string;
    gymName?: string;
    gymSlug?: string;
  }): Promise<AuthSession> {
    return this.repository.register(input);
  }
}