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

// getting revenue
const getRevenueFromDB = async () => {
  try {
    const result = await OrderModel.aggregate([
      {
        $group: {
          _id: null,
          totalRevenue: { $sum: { $multiply: ["$totalPrice", "$quantity"] } },
        },
      },
      {
        $project: {
          _id: 0,
          totalRevenue: 1,
        },
      },
    ]);

    return result;
  } catch (error) {
    console.log(error);
  }
};

export const OrderServices = {
  createOrderInDB,
  getRevenueFromDB,
};
