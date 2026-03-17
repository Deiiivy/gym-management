export class AuthEmailAlreadyUsedError extends Error {
  constructor() {
    super('Email is already registered');
    this.name = 'AuthEmailAlreadyUsedError';
  }
}
