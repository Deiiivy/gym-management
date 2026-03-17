import { useMemo, useState } from 'react';
import axios from 'axios';

import { AuthRemoteDataSource } from '../../data/datasource/AuthRemoteDataSource';
import { AuthRepositoryImpl } from '../../data/repositories/AuthRepositoryImpl';
import { LoginUseCase } from '../../domain/use-cases/LoginUseCase';
import { RegisterUseCase } from '../../domain/use-cases/RegisterUseCase';
import { GetMeUseCase } from '../../domain/use-cases/GetMeUseCase';
import { authStore } from '../store/authStore';

export function useAuth() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const dependencies = useMemo(() => {
    const remote = new AuthRemoteDataSource();
    const repository = new AuthRepositoryImpl(remote);

    return {
      loginUseCase: new LoginUseCase(repository),
      registerUseCase: new RegisterUseCase(repository),
      getMeUseCase: new GetMeUseCase(repository),
    };
  }, []);

  const extractError = (err: unknown): string => {
    if (axios.isAxiosError(err)) {
      const message = err.response?.data?.message;

      if (Array.isArray(message)) return message.join(', ');
      if (typeof message === 'string') return message;
    }

    return 'Ocurrió un error inesperado';
  };

  const login = async (input: { email: string; password: string }) => {
    setLoading(true);
    setError(null);

    try {
      const session = await dependencies.loginUseCase.execute(input);
      authStore.saveSession(session);
      return session;
    } catch (err) {
      setError(extractError(err));
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const register = async (input: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: string;
    phone?: string;
    gymId?: string;
    gymName?: string;
    gymSlug?: string;
  }) => {
    setLoading(true);
    setError(null);

    try {
      const session = await dependencies.registerUseCase.execute(input);
      authStore.saveSession(session);
      return session;
    } catch (err) {
      setError(extractError(err));
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const me = async () => {
    const token = authStore.getToken();
    if (!token) throw new Error('No token found');

    return dependencies.getMeUseCase.execute(token);
  };

  const logout = () => {
    authStore.clear();
  };

  return {
    loading,
    error,
    login,
    register,
    me,
    logout,
  };
}