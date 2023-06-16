import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';

import { PrismaClient, User } from '@prisma/client';

import { SignUpDto } from './dto/sign-up.dto';
import { SignInDto } from './dto/sign-in.dto';

const prisma = new PrismaClient();

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(req: SignInDto): Promise<string | { access_token: string }> {
    const user: User = await this.userService.findOne(req.email);

    if (user === null) {
      throw new BadRequestException('Usuário não cadastrado.');
    }

    if (user?.password !== req.password) {
      throw new UnauthorizedException('Email ou senha incorretos.');
    }

    const payload = { email: user.email };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

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
