import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';

import { PrismaClient } from '@prisma/client';
import { SignUpDto } from './dto/sign-up.dto';

const prisma = new PrismaClient();

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  // TODO fix name and email problem
  //  async signIn(email: string, pass: string): Promise<any> {
  //  const user = await this.userService.findOne(email);
  //if (user?.name !== pass) {
  //  throw new UnauthorizedException();
  // }

  //const payload = { email: user.email };

  // return {
  // access_token: await this.jwtService.signAsync(payload),
  //};
  //}

  async signUp(req: SignUpDto) {
    const user = await prisma.user.create({
      data: {
        email: req.email,
        name: req.name,
        password: req.password,
        nickname: req.nickname,
        profilePhoto: req.profilePhoto,
      },
    });

    return user;
  }
}
