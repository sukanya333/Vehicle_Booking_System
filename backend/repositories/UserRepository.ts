import { User } from "../models/User";
import { Op, cast, where, col } from "sequelize";

export class UserRepository {
  public createUser = async (data: any): Promise<any> => {
    return await User.create(data);
  };

  public bulkCreateUser = async (data: any[]): Promise<any> => {
    return await User.bulkCreate(data);
  };

  public updateUser = async (id: string, data: any): Promise<any> => {
    return await User.update(data, {
      where: { id },
    });
  };

  public deleteUser = async (id: string): Promise<any> => {
    return await User.destroy({
      where: { id },
    });
  };

  public bulkDeleteUser = async (ids: string[]): Promise<any> => {
    return await User.destroy({
      where: { id: ids },
    });
  };

  public getUserById = async (id: string): Promise<any> => {
    return await User.findByPk(id);
  };

  public getUserByName = async (name: string): Promise<any> => {
    return await User.findOne({
      where: { name },
    });
  };

  public getAllUsers = async (
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

    return await User.findAndCountAll({
      where: whereClause,
      offset: page,
      limit,
      order: [[orderBy, sortBy]],
    });
  };

  public getAllUsersForDropdown = async (
    keyword: string = ""
  ): Promise<any> => {
    return await User.findAll({
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
