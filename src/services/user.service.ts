import jwt from 'jsonwebtoken';
import IUser from '../interfaces/Iuser';
import UserModel from '../models/user.model';

export default class UserService {
  constructor(private userModel = new UserModel()) {}

  async create(user: IUser) {
    const newUser = await this.userModel.create(user);
    const token = jwt.sign({ ...newUser, password: '_' }, process.env.JWT_SECRET ?? '', {
      expiresIn: '1d',
      algorithm: 'HS256',
    });
    return token;
  } 
}