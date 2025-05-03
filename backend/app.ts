import express, { Request, Response } from 'express';
import { VehicleRouter } from './routers/VehicleRouter';
import { BookingRouter } from './routers/BookingRouter';
import { VehicleTypeRouter } from './routers/VehicleTypeRouter';
import { UserRouter } from './routers/UserRouter';
import { RootRouter } from './routers/index';
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(RootRouter);

// Example route
app.get('/', (req: Request, res: Response) => {
  res.send('Backend is running!');
});



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
