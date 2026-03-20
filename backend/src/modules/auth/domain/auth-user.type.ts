import { UserRole, UserStatus } from '@prisma/client';

import { Permission } from './permission.enum';

export type AuthUser = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  status: UserStatus;
  avatarUrl: string | null;
  permissions: Permission[];
};
