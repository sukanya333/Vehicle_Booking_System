import { Router } from 'express';
import { VehicleTypeController } from "../controllers/index";
// import { isAuthenticated } from "../middlewares/jwt";

const VehicleTypeRouter: Router = Router();
const vehicleTypeController = new VehicleTypeController();

VehicleTypeRouter.post("/vehicle/type/createVehicleType",
    //isAuthenticated,
    vehicleTypeController.createVehicleType);
VehicleTypeRouter.put("/vehicle/type/updateVehicleType/:id",
    //isAuthenticated,
    vehicleTypeController.updateVehicleType);

VehicleTypeRouter.get("/vehicle/type/getVehicleTypeById/:id",
    //isAuthenticated,
    vehicleTypeController.getVehicleTypeById);
// VehicleTypeRouter.get("/vehicle/type/getAllVehicleTypes", isAuthenticated, vehicleTypeController.getAllVehicleTypes);

// VehicleTypeRouter.delete("/vehicle/type/deleteVehicleType/:id",
//     //isAuthenticated,
//     vehicleTypeController.deleteVehicleType);
// VehicleTypeRouter.delete("/vehicle/type/bulkDeleteVehicleTypes",
//     //isAuthenticated,
//     vehicleTypeController.bulkDeleteVehicleTypes);

export { VehicleTypeRouter };
