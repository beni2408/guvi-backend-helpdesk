import { Router } from "express";
import {
  getAllServices,
  createService,
} from "../controllers/serviceController.js";

const serviceRouter = Router();

serviceRouter.get("/", getAllServices);
serviceRouter.post("/", createService);
export default serviceRouter;
