import { UserService } from "../services/UserService";
import { AppResponse } from "../services/app-responses";
import Logger from "../config/logger";
import ServiceError from "../errors/ServiceError";
import { Request, NextFunction } from "express";

export class UserController {


  public userService: UserService = new UserService();

  public response: AppResponse = new AppResponse();

  public getAllUsers = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const getAllUsers = await this.userService.getAllUsers();
      return this.response.successOk(res, getAllUsers);
    } catch (error) {
      return this.response.errorOnServer(res, error);
    }
  };

  public createUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const createdUser = await this.userService.createNewUser(req.body);
      return this.response.successOnCreate(res, createdUser);
    } catch (error) {
      return this.response.errorOnServer(res, error);
    }
  };

  public getUserById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const id = req.params.id;
    try {
      const userFound = await this.userService.getUserFoundById(id);
      return this.response.successOk(res, userFound);
    } catch (error) {
      if (error instanceof ServiceError) {
        if (error.code === "ERR_USER_NOT_FOUND") {
          return this.response.errorUserNotFound(
            res,
            error.message,
            error.code
          );
        }
      }
      return this.response.errorOnServer(res, error);
    }
  };

  public updateUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const id = req.params.id;
    try {
      const updateUser = await this.userService.updateUserFields(id, req.body);
      return this.response.successOk(res, updateUser);
    } catch (error) {
      if (error instanceof ServiceError) {
        if (error.code === "ERR_USER_NOT_FOUND") {
          return this.response.errorUserNotFound(
            res,
            error.message,
            error.code
          );
        }
      }
      return this.response.errorOnServer(res, error);
    }
  };

  public deleteUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const id = req.params.id;
    try {
      const deleteUser = await this.userService.deleteUserById(id);
      return this.response.successOk(res, deleteUser);
    } catch (error) {
      if (error instanceof ServiceError) {
        if (error.code === "ERR_USER_NOT_FOUND") {
          return this.response.errorUserNotFound(
            res,
            error.message,
            error.code
          );
        }
      }
      return this.response.errorOnServer(res, error);
    }
  };
}
