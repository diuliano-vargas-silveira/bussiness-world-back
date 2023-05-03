import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BoardModule } from './board/board.module';
import { ConfigModule } from '@nestjs/config';
import { PATH_ENV } from './constants/env.constant';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [PATH_ENV],
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DATABASE_URL),
    BoardModule,
    AuthModule,
    UserModule,
  ],
})
export class AppModule {}
