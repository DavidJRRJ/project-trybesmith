import { NextFunction, Request, Response } from 'express';
import ApiError from '../utils/apiError';

const errorMiddleware = (
  error: Error & Partial<ApiError>,
  req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const statusCode = error.statusCode ?? 400;

  return res.status(statusCode).json({ message: error.message });
};

export default errorMiddleware;