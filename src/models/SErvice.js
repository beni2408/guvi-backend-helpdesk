import { time } from "console";
import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      default: 500,
    },
  },
  { timestamps: true }
);

const serviceModel = mongoose.model("Service", serviceSchema);

export default serviceModel;
