import { UserRole, UserStatus } from '@prisma/client';

export class AuthenticatedUserEntity {
  constructor(
    public readonly id: string,
    public readonly email: string,
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly role: UserRole,
    public readonly status: UserStatus,
    public readonly gymId: string | null,
    public readonly avatarUrl: string | null,
  ) {}

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`.trim();
  }

  isActive(): boolean {
    return this.status === UserStatus.ACTIVE;
  }
}
