import { sequelize, SequelizeModel, DataTypes } from "../libs/database";

const Vehicle: SequelizeModel = sequelize.define("Vehicles",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vehicle_type_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    registration_number: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
  }
);

Vehicle.associate = function () {
  const models = sequelize.models;
  Vehicle.belongsTo(models.VehicleTypes, {
      foreignKey: "vehicle_type_id",
      as: "VehicleTypes",
      onDelete: "CASCADE",
      onUpdate: "CASCADE"
  });

  Vehicle.hasMany(models.Bookings, {
    foreignKey: "vehicle_id",
    onDelete: "CASCADE"
  });
};

export { Vehicle };
