import { UserService } from "../services/concrete/index";
import { Request, Response } from "express";

export class UserController {
    private UserService = new UserService();

    public createUser = async (req: Request, res: Response): Promise<any> => {
        const data = req.body;
       // data.branch_id = req.branchId;

        if (!data.name || !data.email || !data.phone) {
            return res.status(400).json({ error: "Required fields missing." });
        }

        try {
            const user = await this.UserService.CreateUser(data);
            res.status(200).json({ message: "User created successfully.", data: user });
        } catch (err) {
            console.error("CreateUser Error:", err);
            res.status(400).json({ error: "Something went wrong." });
        }
    };

    public updateUser = async (req: Request, res: Response): Promise<any> => {
        const id = req.params.id;
        const data = req.body;

        if (!id) return res.status(400).json({ error: "Invalid user ID." });

        try {
            const existing = await this.UserService.GetUserById(id);
            if (!existing) return res.status(400).json({ error: "User not found." });

            const user = await this.UserService.UpdateUser(id, data);
            res.status(200).json({ message: "User updated successfully.", data: user });
        } catch (err) {
            console.error("UpdateUser Error:", err);
            res.status(400).json({ error: "Something went wrong." });
        }
    };

    public getUserById = async (req: Request, res: Response): Promise<any> => {
        try {
            const id = req.params.id;
            const user = await this.UserService.GetUserById(id);
            res.status(200).json({ data: user });
        } catch (err) {
            res.status(400).json({ error: "Something went wrong." });
        }
    };

   /*  public getAllUsers = async (req: Request, res: Response): Promise<void>   => {
        try {
            const { page = 1, limit = 10 } = req.query;
            const offset = (Number(page) - 1) * Number(limit);
            
           // const branchId = req.branchId as string;

            const users = await this.UserService.GetAllUsers(offset, Number(limit));
            res.status(200).json({ data: users });
        } catch (err) {
            res.status(400).json({ error: "Something went wrong." });
        }
    }; */

    public deleteUser = async (req: Request, res: Response): Promise<any> => {
        const id = req.params.id;

        if (!id) return res.status(400).json({ error: "Invalid user ID." });

        try {   
            const user = await this.UserService.DeleteUser(id);
            res.status(200).json({ message: "User deleted successfully.", data: user });
        } catch (err) {
            console.error("DeleteUser Error:", err);
            res.status(400).json({ error: "Something went wrong." });
        }
    };
     
    public bulkDeleteUsers = async (req: Request, res: Response): Promise<any> => {
        const ids = req.body.ids;

        if (!ids) return res.status(400).json({ error: "Invalid user IDs." });

        try {
            const users = await this.UserService.BulkDeleteUser(ids);
            res.status(200).json({ message: "Users deleted successfully.", data: users });
        } catch (err) {
            console.error("BulkDeleteUser Error:", err);
            res.status(400).json({ error: "Something went wrong." });
        }
    };
    
}
