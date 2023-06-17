import { Injectable } from '@nestjs/common';
import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class UserService {
  async findOne(email: string): Promise<User | null> {
    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    return user;
  }
}
