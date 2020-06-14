import express from "express";
import { UserController } from "../controllers/userController";

const route = express.Router();

export class Routes {
  public userController: UserController = new UserController();
  public routes(app: any): void {
    // User Routes
    app.get("/api/v1/user", this.userController.getAllUsers);

    // Create new User
    app.post("/api/v1/user", this.userController.createUser);

    // Get User By Id
    app.get("/api/v1/user/:id", this.userController.getUserById);

    // Patch User by Id
    app.patch("/api/v1/user/:id", this.userController.updateUser);

    // Delete User By Id
    app.delete("/api/v1/user/:id", this.userController.deleteUser);

    app.all("*", (req, res, next) => {
      res.status(404).json({
        status: "fail",
        message: `Can't find ${req.originalUrl} on this server!`,
      });
    });
  }
}

export default route;
