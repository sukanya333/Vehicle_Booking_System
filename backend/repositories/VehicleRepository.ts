import { Vehicle } from "../models/Vehicle";
import { Op, cast, where, col } from "sequelize";

export class VehicleRepository {
  public createVehicle = async (data: any): Promise<any> => {
    return await Vehicle.create(data);
  };

  public bulkCreateVehicle = async (data: any[]): Promise<any> => {
    return await Vehicle.bulkCreate(data);
  };

  public updateVehicle = async (id: string, data: any): Promise<any> => {
    return await Vehicle.update(data, {
      where: { id },
    });
  };

  public deleteVehicle = async (id: string): Promise<any> => {
    return await Vehicle.destroy({
      where: { id },
    });
  };

  public bulkDeleteVehicle = async (ids: string[]): Promise<any> => {
    return await Vehicle.destroy({
      where: { id: ids },
    });
  };

  public getVehicleById = async (id: string): Promise<any> => {
    return await Vehicle.findByPk(id);
  };

  public getVehicleByName = async (name: string): Promise<any> => {
    return await Vehicle.findOne({
      where: { name },
    });
  };

  public getAllVehicles = async (
    page: number,
    limit: number,
    keyword: string = "",
    orderBy: string = "updatedAt",
    sortBy: "ASC" | "DESC" = "DESC",
    filters?: Array<{
      column: string;
      operator?: string;
      value: string;
    }>
  ): Promise<any> => {
    let whereClause: any = {};

    if (keyword) {
      whereClause[Op.or] = {
        name: where(cast(col("name"), "TEXT"), {
          [Op.iLike]: `%${keyword}%`,
        }),
        description: where(cast(col("description"), "TEXT"), {
          [Op.iLike]: `%${keyword}%`,
        }),
      };
    }

    if (filters && filters.length > 0) {
      const filterConditions: any[] = [];

      for (const filter of filters) {
        const { column, operator = "contains", value } = filter;
        if (!column || !value) continue;

        switch (operator) {
          case "equals":
            filterConditions.push({ [column]: value });
            break;
          case "starts with":
            filterConditions.push({
              [column]: { [Op.iLike]: `${value}%` },
            });
            break;
          case "ends with":
            filterConditions.push({
              [column]: { [Op.iLike]: `%${value}` },
            });
            break;
          default:
            filterConditions.push({
              [column]: { [Op.iLike]: `%${value}%` },
            });
            break;
        }
      }

      if (filterConditions.length > 0) {
        whereClause = {
          ...whereClause,
          [Op.and]: filterConditions,
        };
      }
    }

    return await Vehicle.findAndCountAll({
      where: whereClause,
      offset: page,
      limit,
      order: [[orderBy, sortBy]],
    });
  };

  public getAllVehiclesForDropdown = async (
    keyword: string = ""
  ): Promise<any> => {
    return await Vehicle.findAll({
      where: {
        name: where(cast(col("name"), "TEXT"), {
          [Op.iLike]: `%${keyword}%`,
        }),
      },
      attributes: ["id", "name"],
      order: [["updatedAt", "DESC"]],
    });
  };
}
