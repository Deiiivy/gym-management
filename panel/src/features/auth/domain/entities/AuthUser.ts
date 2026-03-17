export type AuthUser = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  status: string;
  avatarUrl: string | null;
};