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

// all bicycle getting from db logics here:

const getAllBicyclesFromDB = async () => {
  try {
    const result = await bicycleModel.find();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const BicycleServices = {
  createBicycleInDB,
  getAllBicyclesFromDB,
};
