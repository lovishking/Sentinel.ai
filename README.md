# Sentinel.ai

An autonomous AI-powered production incident resolution platform.

## Features
- Real-time incident tracking
- Multi-agent investigation workflow using LangGraph
- Automated code patch generation
- PostgreSQL with `pgvector` for RAG-based context retrieval

## Tech Stack
- Next.js, React, Tailwind CSS
- Node.js, Express, Prisma ORM
- Google Gemini API, LangGraph

## Setup
1. Start infrastructure: `docker-compose up -d`
2. Start backend: `cd backend && npm install && npm run dev`
3. Start frontend: `cd frontend && npm install && npm run dev`
