import jwt from 'jsonwebtoken';
import { env } from '../config/env';

const JWT_SECRET = env.SUPABASE_SERVICE_ROLE_KEY || 'fallback_secret';

export function generateToken(payload: object): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
}

export function verifyToken(token: string): object | null {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return null;
  }
}
