import * as dotenv from 'dotenv';

dotenv.config();
import express from "express";
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
export default class App {
  public app: express.Application;

  constructor() {
    this.createApp();
    this.setupConfig();
    this.mongoSetup();
  }

  private createApp(): void {
    this.app = express();
  }

private setupConfig(): void {
  this.app.use(bodyParser.json());
}

private mongoSetup(): void {
  (mongoose as any).Promise = global.Promise;
  mongoose.set('useNewUrlParser', true);
  mongoose.set('useFindAndModify', false);
  mongoose.set('useCreateIndex', true);
  mongoose.set('debug', true);
  mongoose.set('useUnifiedTopology', true);
  mongoose.connect(process.env.DB_MONGO_HOST, { useNewUrlParser: true }).then(() => {
   console.log('Connected to mogodb');
    this.app.emit('Dbconnected');
  });
}

}

