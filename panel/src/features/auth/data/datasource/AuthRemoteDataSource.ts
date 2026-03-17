import { http } from '../../../../core/http/axios';

export class AuthRemoteDataSource {
  async login(input: {
    email: string;
    password: string;
  }): Promise<Record<string, unknown>> {
    const response = await http.post('/auth/login', input);
    return response.data;
  }

  async register(input: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: string;
    phone?: string;
    gymId?: string;
    gymName?: string;
    gymSlug?: string;
  }): Promise<Record<string, unknown>> {
    const response = await http.post('/auth/register', input);
    return response.data;
  }

  async me(token: string): Promise<Record<string, unknown>> {
    const response = await http.get('/auth/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  }
}