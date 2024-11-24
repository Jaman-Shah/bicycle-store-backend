import { Request, Response } from "express";
import { OrderServices } from "./order.service";

const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;
    const result = await OrderServices.createOrderInDB(order);

    res.status(200).json({
      success: true,
      message: "Order created successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const OrderControllers = {
  createOrder,
};