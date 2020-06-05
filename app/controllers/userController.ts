import { UserService } from "../services/UserService";
import User from "../models/user";
import mongoose from "mongoose";

export class UserController {
  public userService: UserService = new UserService();

  public getAllUsers = async (req, res, next) => {
    const getAllUsers = await this.userService.getAllUsers();
    return res.status(200).json(getAllUsers);
  };

  public createUser = async (req, res, next) => {
    const userObject = new User({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      age: req.body.age,
    });
    const createdUser = await this.userService.createNewUser(userObject);
    return res
      .status(201)
      .json({ message: "Post handled", newUser: createdUser });
  };

  public getUserById = async (req, res, next) => {
    const id = req.params.id;
    const userFound = await this.userService.getUserFoundById(id);
    return res.status(200).json(userFound);
  };

  public updateUser = async (req, res, next) => {
    const id = req.params.id;
    const updateUser = await this.userService.updateUserFields(id, req.body);
    return await res.status(200).json(updateUser);
  };

  public deleteUser = async (req, res, next) => {
    const id = req.params.id;
    const deleteUser = await this.userService.deleteUserById(id);
    return res.status(200).json({ message: "User Deleted", body: deleteUser });
  };
}
