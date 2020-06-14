import User from "../models/user";
import { AppResponse } from "../services/app-responses";
import Logger from "../config/logger";
import RepositoryError from "../errors/RepositoryError";

export class UserRespository {
  public response: AppResponse = new AppResponse();

  public getAllUsers = async () => {
    return User.find();
  };
  public createNewUser = async (userObject: object) => {
    return User.create(userObject);
  };
  public findUserById = async (id: string) => {
    return User.findById(id);
  };
  public deleteUserById = async (id: string) => {
    return User.remove({ _id: id });
  };
  public updateUserByPatch = async (id: string, updateUserByPatch) => {
    return User.update({ _id: id }, { $set: updateUserByPatch });
  };
}
