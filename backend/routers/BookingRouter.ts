import { Router } from 'express';
import { BookingController } from "../controllers/index";
// import { isAuthenticated } from "../middlewares/jwt";

const BookingRouter: Router = Router();
const bookingController = new BookingController();

BookingRouter.post("/booking/createBooking", bookingController.createBooking);
BookingRouter.put("/booking/updateBooking/:id", bookingController.updateBooking);
BookingRouter.get("/booking/getBookingById/:id", bookingController.getBookingById);
// BookingRouter.get("/booking/getAllBookings", bookingController.getAllBookings);

// BookingRouter.delete("/booking/deleteBooking/:id", bookingController.deleteBooking);
// BookingRouter.delete("/booking/bulkDeleteBookings", bookingController.bulkDeleteBookings);

export { BookingRouter };
