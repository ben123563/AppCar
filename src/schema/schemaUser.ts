import { Schema, model } from 'mongoose';
import { IBooked,BookedSchema } from './schemaBooked';

export interface IUser {
  name: String,
  id: Number,
  password: String,
  "P.N": String,
  booked:Array<IBooked>
}

export const UserSchema = new Schema<IUser>({
  name: String,
  id: { type: [Number, String] },
  password: String,
  "P.N": String,
  booked: [{
    type: Schema.Types.ObjectId,
    ref: 'Booked',
  }],
});
export const User = model("User", UserSchema);