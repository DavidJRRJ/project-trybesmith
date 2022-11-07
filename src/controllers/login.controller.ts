import { Request, Response } from 'express';
import LoginService from '../services/login.service';

export default class LoginController {
  constructor(private loginService = new LoginService()) {}

  async login(req: Request, res: Response) {
    const token = await this.loginService.login(req.body);

    return res.status(200).json({ token });
  }
}