import { Request, Response } from "express";
import { BicycleServices } from "./bicycle.service";

// bicycle creating application logics here:
const createBicycle = async (req: Request, res: Response) => {
  try {
    const bicycle = req.body;
    const result = await BicycleServices.createBicycleInDB(bicycle);

    res.status(200).json({
      success: true,
      message: "Bicycle created successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const BicycleControllers = {
  createBicycle,
};
