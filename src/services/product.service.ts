import Iproduct from '../interfaces/Iproduct';
import ProductModel from '../models/product.model';
import productValidation from './validations/product.validation';

export default class ProductService {
  constructor(private productModel = new ProductModel()) {}

  async create(product: Iproduct): Promise<Iproduct> {
    productValidation(product);
    const newProduct = this.productModel.create(product);
    return newProduct;
  }
  
  async findAll(): Promise<Iproduct[]> {
    return this.productModel.findAll();
  }
}