import Joi from 'joi';
import ILogin from '../../interfaces/Ilogin';
import ApiError from '../../utils/apiError';

const loginValidation = (user: ILogin) => {
  const schema = Joi.object({
    username: Joi.string().min(1).required(),
    password: Joi.string().min(1).required(),
  });

  const { error, value } = schema.validate(user);

  if (error) {
    throw new ApiError(error.message, 400);
  }

  return value;
};

export default loginValidation;