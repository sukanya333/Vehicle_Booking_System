import { Router } from 'express';
import { VehicleController } from "../controllers/index";
// import { isAuthenticated } from "../middlewares/jwt";

const VehicleRouter: Router = Router();
const vehicleController = new VehicleController();

VehicleRouter.post("/vehicle/createVehicle",
    //isAuthenticated,
    vehicleController.createVehicle);
VehicleRouter.put("/vehicle/updateVehicle/:id",
    //isAuthenticated,
    vehicleController.updateVehicle);

VehicleRouter.get("/vehicle/getVehicleById/:id",
    //isAuthenticated,
    vehicleController.getVehicleById);
// VehicleRouter.get("/vehicle/getAllVehicles", isAuthenticated, vehicleController.getAllVehicles);

VehicleRouter.delete("/vehicle/deleteVehicle/:id",
    //isAuthenticated,
    vehicleController.deleteVehicle);
VehicleRouter.delete("/vehicle/bulkDeleteVehicles",
    //isAuthenticated,
    vehicleController.bulkDeleteVehicles);

export { VehicleRouter };
