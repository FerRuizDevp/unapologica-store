import { Router } from "express";
import { createCheckout } from "../controllers/checkoutCrontroller";

const router = Router();

router.post("/", createCheckout);

export default router;