import { UserRespository } from "../app/repositories/UserRespository";
import { UserService } from "@app/services/UserService";

class Wiring {
  // public userService: UserService = new UserService();
  // Repositories calls
  public userRepository = new UserRespository();
  // Service calls
  // public userService = new UserService(this.userRepository);
  // Controllers calls
  //   public userController = new UserController(this.userService);
  // Response calls
  //   public appResponse = new AppResponse();
}
export default new Wiring();
