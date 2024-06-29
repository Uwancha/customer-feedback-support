import { Param, Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user-dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post() 
    async CreateUser(@Body() user: CreateUserDto) {
        return this.userService.createUser(user)
    }

    @Get('username')
    async getUserByUsername(@Body('username') username: string ) {
        return this.userService.getUserByUsername(username)
    }

    @Get(':id')
    async getUserById(@Param('id') id: string ) {
        return this.userService.getUserById(id)
    }
}
