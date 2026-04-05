import { AppError } from "../utils/AppError.js";
import { asyncWrapper } from "../utils/asyncWrapper.js";
import { userModel } from "../models/user.model.js";
import type { Controller } from "../types/controller.js";
import * as jwt from "jsonwebtoken";

export const authUser: Controller = asyncWrapper(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    throw new AppError(401, "Unauthorized access! Please login/signup");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
      id: string;
    };

    if (!decoded.id) {
      throw new AppError(401, "Invalid token payload");
    }

    const user = await userModel.findById(decoded.id);
    if (!user) throw new AppError(401, "User no longer exists");

    req.user = user;

    next();
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      throw new AppError(401, "Token expired");
    }

    throw new AppError(401, "Invalid token");
  }
});
