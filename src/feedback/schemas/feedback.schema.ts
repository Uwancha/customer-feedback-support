import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { SchemaTypes, Document } from "mongoose";

export type FeedbackDocument = Feedback & Document;

@Schema()
export class Feedback {
    @Prop({type: SchemaTypes.ObjectId, ref: 'User', required: true})
    user: string

    @Prop({required: true})
    message: string
};

export const FeedBackSchema = SchemaFactory.createForClass(Feedback)