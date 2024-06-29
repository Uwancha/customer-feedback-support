import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Ticket, TicketDocument } from "./schemas/ticket.schema";
import { Model } from "mongoose";
import { CreateTicketDto } from "./dto/create-ticket-dto";

@Injectable()
export class TicketRepository {
    constructor(@InjectModel(Ticket.name) private ticketModel: Model<TicketDocument>) {}

    async create(createTicketDto: CreateTicketDto): Promise<TicketDocument> {
        return this.ticketModel.create(createTicketDto)
    }

    async updateStatus(id: string, status: string): Promise<TicketDocument> {
        return this.ticketModel.findByIdAndUpdate(id, { status }, { new: true })
    }

    async findByStatus(status: string): Promise<TicketDocument[]> {
        return this.ticketModel.find({ status }).populate({path: 'user', select: 'username'})
    }

    async findAll(): Promise<TicketDocument[]> {
        return this.ticketModel.find().populate({path: 'user', select: 'username'})
    }
}