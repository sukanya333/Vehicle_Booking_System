import { sequelize, SequelizeModel, DataTypes } from "../libs/database";

const User: SequelizeModel = sequelize.define("Users",
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }
);

User.associate = function () {
  const models = sequelize.models;
  User.hasMany(models.Bookings, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
  });
};

export { User };
