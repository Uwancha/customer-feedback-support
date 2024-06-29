import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { FeedbackModule } from './feedback/feedback.module';
import { TicketModule } from './ticket/ticket.module';

@Module({
  imports: [UserModule, FeedbackModule, TicketModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
