import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
// import * as Sentry from "@sentry/node";
import { RootRouter } from "./routers/index";
import { sequelize as db, SequelizeModel } from "./libs/database";
// import { errorhandler } from "./src/middlewares/errorHandler";
// import { LoggerMiddleware } from "./src/middlewares";
// import { runAutoMigrations } from "./src/tools/runMigrations";
// import { associateModels } from "./src/utils/associations";
// import { setupAllSubscribers } from "./src/rpcs/subscribers"; */

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const env = process.env.NODE_ENV || "development";

// Initialize Sentry
// Sentry.init({ dsn: process.env.SENTRY_DSN || "" });

// Express middlewares
// app.use(Sentry.Handlers.requestHandler());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
// app.use(LoggerMiddleware);

// Routes
app.use("/", RootRouter);
app.use("/api", RootRouter);

// Health check endpoint
app.get("/vehicle-booking/healthCheck", (req, res) => {
  res.status(200).send({ status: "UP" });
});

// Error handler middlewares
// app.use(Sentry.Handlers.errorHandler());
// app.use( errorhandler);

// Run DB migration, model sync, and RabbitMQ subscribers
const isEnabledAutoMigration = process.env.ENABLE_AUTO_MIGRATION === "true";

// runAutoMigrations(isEnabledAutoMigration, "--up")
//   /* .then(async () => {
//     await db.sync();
//     // await associateModels(db.models as { [key: string]: SequelizeModel });
//     // await setupAllSubscribers();
//     console.log("RabbitMQ subscribers initialized.");
//   }) */
//   .then(() => {
//     app.listen(port, () => {
//       console.log(`🚗 Vehicle Booking Service running on port ${port} in ${env} mode.`);
//     });
//   })
//   .catch((err: any) => {
//     console.error("❌ Startup failed:", err);
//   });
