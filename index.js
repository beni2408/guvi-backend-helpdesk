import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import errorHandler from "./src/middlewares/errorHandler.js";
import authRouter from "./src/routes/authRoutes.js";
import serviceRouter from "./src/routes/serviceRoutes.js";
import bookingRouter from "./src/routes/bookingRoutes.js";
import adminRouter from "./src/routes/adminRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/service", serviceRouter);
app.use("/api/booking", bookingRouter);
app.use("/api/admin", adminRouter);

app.use(errorHandler);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
export default app;
