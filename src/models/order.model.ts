import { RowDataPacket } from 'mysql2';
import Iorder from '../interfaces/Iorder';
import connection from './connection';

export default class OrderModel {
  connection = connection;

  async findAll(): Promise<Iorder[]> {
    const [result] = await this.connection.execute<(Iorder & RowDataPacket)[]>(
      `SELECT o.id, o.userId, JSON_ARRAYAGG(p.id) as productsIds FROM Trybesmith.Orders as o
      INNER JOIN Trybesmith.Products as p ON o.id = p.orderId
      GROUP BY o.id`);
    return result;
  }
}
