import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login(user: { username: string; password: string }) {
    const payload = { username: user.username };
    return { access_token: this.jwtService.sign(payload) };
  }

  async validateToken(token: string) {
    return this.jwtService.verify(token);
  }
}
