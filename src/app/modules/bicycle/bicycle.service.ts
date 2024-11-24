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

// all bicycles getting from db logics here:

const getAllBicyclesFromDB = async () => {
  try {
    const result = await bicycleModel.find();
    return result;
  } catch (error) {
    console.log(error);
  }
};

// single bicycle getting from db logics here:

const getSingleBicycleFrmDB = async (id: string) => {
  try {
    const result = await bicycleModel.findOne({ _id: id });
    return result;
  } catch (error) {
    console.log(error);
  }
};

// update bicycle
const updateBicycleInDB = async (id: string, updateData: object) => {
  try {
    const result = await bicycleModel.findByIdAndUpdate(
      { _id: id },
      updateData,
      { new: true, runValidators: true }
    );
    return result;
  } catch (error) {
    console.log(error);
  }
};

// delete bicycle

const deleteBicycleById = async (id: string) => {
  try {
    const result = await bicycleModel.findOneAndDelete({ _id: id });
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const BicycleServices = {
  createBicycleInDB,
  getAllBicyclesFromDB,
  getSingleBicycleFrmDB,
  updateBicycleInDB,
  deleteBicycleById,
};
