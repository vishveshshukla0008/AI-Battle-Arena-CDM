import { userModel } from "../models/user.model.js";
import { generateOTP, hashOTP } from "../services/otp.service.js";
import type { Controller } from "../types/controller.js";
import { AppError } from "../utils/AppError.js";
import { asyncWrapper } from "../utils/asyncWrapper.js";

const registerController: Controller = asyncWrapper(async (req, res) => {
  const { fullname, mobile, password } = req.body;

  const isUserExists = await userModel.findOne({ mobile });
  if (isUserExists) throw new AppError(409, "User already exists !");

  const user = await userModel.create({
    fullname,
    mobile,
    password,
  });

  const otp = generateOTP();
  const hashedOtp = hashOTP(otp);

  user.verificationOtp = hashedOtp;
  user.otpVerificationExpires = new Date(Date.now() + 10 * 60 * 1000);

  await user.save();

  const userObj = user.toObject();

  const {
    password: _,
    verificationOtp,
    otpVerificationExpires,
    ...safeUser
  } = userObj;

  return res.status(201).json({
    success: true,
    message: "Registration success !",
    user: safeUser,
  });
});

const loginUserController: Controller = asyncWrapper(async (req, res) => {
  const { mobile, password } = req.body;
});

export const authController = { registerController, loginUserController };
