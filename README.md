<div align="center">
  <h1>🛡️ Sentinel AI</h1>
  <p><strong>Autonomous AI-Powered Production Incident Resolution Platform</strong></p>
</div>

---

**Sentinel AI** is an advanced, multi-agent AI system designed to autonomously monitor, investigate, and resolve production incidents. By leveraging Large Language Models (LLMs), LangGraph, and Retrieval-Augmented Generation (RAG), Sentinel AI can triage incoming alerts, analyze logs and stack traces, pinpoint root causes, and automatically generate and propose code-level patches.

## ✨ Features

- **Real-Time Dashboard**: A stunning, dark-mode Next.js dashboard for monitoring active incidents and AI investigation status.
- **Multi-Agent Investigation Workflow**: Powered by LangGraph and Google Gemini, multiple AI agents collaborate to investigate failures, formulate fix plans, and synthesize code patches.
- **RAG-Powered Context**: Uses `pgvector` in PostgreSQL to retrieve historical incidents and codebase context, allowing the AI to make highly contextual decisions.
- **Automated Patch Generation**: The AI automatically writes diff patches to resolve the identified root cause.
- **Production-Ready Architecture**: Built on robust, scalable technologies (Next.js App Router, Express.js, Prisma, PostgreSQL, Redis, Docker).

## 🏗️ Architecture

```mermaid
graph TD
    UI[Next.js UI Dashboard] --> API(Express.js REST API)
    API --> DB[(PostgreSQL + pgvector)]
    API --> Redis[Redis Job Queue]
    API --> AI[LangGraph Agent Workflow]
    
    AI --> Gemini((Google Gemini API))
    AI --> GitHub((GitHub API))
    
    AI --> RAG[Vector Search for Code/History]
    RAG --> DB
```

## 🛠️ Tech Stack

**Frontend**
- Next.js (App Router)
- React & TypeScript
- Tailwind CSS & Framer Motion
- TanStack Query (React Query)
- Lucide React (Icons)

**Backend**
- Node.js & Express.js
- TypeScript
- Prisma ORM
- Zod (Validation)

**AI & Infrastructure**
- `@langchain/langgraph` (Workflow Orchestration)
- Google Gemini API (LLM)
- PostgreSQL with `pgvector`
- Redis (Background Tasks)
- Docker Compose

## 🚀 Quick Start

### Prerequisites
- Node.js (v18+)
- Docker & Docker Compose
- Google Gemini API Key

### 1. Start Infrastructure
Spin up the PostgreSQL database and Redis server using Docker:
```bash
docker-compose up -d
```

### 2. Configure Backend
```bash
cd backend
npm install

# Create a .env file and add your credentials
echo "GEMINI_API_KEY=your_gemini_api_key_here" > .env
echo "DATABASE_URL=postgresql://sentinel:password@localhost:5432/sentinel_db?schema=public" >> .env

# Push the database schema
npx prisma db push

# Start the Express server (Runs on port 4000)
npm run dev
```

### 3. Start Frontend Dashboard
Open a new terminal window:
```bash
cd frontend
npm install

# Start the Next.js app (Runs on port 3000)
npm run dev
```

Visit `http://localhost:3000` to access the Sentinel AI dashboard.

## 💻 Usage

1. **Dashboard Overview**: The main dashboard displays active incidents, critical alerts, and MTTR metrics.
2. **Simulate Incident**: Click the "Simulate Incident" button to mock a production alert (e.g., Database Connection Pool Exhaustion).
3. **Investigation View**: Click on an incident to watch the LangGraph workflow in real-time as the agents analyze the payload, determine the root cause, and formulate a code patch.
4. **Approve Patch**: Review the AI-generated patch and click "Approve & Merge" to simulate pushing to GitHub.

## 🤝 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License
This project is licensed under the MIT License.
