import {Router} from "express";
import { welcomeMessageController, getAllInternscontroller, addInternDataController } from "../controllers/intern.controller.js";
const router = Router();

router.get("/", welcomeMessageController);
router.get("/interns", getAllInternscontroller);
router.post("/interns", addInternDataController);


export default router;