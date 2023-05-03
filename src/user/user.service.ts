import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private readonly users = [
    {
      email: 'john',
      name: 'changeme',
    },
    {
      email: 'maria',
      name: 'guess',
    },
  ];

  async findOne(email: string): Promise<any | undefined> {
    return this.users.find((user) => user.email === email);
  }
}
