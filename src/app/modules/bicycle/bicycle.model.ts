import mongoose, { Schema, model } from "mongoose";
import { Bicycle } from "./bicycle.interface";

// bicycle schema

const bicycleSchema = new Schema<Bicycle>(
  {
    name: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: String, required: true },
    type: { type: String, required: true },
    description: { type: String, required: true },
    quantity: { type: Number, required: true, default: 0 },
    inStock: { type: Boolean, required: true, default: true },
  },
  { timestamps: true }
);

const bicycleModel = mongoose.model<Bicycle>("Bicycle", bicycleSchema);

export default bicycleModel;
