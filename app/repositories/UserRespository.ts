
import User from "../models/user";

export class UserRespository {
  public findUserById = async (id) => {
    return User.findById(id).exec();
  };
  public createNewUser = async (userObject) => {
    return userObject.save();
  };
  public getAllUsers = async () => {
    return User.find();
  };
  public deleteUserById = async (id) => {
    return User.remove({ _id: id }).exec();
  };
  public updateUserByPatch = async(id, updateUserByPatch) => {
    return User.update({ _id: id }, { $set: updateUserByPatch }).exec();
  };
}
