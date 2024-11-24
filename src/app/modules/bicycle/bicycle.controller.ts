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

// all bicycles getting application logics here:

const getAllBicycles = async (req: Request, res: Response) => {
  try {
    const result = await BicycleServices.getAllBicyclesFromDB();
    res.status(200).json({
      status: true,
      message: "Bicycles retrieved successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

// single bicycle getting application logics here:

const getSingleBicycle = async (req: Request, res: Response) => {
  try {
    const bicycleId = req.params.productId;
    const result = await BicycleServices.getSingleBicycleFrmDB(bicycleId);
    res.status(200).json({
      status: true,
      message: "Bicycle retrieved successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const BicycleControllers = {
  createBicycle,
  getAllBicycles,
  getSingleBicycle,
};