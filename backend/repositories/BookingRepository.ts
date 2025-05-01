import { Booking } from "../models/Booking";
import { Op, cast, where, col } from "sequelize";

export class BookingRepository {
  public createBooking = async (data: any): Promise<any> => {
    return await Booking.create(data);
  };

  public bulkCreateBooking = async (data: any[]): Promise<any> => {
    return await Booking.bulkCreate(data);
  };

  public updateBooking = async (id: string, data: any): Promise<any> => {
    return await Booking.update(data, {
      where: { id },
    });
  };

  public deleteBooking = async (id: string): Promise<any> => {
    return await Booking.destroy({
      where: { id },
    });
  };

  public bulkDeleteBooking = async (ids: string[]): Promise<any> => {
    return await Booking.destroy({
      where: { id: ids },
    });
  };

  public getBookingById = async (id: string): Promise<any> => {
    return await Booking.findByPk(id);
  };

  public getBookingByName = async (name: string): Promise<any> => {
    return await Booking.findOne({
      where: { name },
    });
  };

  public getAllBookings = async (
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

    return await Booking.findAndCountAll({
      where: whereClause,
      offset: page,
      limit,
      order: [[orderBy, sortBy]],
    });
  };

  public getAllBookingsForDropdown = async (
    keyword: string = ""
  ): Promise<any> => {
    return await Booking.findAll({
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
