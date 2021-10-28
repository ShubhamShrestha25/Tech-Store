const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const user = require("../models/userModel");

// Register a User
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await user.create({
    name,
    email,
    password,
    avatar: {
      public_id: "this is a sample id",
      url: "profilpickUrl",
    },
  });
  res.status(201).json({
    success: true,
    user,
  });
});
