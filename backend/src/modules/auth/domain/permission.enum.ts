export enum Permission {
  GYMS_READ = 'gyms.read',
  GYMS_UPDATE = 'gyms.update',

  TRAINERS_READ = 'trainers.read',
  TRAINERS_CREATE = 'trainers.create',
  TRAINERS_UPDATE = 'trainers.update',
  TRAINERS_DELETE = 'trainers.delete',

  CLIENTS_READ = 'clients.read',
  CLIENTS_CREATE = 'clients.create',
  CLIENTS_UPDATE = 'clients.update',
  CLIENTS_DELETE = 'clients.delete',

  EXERCISES_READ = 'exercises.read',
  EXERCISES_CREATE = 'exercises.create',
  EXERCISES_UPDATE = 'exercises.update',
  EXERCISES_DELETE = 'exercises.delete',

  ROUTINES_READ = 'routines.read',
  ROUTINES_CREATE = 'routines.create',
  ROUTINES_UPDATE = 'routines.update',
  ROUTINES_DELETE = 'routines.delete',
  ROUTINES_ASSIGN = 'routines.assign',

  PROGRESS_READ = 'progress.read',
  PROGRESS_WRITE = 'progress.write',

  USERS_MANAGE = 'users.manage',
}
