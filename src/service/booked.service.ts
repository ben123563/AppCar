import { Request, Response } from 'express';
import { AvailableTimesModel } from '../model/AvailableTimesModel.model';
import { BookedModel } from '../model/BookedModel.model';
import { CarModel } from '../model/CarModel.model';
import { UserModel } from '../model/UserModel.model';
import { IBooked } from '../schema/schemaBooked';
const ObjectID = require('mongodb').ObjectID

const newBook = async (newBook: IBooked) => {
    const newBooked =new BookedModel(newBook)
    try {
        await newBooked.save()
    } 
    catch (error) {
        console.log(error)
    }
    const user = await UserModel.findOne({_id:ObjectID(newBook.user)})    
    user.booked.push(newBooked._id)
    await UserModel.updateOne({_id:user._id}, {$set: {
        booked: user.booked
    }})

    const car = await CarModel.findOne({_id:ObjectID(newBook.car)}) 
    car.booked.push(newBooked._id)
    await CarModel.updateOne({_id:car._id}, {$set: {
        booked: car.booked
    }})

    const availableTime = await AvailableTimesModel.find({})
    for (const avail in availableTime){
        console.log(typeof(new Date(availableTime[avail].date)));
        let date = `${availableTime[avail].date.date}.${availableTime[avail].date.getMonth}.${availableTime[avail].date.getFullYear}`
        
    }
};

module.exports = {
    newBook
}