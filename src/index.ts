import { addAvailableTimes, addCars, addUsers, deleteDb } from "./mongoose/seedDb";
import { dbConnect } from "./mongoose/dbConnection"   
import { create } from "domain";
import { createApp } from "./app";
import { startServer } from "./server";

(async ()=>{
    try {
        let res=await dbConnect("mongodb+srv://hatal99:Aa123456@hatalrental.uopam.mongodb.net/?retryWrites=true&w=majority")
        console.log(res);
        
    } catch (error) {
        console.log(error);
        
    }
    await deleteDb()
    console.log(111);
    await addUsers()
    await addCars()
    console.log(222)
    await addAvailableTimes()
    console.log(333);
    startServer()
 })()


