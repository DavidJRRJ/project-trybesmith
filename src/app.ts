import express from 'express';
import 'express-async-errors';
import errorMiddleware from './middlewares/error';
import loginRouter from './routes/login.route';
import orderRouter from './routes/order.route';
import productRouter from './routes/product.route';
import userRouter from './routes/user.route';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/orders', orderRouter);
app.use('/login', loginRouter);

app.use(errorMiddleware);

export default app;
