import { VehicleType } from "../models/VehicleType";
import { Op, cast, where, col } from "sequelize";

export class VehicleTypeRepository {
  public createVehicleType = async (data: any): Promise<any> => {
    return await VehicleType.create(data);
  };

  public bulkCreateVehicleType = async (data: any[]): Promise<any> => {
    return await VehicleType.bulkCreate(data);
  };

  public updateVehicleType = async (id: string, data: any): Promise<any> => {
    return await VehicleType.update(data, {
      where: { id },
    });
  };

  public deleteVehicleType = async (id: string): Promise<any> => {
    return await VehicleType.destroy({
      where: { id },
    });
  };

  public bulkDeleteVehicleType = async (ids: string[]): Promise<any> => {
    return await VehicleType.destroy({
      where: { id: ids },
    });
  };

  public getVehicleTypeById = async (id: string): Promise<any> => {
    return await VehicleType.findByPk(id);
  };

  public getVehicleTypeByName = async (name: string): Promise<any> => {
    return await VehicleType.findOne({
      where: { name },
    });
  };

  public getAllVehicleTypes = async (
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

    return await VehicleType.findAndCountAll({
      where: whereClause,
      offset: page,
      limit,
      order: [[orderBy, sortBy]],
    });
  };

  public getAllVehicleTypesForDropdown = async (
    keyword: string = ""
  ): Promise<any> => {
    return await VehicleType.findAll({
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
