import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { CreateFeedbackDto } from './dto/create-feedback-dto';
import { FeedbackDocument } from './schemas/feedback.schema';
import { AuthenticationGuard } from 'src/authentication/authentication.guard';

@UseGuards(AuthenticationGuard)
@Controller('feedbacks')
export class FeedbackController {
    constructor(private feedbackService: FeedbackService) {}

    @Post('submit')
    async create(@Body() createFeedbackDto: CreateFeedbackDto): Promise<FeedbackDocument> {
        return this.feedbackService.create(createFeedbackDto)
    }

    @Get()
    async getAllFeedbacks(): Promise<FeedbackDocument[]> {
        return this.feedbackService.getAllFeedbacks()
    }
}
