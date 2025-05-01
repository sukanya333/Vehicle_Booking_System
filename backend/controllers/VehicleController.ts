import { VehicleService } from "../services/concrete/index";
import { Request, Response } from "express";

export class VehicleController {
    private VehicleService = new VehicleService();

    public createVehicle = async (req: Request, res: Response): Promise<any> => {
        const data = req.body;
        //data.branch_id = req.branchId;

        if (!data.vehicle_type_id || !data.vehicle_number) {
            return res.status(400).json({ error: "Missing required vehicle data." });
        }

        try {
            

            const vehicle = await this.VehicleService.CreateVehicle(data);
            res.status(200).json({ message: "Vehicle created.", data: vehicle });
        } catch (err) {
            console.error("CreateVehicle Error:", err);
            res.status(400).json({ error: "Something went wrong." });
        }
    };

    public updateVehicle = async (req: Request, res: Response): Promise<any> => {
        const id = req.params.id;
        const data = req.body;

        if (!id) return res.status(400).json({ error: "Invalid vehicle ID." });

        try {
            const existing = await this.VehicleService.GetVehicleById(id);
            if (!existing) return res.status(400).json({ error: "Vehicle not found." });

            const updated = await this.VehicleService.UpdateVehicle(id, data);
            res.status(200).json({ message: "Vehicle updated.", data: updated });
        } catch (err) {
            res.status(400).json({ error: "Something went wrong." });
        }
    };

    public getVehicleById = async (req: Request, res: Response): Promise<any> => {
        try {
            const id = req.params.id;
            const vehicle = await this.VehicleService.GetVehicleById(id);
            res.status(200).json({ data: vehicle });
        } catch (err) {
            res.status(400).json({ error: "Something went wrong." });
        }
    };

   /*  public getAllVehicles = async (req: Request, res: Response): Promise<any> => {
        try {
            const { page = 1, limit = 10 } = req.query;
            const offset = (Number(page) - 1) * Number(limit);
            const branchId = req.branchId as string;

            const vehicles = await this.VehicleService.getAllVehicles(branchId, offset, Number(limit));
            res.status(200).json({ data: vehicles });
        } catch (err) {
            res.status(400).json({ error: "Something went wrong." });
        }
    }; */
}
