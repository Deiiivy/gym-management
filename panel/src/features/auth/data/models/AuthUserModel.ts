import type { AuthUser } from '../../domain/entities/AuthUser';

export class AuthUserModel {
  static fromJson(json: Record<string, unknown>): AuthUser {
    return {
      id: String(json.id),
      email: String(json.email),
      firstName: String(json.firstName),
      lastName: String(json.lastName),
      role: String(json.role),
      status: String(json.status),
      avatarUrl: json.avatarUrl ? String(json.avatarUrl) : null,
    };
  }
}