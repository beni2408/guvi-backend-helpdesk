import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import sendEmail from "../services/sendEmail.js";

export const createUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  const userExists = await userModel.findOne({ email });

  if (userExists) {
    return res.status(400).json({
      staus: "failed",
      message: "User already exists",
    });
  }

  const newUser = new userModel({
    name,
    email,
    password: password || "Password",
    role,
  });

  //userModel.create method also works
  //   userModel.create(newUser);
  // await method with save also works
  await newUser.save();
  await sendEmail(
    email,
    name,
    "Account Created Successfully",
    `Dear ${name},\n\nYour account has been successfully created.\n\nHere are your login details:\nEmail: ${email}\nPassword: ${
      password || "Password"
    }\n\nPlease change your password after your first login for security reasons.\n\nBest regards,\nHelpdesk Team`
  );

  res.status(201).json({
    message: "User registered successfully",
    status: "success",
    data: newUser,
  });
};
