import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './jwtAuth.service';

@Injectable()
export class HeroAuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization?.split(' ')[1];

    if (!token) throw new UnauthorizedException('Token is missing');

    try {
      request.user = this.authService.validateToken(token);
      return true;
    } catch {
      throw new UnauthorizedException('Invalid token');
    }
  }
}