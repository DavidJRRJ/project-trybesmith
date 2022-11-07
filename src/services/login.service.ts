// import Joi from 'joi';
import ILogin from '../interfaces/Ilogin';
import UserModel from '../models/user.model';
import ApiError from '../utils/apiError';
import createToken from '../utils/createToken';
import loginValidation from './validations/login.validation';

export default class LoginService {
  constructor(private userModel = new UserModel()) {}

  async login(user: ILogin) {
    loginValidation(user);
    const { username, password } = user;
    
    const login = await this.userModel.findOne(username);

    if (!login || password !== login.password) {
      throw new ApiError('Username or password invalid', 401);
    }

    const token = createToken({ ...login, password: '' });

    return token;
  }
}
