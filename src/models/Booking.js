import mongoose from "mongoose";
import { Schema } from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true,
      trim: true,
    },
    customerMail: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    service: {
      type: String,
      // actual final developement must be - type: mongoose.Schema.Types.ObjectId, ref: "Service"
      required: true,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const bookingModel = mongoose.model("Booking", bookingSchema);
export default bookingModel;
