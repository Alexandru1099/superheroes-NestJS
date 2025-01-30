import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SuperheroDocument = Superhero & Document;

@Schema()
export class Superhero {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  superpower: string;

  @Prop({ required: true, min: 1, max: 10 })
  humilityScore: number;
}

export const SuperheroSchema = SchemaFactory.createForClass(Superhero);
