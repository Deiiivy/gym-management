import { BadRequestException, Inject, Injectable } from '@nestjs/common';

import { UserAuthRepositoryPort } from '../ports/user-auth.repository';
import { getPermissionsByRole } from './get-permissions-by-role';

@Injectable()
export class GetMeUseCase {
  constructor(
    @Inject(UserAuthRepositoryPort)
    private readonly userRepository: UserAuthRepositoryPort,
  ) {}

  async execute(userId: string) {
    const user = await this.userRepository.findById(userId);

    if (!user) {
      throw new BadRequestException('User not found');
    }

    return {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      phone: user.phone,
      birthDate: user.birthDate,
      gender: user.gender,
      avatarUrl: user.avatarUrl,
      role: user.role,
      status: user.status,
      lastLoginAt: user.lastLoginAt,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      permissions: getPermissionsByRole(user.role),
    };
  }
}
