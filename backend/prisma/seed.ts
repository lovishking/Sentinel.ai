import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding initial Sentinel AI demo incidents...');
  await prisma.incident.create({
    data: {
      title: 'Redis Out-of-Memory Eviction Spillover',
      description: 'Production cache nodes are dropping active session tokens due to maxmemory reached.',
      severity: 'critical',
      status: 'open',
    },
  });
  console.log('Database seeded successfully.');
}

main().catch(console.error).finally(() => prisma.$disconnect());
