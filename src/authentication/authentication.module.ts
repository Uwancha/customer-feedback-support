import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { AuthenticationController } from './authentication.controller';
import { UserModule } from 'src/user/user.module';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [UserModule],
  providers: [AuthenticationService, JwtService],
  controllers: [AuthenticationController]
})
export class AuthenticationModule {}
