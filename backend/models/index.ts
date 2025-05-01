import { sequelize } from "../libs/database";

// Import all models here
export { User } from "./User";
export { VehicleType } from "./VehicleType";
export { Vehicle } from "./Vehicle";
export { Booking } from "./Booking";

// Get all models from Sequelize instance
const models = sequelize.models;

// Call associate() for each model if it exists
Object.values(models).forEach((model: any) => {
  if (typeof model.associate === "function") {
    model.associate();
  }
});

export { sequelize };
