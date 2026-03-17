import { JwtPayload } from '../../auth.types';

export abstract class TokenGeneratorPort {
  abstract sign(payload: JwtPayload): Promise<string>;
}
