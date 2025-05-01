import { VehicleTypeService } from "../services/concrete/index";
import { Request, Response } from "express";

export class VehicleTypeController {
    private VehicleTypeService = new VehicleTypeService();

    public createVehicleType = async (req: Request, res: Response): Promise<any> => {
        const data = req.body;
       // data.branch_id = req.branchId;

        if (!data.vehicle_type_name || !data.description) {
            return res.status(400).json({ error: "Missing required fields." });
        }

        try {
           

            const result = await this.VehicleTypeService.CreateVehicleType(data);
            res.status(200).json({ message: "Vehicle type created successfully.", data: result });
        } catch (err) {
            res.status(400).json({ error: "Something went wrong." });
        }
    };

    public updateVehicleType = async (req: Request, res: Response): Promise<any> => {
        const id = req.params.id;
        const data = req.body;

        if (!id) return res.status(400).json({ error: "Invalid ID." });

        try {
            const existing = await this.VehicleTypeService.GetVehicleTypeById(id);
            if (!existing) return res.status(400).json({ error: "Vehicle type not found." });

           

            const updated = await this.VehicleTypeService.UpdateVehicleType(id, data);
            res.status(200).json({ message: "Vehicle type updated successfully.", data: updated });
        } catch (err) {
            res.status(400).json({ error: "Something went wrong." });
        }
    };

    public getVehicleTypeById = async (req: Request, res: Response): Promise<any> => {
        try {
            const id = req.params.id;
            const result = await this.VehicleTypeService.GetVehicleTypeById(id);
            res.status(200).json({ data: result });
        } catch (err) {
            res.status(400).json({ error: "Something went wrong." });
        }
    };

   /*  public getAllVehicleTypes = async (req: Request, res: Response): Promise<any>     => {
        try {
            const { page = 1, limit = 10 } = req.query;
            const offset = (Number(page) - 1) * Number(limit);
            const branchId = req.branchId as string;

            const data = await this.VehicleTypeService.getAllVehicleTypes(branchId, offset, Number(limit));
            res.status(200).json({ data });
        } catch (err) {
            res.status(400).json({ error: "Something went wrong." });
        }
    }; */
}
