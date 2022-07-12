import { Request , Response, NextFunction } from 'express';
const createNotFoundError = (req:Request, res:Response, next:NextFunction) => {
    const error = new Error('Cannot GET router')
    next(error);
}
export default createNotFoundError