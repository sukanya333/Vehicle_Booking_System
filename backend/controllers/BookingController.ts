import { BookingService } from "../services/concrete/index";
import { Request, Response, RequestHandler } from "express";

export class BookingController {
    private BookingService = new BookingService();

    public createBooking = async (req: Request, res: Response): Promise<void> => {
        const data = req.body;
        //data.branch_id = req.branchId;

        if (!data.user_id || !data.vehicle_id || !data.booking_date) {
            res.status(400).json({ error: "Missing required booking fields." });
            return;
        }

        try {
            const result = await this.BookingService.CreateBooking(data);
            res.status(200).json({ message: "Booking created successfully.", data: result });
        } catch (err) {
            console.error("CreateBooking Error:", err);
            res.status(400).json({ error: "Something went wrong." });
        }
    };

    public updateBooking = async (req: Request, res: Response): Promise<void> => {
        const id = req.params.id;
        const data = req.body;

        if (!id || id === ":id") {
            res.status(400).json({ error: "Please provide booking ID." });
            return;
        }

        try {
            const existing = await this.BookingService.GetBookingById(id);
            if (!existing) {
                res.status(400).json({ error: "Invalid booking ID." });
                return;
            }

            const result = await this.BookingService.UpdateBooking(id, data);
            res.status(200).json({ message: "Booking updated successfully.", data: result });
        } catch (err) {
            console.error("UpdateBooking Error:", err);
            res.status(400).json({ error: "Something went wrong." });
        }
    };

    public getBookingById = async (req: Request, res: Response): Promise<void> => {
        try {
            const id = req.params.id;
            if (!id) {
                res.status(400).json({ error: "Invalid ID." });
                return;
            }

            const result = await this.BookingService.GetBookingById(id);
            res.status(200).json({ data: result });
        } catch (err) {
            console.error("GetBookingById Error:", err);
            res.status(400).json({ error: "Something went wrong." });
        }
    };

    /* public getAllBookings = async (req: Request, res: Response): Promise<void> => {
        try {
            const { page = 1, limit = 10 } = req.query;
            const offset = (Number(page) - 1) * Number(limit);
            const branchId = req.branchId as string;

            const data = await this.BookingService.GetAllBookings(branchId, offset, Number(limit));
            res.status(200).json({ data });
        } catch (err) {
            console.error("GetAllBookings Error:", err);
            res.status(400).json({ error: "Something went wrong." });
        }
    }; */

    public deleteBooking = async (req: Request, res: Response): Promise<any> => {
        const id = req.params.id;

        if (!id) return res.status(400).json({ error: "Invalid booking ID." });

        try {
            const booking = await this.BookingService.DeleteBooking(id);
            res.status(200).json({ message: "Booking deleted successfully.", data: booking });
        } catch (err) {
            console.error("DeleteBooking Error:", err);
            res.status(400).json({ error: "Something went wrong." });
        }
    };

    public bulkDeleteBookings = async (req: Request, res: Response): Promise<any> => {
        const ids = req.body.ids;

        if (!ids) return res.status(400).json({ error: "Invalid booking IDs." });

        try {
            const bookings = await this.BookingService.BulkDeleteBooking(ids);
            res.status(200).json({ message: "Bookings deleted successfully.", data: bookings });
        } catch (err) {
            console.error("BulkDeleteBooking Error:", err);
            res.status(400).json({ error: "Something went wrong." });
        }
    };
    
    
}
