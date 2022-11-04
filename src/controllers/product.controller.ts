import { Request, Response } from 'express';
import ProductService from '../services/product.service';

export default class ProductController {
  constructor(private productService = new ProductService()) {}

  async create(req: Request, res: Response) {
    const product = await this.productService.create(req.body);
    return res.status(201).json(product);
  }

  async findAll(_req: Request, res: Response): Promise<void> {
    const result = await this.productService.findAll();
    res.status(200).json(result);
  }
}