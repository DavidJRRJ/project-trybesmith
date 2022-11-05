import { Request, Response } from 'express';
import UserService from '../services/user.service';

export default class UserController {
  constructor(private userService = new UserService()) {}

  async create(req: Request, res: Response) {
    const user = await this.userService.create(req.body);
    return res.status(201).json({ token: user });
  }
}