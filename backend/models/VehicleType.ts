import { sequelize, SequelizeModel, DataTypes } from "../libs/database";

const VehicleType: SequelizeModel = sequelize.define("VehicleTypes",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    type_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }
);

VehicleType.associate = function () {
  const models = sequelize.models;
  VehicleType.hasMany(models.Vehicles, {
    foreignKey: "vehicle_type_id",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
  });
};

export { VehicleType };
