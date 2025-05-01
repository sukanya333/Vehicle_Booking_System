import { Router } from "express";
import { UserRouter } from "./UserRouter";
import { VehicleRouter } from "./VehicleRouter";
import { VehicleTypeRouter } from "./VehicleTypeRouter";
import { BookingRouter } from "./BookingRouter";

const RootRouter: Router = Router();

RootRouter.use(UserRouter);
RootRouter.use(VehicleRouter);
RootRouter.use(VehicleTypeRouter);
RootRouter.use(BookingRouter);

export { RootRouter };
