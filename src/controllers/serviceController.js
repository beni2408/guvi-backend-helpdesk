import serviceModel from "../models/SErvice.js";

export const getAllServices = async (req, res) => {
  const services = await serviceModel.find();

  res.status(200).json({
    message: "Services fetched successfully",
    status: "success",
    data: services,
  });
};

export const createService = async (req, res) => {
  const newService = await serviceModel.create(req.body);
  res.status(201).json({
    message: "Service created successfully",
    status: "success",
    data: newService,
  });
};
