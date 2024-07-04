import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create-user-dto';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/logindto';

@Injectable()
export class AuthenticationService {
    constructor( private userService: UserService, private jwtService: JwtService) {}

    async register (createUserDto: CreateUserDto) {
        const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

        const user = await this.userService.createUser({...createUserDto, password: hashedPassword})

        const payload = { username: user.username, role: user.role };
        return {
            access_token: this.jwtService.sign(payload, { secret: 'mysecret' }),
        };
    }

    async login (loginDto: LoginDto) {
        const user = await this.userService.loginUser(loginDto)

        if (!user) {
            throw new UnauthorizedException('Invalid credentials');
        }

        const isPasswordMatching = await bcrypt.compare(loginDto.password, user.password);
        if (!isPasswordMatching) {
            throw new UnauthorizedException('Invalid credentials');
        }

        const payload = { username: user.username, role: user.role };
        return {
            access_token: this.jwtService.sign(payload, { secret: 'mysecret' }),
        };
    }
}
