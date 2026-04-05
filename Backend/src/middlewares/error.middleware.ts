import type { Request, Response, NextFunction } from "express";

export const ErrorMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
): any => {
  const message: string = err.message || "Internal server error";
  const statusCode: number = err.statusCode || 500;

  if (err?.errors?.length) {
    const errorMessages = err.errors.map((error: any) => error.msg);
    return res.status(statusCode).json({
      success: false,
      message: errorMessages,
    });
  }

  res.status(statusCode).json({
    success: false,
    message,
  });
};
