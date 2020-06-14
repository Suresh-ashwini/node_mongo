import { UserRespository } from "../repositories/UserRespository";
import ServiceError from "../errors/ServiceError";
import Logger from "../config/logger";

export class UserService {
  public userRepository: UserRespository = new UserRespository();

  public getAllUsers = async () => {
    return await this.userRepository.getAllUsers();
  };

  public createNewUser = async (userObject: object) => {
    return await this.userRepository.createNewUser(userObject);
  };

  public getUserFoundById = async (id: string) => {
    const user = await this.userRepository.findUserById(id);
    if (!user) {
      throw new ServiceError("User Not Found", "ERR_USER_NOT_FOUND");
    }
    return user;
  };

  public deleteUserById = async (id: string) => {
    return await this.userRepository.deleteUserById(id);
  };

  public updateUserFields = async (id: string, fields) => {
    const updateOperations = {};
    for (const ops of fields) {
      updateOperations[ops.propName] = ops.value;
    }
    return await this.userRepository.updateUserByPatch(id, updateOperations);
  };
}
