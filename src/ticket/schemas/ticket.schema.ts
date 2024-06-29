import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';

export type TicketDocument = Ticket & Document

@Schema()
export class Ticket {
  @Prop({ type: SchemaTypes.ObjectId, ref: 'User', required: true })
  user: string;

  @Prop({ required: true })
  issue: string;

  @Prop({default: 'Pending', required: true })
  status: string;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const TicketSchema = SchemaFactory.createForClass(Ticket);