import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  const { name, email, password, role } = req.body;
  //   console.log("Incoming body:", req.body);
  const userExists = await userModel.findOne({ email });

  if (userExists) {
    return res.status(400).json({
      message: "User already exists",
      staus: "failed",
    });
  }

  const newUser = new userModel({ name, email, password, role });

  //userModel.create method also works
  //   userModel.create(newUser);
  // await method with save also works
  await newUser.save();

  res.status(201).json({
    message: "User registered successfully",
    status: "success",
    data: newUser,
  });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  // Check if user exists
  const userExists = await userModel.findOne({ email });
  if (!userExists) {
    return res.status(404).json({
      message: "User not found, Please register or contact admin",
      status: "failed",
    });
  }

  const isvalid = await bcrypt.compare(password, userExists.password);
  if (!isvalid) {
    return res.status(400).json({
      message: "Invalid credentials",
      status: "failed",
    });
  }

  const token = jwt.sign(
    {
      id: userExists._id,
      role: userExists.role,
    },
    process.env.JWT_AUTH_SECRET_KEY,
    { expiresIn: "1d" }
  );

  res.status(200).json({
    message: "User logged in successfully",
    status: "success",
    token,
    data: userExists.role,
  });
};
