import React from 'react';
import { FaBrain, FaRobot, FaNetworkWired } from 'react-icons/fa';

/**
 * Configuration for AI System Architecture deep dives.
 */
const architectureConfig = [
    {
        id: 'brain-ai-orchestration',
        title: 'Brain AI',
        summary: 'Natural Language → API Orchestration Layer',
        tags: ['Agentic AI', 'Tool-Using Agents', 'FastAPI'],
        icon: <FaBrain size={40} color="#38bdf8" />,
        image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800',
        details: {
            problem: 'Enterprise users need to perform complex, multi-step actions across internal APIs. Traditional dashboards are rigid, fragmented, and cognitively heavy.\n\nBrain AI replaces UI navigation with natural language execution.',
            overview: 'Brain AI functions as an orchestration middleware layer:\n\nUser → Intent Parser → Router → Tool Execution → Validation → Response Generator\n\nIt separates reasoning from execution, ensuring LLM outputs never directly trigger unsafe actions.',
            components: [
                { name: 'Intent Parser', desc: 'LLM-based classifier extracting structured intents and parameters.' },
                { name: 'Tool Registry', desc: 'Strictly defined callable functions mapped to backend REST APIs.' },
                { name: 'Execution Engine', desc: 'Async agent loop managing tool calls, retries, and response synthesis.' }
            ],
            decisions: '• FastAPI chosen for native async/await handling concurrent LLM and API calls.\n• Stateless execution to allow horizontal scaling.\n• Conversation memory externalized to Redis.\n• Pydantic validation enforced between LLM output and API invocation.',
            reliability_scale: '• Exponential backoff for LLM rate limits.\n• Confirmation gates for destructive actions.\n• Idempotency keys for payment-like flows.\n• Redis-backed context for distributed scaling.',
            lessons: '• LLMs must be treated as probabilistic advisors, not decision engines.\n• Strict schema enforcement and validation layers are mandatory for production safety.'
        }
    },
    {
        id: 'medical-rag-pipeline',
        title: 'Medical Data Retrieval Pipeline',
        summary: 'High-accuracy RAG system over clinical literature',
        tags: ['RAG', 'Vector Databases', 'OpenAI'],
        icon: <FaNetworkWired size={40} color="#34d399" />,
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
        details: {
            problem: 'Medical professionals require instant, factual answers from dense clinical guidelines. Keyword search misses semantic meaning, while standard LLMs are prone to dangerous medical hallucinations.',
            overview: 'A Retrieval-Augmented Generation (RAG) architecture that grounds LLM responses strictly in retrieved medical text.\n\nQuery → Embedding → Vector Search → Context Assembly → LLM Generation → Verification.',
            components: [
                { name: 'Document Ingestor', desc: 'OCR pipeline that extracts and chunks medical PDFs while preserving table structures.' },
                { name: 'Vector Store', desc: 'Pinecone database storing high-dimensional embeddings for rapid semantic search.' },
                { name: 'RAG Generator', desc: 'LLM strictly prompted to synthesize answers only from the retrieved chunks.' }
            ],
            decisions: '• Implemented hybrid search (Dense Vector + BM25 Sparse Search) to handle highly specific medical terminology.\n• Chose a sliding window chunking strategy (e.g., 500 tokens with 50-token overlap) to preserve medical context boundaries.\n• Fully asynchronous ingestion pipeline built on Celery task queues.',
            reliability_scale: '• Pinecone Serverless scales the vector index dynamically.\n• RAGAS evaluation framework (Faithfulness, Answer Relevance) monitors generation quality.\n• Strict PII/PHI anonymization happens before any external embedding API call.',
            lessons: '• Vector similarity alone fails on exact keyword matching for drug names.\n• Grounding requires heavy prompt engineering so the LLM explicitly refuses to answer out-of-context queries.'
        }
    },
    {
        id: 'hawa-multi-agent',
        title: 'hawa.ai Ecosystem',
        summary: 'Distributed multi-agent negotiation environment',
        tags: ['Multi-Agent', 'Distributed Systems', 'WebSockets'],
        icon: <FaRobot size={40} color="#f472b6" />,
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
        details: {
            problem: 'Simulating complex economic negotiations requires isolated entities communicating in real-time. Standard sequential LLM chains cannot simulate multi-stakeholder debate or parallel reasoning.',
            overview: 'hawa.ai is an event-driven multi-agent orchestration platform.\n\nTopic Injected → Message Broker → N Agents Deliberate → Auditor Detects Consensus → Output Exported.\n\nAgents act as isolated state machines communicating over a central message bus.',
            components: [
                { name: 'Persona Configurator', desc: 'Injects dynamic system prompts (goals, constraints) into agent containers.' },
                { name: 'Message Broker', desc: 'Redis Pub/Sub routing internal deliberations between isolated agent environments.' },
                { name: 'Auditor Node', desc: 'Passive observer agent that parses the conversation stream to detect loop failures or consensus.' }
            ],
            decisions: '• Decoupled agents into isolated Docker containers communicating via gRPC/WebSockets for true parallel execution.\n• Implemented an algorithmic summarizer to compress old conversation history to prevent context window bloat.\n• Real-time streaming UI built to visualize agent internal monologues.',
            reliability_scale: '• Horizontal scaling across server farms enabled by containerized agent isolation.\n• Hardcoded "circuit breaker" deadlock detection if agents negotiate endlessly.\n• Encrypted intra-agent communication layer prohibiting external manipulation.',
            lessons: '• Agents talking to agents creates exponential token consumption; aggressive context-collapsing algorithms are critical.\n• "Auditor" constraints must be deterministic (code-based), not LLM-based, to reliably stop runaway agent loops.'
        }
    }
];

export default architectureConfig;
