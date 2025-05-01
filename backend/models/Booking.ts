import { sequelize, SequelizeModel, DataTypes } from "../libs/database";

const Booking: SequelizeModel = sequelize.define("Bookings",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    vehicle_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: false,
    }
  }
);

Booking.associate = function () {
  const models = sequelize.models;
  Booking.belongsTo(models.Users, { foreignKey: "user_id", as: "Users", onDelete: "CASCADE", onUpdate: "CASCADE" });
  Booking.belongsTo(models.Vehicles, { foreignKey: "vehicle_id", as: "Vehicles", onDelete: "CASCADE", onUpdate: "CASCADE" });
};

export { Booking };
