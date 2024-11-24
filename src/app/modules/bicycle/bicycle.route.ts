import express from "express";
import { BicycleControllers } from "./bicycle.controller";

const router = express.Router();

// bicycle creating endpoint
router.post("/", BicycleControllers.createBicycle);

// exporting the routers
export const BicycleRouters = router;
