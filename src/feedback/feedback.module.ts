import { Module } from '@nestjs/common';
import { FeedbackController } from './feedback.controller';
import { FeedbackService } from './feedback.service';
import { FeedbackRepository } from './feedback.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { FeedBackSchema, Feedback } from './schemas/feedback.schema';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [MongooseModule.forFeature([{name: Feedback.name, schema: FeedBackSchema}])],
  controllers: [FeedbackController],
  providers: [FeedbackService, FeedbackRepository, JwtService]
})
export class FeedbackModule {}
