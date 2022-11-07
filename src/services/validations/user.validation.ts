import Joi from 'joi';
import IUser from '../../interfaces/Iuser';
import ApiError from '../../utils/apiError';

const userValidation = (user: IUser) => {
  const schema = Joi.object({
    username: Joi.string().min(3).required(),
    classe: Joi.string().min(3).required(),
    level: Joi.number().min(1).required(),
    password: Joi.string().min(8).required(),
  });

  const { value, error } = schema.validate(user);

  if (error?.message.includes('required')) {
    throw new ApiError(error.message, 400);
  }
  if (error?.message.includes('must')) {
    throw new ApiError(error.message, 422);
  }

  return value;
};

export default userValidation;