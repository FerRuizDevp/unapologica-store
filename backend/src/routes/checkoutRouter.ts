import { Router } from "express";
import { createCheckout } from "../controllers/checkoutCrontrollers";

const router = Router();

router.post("/", createCheckout);

export default router;