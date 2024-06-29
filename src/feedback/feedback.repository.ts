import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Feedback, FeedbackDocument } from "./schemas/feedback.schema";
import { Model } from "mongoose";
import { CreateFeedbackDto } from "./dto/create-feedback-dto";

@Injectable()
export class FeedbackRepository {
    constructor(@InjectModel(Feedback.name) private feedBackModel: Model<FeedbackDocument>) {}

    async create(feedback: CreateFeedbackDto): Promise<FeedbackDocument> {
        return this.feedBackModel.create(feedback)
    }

    async findAll(): Promise<FeedbackDocument[]> {
        return this.feedBackModel.find().populate({path: 'user', select: 'username'})
    }
}