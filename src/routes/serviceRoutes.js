import { Router } from "express";
import {
  getAllServices,
  createService,
} from "../controllers/serviceController.js";
import protect from "../middlewares/authMiddleware.js";
import { authorizeRoles } from "../middlewares/authorizeRoles.js";

const serviceRouter = Router();

serviceRouter.use(protect);

serviceRouter.get("/", getAllServices);
serviceRouter.post("/", authorizeRoles("Admin", "Manager"), createService);
export default serviceRouter;
