import type { AuthSession } from '../../domain/entities/AuthSession';
import { AuthUserModel } from './AuthUserModel';

export class AuthSessionModel {
  static fromJson(json: Record<string, unknown>): AuthSession {
    return {
      accessToken: String(json.accessToken),
      user: AuthUserModel.fromJson(json.user as Record<string, unknown>),
    };
  }
}