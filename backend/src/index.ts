import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;
export const prisma = new PrismaClient();

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Routes will be imported here
import incidentRoutes from './routes/incidents';
app.use('/api/incidents', incidentRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
