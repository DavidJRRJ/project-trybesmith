import Joi from 'joi';
import Iproduct from '../interfaces/Iproduct';
import ProductModel from '../models/product.model';

export default class ProductService {
  length: number;

  constructor(private productModel = new ProductModel()) {
    this.length = 3;
  }

  validateNewProduct(product: Iproduct): Iproduct {
    const schema = Joi.object({
      name: Joi.string().min(this.length).required(),
      amount: Joi.string().min(this.length).required(),
    });
    const { error, value } = schema.validate(product);
    if (error) {
      throw new Error(error.message);
    }
    return value;
  }

  async create(product: Iproduct): Promise<Iproduct> {
    this.validateNewProduct(product);
    const newProduct = this.productModel.create(product);
    return newProduct;
  }
  
  async findAll(): Promise<Iproduct[]> {
    return this.productModel.findAll();
  }
}