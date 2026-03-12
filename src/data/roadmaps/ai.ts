import { createNode, createOrganicEdge, RoadmapData } from '../types';

const aiNodes = [
  // ---------------------------------------------------------
  // TIER 1: THE FOUNDATION (START HERE)
  // ---------------------------------------------------------
  createNode(
    'a-start', '🌱 Seed: Python & Math for AI', 'Basics', 
    'The seed of artificial intelligence. Python coding and mathematical theory.', 
    'Before building neural networks, you must know how to code in Python and understand the math that allows models to learn.', 
    ['Python Syntax & OOP', 'Linear Algebra (Vectors, Matrices)', 'Calculus (Derivatives, Gradients)', 'Probability & Statistics'], 
    ['Python', 'Jupyter Notebook'], 
    ['PCEP (Python)'], 
    ['roadmap.sh/machine-learning', '3Blue1Brown (Math)', 'Mathematics for Machine Learning']
  ),
  createNode(
    'a-data-eng', '🌿 Sprout: Data Engineering Basics', 'Basics', 
    'Sprouting data pipelines. Building the pipelines that feed AI models.', 
    'AI needs massive amounts of data. Learn how to extract, transform, and load (ETL) data, and master SQL.', 
    ['SQL & Relational Databases', 'Data Wrangling (Pandas, NumPy)', 'ETL/ELT Pipelines', 'Data Warehousing (Snowflake, BigQuery)'], 
    ['PostgreSQL', 'Pandas', 'Snowflake', 'dbt'], 
    ['Google Data Analytics Certificate'], 
    ['roadmap.sh/data-engineer', 'Data Engineering Zoomcamp']
  ),
  createNode(
    'a-ml', '🪴 Roots: Classical Machine Learning', 'Core', 
    'The roots of learning. Teaching computers to learn from data without explicit programming.', 
    'Learn classical ML algorithms before jumping into deep learning. These are often faster, cheaper, and more interpretable.', 
    ['Supervised Learning (Regression, Classification)', 'Unsupervised Learning (Clustering, PCA)', 'Model Evaluation (Cross-validation)', 'Feature Engineering'], 
    ['Scikit-Learn', 'XGBoost', 'LightGBM'], 
    [], 
    ['roadmap.sh/machine-learning', 'Andrew Ng ML Course (Coursera)']
  ),
  createNode(
    'a-dl', '🪵 Trunk: Deep Learning Fundamentals', 'Advanced', 
    'The sturdy trunk of modern AI. Using multi-layered artificial neural networks.', 
    'This is where modern AI begins. Learn how to build and train deep neural networks using backpropagation and gradient descent.', 
    ['Artificial Neural Networks (ANNs)', 'Backpropagation & Gradient Descent', 'Activation Functions (ReLU, Sigmoid)', 'Optimization Algorithms (Adam, SGD)'], 
    ['PyTorch', 'TensorFlow', 'Keras'], 
    ['TensorFlow Developer Certificate'], 
    ['DeepLearning.AI', 'Fast.ai', 'Andrej Karpathy (YouTube)']
  ),

  // ---------------------------------------------------------
  // TIER 2: PATH DIVERGENCE (CHOOSE YOUR SPECIALIZATION)
  // ---------------------------------------------------------

  // --- PATH A: AI ENGINEERING & AGENTS (THE MODERN LLM PATH) ---
  createNode(
    'a-prompt', '🌸 Bloom: Prompt Engineering & Vibe Coding', 'Specialization', 
    'Blooming into natural language. Mastering communication with Large Language Models.', 
    'Learn how to guide LLMs effectively. This includes traditional prompt engineering, using CLI tools like Claude Code, and the new paradigm of "Vibe Coding" (prompt-driven development).', 
    ['Zero-shot & Few-shot Prompting', 'Chain of Thought (CoT) & ReAct', 'Vibe Coding (Natural Language Programming)', 'AI-Assisted Coding (Claude Code, Cursor)'], 
    ['Claude Code', 'Cursor', 'OpenAI Playground'], 
    [], 
    ['roadmap.sh/prompt-engineering', 'roadmap.sh/vibe-coding', 'roadmap.sh/claude-code']
  ),
  createNode(
    'a-llm', '🍯 Nectar: Applied AI Engineering (LLMs & RAG)', 'Advanced', 
    'The sweet nectar of applied AI. Building applications powered by Large Language Models.', 
    'Go beyond prompting. Learn how to integrate LLMs into apps, build Retrieval-Augmented Generation (RAG) pipelines, and use Vector Databases.', 
    ['LLM APIs (OpenAI, Anthropic)', 'Retrieval-Augmented Generation (RAG)', 'Vector Databases & Embeddings', 'Fine-Tuning (LoRA, QLoRA)'], 
    ['LangChain', 'LlamaIndex', 'Pinecone', 'Hugging Face'], 
    [], 
    ['roadmap.sh/ai-engineer', 'DeepLearning.AI LLM Courses']
  ),
  createNode(
    'a-agents', '🕸️ Spiderweb: Autonomous AI Agents', 'Expert', 
    'A spiderweb of autonomy. Building AI systems that can plan, use tools, and act independently.', 
    'The cutting edge of AI. Creating agents that have memory, can browse the web, execute code, and collaborate in multi-agent systems.', 
    ['Agentic Workflows (ReAct)', 'Tool Calling & Function Calling', 'Short-term & Long-term Memory', 'Multi-Agent Systems (CrewAI, AutoGen)'], 
    ['CrewAI', 'AutoGen', 'LangGraph'], 
    [], 
    ['roadmap.sh/ai-agents', 'Harrison Chase (LangChain) Tutorials']
  ),

  // --- PATH B: MLOPS & ADVANCED DATA ENGINEERING ---
  createNode(
    'a-de-adv', '🍄 Mycelium: Advanced Data Engineering', 'Specialization', 
    'The vast mycelium of big data. Scaling data infrastructure for enterprise AI.', 
    'Handling massive streams of data in real-time and orchestrating complex data workflows.', 
    ['Big Data Processing (Apache Spark)', 'Stream Processing (Kafka, Flink)', 'Data Orchestration (Airflow, Dagster)', 'Data Lakes & Lakehouses'], 
    ['Apache Spark', 'Apache Kafka', 'Apache Airflow', 'Databricks'], 
    ['AWS Certified Data Analytics'], 
    ['roadmap.sh/data-engineer', 'Designing Data-Intensive Applications']
  ),
  createNode(
    'a-mlops', '🕸️ Spiderweb: MLOps & Model Deployment', 'Expert', 
    'A spiderweb of deployment. Taking ML models from research to production reliably.', 
    'A model is useless if it only lives on your laptop. Learn how to deploy, scale, and monitor AI models in the real world.', 
    ['Model Tracking & Registry (MLflow)', 'Containerization (Docker, K8s)', 'Model Serving (FastAPI, vLLM, Triton)', 'CI/CD for Machine Learning', 'Model Monitoring & Data Drift'], 
    ['MLflow', 'Docker', 'Kubernetes', 'FastAPI', 'Weights & Biases'], 
    ['AWS Certified Machine Learning - Specialty'], 
    ['roadmap.sh/mlops', 'Made With ML (MLOps Course)']
  ),

  // --- PATH C: AI SECURITY & RED TEAMING ---
  createNode(
    'a-redteam', '🦅 Predator Defense: AI Red Teaming & Security', 'Expert', 
    'Predator defense for AI. Finding vulnerabilities in AI models and securing them.', 
    'As AI becomes ubiquitous, securing it is critical. Learn how to attack and defend LLMs and ML pipelines.', 
    ['Prompt Injection (Direct/Indirect)', 'Jailbreaking & Bypassing Guardrails', 'Data Poisoning & Backdoors', 'Model Inversion & Extraction', 'Securing RAG Pipelines'], 
    ['Promptfoo', 'Garak', 'Microsoft PyRIT'], 
    ['Certified AI Security Specialist (CAISS)'], 
    ['roadmap.sh/ai-red-teaming', 'OWASP Top 10 for LLMs', 'MITRE ATLAS']
  ),

  // ---------------------------------------------------------
  // TIER 3: THE END GOALS
  // ---------------------------------------------------------
  createNode(
    'a-end-ai', '🌳 Canopy: Principal AI Engineer / Agent Architect', 'Expert', 
    'The canopy of AI architecture. Designing complex, autonomous AI systems.', 
    'You design enterprise-grade AI applications, orchestrate multi-agent swarms, and push the boundaries of applied AI.', 
    ['Enterprise AI Architecture', 'Agentic System Design', 'Advanced RAG Optimization'], 
    ['LangGraph', 'CrewAI', 'Enterprise Cloud'], 
    [], 
    ['Real-world Experience']
  ),
  createNode(
    'a-end-mlops', '🌳 Canopy: Lead MLOps / Data Engineer', 'Expert', 
    'The canopy of AI infrastructure. Building the infrastructure that powers global AI.', 
    'You design robust, scalable AI pipelines, deploy massive LLMs into production, and ensure models remain accurate over time.', 
    ['System Design for ML', 'Distributed Training', 'Inference Optimization (Quantization, TensorRT)', 'AI Infrastructure'], 
    ['PyTorch Distributed', 'Ray', 'NVIDIA TensorRT'], 
    ['Google Cloud Professional Machine Learning Engineer'], 
    ['Real-world Experience', 'Designing Machine Learning Systems (Book)']
  ),
  createNode(
    'a-end-sec', '🌳 Canopy: Principal AI Security Engineer', 'Expert', 
    'The canopy of AI security. Leading the defense and red teaming of enterprise AI systems.', 
    'You are the ultimate authority on securing AI models, designing guardrails, and leading AI Red Team engagements.', 
    ['AI Security Architecture', 'Enterprise AI Governance', 'Advanced Threat Modeling for ML'], 
    ['Python', 'PyTorch', 'Enterprise AI Platforms'], 
    [], 
    ['Real-world AI Security Experience']
  )
];

