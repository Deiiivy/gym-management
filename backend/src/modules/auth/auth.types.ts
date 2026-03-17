import { UserRole, UserStatus } from '@prisma/client';

export type JwtPayload = {
  sub: string;
  email: string;
  role: UserRole;
  status: UserStatus;
};

export type AuthUserResponse = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  status: UserStatus;
  avatarUrl: string | null;
};

export type LoginResponse = {
  accessToken: string;
  user: AuthUserResponse;
};

export type RegisterResponse = {
  message: string;
  accessToken: string;
  user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    phone: string | null;
    role: UserRole;
    status: UserStatus;
    createdAt: Date;
  };
};