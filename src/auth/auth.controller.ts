import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
  Get,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { Public } from './public.decorator';
import { SignUpDto } from './dto/sign-up.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // TODO fix login (auth.service)
  //@HttpCode(HttpStatus.OK)
  //@Public()
  //@Post('login')
  //signIn(@Body() signInDto: Record<string, any>) {
  //return this.authService.signIn(signInDto.email, signInDto.password);
  //}

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req: any) {
    return req.user;
  }

  @HttpCode(HttpStatus.CREATED)
  @Public()
  @Post('sign-up')
  signUp(@Body() req: SignUpDto) {
    return this.authService.signUp(req);
  }
}
