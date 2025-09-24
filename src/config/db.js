import mongoose from "mongoose";
import dotenv from "dotenv";

const connectDB = async () => {
  const dbURI = `mongodb+srv://${process.env.NEWER_DB_USERNAME}:${process.env.NEWER_DB_PASSWORD}@guvilivesessioncluster.xvctodn.mongodb.net/${process.env.NEWER_DB_NAME}?retryWrites=true&w=majority&appName=guvilivesessioncluster`;

  // const dbURI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@jwtprojectcluster.iczsizz.mongodb.net/${process.env.COLLECTION_NAME}?retryWrites=true&w=majority&appName=jwtprojectcluster`;
  try {
    await mongoose.connect(dbURI);
    console.log("Connected to MongoDB");

    // mongodb+srv://jascarbenish_db_user:<db_password>@jwtprojectcluster.iczsizz.mongodb.net/?retryWrites=true&w=majority&appName=jwtprojectcluster
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
export default connectDB;
