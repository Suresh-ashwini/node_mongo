import express from "express";
import { UserController } from "../controllers/userController";

const route = express.Router();

export class Routes {
  public userController: UserController = new UserController();
  public routes(app: any): void {
    // User Routes
    app.get("/api/user", this.userController.getAllUsers);

    // Create new User
    app.post("/api/user", this.userController.createUser);

    // Get User By Id
    app.get("/api/user/:id", this.userController.getUserById);

    // Patch User by Id
    app.patch("/api/user/:id", this.userController.updateUser);

    // Delete User By Id
    app.delete("/api/user/:id", this.userController.deleteUser);
  }
}

export default route;
