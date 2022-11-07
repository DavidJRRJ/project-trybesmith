import Iorder from '../interfaces/Iorder';
import OrderModel from '../models/order.model';

export default class OrderService {
  constructor(private orderModel = new OrderModel()) {}

  async findAll(): Promise<Iorder[]> {
    const result = await this.orderModel.findAll();
    return result;
  }
}