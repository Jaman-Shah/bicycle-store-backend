import express from "express";

import { OrderControllers } from "./order.controller";

const router = express.Router();

// order creating endpoint

router.post("/", OrderControllers.createOrder);

// getting total revenue endpoint

router.get("/revenue", OrderControllers.getRevenue);

export const OrderRouters = router;
