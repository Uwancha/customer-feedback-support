import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { TicketDocument } from './schemas/ticket.schema';
import { CreateTicketDto } from './dto/create-ticket-dto';

@Controller('tickets')
export class TicketController {
    constructor(private ticketService: TicketService) {}

    @Post('submit')
    async createTicket(@Body() createTicketDto: CreateTicketDto): Promise<TicketDocument> {
        return this.ticketService.createTicket(createTicketDto)
    }

    @Put(':id')
    updateTicketStatus(@Param('id') id: string, @Body('status') status: string): Promise<TicketDocument> {
        return this.ticketService.updateTicketStatus(id, status)
    }

    @Get('status')
    async getTicketsByStatus(@Body() status: string): Promise<TicketDocument[]>{
        return this.ticketService.getTicketsByStatus(status)
    }

    @Get()
    async getAllTickets(): Promise<TicketDocument[]> {
        return this.ticketService.getAllTickets()
    }
}
