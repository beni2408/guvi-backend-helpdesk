import { Router } from "express";
import protect from "../middlewares/authMiddleware.js";

import { createBooking } from "../controllers/bookingController.js";

const bookingRouter = Router();

bookingRouter.post("/", protect, createBooking);
export default bookingRouter;
