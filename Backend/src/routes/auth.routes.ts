import { Router } from "express";
import {
  loginValidation,
  registerValidation,
} from "../validations/auth.validation.js";
import { authController } from "../controller/auth.controller.js";

const router = Router();

/**
 * @route   POST /api/auth/register
 * @desc    Register a new user and send OTP for verification
 * @access  Public
 */
router.post("/register", registerValidation, authController.registerController);

/**
 * @route   POST /api/auth/login
 * @desc    login a existing user
 * @access  Public
 */

router.post("/login", loginValidation, authController.loginUserController);

export default router;
