import { Order } from "./order.interface";
import OrderModel from "./order.model";

// order getting
const createOrderInDB = async (order: Order) => {
  try {
    const result = await OrderModel.create(order);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const OrderServices = {
  createOrderInDB,
};
