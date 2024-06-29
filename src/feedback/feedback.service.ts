import { Injectable } from '@nestjs/common';
import { FeedbackRepository } from './feedback.repository';
import { FeedbackDocument } from './schemas/feedback.schema';
import { CreateFeedbackDto } from './dto/create-feedback-dto';

@Injectable()
export class FeedbackService {
    constructor(private feedbackRepository: FeedbackRepository) {}

    async create(feedback: CreateFeedbackDto): Promise<FeedbackDocument> {
        return this.feedbackRepository.create(feedback)
    }

    async getAllFeedbacks(): Promise<FeedbackDocument[]> {
        return this.feedbackRepository.findAll()
    }
}
