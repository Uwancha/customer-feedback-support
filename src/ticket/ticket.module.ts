import { Module } from '@nestjs/common';
import { TicketController } from './ticket.controller';
import { TicketService } from './ticket.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Ticket, TicketSchema } from './schemas/ticket.schema';
import { TicketRepository } from './ticket.repository';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [MongooseModule.forFeature([{name: Ticket.name, schema: TicketSchema}])],
  controllers: [TicketController],
  providers: [TicketService, TicketRepository, JwtService]
})
export class TicketModule {}
