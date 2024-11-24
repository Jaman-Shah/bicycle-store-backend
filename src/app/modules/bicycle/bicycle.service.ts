import { Bicycle } from "./bicycle.interface";
import bicycleModel from "./bicycle.model";

//bicycle creating in the db logics here:
const createBicycleInDB = async (bicycle: Bicycle) => {
  try {
    const result = await bicycleModel.create(bicycle);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const BicycleServices = {
  createBicycleInDB,
};
