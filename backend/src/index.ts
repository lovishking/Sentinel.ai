/**
 * @file index.ts
 * @description Primary entry point for Sentinel AI backend API server.
 * Handles Express server configuration, middleware initialization,
 * database connection via Prisma, and graceful service lifecycle management.
 */
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { requestLogger } from './middleware/requestLogger';
import { errorHandler } from './middleware/errorHandler';
import { PrismaClient } from '@prisma/client';

dotenv.config();

const app = express();
const DEFAULT_PORT = 4000;
const port = process.env.PORT || DEFAULT_PORT;
export const prisma = new PrismaClient();

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(requestLogger);
app.use(express.json());

// Healthcheck endpoint for load balancers
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Routes will be imported here
import incidentRoutes from './routes/incidents';
app.use('/api/incidents', incidentRoutes);

// Centralized error handling
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Graceful termination handler
const handleShutdown = async (signal: string) => {
  console.log(`Received ${signal}. Terminating Prisma client and shutting down...`);
  try {
    await prisma.$disconnect();
    console.log('Database connection closed cleanly.');
  } catch (err) {
    console.error('Error disconnecting database:', err);
  } finally {
    process.exit(0);
  }
};

process.on('SIGINT', () => handleShutdown('SIGINT'));
process.on('SIGTERM', () => handleShutdown('SIGTERM'));
