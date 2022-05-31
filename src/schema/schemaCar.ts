import { Certificate } from 'crypto';
import { Schema, model, connect } from 'mongoose';
import { IBooked } from './schemaBooked';

type AvTime = {
  start:Date,
  end:Date
}
export interface ICar {
  plate: Number,
  type: String,
  km: String,
  diffects: Array<String>,
  img: String,
  booked: Array<IBooked>,
}
export const CarSchema = new Schema<ICar>({
  plate: Number,
  type: { type: String, required: true },
  km: { type: String, required: true },
  diffects: [
    {
      type: String,
    },
  ],
  img: String,
  booked: [
    {
      type: Schema.Types.ObjectId,
      ref: "Booked",
    },
  ],
  
});
