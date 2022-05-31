import { Request, Response } from 'express';
import { IBooked } from '../schema/schemaBooked';
const bookedService = require('../service/booked.service');


const newBook = async (req: Request, res: Response) => {
    const newBook : IBooked = req.body
    const ack = bookedService.newBook(newBook)

    res.status(200).send("bbb");
};

module.exports = {
    newBook
}