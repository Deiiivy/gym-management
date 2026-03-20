import { UserRole } from '@prisma/client';

import { Permission } from './permission.enum';

export const ROLE_PERMISSIONS: Record<UserRole, Permission[]> = {
  [UserRole.PLATFORM_ADMIN]: [
    Permission.GYMS_READ,
    Permission.GYMS_UPDATE,

    Permission.TRAINERS_READ,
    Permission.TRAINERS_CREATE,
    Permission.TRAINERS_UPDATE,
    Permission.TRAINERS_DELETE,

    Permission.CLIENTS_READ,
    Permission.CLIENTS_CREATE,
    Permission.CLIENTS_UPDATE,
    Permission.CLIENTS_DELETE,

    Permission.EXERCISES_READ,
    Permission.EXERCISES_CREATE,
    Permission.EXERCISES_UPDATE,
    Permission.EXERCISES_DELETE,

    Permission.ROUTINES_READ,
    Permission.ROUTINES_CREATE,
    Permission.ROUTINES_UPDATE,
    Permission.ROUTINES_DELETE,
    Permission.ROUTINES_ASSIGN,

    Permission.PROGRESS_READ,
    Permission.PROGRESS_WRITE,

    Permission.USERS_MANAGE,
  ],

  [UserRole.GYM_OWNER]: [
    Permission.GYMS_READ,
    Permission.GYMS_UPDATE,

    Permission.TRAINERS_READ,
    Permission.TRAINERS_CREATE,
    Permission.TRAINERS_UPDATE,
    Permission.TRAINERS_DELETE,

    Permission.CLIENTS_READ,
    Permission.CLIENTS_CREATE,
    Permission.CLIENTS_UPDATE,
    Permission.CLIENTS_DELETE,

    Permission.EXERCISES_READ,
    Permission.EXERCISES_CREATE,
    Permission.EXERCISES_UPDATE,
    Permission.EXERCISES_DELETE,

    Permission.ROUTINES_READ,
    Permission.ROUTINES_CREATE,
    Permission.ROUTINES_UPDATE,
    Permission.ROUTINES_DELETE,
    Permission.ROUTINES_ASSIGN,

    Permission.PROGRESS_READ,
  ],

  [UserRole.TRAINER]: [
    Permission.CLIENTS_READ,
    Permission.CLIENTS_CREATE,
    Permission.CLIENTS_UPDATE,

    Permission.EXERCISES_READ,
    Permission.EXERCISES_CREATE,
    Permission.EXERCISES_UPDATE,

    Permission.ROUTINES_READ,
    Permission.ROUTINES_CREATE,
    Permission.ROUTINES_UPDATE,
    Permission.ROUTINES_ASSIGN,

    Permission.PROGRESS_READ,
  ],

  [UserRole.CLIENT]: [
    Permission.ROUTINES_READ,
    Permission.PROGRESS_READ,
    Permission.PROGRESS_WRITE,
  ],
};
