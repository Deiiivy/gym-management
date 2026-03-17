import type { AuthSession } from '../../domain/entities/AuthSession';
import type { AuthUser } from '../../domain/entities/AuthUser';
import { AuthRepository } from '../../domain/repositories/AuthRepository';
import { AuthRemoteDataSource } from '../datasource/AuthRemoteDataSource';
import { AuthSessionModel } from '../models/AuthSessionModel';
import { AuthUserModel } from '../models/AuthUserModel';

export class AuthRepositoryImpl extends AuthRepository {
  constructor(private readonly remote: AuthRemoteDataSource) {
    super();
  }

  async login(input: {
    email: string;
    password: string;
  }): Promise<AuthSession> {
    const data = await this.remote.login(input);
    return AuthSessionModel.fromJson(data);
  }

  async register(input: {
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
    const data = await this.remote.register(input);
    return AuthSessionModel.fromJson(data);
  }

  async me(token: string): Promise<AuthUser> {
    const data = await this.remote.me(token);
    return AuthUserModel.fromJson(data);
  }
}