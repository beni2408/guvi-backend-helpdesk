import bookingModel from "../models/Booking.js";
import userModel from "../models/userModel.js";
import sendEmail from "../services/sendEmail.js";

export const createBooking = async (req, res) => {
  //const {customerName, customerEmail, serviceName} = req.body
  // const createdBy = req.user.id

  const { customerName, customerMail, service } = req.body;
  const newBooking = await bookingModel.create({
    customerName,
    customerMail,
    service,
    // createdBy: req.User.id,
  });
  await sendEmail(
    req.body.customerMail,
    "Booking Confirmation",
    `Your booking for ${service} is confirmed.`,
    `Dear ${customerName},\n\nYour booking for the service "${service}" has been successfully confirmed.\n\nThank you for choosing our services!\n\nBest regards,\nHelpdesk Team`
  );
  res.status(201).json({
    status: "success",
    data: newBooking,
  });
};
