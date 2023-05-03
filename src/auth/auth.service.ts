import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string): Promise<any> {
    const user = await this.userService.findOne(email);
    if (user?.name !== pass) {
      throw new UnauthorizedException();
    }

    const payload = { email: user.email };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
