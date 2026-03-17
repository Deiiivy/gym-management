import type { AuthUser } from '../entities/AuthUser';
import { AuthRepository } from '../repositories/AuthRepository';

export class GetMeUseCase {
  constructor(private readonly repository: AuthRepository) {}

  execute(token: string): Promise<AuthUser> {
    return this.repository.me(token);
  }
}