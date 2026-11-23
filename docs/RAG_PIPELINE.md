# RAG Retrieval-Augmented Generation Pipeline

## Vector Search Workflow
1. Source files are chunked into 500-token blocks.
2. Embeddings are generated using Gemini text-embedding models.
3. Cosine similarity queries retrieve the top-3 most relevant codebase contexts.
4. Triage agent injects retrieved snippets into LangGraph thread context.
