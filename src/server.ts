import { create } from "domain";
//import * as dotenv from "dotenv";
//dotenv.config({ path: __dirname + '/.env.local' });
//import 'express-async-errors';
//const logger = require('loglevel');
import { createApp } from './app';
import { dbConnect } from "./mongoose/dbConnection";

const startServer = (port = 4200, mongoDB = 'mongodb+srv://hatal99:Aa123456@hatalrental.uopam.mongodb.net/?retryWrites=true&w=majority') => {
  try {
    dbConnect(mongoDB);
  } catch (error) {
    console.log(error);

  }
  const app = createApp()
  return new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      console.log(`Listening at http://localhost:${port}/`);
      const originalClose = server.close.bind(server);
      server.close = () => {
        return new Promise((resolveClose) => {
          originalClose(resolveClose);
        });
      };

      // this ensures that we properly close the server when the program exists
      setupCloseOnExit(server);
      // resolve the whole promise with the express server
      resolve(server);
    });
  });
};

// ensures we close the server in the event of an error.
function setupCloseOnExit(server : any) {
  // thank you stack overflow
  // https://stackoverflow.com/a/14032965/971592
  async function exitHandler(options: NodeJS.Process) {
    await server
      .close()
      .then(() => {
        console.log('Server successfully closed');
      })
      .catch((e : Error) => {
        console.log('Something went wrong closing the server', e.stack);
      });

    if (options.exit()) process.exit();
  }

}
export { startServer }