import { UserRole } from '@prisma/client';

import { Permission } from '../../domain/permission.enum';
import { ROLE_PERMISSIONS } from '../../domain/role-permissions';

export function getPermissionsByRole(role: UserRole): Permission[] {
  return ROLE_PERMISSIONS[role] ?? [];
}
