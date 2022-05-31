const express = require('express');
//import getRoutes from '../routes/v1/index';
//import { active, catchAsync } from '../middlewares';
//let RedisStore = require('connect-redis')(session);
import cors from 'cors';
import { Request, Response } from 'express';
import getRoutes from './routes';

export const createApp = ()=>{
    const app = express();
    app.use(express.json());
    app.use(
    cors({
        origin: 'http://localhost:4200',
        credentials: true,
        //headers: 'Origin, X-Requested-With, Content-Type,Accept'
    })
    );

    app.use('/', getRoutes());
    return app
}
