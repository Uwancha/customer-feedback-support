import { Injectable } from '@nestjs/common';
import { TicketRepository } from './ticket.repository';
import { CreateTicketDto } from './dto/create-ticket-dto';
import { TicketDocument } from './schemas/ticket.schema';

@Injectable()
export class TicketService {
    constructor(private ticketRepository: TicketRepository) {}

    async createTicket(createTicketDto: CreateTicketDto): Promise<TicketDocument> {
        return this.ticketRepository.create(createTicketDto)
    }

    async updateTicketStatus(id: string, status: string): Promise<TicketDocument> {
        return this.ticketRepository.updateStatus(id, status)
    }

    async getTicketsByStatus(status: string): Promise<TicketDocument[]>{
        return this.ticketRepository.findByStatus(status)
    }

    async getAllTickets(): Promise<TicketDocument[]> {
        return this.ticketRepository.findAll()
    }
}
