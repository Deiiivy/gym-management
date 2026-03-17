export class AuthUserInactiveError extends Error {
  constructor() {
    super('User is not active');
    this.name = 'AuthUserInactiveError';
  }
}
