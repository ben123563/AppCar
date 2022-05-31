import { Schema, model } from 'mongoose';
import { ICar } from './schemaCar';
import { IUser } from './schemaUser';

export interface IBooked {
  destination: String,
  car: ICar,
  date: Object,
  user: IUser,
}

export const BookedSchema = new Schema<IBooked>({
  destination: { type: String, required: true },
  car: {
    type: Schema.Types.ObjectId,
    ref: "Car",
  },
  date: {
    start: String,
    end: String,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});
