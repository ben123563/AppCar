import { Schema, model, connect, PopulatedDoc, Types } from 'mongoose';
import { ICar } from './schemaCar';

export type AvTime=
{
  startHour:String,
  endHour:String
}
export interface IAvailableTimes {
  date: Date,
  cars:Types.ObjectId[]
  availableHours:AvTime[][]
}
export const availableTimesSchema = new Schema<IAvailableTimes>({
  date: Schema.Types.Date,
  cars: [{
        type: Schema.Types.ObjectId,
        ref: "Car",
      },
  ],
  availableHours:[[{startHour:String,endHour:String}
    
  ]]
});
