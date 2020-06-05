import { UserRespository } from "../repositories/UserRespository";

export class UserService {
  public userRepository: UserRespository = new UserRespository();
  public getUserFoundById = async (id) => {
    return await this.userRepository.findUserById(id);
  };

  public createNewUser = async (userObject) => {
    return await this.userRepository.createNewUser(userObject);
  };

  public getAllUsers = async () => {
    return await this.userRepository.getAllUsers();
  };

  public deleteUserById = async (id) => {
    return await this.userRepository.deleteUserById(id);
  };

  public updateUserFields = async (id, fields) => {
    const updateOperations = {};
    for (const ops of fields) {
      updateOperations[ops.propName] = ops.value;
    }
    return await this.userRepository.updateUserByPatch(id, updateOperations);
  };
}
