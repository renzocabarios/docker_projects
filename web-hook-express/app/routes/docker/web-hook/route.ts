import { Router } from "express";
import { webhook, health } from "./controller";

const router = Router();
router.route("/").post(webhook);
router.route("/").get(health);

export default router;
