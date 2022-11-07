import jwt from 'jsonwebtoken';
import ILogin from '../interfaces/Ilogin';
import IUser from '../interfaces/Iuser';

const createToken = async (user: IUser | ILogin) => {
  const token = jwt.sign({ user }, process.env.JWT_SECRET as string, {
    expiresIn: '1d',
    algorithm: 'HS256',
  });
  return token;
};

export default createToken;