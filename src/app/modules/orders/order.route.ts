import express from "express";

import { OrderControllers } from "./order.controller";

const router = express.Router();

// order creating endpoint

router.post("/", OrderControllers.createOrder);

export const OrderRouters = router;
