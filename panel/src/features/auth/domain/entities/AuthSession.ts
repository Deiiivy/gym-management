import type { AuthUser } from './AuthUser';

export type AuthSession = {
  accessToken: string;
  user: AuthUser;
};