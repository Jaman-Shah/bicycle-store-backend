import express from "express";
import { BicycleControllers } from "./bicycle.controller";

const router = express.Router();

// bicycle creating endpoint
router.post("/", BicycleControllers.createBicycle);

// all bicycles getting endpoint
router.get("/", BicycleControllers.getAllBicycles);

// single bicycle getting endpoint
router.get("/:productId", BicycleControllers.getSingleBicycle);

// update bicycle endpoint

router.put("/:productId", BicycleControllers.updateBicycle);

// delete bicycle endpoint

router.delete("/:productId", BicycleControllers.deleteBicycle);

// exporting the routers
export const BicycleRouters = router;
