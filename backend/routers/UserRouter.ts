import { Router } from 'express';
import { UserController } from "../controllers/index";
// import { isAuthenticated } from "../middlewares/jwt";

const UserRouter: Router = Router();
const userController = new UserController();

UserRouter.post("/user/createUser",
    //isAuthenticated,
    userController.createUser);
UserRouter.put("/user/updateUser/:id",
    //isAuthenticated,
    userController.updateUser);

UserRouter.get("/user/getUserById/:id",
    //isAuthenticated,
    userController.getUserById);
// UserRouter.get("/user/getAllUsers",
//     //isAuthenticated,
//     userController.getAllUsers);

UserRouter.delete("/user/deleteUser/:id",
        //isAuthenticated,
    userController.deleteUser);
UserRouter.delete("/user/bulkDeleteUsers",
        //isAuthenticated,
    userController.bulkDeleteUsers);

export { UserRouter };
