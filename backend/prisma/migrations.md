# Vector Database Setup Guide

To enable pgvector in PostgreSQL:
```sql
CREATE EXTENSION IF NOT EXISTS vector;
```

Prisma schema embeds 768-dimensional vectors matching Google Gemini text-embedding-004.
