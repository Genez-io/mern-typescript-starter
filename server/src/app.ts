import express from "express";
import bodyParser from "body-parser";
import connectDB from "./config.js";
import dotenv from "dotenv";
import userRoutes from "./routes/user.js";
import cors from "cors";

dotenv.config();

const app = express();
const port: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;

// Simple CORS setup
app.use(cors());

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/users", userRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
