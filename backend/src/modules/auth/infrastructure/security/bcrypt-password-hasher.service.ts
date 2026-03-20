import { Injectable } from '@nestjs/common';
import bcrypt from 'bcrypt';

import { PasswordHasherPort } from '../../application/ports/password-hasher.port';

@Injectable()
export class BcryptPasswordHasherService implements PasswordHasherPort {
  async hash(value: string): Promise<string> {
    const hashedValue = await bcrypt.hash(value, 12);
    return hashedValue;
  }

  async compare(value: string, hash: string): Promise<boolean> {
    const isMatch = await bcrypt.compare(value, hash);
    return isMatch;
  }
}
