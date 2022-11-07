import Joi from 'joi';
import Iproduct from '../../interfaces/Iproduct';
import ApiError from '../../utils/apiError';

const productValidation = (product: Iproduct) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    amount: Joi.string().min(3).required(),
  });

  const { error, value } = schema.validate(product);

  if (error?.message.includes('required')) {
    throw new ApiError(error.message, 400);
  }
  if (error?.message.includes('must')) {
    throw new ApiError(error.message, 422);
  }

  return value;
};

export default productValidation;
