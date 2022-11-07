import IUser from '../interfaces/Iuser';
import UserModel from '../models/user.model';
import createToken from '../utils/createToken';
import userValidation from './validations/user.validation';

export default class UserService {
  constructor(private userModel = new UserModel()) {}

  async create(user: IUser) {
    userValidation(user);
    const newUser = await this.userModel.create(user);
    const token = createToken({ ...newUser, password: '_' });
    return token;
  } 
}