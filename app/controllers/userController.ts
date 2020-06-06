import { UserService } from "../services/UserService";
import User from "../models/user";
import mongoose from "mongoose";
import { AppResponse } from "../services/app-responses";

export class UserController {
  public userService: UserService = new UserService();
  public response: AppResponse = new AppResponse();

  public getAllUsers = async (req, res, next) => {
    try {
      const getAllUsers = await this.userService.getAllUsers();
      return this.response.successOk(res, "", getAllUsers);
    } catch (error) {
      return this.response.errorOnServer(res, "Internal Server Error", error);
    }
  };

  public createUser = async (req, res, next) => {
    try {
      const userObject = new User({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        age: req.body.age,
      });
      const createdUser = await this.userService.createNewUser(userObject);
      return this.response.successOnCreate(
        res,
        "New User Created Succesfully",
        createdUser
      );
    } catch (error) {
      return this.response.errorOnServer(res, "Internal Server Error", error);
    }
  };

  public getUserById = async (req, res, next) => {
    try {
      const id = req.params.id;
      const userFound = await this.userService.getUserFoundById(id);
      return this.response.successOk(res, "User Found", userFound);
    } catch (error) {
      return this.response.errorOnServer(res, "Internal Server Error", error);
    }
  };

  public updateUser = async (req, res, next) => {
    try {
      const id = req.params.id;
      const updateUser = await this.userService.updateUserFields(id, req.body);
      return this.response.successOk(res, "User Updated", updateUser);
    } catch (error) {
      return this.response.errorOnServer(res, "Internal Server Error", error);
    }
  };

  public deleteUser = async (req, res, next) => {
    try {
      const id = req.params.id;
      const deleteUser = await this.userService.deleteUserById(id);
      return this.response.successOk(res, "User Deleted", deleteUser);
    } catch (error) {
      return this.response.errorOnServer(res, "Internal Server Error", error);
    }
  };
}
