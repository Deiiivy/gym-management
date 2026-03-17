export class AuthInvalidCredentialsError extends Error {
  constructor() {
    super('Invalid credentials');
    this.name = 'AuthInvalidCredentialsError';
  }
}
