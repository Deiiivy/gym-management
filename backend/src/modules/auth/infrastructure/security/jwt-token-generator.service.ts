import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { JwtPayload } from '../../auth.types';
import { TokenGeneratorPort } from '../../application/ports/token-generator.port';

@Injectable()
export class JwtTokenGeneratorService implements TokenGeneratorPort {
  constructor(private readonly jwtService: JwtService) {}

  async sign(payload: JwtPayload): Promise<string> {
    return this.jwtService.signAsync(payload);
  }
}
