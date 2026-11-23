import { prisma } from '../index';

async function check() {
  try {
    await prisma.$queryRaw`SELECT 1`;
    console.log('Database connectivity check: OK');
    process.exit(0);
  } catch (err) {
    console.error('Database connectivity check: FAILED', err);
    process.exit(1);
  }
}

check();
