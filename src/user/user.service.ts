import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { User } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user-dto';
import { LoginDto } from 'src/authentication/dto/logindto';

@Injectable()
export class UserService {
    constructor(private readonly userRespository: UserRepository) {}

    async createUser(user: CreateUserDto): Promise<User> {
        return this.userRespository.createUser(user)
    }

    async loginUser(user: LoginDto): Promise<User> {
        return this.userRespository.login(user)
    }

    async getUserById(id: string): Promise<User> {
        return this.userRespository.findByid(id)
    }

    async getUserByUsername(username: string): Promise<User> {
        return this.userRespository.findByUsername(username)
    }
}
