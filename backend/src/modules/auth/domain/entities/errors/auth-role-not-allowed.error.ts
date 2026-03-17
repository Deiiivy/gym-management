export class AuthRoleNotAllowedError extends Error {
  constructor() {
    super('PLATFORM_ADMIN cannot be registered publicly');
    this.name = 'AuthRoleNotAllowedError';
  }
}
