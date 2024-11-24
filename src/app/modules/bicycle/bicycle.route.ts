import express from "express";
import { BicycleControllers } from "./bicycle.controller";

const router = express.Router();

// bicycle creating endpoint
router.post("/", BicycleControllers.createBicycle);
// all bicycles getting endpoint
router.get("/", BicycleControllers.getAllBicycles);

// exporting the routers
export const BicycleRouters = router;
