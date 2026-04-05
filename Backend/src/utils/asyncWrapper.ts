import type { NextFunction, Request, Response } from "express";

export const asyncWrapper = (
  fn: (req: Request, res: Response, next: NextFunction) => Promise<any>,
): ((req: Request, res: Response, next: NextFunction) => void) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};
