const express = require('express');
import bookedRoute from './booked.route';


function getRoutes() {    
    const router = express.Router();
    router.use('/booked', bookedRoute);
    return router
}

 export default getRoutes