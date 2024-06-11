import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import dotenv from "dotenv";
import messageRouter from "./router/messageRouter.js";
import cors from "cors";

const app = express();

dotenv.config({ path: "./config/config.env" });

app.use(
  cors({
    origin: process.env.FRONTEND_URL, // Allow requests from the frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"], // Specify the allowed methods
    credentials: true, // Enable credentials (cookies, authorization headers, etc.)
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "hi!!",
  });
});
app.use("/api/v1/message", messageRouter);
dbConnection();
export default app;