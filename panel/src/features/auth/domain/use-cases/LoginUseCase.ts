import type { AuthSession } from '../entities/AuthSession';
import { AuthRepository } from '../repositories/AuthRepository';

export class LoginUseCase {
  constructor(private readonly repository: AuthRepository) {}

  execute(input: { email: string; password: string }): Promise<AuthSession> {
    return this.repository.login(input);
  }
}