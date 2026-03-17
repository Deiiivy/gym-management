import type { AuthSession } from '../../domain/entities/AuthSession';

const TOKEN_KEY = 'auth_token';
const USER_KEY = 'auth_user';

export const authStore = {
  saveSession(session: AuthSession) {
    localStorage.setItem(TOKEN_KEY, session.accessToken);
    localStorage.setItem(USER_KEY, JSON.stringify(session.user));
  },

  getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  },

  getUser() {
    const raw = localStorage.getItem(USER_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  },

  clear() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  },
};