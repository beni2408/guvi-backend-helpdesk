import { Router } from "express";

import protect from "../middlewares/authMiddleware.js"; // import createUser from "../controllers/adminController.js";
import { createUser } from "../controllers/adminController.js";
// import authorizeRoles from "../middlewares/authorizeRoles.js";
import { authorizeRoles } from "../middlewares/authorizeRoles.js";
const adminRouter = Router();

adminRouter.use(protect, authorizeRoles("Admin"));

adminRouter.post("/create-user", createUser);

export default adminRouter;
