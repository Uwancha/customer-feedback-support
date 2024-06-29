import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from "./schemas/user.schema";
import { Model } from "mongoose";

@Injectable()
export class UserRepository {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

    async createUser(user: User): Promise<User> {
        return this.userModel.create(user)
    }

    async findByUsername(username: string): Promise<UserDocument> {
        return this.userModel.findOne({ username });
    }

    async findByid(id: string): Promise<UserDocument> {
        return this.userModel.findById(id);
    }
};