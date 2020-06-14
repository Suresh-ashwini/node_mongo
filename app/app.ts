import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import Logger from "./config/logger";
import moment from "moment";
import { Routes } from "./routes/api-routes";
export default class App {
  public app: express.Application;
  public routes: Routes = new Routes();
  public appRoute: express.Router;

  constructor() {
    this.createApp();
    this.setupConfig();
    this.mongoSetup();
    this.setUpRoutes();
  }

  private createApp(): void {
    this.app = express();
  }

  private setupConfig(): void {
    this.app.use(bodyParser.json());
  }

  private setUpRoutes(): void {
    this.routes.routes(this.app);
  }

  private mongoSetup(): void {
    (mongoose as any).Promise = global.Promise;
    mongoose.set("useNewUrlParser", true);
    mongoose.set("useFindAndModify", false);
    mongoose.set("useCreateIndex", true);
    mongoose.set("debug", true);
    mongoose.set("useUnifiedTopology", true);
    mongoose
      .connect(process.env.DB_MONGO_HOST, {
        useNewUrlParser: true,
      })
      .then(() => {
        Logger.info("Connected to mogodb");
        this.app.emit("Dbconnected");
      });
  }
}
