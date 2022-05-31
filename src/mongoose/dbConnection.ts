import { Schema, model,connect,connection } from 'mongoose';
// mongoose.set("useCreateIndex", true)

export const dbConnect = (MongoURI:String) => {
    return new Promise((resolve,reject)=>{
        connect(`${MongoURI}`, function (err) {
        if (err) {
            reject(`error while connecting to db:${err}`);
          
        }
        
        resolve(`connected to mongo db at:${MongoURI}`)
    });

    })
    
   
}