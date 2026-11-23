import { prisma } from '../index';
import fs from 'fs';

async function exportJson() {
  const incidents = await prisma.incident.findMany({ include: { runs: true, fixes: true } });
  fs.writeFileSync('incidents-export.json', JSON.stringify(incidents, null, 2));
  console.log('Exported ' + incidents.length + ' incidents.');
  process.exit(0);
}

exportJson();
