import { Body, Controller, Post } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { CreateUserDto } from 'src/user/dto/create-user-dto';

@Controller('auth')
export class AuthenticationController {
    constructor(private authService: AuthenticationService) {}

    @Post('register')
    async register(@Body() body: CreateUserDto) {
        return this.authService.register(body)
    }

    @Post('login')
    async login(@Body() body: CreateUserDto) {
        return this.authService.login(body)
    }
}
