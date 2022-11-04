import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import Iproduct from '../interfaces/Iproduct';

export default class ProductModel {
  connection = connection;

  async create(product: Iproduct): Promise<Iproduct> {
    const { name, amount } = product;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );

    const newProduct = { id: insertId, ...product };

    return newProduct;
  }
}