const aiEdges = [
  // Foundations
  createOrganicEdge('a-start', 'a-data-eng'),
  createOrganicEdge('a-data-eng', 'a-ml'),
  createOrganicEdge('a-ml', 'a-dl'),

  // Branching to Paths
  createOrganicEdge('a-dl', 'a-prompt'),   // To AI Engineering & Agents
  createOrganicEdge('a-dl', 'a-de-adv'),   // To MLOps & Data Engineering
  createOrganicEdge('a-dl', 'a-redteam'),  // To AI Security & Red Teaming

  // AI Engineering & Agents Path
  createOrganicEdge('a-prompt', 'a-llm'),
  createOrganicEdge('a-llm', 'a-agents'),
  createOrganicEdge('a-agents', 'a-end-ai'),

  // MLOps & Data Engineering Path
  createOrganicEdge('a-de-adv', 'a-mlops'),
  createOrganicEdge('a-mlops', 'a-end-mlops'),

  // AI Security Path
  createOrganicEdge('a-redteam', 'a-end-sec'),
];

export const aiRoadmap: RoadmapData = {
  id: 'ai',
  title: 'Artificial Intelligence',
  description: 'A comprehensive guide featuring distinct paths for AI Engineering & Agents, MLOps & Data Engineering, and AI Red Teaming with organic growth metaphors.',
  nodes: aiNodes,
  edges: aiEdges,
};
