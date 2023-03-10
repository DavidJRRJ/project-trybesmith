import { ResultSetHeader, RowDataPacket } from 'mysql2';
import IUser from '../interfaces/Iuser';
import connection from './connection';

export default class UserModel {
  connection = connection;

  async create(user: IUser): Promise<IUser> {
    const { username, classe, level, password } = user;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );

    const newUser = { id: insertId, ...user };

    return newUser;
  }

  async findOne(user: string): Promise<IUser> {
    const [[result]] = await this.connection.execute<(
    IUser & RowDataPacket)[]>(
      'SELECT * FROM Trybesmith.Users WHERE username = ?',
      [user],
      );
    return result;
  }
}
