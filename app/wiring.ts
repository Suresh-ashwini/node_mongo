import { UserRespository } from "../app/repositories/UserRespository";
import { UserService } from "./services/UserService";
import { UserController } from "./controllers/userController";
import Logger from './config/logger';
class Wiring {
  // Repositories calls
  public userRepository = new UserRespository();

  // Service calls
  // public userService = new UserService(this.userRepository);
  // Controllers calls
  // public userController = new UserController(this.userService);
  // Response calls
  // public appResponse = new AppResponse();
}

export default new Wiring();

