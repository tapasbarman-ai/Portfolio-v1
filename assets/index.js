// Resume Direct URL
const RESUME_URL = "https://drive.google.com/file/d/1OTiuZ2yOuiOl9tajh5HMpuYVvZq5s2sJ/view?usp=sharing";

// Personal Bio & Config Data
const Ee = {
  role: "MLOps Engineer | AI Engineer | Data Scientist",
  location: "Lucknow, India 🇮🇳",
  email: "tapasb.dev@gmail.com",
  phone: "+91 7363971909",
  bio2: "Hi, Tapas here! I am a results-driven MLOps and AI Engineer pursuing M.Sc. Data Science at IIIT Lucknow. I specialize in end-to-end ML pipeline automation, LLM-powered agentic workflows, and secure DevSecOps pipelines. I love translating complex ML architectures into quantified business value.",
  links: {
    email: "tapasb.dev@gmail.com",
    phone: "+91 7363971909",
    linkedin: "https://www.linkedin.com/in/tapas-barman-2661161a0/",
    github: "https://github.com/tapasbarman-ai",
    kaggle: "https://www.kaggle.com/tapasbarman",
    resume: RESUME_URL
  }
};

// Typewriter rotating phrases focusing on LLM Eval, AI Systems, and Python Engineering
const Mp = [
  "Benchmarking LLM safety, faithfulness & hallucination with DeepEval & Ragas",
  "Architecting autonomous multi-agent systems with LangGraph & Python",
  "Engineering distributed stream processing with Apache Kafka & PyFlink",
  "Hardening production guardrails against adversarial jailbreaks & PII leakage",
  "Optimizing high-throughput Python backends and automated CI/CD gating"
];

// Explorer Files list
const Zt = [
  { id: "home", name: "home.tsx", folder: "src", lang: "TypeScript React", icon: "⚛", color: "var(--pink)" },
  { id: "about", name: "about.html", folder: "src", lang: "HTML", icon: "HTML", color: "var(--orange)" },
  { id: "projects", name: "projects.js", folder: "src", lang: "JavaScript", icon: "JS", color: "var(--yellow)" },
  { id: "experience", name: "experience.ts", folder: "src", lang: "TypeScript", icon: "TS", color: "var(--blue)" },
  { id: "contact", name: "contact.css", folder: "src", lang: "CSS", icon: "#", color: "var(--pink)" },
  { id: "skills", name: "skills.json", folder: "data", lang: "JSON", icon: "{}", color: "var(--orange)" },
  { id: "readme", name: "README.md", folder: "root", lang: "Markdown", icon: "M↓", color: "var(--blue)" },
  { id: "resume", name: "tapas_ai.pdf", folder: "root", lang: "PDF", icon: "PDF", color: "var(--red)" }
];

// Education Data
const zp = [
  {
    id: 1,
    institution: "IIIT Lucknow",
    university: "Indian Institute of Information Technology, Lucknow",
    degree: "M.Sc. in Data Science",
    minor: "Focus: Machine Learning, Big Data Systems, MLOps Pipelines",
    gpa: "CGPA: 8.05 / 10",
    period: "2024 – 2026",
    location: "Lucknow, UP",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`
  },
  {
    id: 2,
    institution: "Acharya Prafulla Chandra Roy Government College",
    university: "University of North Bengal",
    degree: "B.Sc. in Physics",
    gpa: "CGPA: 8.23 / 10",
    period: "2020 – 2023",
    location: "Siliguri, WB",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v4M12 14v4M16 14v4"/></svg>`
  }
];

// Projects Data with Clean SVG Icons
const Op = [
  {
    id: 1,
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
    accent: "#ff6fd8",
    type: "MLOps · Safety Gates · Model Governance",
    name: "Production MLOps Platform",
    desc: "Engineered an enterprise-grade automated MLOps pipeline featuring strict model validation quality gates, automated data and model drift evaluation via Evidently AI, experiment tracking via MLflow, and reproducible data versioning via DVC.",
    safety: "Embedded automated CI/CD safety & vulnerability guardrails in Jenkins: SAST code analysis (SonarQube), container CVE scanning (Trivy), secret leakage prevention (Gitleaks), and champion-challenger validation before production registry promotion.",
    tags: ["Evidently AI", "Model Governance", "SonarQube (SAST)", "Trivy (CVE)", "Gitleaks", "MLflow", "DVC", "Docker", "Jenkins"],
    link: "https://github.com/tapasbarman-ai/Bike-Demand-MLOps-CICD-Pipeline",
    period: "2025"
  },
  {
    id: 2,
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>`,
    accent: "#6c63ff",
    type: "GenAI · Multi-Agent · LLM Evaluation & Tracing",
    name: "AI Trend Monitoring System",
    desc: "Designed an autonomous multi-step LangGraph agent pipeline tracking real-time AI development signals across social feeds. Employs DistilBERT for sentiment safety filtering and Tavily for real-time web intelligence retrieval.",
    safety: "Integrated DeepEval test harnesses to continuously evaluate summary faithfulness, context relevancy, and hallucination rates. Instrumenting end-to-end LangSmith tracing ensures graph execution observability, reasoning path validation, and latency/token anomaly detection.",
    tags: ["DeepEval", "LangSmith Tracing", "Hallucination Defense", "Faithfulness Eval", "LangGraph", "Groq LLaMA", "DistilBERT", "FastAPI"],
    link: "https://github.com/tapasbarman-ai/Ai-Trend-Notifier",
    period: "2025"
  },
  {
    id: 3,
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line x1="12" y1="8" x2="12" y2="14"/><line x1="9" y1="11" x2="15" y2="11"/></svg>`,
    accent: "#4ec9b0",
    type: "GenAI · Clinical RAG · Safety Guardrails & Eval",
    name: "Multi-Agent Medical AI Platform",
    desc: "Developed a production-grade clinical assistant orchestrating PubMed medical literature, local FAISS vector embeddings, and web verification. Employs cross-encoder reranking to ensure precise context retrieval without clinical hallucinations.",
    safety: "Engineered clinical safety evaluation using the Ragas framework, benchmarking context recall, faithfulness, and answer correctness. Enforces multi-tier safety guardrails: automated medical disclaimers, PII scrubbing, scope deflection, and multi-tier LLM failover fallback.",
    tags: ["Ragas Evaluation", "Safety Guardrails", "Clinical Faithfulness", "PII Scrubbing", "Cross-Encoder", "FAISS", "LangGraph", "Docker"],
    link: "https://github.com/Tapas000/Multi-Agent-RAG-Medical-Assistant",
    demo: "https://multi-agent-medical-rag-2.onrender.com/",
    period: "2025"
  },
  {
    id: 4,
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
    accent: "#facc15",
    type: "LLM Safety · Automated Red-Teaming · Guardrails Benchmarking",
    name: "LLM Safety & Red-Teaming Suite",
    desc: "Engineered an automated red-teaming and safety benchmarking suite designed to stress-test production LLM applications against real-world adversarial attacks, prompt injection, and hallucination vulnerabilities.",
    safety: "Evaluates zero PII leakage under prompt extraction attacks, enforces strict domain scope deflection with golden test suites, and benchmarks toxicity resilience and professional composure using DeepEval and custom GEval rubrics.",
    tags: ["DeepEval", "GEval Rubrics", "Red-Teaming", "PII Leakage Defense", "Scope Deflection", "Toxicity Resilience", "Pytest", "Python"],
    link: "https://github.com/tapasbarman-ai/Portfolio-v1",
    period: "2025"
  },
  {
    id: 5,
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
    accent: "#38bdf8",
    type: "Data Engineering · Distributed Stream Processing",
    name: "Real-Time Meteorological Streaming Engine",
    desc: "Architected an event-driven stream processing pipeline ingesting high-frequency atmospheric and radiosonde telemetry. Built Kafka producers for continuous telemetry ingestion and PyFlink streaming jobs implementing event-time windowing, watermarks, and keyed stateful transformations.",
    safety: "Implemented event-time watermarking for out-of-order data resilience, schema validation on streaming events, and fault-tolerant stateful recovery across containerized Kafka & Flink clusters.",
    tags: ["Apache Kafka", "Apache Flink", "PyFlink", "Event-Time Windows", "Watermarking", "Docker Compose", "Python", "Stream Processing"],
    link: "https://github.com/tapasbarman-ai/Real-Time-Meteorological-Data-Streaming-Engine",
    period: "2025"
  },
  {
    id: 6,
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><circle cx="12" cy="12" r="2"/></svg>`,
    accent: "#a855f7",
    type: "Multimodal AI · Computer Vision · Model Benchmarking",
    name: "Doodle.ai — Multimodal Vision Game",
    desc: "Developed a real-time drawing recognition platform where users sketch on an interactive canvas and multimodal models identify drawings with low latency. Architected a multi-provider backend comparing local Ollama models with cloud vision APIs (Gemini, Groq LLaMA-Vision).",
    safety: "Benchmarked multimodal vision inference latency vs. recognition accuracy between edge/local models (Ollama) and cloud APIs (Gemini/Groq), with automated rate-limit fallbacks and input sanitization.",
    tags: ["Next.js", "TypeScript", "Multimodal Vision", "Google Gemini", "Groq LLaMA", "Ollama", "Model Benchmarking", "Tailwind CSS"],
    link: "https://github.com/tapasbarman-ai/Scribble_Ai",
    period: "2025"
  },
  {
    id: 7,
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
    accent: "#f43f5e",
    type: "Desktop Application · Calm Tech · Focus Shield",
    name: "Lumina Focus Workspace",
    desc: "Engineered a desktop productivity workspace built with React, TypeScript, and Electron, packaged for native Windows deployment. Combines customizable Pomodoro intervals (15–90 min), task estimation, focus tracking, calendar scheduling, and 7-day trend analytics.",
    safety: "Engineered a whitelisted focus shield workflow preventing digital distraction drift, local client-side data privacy with zero external tracking, and robust offline state synchronization.",
    tags: ["React", "TypeScript", "Electron", "Tailwind CSS", "Calm Tech", "Distraction Shield", "Web Audio API", "Windows Desktop"],
    link: "https://github.com/tapasbarman-ai/pomodoro",
    period: "2025"
  }
];

// Technical Capabilities & Production Stack Matrix
const _p = [
  {
    id: "llm-eval",
    group: "LLM Evaluation, Safety & Alignment",
    badge: "CORE FOCUS · EVALUATION GATES",
    accent: "#4ec9b0",
    desc: "Rigorous quantitative benchmarking, GEval alignment rubrics, zero-PII leak guardrails, and automated red-teaming for deterministic and secure generative systems.",
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4ec9b0" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>`,
    skills: [
      { name: "DeepEval & Ragas", context: "Faithfulness, Answer Relevance & Hallucination Metrics", level: "Production Standard", color: "#4ec9b0" },
      { name: "G-Eval Custom Rubrics", context: "Multi-Criteria LLM-as-a-Judge Evaluation Frameworks", level: "Core Architecture", color: "#38bdf8" },
      { name: "Adversarial Red-Teaming", context: "Automated Jailbreak, Prompt Injection & Bias Auditing", level: "Automated Gate", color: "#ef4444" },
      { name: "PII Leakage Defense", context: "Deterministic Regex & Presidio Masking Audits", level: "Zero Tolerance", color: "#facc15" },
      { name: "RLHF & SFT Verification", context: "Multi-Step Mathematical Proofs & Reasoning Goldens", level: "Expert Human Tier", color: "#ff6fd8" },
      { name: "Guardrails AI", context: "Deterministic Schema & Content Boundary Enforcers", level: "Production Deployed", color: "#22c55e" }
    ],
    tools: ["DeepEval", "Ragas", "GEval", "TruLens", "Guardrails AI", "PromptFoo", "Presidio", "OpenAI Evals", "Golden Test Suites"]
  },
  {
    id: "agentic-ai",
    group: "Agentic AI & Generative Systems",
    badge: "STATEFUL AGENTS · ORCHESTRATION",
    accent: "#ff6fd8",
    desc: "Autonomous multi-agent workflows with stateful cyclical routing, tool execution, hybrid vector search, and fine-tuned LLM backends.",
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ff6fd8" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M12 2v3m0 14v3M2 12h3m14 0h3m-3.5-6.5-2.1 2.1m-8.8 8.8-2.1 2.1m0-13 2.1 2.1m8.8 8.8 2.1 2.1"/></svg>`,
    skills: [
      { name: "LangGraph", context: "Stateful Multi-Agent Cyclic Graphs & Decision Nodes", level: "Primary Agentic", color: "#ff6fd8" },
      { name: "LangChain / LCEL", context: "Chains, Prompt Templates & Structured Pydantic Output", level: "Production Deployed", color: "#38bdf8" },
      { name: "RAG Architectures", context: "Dense + BM25 Hybrid Retrieval & Cross-Encoder Reranking", level: "Production Ready", color: "#4ec9b0" },
      { name: "FAISS & Vector Search", context: "Sub-Millisecond High-Dimensional Similarity Indexing", level: "Sub-Millisecond", color: "#facc15" },
      { name: "Hugging Face & LLaMA", context: "Transformers, Tokenizers & Local Inference Serving", level: "Deep Core", color: "#f97316" },
      { name: "LoRA & Unsloth", context: "Parameter-Efficient Fine-Tuning (PEFT) & Model Merging", level: "Fine-Tuned", color: "#a855f7" }
    ],
    tools: ["LangGraph", "LangChain", "FAISS", "Hugging Face", "LLaMA-3", "Groq LPUs", "LoRA", "QLoRA", "Unsloth", "Ollama"]
  },
  {
    id: "python-backend",
    group: "Production Python & Distributed Systems",
    badge: "HIGH THROUGHPUT · ASYNC RUNTIMES",
    accent: "#38bdf8",
    desc: "Robust backend microservices, async event loops, distributed streaming sinks, and strict typed API contracts.",
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
    skills: [
      { name: "Python 3.10+", context: "AsyncIO, Multiprocessing, Typing & Generator Pipelines", level: "Daily Primary", color: "#38bdf8" },
      { name: "FastAPI & Pydantic v2", context: "Async RESTful APIs & Strict Schema Invalidation", level: "Production Standard", color: "#4ec9b0" },
      { name: "Apache Kafka", context: "Distributed Event Streaming, Partitioning & Consumer Groups", level: "Event-Driven", color: "#facc15" },
      { name: "Apache PyFlink", context: "Real-Time Stateful Stream Telemetry & Aggregation", level: "Stateful Stream", color: "#ef4444" },
      { name: "PostgreSQL & SQLite", context: "Relational Schema Design, Query Plans & ACID Storage", level: "ACID Compliant", color: "#34d399" },
      { name: "Redis & MinIO / S3", context: "Sub-Millisecond In-Memory Caching & S3 Object Storage", level: "Distributed Cache", color: "#f97316" }
    ],
    tools: ["Python 3.10+", "FastAPI", "Pydantic v2", "Apache Kafka", "PyFlink", "PostgreSQL", "SQLite", "Redis", "MinIO / S3", "Uvicorn"]
  },
  {
    id: "mlops-infra",
    group: "MLOps, Data Pipelines & Observability",
    badge: "AUTOMATED LIFECYCLES · MONITORING",
    accent: "#34d399",
    desc: "Automated retraining DAGs, model provenance tracking, data versioning, and continuous production drift detection.",
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#34d399" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
    skills: [
      { name: "Apache Airflow", context: "Complex Scheduled ETL DAGs & Dynamic Task Mapping", level: "Production Pipeline", color: "#38bdf8" },
      { name: "MLflow Tracking", context: "Hyperparameter Logging, Artifacts & Model Registry", level: "Lifecycle Tracking", color: "#34d399" },
      { name: "DVC (Data Version Control)", context: "Git-Backed Large Dataset & Model Weights Tracking", level: "Reproducibility", color: "#22c55e" },
      { name: "Evidently AI", context: "Data Drift, Target Drift & Automated Retraining Gating", level: "Continuous Drift", color: "#a855f7" },
      { name: "Docker & Docker Compose", context: "Reproducible Multi-Container Microservice Workspaces", level: "Container Native", color: "#38bdf8" },
      { name: "Linux Systems & Bash", context: "Unix Foundations, Cron Jobs, SSH & Shell Automation", level: "Unix Foundation", color: "#facc15" }
    ],
    tools: ["Apache Airflow", "MLflow", "DVC", "Evidently AI", "Docker", "Docker Compose", "Linux / Bash", "Snowflake", "Artifact Registries"]
  },
  {
    id: "devsecops",
    group: "DevSecOps, Automated Testing & QA",
    badge: "SAST AUDITING · SECURE PIPELINES",
    accent: "#f97316",
    desc: "Automated security scanning, secret prevention, zero-breakage CI/CD pipelines, and parametrized test suites.",
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f97316" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
    skills: [
      { name: "PyTest Suite", context: "Parametrized Unit, Golden & Regression Test Suites", level: "100% Pass Standard", color: "#22c55e" },
      { name: "SonarQube (SAST)", context: "Static Code Analysis, Security Bugs & Code Smells", level: "Quality Gate", color: "#38bdf8" },
      { name: "Trivy Container Scan", context: "Container Vulnerability Assessment & CVE Patching", level: "CVE Zero-Tolerance", color: "#f97316" },
      { name: "Gitleaks", context: "Pre-Commit & CI Hardcoded Secrets Audit & Prevention", level: "Secret Defense", color: "#ef4444" },
      { name: "Jenkins & GitHub Actions", context: "Declarative Multi-Stage Automated Build & Test Pipelines", level: "Automated CI/CD", color: "#ff6fd8" },
      { name: "Git Hygiene", context: "Semantic Versioning, Interactive Rebasing & Branch Gating", level: "Production Git", color: "#facc15" }
    ],
    tools: ["PyTest", "SonarQube", "Trivy", "Gitleaks", "Jenkins", "GitHub Actions", "Coverage.py", "Pre-Commit Hooks", "Nexus OSS"]
  },
  {
    id: "vision-doc",
    group: "Computer Vision & Document AI",
    badge: "BENCHMARKED METRICS · DEEP LEARNING",
    accent: "#a855f7",
    desc: "High-throughput neural document extraction, layout understanding, structural table parsing, and error-metric evaluation.",
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a855f7" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>`,
    skills: [
      { name: "EasyOCR & GPU Acceleration", context: "3x Throughput & -18% CER on Historical Manuscripts", level: "Benchmarked", color: "#a855f7" },
      { name: "YOLO Object Detection", context: "Structural Table Layout Detection (+22% Accuracy)", level: "Custom Trained", color: "#ef4444" },
      { name: "Vision Transformers", context: "Multi-Modal Document Attention & Feature Extraction", level: "Deep Vision", color: "#ff6fd8" },
      { name: "TEDS & Error Metrics", context: "Tree Edit Distance for Tables, Character/Word Error Rates", level: "Scientific Metrics", color: "#38bdf8" },
      { name: "OpenCV & PIL", context: "Preprocessing, Contrast Normalization & Binarization", level: "Image Pipeline", color: "#34d399" },
      { name: "FastAPI Model Serving", context: "Async REST Endpoints for High-Concurrency Inference", level: "Microservice", color: "#4ec9b0" }
    ],
    tools: ["EasyOCR", "YOLOv8", "Transformers", "TEDS Metric", "OpenCV", "PIL", "PyTorch Vision", "FastAPI Serving"]
  }
];

// Complete Tooling & Infrastructure Cloud
const Dp = [
  "DeepEval", "Ragas", "G-Eval", "LangGraph", "LangChain", "Python 3.10+", "FastAPI", 
  "Pydantic v2", "PyTorch", "Hugging Face", "Apache Kafka", "Apache PyFlink", 
  "Apache Airflow", "MLflow", "DVC", "Evidently AI", "SonarQube", "Trivy", "Gitleaks", 
  "Jenkins", "Docker", "Docker Compose", "PostgreSQL", "Redis", "MinIO / S3", 
  "Snowflake", "FAISS", "LoRA", "QLoRA", "Unsloth", "EasyOCR", "YOLOv8", 
  "TEDS Metric", "PyTest", "PromptFoo", "Guardrails AI", "Presidio", "Groq LPUs", "Tavily API"
];

// Experiences Data with Highlighted Key Achievements & Metrics
const Hp = [
  {
    date: "Dec 2025 – Apr 2026",
    current: false,
    role: "MLOps Intern",
    company: "Aaizel International Technologies Private Limited",
    companyUrl: "https://www.aaizeltech.com/weather-api",
    location: "On-Site · Noida, India",
    summary: "Engineered production ETL & ML pipelines for meteorological forecasting (Climate Forte) and built the machine learning backend for open-source intelligence gathering (VidyaDristi).",
    metrics: [
      { val: "100% Automated", label: "CI/CD & Retraining" },
      { val: "Continuous", label: "Evidently AI Drift Gating" },
      { val: "Production", label: "Airflow · MLflow · S3" }
    ],
    achievements: [
      "Built an enterprise-grade ETL and ML inference pipeline for <strong>Climate Forte</strong> using Apache Airflow, handling automated data ingestion, model scoring, and Amazon S3 object storage.",
      "Automated continuous model retraining cycles and drift monitoring using <strong>MLflow, DVC, Evidently AI</strong>, and Jenkins CI/CD pipelines.",
      "Engineered the machine learning backend for <strong>VidyaDristi (OSINT)</strong>, implementing Named Entity Recognition (NER), LLM vector embeddings, FAISS similarity search, and clustering for automated entity resolution."
    ],
    tags: ["Apache Airflow", "MLflow", "DVC", "Evidently AI", "Jenkins", "FAISS", "Docker", "DevSecOps", "Python", "Amazon S3"]
  },
  {
    date: "Jul 2025 – Dec 2025",
    current: false,
    role: "Computer Vision & AI Research Intern",
    company: "Indian Institute of Technology Bombay (IIT Bombay)",
    location: "Remote",
    summary: "Engineered neural document digitization, high-speed OCR, and structural table extraction systems for Kalanjiyam, IIT Bombay's national preservation platform for ancient Siddha literature.",
    metrics: [
      { val: "3x Faster", label: "Inference Throughput" },
      { val: "-18% CER", label: "Character Error Reduction" },
      { val: "+22% Accuracy", label: "Table Structure Extraction" }
    ],
    achievements: [
      "<strong>3x Throughput Speedup & 18% CER Reduction:</strong> Replaced legacy Tesseract OCR with GPU-accelerated EasyOCR for Tamil & Sanskrit script processing on historical literature.",
      "<strong>22% Accuracy Boost in Table Extraction:</strong> Designed and trained a YOLO object detection + Transformer attention pipeline for complex ancient tabular layouts.",
      "Quantified and benchmarked neural document understanding using <strong>TEDS (Tree Edit Distance for Structured Tables)</strong>, CER, and WER metrics.",
      "Packaged deep learning inference models into production-ready <strong>FastAPI</strong> microservice endpoints with async request handling."
    ],
    tags: ["EasyOCR", "YOLO", "FastAPI", "Transformers", "Python", "TEDS Metric", "REST APIs", "Computer Vision"]
  },
  {
    date: "Jan 2025 – Jun 2025",
    current: false,
    role: "AI Trainer – Mathematics (LLM Alignment & Evaluation)",
    company: "Outlier",
    location: "Remote",
    summary: "Evaluated, audited, and aligned frontier LLM reasoning, code correctness, and multi-step mathematical derivations against expert human verification rubrics.",
    metrics: [
      { val: "Zero-Tolerance", label: "Hallucination Auditing" },
      { val: "Expert RLHF", label: "Model Alignment" },
      { val: "Proof-Level", label: "Mathematical Goldens" }
    ],
    achievements: [
      "Conducted rigorous evaluation of complex multi-step mathematical outputs, diagnosing subtle reasoning hallucinations, boundary errors, and logical inconsistencies.",
      "Authored high-accuracy step-by-step mathematical proofs and verified goldens used directly in <strong>RLHF (Reinforcement Learning from Human Feedback)</strong> and SFT pipelines.",
      "Audited model adherence to safety guidelines, domain constraints, formatting standards, and professional composure across complex prompt distributions."
    ],
    tags: ["LLM Evaluation", "Model Alignment", "RLHF", "Mathematical Reasoning", "Hallucination Audit", "Expert Feedback"]
  }
];

// State Manager
let openTabs = ["home"];
let activeFile = "home";
let currentTheme = localStorage.getItem("vscode-portfolio-theme") || "default";

// DOM References
const appGrid = document.getElementById("appGrid");
const tabsBar = document.getElementById("tabsBar");
const breadcrumbs = document.getElementById("breadcrumbs");
const terminalBody = document.getElementById("terminalBody");
const terminalInput = document.getElementById("terminalInput");
const terminalHistory = document.getElementById("terminalHistory");
const terminalPanel = document.getElementById("terminalPanel");
const editorLayout = document.getElementById("editorLayout");
const copilotPanel = document.getElementById("copilotPanel");
const copilotChat = document.getElementById("copilotChat");
const copilotInput = document.getElementById("copilotInput");
const copilotSendBtn = document.getElementById("copilotSendBtn");
const paletteOverlay = document.getElementById("paletteOverlay");
const paletteInput = document.getElementById("paletteInput");
const paletteList = document.getElementById("paletteList");
const themeOverlay = document.getElementById("themeOverlay");
const toastsContainer = document.getElementById("toastsContainer");
const typewriterText = document.getElementById("typewriterText");
const explorerSidebar = document.getElementById("explorerSidebar");
const compactView = document.getElementById("compactView");
const compactContent = document.getElementById("compactContent");
const compactTitle = document.getElementById("compactTitle");

// Initialize application on load
window.addEventListener("DOMContentLoaded", () => {
  setTheme(currentTheme);
  generateDynamicContent();
  renderTabs();
  updateBreadcrumbs();
  startTypewriter();
  setupEventListeners();
  checkViewport();
  
  // Custom cursor follower
  initCustomCursor();

  // Auto-launch guided tour on first visit
  if (!localStorage.getItem("tapas_hide_guide")) {
    setTimeout(() => {
      toggleGuide(true);
    }, 1000);
  }
});

// Window resize listener
window.addEventListener("resize", checkViewport);

function checkViewport() {
  const isMobile = window.innerWidth < 1024;
  if (isMobile) {
    compactView.classList.remove("hidden");
    appGrid.classList.add("mobile-view");
    appGrid.classList.remove("hidden");
    mirrorActiveTabToMobile();
  } else {
    compactView.classList.add("hidden");
    appGrid.classList.remove("mobile-view");
    appGrid.classList.remove("hidden");
  }
}

// Custom Cursor Implementation
function initCustomCursor() {
  const outer = document.getElementById("retro-cursor-outer");
  const inner = document.getElementById("retro-cursor-inner");
  
  let mouseX = -100, mouseY = -100;
  let outerX = -100, outerY = -100;
  
  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // inner cursor immediately follows mouse
    inner.style.left = mouseX + "px";
    inner.style.top = mouseY + "px";
    
    // Dynamic styling when hovering over interactive elements
    const hoverEl = document.elementFromPoint(mouseX, mouseY);
    if (hoverEl && (hoverEl.closest("a") || hoverEl.closest("button") || hoverEl.closest("input") || hoverEl.closest("textarea") || hoverEl.classList.contains("status-item"))) {
      outer.style.width = "30px";
      outer.style.height = "30px";
      outer.style.borderColor = "var(--green)";
      outer.style.background = "rgba(78, 201, 176, 0.08)";
      inner.style.background = "var(--green)";
      inner.style.boxShadow = "0 0 8px var(--green)";
    } else {
      outer.style.width = "40px";
      outer.style.height = "40px";
      outer.style.borderColor = "rgba(255, 255, 255, 0.55)";
      outer.style.background = "transparent";
      inner.style.background = "rgba(255, 255, 255, 0.9)";
      inner.style.boxShadow = "0 0 6px rgba(255, 255, 255, 0.5)";
    }
  });

  // Smooth lagging animation loop for the outer circle
  function animateOuterCursor() {
    outerX += (mouseX - outerX) * 0.15;
    outerY += (mouseY - outerY) * 0.15;
    
    outer.style.left = outerX + "px";
    outer.style.top = outerY + "px";
    
    requestAnimationFrame(animateOuterCursor);
  }
  animateOuterCursor();
}

// Theme Switcher State Logic
function setTheme(theme) {
  currentTheme = theme;
  localStorage.setItem("vscode-portfolio-theme", theme);
  
  if (theme === "default") {
    document.body.removeAttribute("data-theme");
  } else {
    document.body.setAttribute("data-theme", theme);
  }
  
  // Update checkbox state or status bar info
  const statusTheme = document.getElementById("statusTheme");
  if (statusTheme) {
    const selectedThemeName = document.querySelector(`.theme-option[data-theme="${theme}"]`)?.textContent || "Themes";
    statusTheme.querySelector("span").textContent = `⚙ ${selectedThemeName.split(" (")[0]}`;
  }
}

// Tab Manager Functions
function renderTabs() {
  tabsBar.innerHTML = "";
  openTabs.forEach(fileId => {
    const file = Zt.find(f => f.id === fileId);
    if (!file) return;
    
    const tabEl = document.createElement("div");
    tabEl.className = `tab ${activeFile === fileId ? "active" : ""}`;
    tabEl.setAttribute("data-file", fileId);
    
    tabEl.innerHTML = `
      <span style="color: ${file.color}">${file.icon}</span>
      <span>${file.name}</span>
      <button class="tab-close" onclick="closeTab(event, '${fileId}')">✕</button>
    `;
    
    tabEl.addEventListener("click", () => openFile(fileId));
    tabsBar.appendChild(tabEl);
  });
}

function openFile(fileId) {
  if (fileId === "resume") {
    window.open(RESUME_URL, "_blank");
    showToast("📄 Opening Tapas's resume (Google Drive)...");
    return;
  }

  activeFile = fileId;
  if (!openTabs.includes(fileId)) {
    openTabs.push(fileId);
  }
  
  // Update sidebar active selection
  document.querySelectorAll(".file-item").forEach(item => {
    if (item.getAttribute("data-file") === fileId) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  renderTabs();
  updateBreadcrumbs();
  
  // Show target page screen container
  document.querySelectorAll(".page-container").forEach(container => {
    if (container.id === `page-${fileId}`) {
      container.classList.add("active");
      
      // Trigger skills animations if the skills tab is active
      if (fileId === "skills") {
        setTimeout(animateSkills, 50);
      }
    } else {
      container.classList.remove("active");
    }
  });
  
  // Sync scroll positioning to top
  const activeContainer = document.querySelector(".editor-content");
  if (activeContainer) {
    activeContainer.scrollTop = 0;
    setTimeout(updateScrollHint, 80);
  }

  // Mirror to mobile layout
  mirrorActiveTabToMobile();
}

// Dynamic Scroll Affordance Hint Pill
function updateScrollHint() {
  const scrollPill = document.getElementById("scrollHintPill");
  const editorContent = document.querySelector(".editor-content");
  if (!scrollPill || !editorContent) return;
  
  const canScroll = editorContent.scrollHeight > editorContent.clientHeight + 60;
  const isNearTop = editorContent.scrollTop < 40;
  
  if (canScroll && isNearTop) {
    scrollPill.classList.remove("hidden");
  } else {
    scrollPill.classList.add("hidden");
  }
}

function scrollEditorDown() {
  const editorContent = document.querySelector(".editor-content");
  if (editorContent) {
    editorContent.scrollBy({ top: 380, behavior: "smooth" });
  }
}
window.scrollEditorDown = scrollEditorDown;
window.updateScrollHint = updateScrollHint;

function closeTab(event, fileId) {
  event.stopPropagation();
  openTabs = openTabs.filter(id => id !== fileId);
  
  if (openTabs.length === 0) {
    openTabs = ["home"];
    activeFile = "home";
  } else if (activeFile === fileId) {
    activeFile = openTabs[openTabs.length - 1];
  }
  
  openFile(activeFile);
}

function updateBreadcrumbs() {
  const file = Zt.find(f => f.id === activeFile);
  if (!file) return;
  breadcrumbs.innerHTML = `
    <span>tapas-barman</span>
    <span class="breadcrumb-separator">›</span>
    <span>${file.folder}</span>
    <span class="breadcrumb-separator">›</span>
    <span class="text-vscode-bright">${file.name}</span>
  `;
}

function mirrorActiveTabToMobile() {
  const file = Zt.find(f => f.id === activeFile);
  if (!file) return;
  
  compactTitle.textContent = file.name;
  
  // Clone active content div to mobile shell
  const targetPage = document.getElementById(`page-${activeFile}`);
  if (targetPage) {
    compactContent.innerHTML = targetPage.innerHTML;
    // Re-trigger skill progress bars on compact view
    if (activeFile === "skills") {
      setTimeout(() => {
        compactContent.querySelectorAll(".skill-bar-inner").forEach(bar => {
          const pct = bar.parentElement.nextElementSibling.textContent.replace('%', '');
          bar.style.width = pct + "%";
        });
      }, 50);
    }
  }
}

// Typewriter Quotes Rotator
function startTypewriter() {
  let quoteIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let delay = 100;
  
  function tick() {
    const fullText = Mp[quoteIdx];
    let currentText = fullText.substring(0, charIdx);
    
    typewriterText.innerHTML = `const status = "${currentText}"<span class="text-vscode-pink animate-blink">|</span>`;
    
    if (isDeleting) {
      charIdx--;
      delay = 40;
    } else {
      charIdx++;
      delay = 80;
    }
    
    if (!isDeleting && charIdx === fullText.length + 1) {
      isDeleting = true;
      delay = 2000; // Pause at full string
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      quoteIdx = (quoteIdx + 1) % Mp.length;
      delay = 400; // Pause at blank
    }
    
    setTimeout(tick, delay);
  }
  
  tick();
}

// Generate HTML Content Dynamically from data blocks
function generateDynamicContent() {
  // 1. Projects Grid
  const projectsGrid = document.getElementById("projectsGrid");
  projectsGrid.innerHTML = Op.map(proj => `
    <div class="card project-card" style="--card-accent: ${proj.accent}; display: flex; flex-direction: column;">
      <div style="margin-bottom: 12px; color: ${proj.accent}; display: flex; align-items: center;">${proj.icon}</div>
      <div class="flex justify-between items-center mb-1">
        <h4 class="font-bold text-vscode-bright text-md">${proj.name}</h4>
        <span class="text-[10px] text-vscode-dim">${proj.period}</span>
      </div>
      <p class="text-[10px] text-vscode-green mb-2" style="font-weight: 500;">${proj.type}</p>
      <p class="text-xs text-vscode-dim leading-relaxed mb-3 flex-1">${proj.desc}</p>
      ${proj.safety ? `
        <div style="background: rgba(78, 201, 176, 0.04); border-left: 2.5px solid var(--green); padding: 8px 10px; border-radius: 3px; margin-bottom: 12px;">
          <span style="font-size: 10px; font-weight: 700; color: var(--green); text-transform: uppercase; letter-spacing: 0.06em; display: flex; align-items: center; gap: 5px; margin-bottom: 3px;">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            Safety &amp; Evaluation Basis
          </span>
          <p style="font-size: 11px; color: var(--text); line-height: 1.45; margin: 0;">${proj.safety}</p>
        </div>
      ` : ''}
      <div class="badge-row mb-4">
        ${proj.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
      <div class="flex gap-2">
        <a class="btn btn-secondary py-1 px-3 text-[11px]" href="${proj.link}" target="_blank" style="display: inline-flex; align-items: center; gap: 5px;">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
          GitHub
        </a>
        ${proj.demo ? `<a class="btn btn-primary py-1 px-3 text-[11px]" href="${proj.demo}" target="_blank" style="display: inline-flex; align-items: center; gap: 5px;">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          Live Demo
        </a>` : ''}
      </div>
    </div>
  `).join('');

  // 2. Experience Timeline with Highlighted Achievements & Metrics
  const experienceTimeline = document.getElementById("experienceTimeline");
  experienceTimeline.innerHTML = Hp.map(exp => `
    <div class="timeline-item ${exp.current ? 'current' : ''}">
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <div class="timeline-card-header">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <h4 class="timeline-role">${exp.role}</h4>
              <span class="timeline-location-badge">${exp.location}</span>
            </div>
            <span class="timeline-company">
              ${exp.companyUrl ? `<a href="${exp.companyUrl}" target="_blank">${exp.company} ↗</a>` : `@ ${exp.company}`}
            </span>
          </div>
          <span class="timeline-date-badge">${exp.date}</span>
        </div>

        <p class="timeline-summary">${exp.summary}</p>

        ${exp.metrics ? `
          <div class="timeline-metrics-row">
            ${exp.metrics.map(m => `
              <div class="timeline-metric-pill">
                <span class="metric-val">${m.val}</span>
                <span class="metric-lbl">${m.label}</span>
              </div>
            `).join('')}
          </div>
        ` : ''}

        ${exp.achievements ? `
          <div class="timeline-achievements-box">
            <div class="achievements-box-title">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              Key Achievements &amp; Quantified Deliverables
            </div>
            <ul class="achievements-list">
              ${exp.achievements.map(a => `<li>${a}</li>`).join('')}
            </ul>
          </div>
        ` : ''}

        <div class="badge-row">
          ${exp.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');

  // 3. Social Media Contacts
  const socialsGrid = document.getElementById("socialsGrid");
  const platformColors = {
    email: { color: "#4ec9b0", bg: "rgba(78, 201, 176, 0.08)" },
    phone: { color: "#facc15", bg: "rgba(250, 204, 21, 0.08)" },
    linkedin: { color: "#0077b5", bg: "rgba(0, 119, 181, 0.08)" },
    github: { color: "#e6edf3", bg: "rgba(230, 237, 243, 0.08)" },
    kaggle: { color: "#20beff", bg: "rgba(32, 190, 255, 0.08)" },
    resume: { color: "#ef4444", bg: "rgba(239, 68, 68, 0.08)" }
  };
  
  socialsGrid.innerHTML = Object.entries(Ee.links).map(([platform, url]) => {
    if (platform === "support" || platform === "upi") return '';
    const style = platformColors[platform] || { color: "var(--text)", bg: "rgba(255, 255, 255, 0.03)" };
    
    return `
      <a class="social-btn" href="${platform === 'email' ? 'mailto:' + url : (platform === 'phone' ? 'tel:' + url.replace(/\s+/g, '') : url)}" target="_blank" 
         style="--accent-hover-color: ${style.color}; background: ${style.bg};">
        <span class="uppercase tracking-widest font-bold text-[10px]">${platform}</span>
      </a>
    `;
  }).join('');

  // 4. Skills Section — Capabilities Matrix
  const skillsGrid = document.getElementById("skillsGrid");
  if (skillsGrid) {
    skillsGrid.innerHTML = _p.map(group => `
      <div class="skill-domain-card" data-domain="${group.id}" style="--card-accent: ${group.accent}">
        <div class="skill-domain-header">
          <div class="skill-domain-title-wrap">
            <div class="skill-domain-title">
              <span class="skill-domain-icon">${group.icon}</span>
              <span>${group.group}</span>
            </div>
          </div>
          <span class="skill-domain-badge">${group.badge}</span>
        </div>

        <p class="skill-domain-desc">${group.desc}</p>

        <div class="skill-capsules-grid">
          ${group.skills.map(s => `
            <div class="skill-capsule">
              <div class="skill-capsule-left">
                <span class="skill-capsule-name">
                  <span style="color: ${s.color}; font-size: 8px;">●</span>
                  ${s.name}
                </span>
                <span class="skill-capsule-context">${s.context}</span>
              </div>
              <span class="skill-capsule-level" style="color: ${s.color}; border-color: ${s.color}40; background: ${s.color}10;">${s.level}</span>
            </div>
          `).join('')}
        </div>

        <div class="skill-domain-tools-row">
          ${group.tools.map(t => `<span class="skill-tool-tag" onclick="askCopilot('How does Tapas use ${t} in production?')" title="Ask Copilot about ${t}">${t}</span>`).join('')}
        </div>
      </div>
    `).join('');
  }

  // Setup Skills Category Filtering
  const filterBtns = document.querySelectorAll(".skills-filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const targetFilter = btn.getAttribute("data-filter");
      const cards = document.querySelectorAll(".skill-domain-card");
      cards.forEach(card => {
        if (targetFilter === "all" || card.getAttribute("data-domain") === targetFilter) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      });
    });
  });

  // Complete Tooling & Infrastructure Cloud with interactive Copilot triggers
  const alsoFamiliarBadges = document.getElementById("alsoFamiliarBadges");
  if (alsoFamiliarBadges) {
    alsoFamiliarBadges.innerHTML = Dp.map(skill => `
      <span class="badge" style="cursor: pointer;" onclick="askCopilot('What is Tapas\\'s background and experience with ${skill}?')" title="Click to ask Copilot about ${skill}">
        ${skill}
      </span>
    `).join('');
  }
}

// Animate Skills Domain Cards Entrance
function animateSkills() {
  const cards = document.querySelectorAll(".skill-domain-card");
  cards.forEach((card, idx) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(8px)";
    setTimeout(() => {
      card.style.transition = "opacity 0.35s ease, transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, idx * 60);
  });
}

// Sidebars & Dialog controls
function toggleCopilot(open) {
  const isCurrentlyOpen = appGrid.classList.contains("copilot-open");
  const targetState = open !== undefined ? open : !isCurrentlyOpen;
  const floatContainer = document.getElementById("floatingCopilotContainer");
  
  if (targetState) {
    appGrid.classList.add("copilot-open");
    document.getElementById("actCopilot").classList.add("active");
    if (floatContainer) floatContainer.style.display = "none";
    // scroll to bottom
    setTimeout(() => copilotChat.scrollTop = copilotChat.scrollHeight, 100);
  } else {
    appGrid.classList.remove("copilot-open");
    document.getElementById("actCopilot").classList.remove("active");
    if (floatContainer) floatContainer.style.display = "flex";
  }
}
window.toggleCopilot = toggleCopilot;

function toggleGuide(open) {
  const guideOverlay = document.getElementById("guideOverlay");
  if (!guideOverlay) return;
  const isCurrentlyOpen = !guideOverlay.classList.contains("hidden");
  const targetState = open !== undefined ? open : !isCurrentlyOpen;
  
  if (targetState) {
    guideOverlay.classList.remove("hidden");
  } else {
    guideOverlay.classList.add("hidden");
    const dontShow = document.getElementById("guideDontShowAgain");
    if (dontShow && dontShow.checked) {
      localStorage.setItem("tapas_hide_guide", "true");
    }
  }
}
window.toggleGuide = toggleGuide;

function closeCopilotTooltip(e) {
  if (e) e.stopPropagation();
  const tooltip = document.getElementById("floatingCopilotTooltip");
  if (tooltip) tooltip.style.display = "none";
}
window.closeCopilotTooltip = closeCopilotTooltip;

function askCopilot(question) {
  toggleCopilot(true);
  copilotInput.value = question;
  handleCopilotMessage(question);
}
window.askCopilot = askCopilot;

function toggleTerminal(open) {
  const isCurrentlyOpen = editorLayout.classList.contains("term-open");
  const targetState = open !== undefined ? open : !isCurrentlyOpen;
  
  if (targetState) {
    editorLayout.classList.add("term-open");
    terminalInput.focus();
    terminalBody.scrollTop = terminalBody.scrollHeight;
  } else {
    editorLayout.classList.remove("term-open");
  }
}

function toggleThemeDialog(open) {
  if (open) {
    themeOverlay.classList.remove("hidden");
  } else {
    themeOverlay.classList.add("hidden");
  }
}

function togglePaletteOverlay(open) {
  if (open) {
    paletteOverlay.classList.remove("hidden");
    paletteInput.value = "";
    paletteInput.focus();
    renderPaletteResults("");
  } else {
    paletteOverlay.classList.add("hidden");
  }
}

// Toast System
function showToast(message) {
  const id = Date.now();
  const toastEl = document.createElement("div");
  toastEl.className = "toast";
  toastEl.id = `toast-${id}`;
  toastEl.innerHTML = `
    <span>${message}</span>
    <button class="toast-close" onclick="this.parentElement.remove()">✕</button>
  `;
  toastsContainer.appendChild(toastEl);
  
  setTimeout(() => {
    const el = document.getElementById(`toast-${id}`);
    if (el) el.remove();
  }, 4000);
}

// Command Palette Search Results
const paletteOptions = [
  { name: "home.tsx", id: "home", desc: "Go to landing page view", shortcut: "src" },
  { name: "about.html", id: "about", desc: "Open biography and education", shortcut: "src" },
  { name: "projects.js", id: "projects", desc: "List shipped engineering projects", shortcut: "src" },
  { name: "experience.ts", id: "experience", desc: "View career timelines", shortcut: "src" },
  { name: "contact.css", id: "contact", desc: "Social handles & contact form", shortcut: "src" },
  { name: "skills.json", id: "skills", desc: "Show comprehensive tech stacks", shortcut: "data" },
  { name: "README.md", id: "readme", desc: "Display repository overview", shortcut: "root" },
  { name: "tapas_ai.pdf", id: "resume", desc: "Open Tapas's Resume (Google Drive PDF)", shortcut: "root" },
  { name: "Tapas' Copilot", id: "copilot", desc: "Toggle AI side assistant panel", shortcut: "tool" },
  { name: "Portfolio Tour & Guide", id: "guide", desc: "Open guided portfolio walkthrough", shortcut: "help" }
];

function renderPaletteResults(query) {
  const filtered = paletteOptions.filter(opt => 
    opt.name.toLowerCase().includes(query.toLowerCase()) || 
    opt.desc.toLowerCase().includes(query.toLowerCase())
  );
  
  if (filtered.length === 0) {
    paletteList.innerHTML = `<div class="p-3 text-xs text-vscode-dim">No matching results</div>`;
    return;
  }
  
  paletteList.innerHTML = filtered.map((item, idx) => `
    <div class="palette-item ${idx === 0 ? 'active' : ''}" data-id="${item.id}">
      <div>
        <div class="font-medium">${item.name}</div>
        <div class="text-[11px] text-vscode-dim">${item.desc}</div>
      </div>
      <div class="palette-item-shortcut">${item.shortcut}</div>
    </div>
  `).join("");
  
  paletteList.querySelectorAll(".palette-item").forEach(item => {
    item.addEventListener("click", () => {
      const id = item.getAttribute("data-id");
      executePaletteAction(id);
    });
  });
}

function executePaletteAction(id) {
  togglePaletteOverlay(false);
  if (id === "copilot") {
    toggleCopilot(true);
  } else if (id === "guide") {
    toggleGuide(true);
  } else {
    openFile(id);
  }
}

// Simulated Terminal Engine
let terminalHist = [];
let histIdx = -1;

function runTerminalCmd(rawCmd) {
  const line = document.createElement("div");
  line.className = "terminal-line";
  line.innerHTML = `<span class="terminal-prompt">guest@tapasbarman:~$</span> <span class="text-vscode-bright">${rawCmd}</span>`;
  terminalHistory.appendChild(line);
  
  const cmd = rawCmd.trim();
  if (cmd) {
    terminalHist.unshift(cmd);
    histIdx = -1;
  }
  
  const output = document.createElement("div");
  output.className = "terminal-line";
  
  const args = cmd.split(" ");
  const baseCmd = args[0].toLowerCase();
  
  switch(baseCmd) {
    case "help":
      output.innerHTML = `
        <span class="text-vscode-green">Available commands:</span><br>
        &nbsp;&nbsp;ls&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;— List files in directories<br>
        &nbsp;&nbsp;cat &lt;file&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;— Read / open a file in the editor<br>
        &nbsp;&nbsp;whoami&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;— Display active terminal session user<br>
        &nbsp;&nbsp;socials&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;— List professional links<br>
        &nbsp;&nbsp;theme &lt;name&gt;&nbsp;&nbsp;&nbsp;— Change current colors theme (default, tokyo-night, catppuccin, nord, rose-pine, gruvbox)<br>
        &nbsp;&nbsp;clear&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;— Clear screen console history<br>
        &nbsp;&nbsp;date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;— Show current date & time<br>
        &nbsp;&nbsp;echo [text]&nbsp;&nbsp;&nbsp;&nbsp;— Print input text to standard output
      `;
      break;
    case "ls":
      output.innerHTML = `
        &lt;dir&gt;&nbsp;&nbsp;src/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(home.tsx, about.html, projects.js, experience.ts, contact.css)<br>
        &lt;dir&gt;&nbsp;&nbsp;data/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(skills.json)<br>
        &lt;file&gt;&nbsp;README.md<br>
        &lt;file&gt;&nbsp;tapas_ai.pdf
      `;
      break;
    case "cat":
    case "open":
      if (!args[1]) {
        output.innerHTML = `<span class="text-vscode-red">Error: missing file argument. Usage: cat &lt;filename&gt;</span>`;
      } else {
        const target = args[1].toLowerCase().replace("src/", "").replace("data/", "");
        const matched = Zt.find(f => f.name.toLowerCase() === target || f.id === target);
        if (matched) {
          openFile(matched.id);
          output.innerHTML = `<span class="text-vscode-green">Opened ${matched.name} in the editor view.</span>`;
        } else {
          output.innerHTML = `<span class="text-vscode-red">cat: ${args[1]}: File not found.</span>`;
        }
      }
      break;
    case "whoami":
      output.innerHTML = `guest_visitor@tapasb.dev — secure session`;
      break;
    case "socials":
      output.innerHTML = `
        LinkedIn:&nbsp;&nbsp;${Ee.links.linkedin}<br>
        GitHub:&nbsp;&nbsp;&nbsp;&nbsp;${Ee.links.github}<br>
        Kaggle:&nbsp;&nbsp;&nbsp;&nbsp;${Ee.links.kaggle}
      `;
      break;
    case "theme":
      if (!args[1]) {
        output.innerHTML = `<span class="text-vscode-yellow">Usage: theme &lt;default | tokyo-night | catppuccin | nord | rose-pine | gruvbox&gt;</span>`;
      } else {
        const themeId = args[1].toLowerCase();
        const themeList = ["default", "tokyo-night", "catppuccin", "nord", "rose-pine", "gruvbox"];
        if (themeList.includes(themeId)) {
          setTheme(themeId);
          output.innerHTML = `<span class="text-vscode-green">Theme switched successfully to ${themeId}.</span>`;
          showToast(`🎨 Theme set to ${themeId}`);
        } else {
          output.innerHTML = `<span class="text-vscode-red">Theme '${args[1]}' not found. Run 'help' or check options.</span>`;
        }
      }
      break;
    case "clear":
      terminalHistory.innerHTML = "";
      return;
    case "date":
      output.innerHTML = new Date().toString();
      break;
    case "echo":
      output.innerHTML = args.slice(1).join(" ") || " ";
      break;
    default:
      if (cmd.trim() !== "") {
        output.innerHTML = `<span class="text-vscode-red">bash: command not found: ${baseCmd}. Type 'help' for command directory.</span>`;
      }
  }
  
  if (output.innerHTML) {
    terminalHistory.appendChild(output);
  }
  terminalBody.scrollTop = terminalBody.scrollHeight;
}

// Copilot Chatbot Engine
let copilotHistory = [];

// Local fallback replies for key terms
const copilotKnowledgeBase = [
  {
    keys: ["phone", "mobile", "number", "call", "whatsapp", "cell", "telephone"],
    reply: "You can reach Tapas directly by phone or WhatsApp at **+91 7363971909** or via email at **tapasb.dev@gmail.com**."
  },
  {
    keys: ["contact", "email", "phone", "reach", "hire", "collab", "linkedin", "message", "connect", "mail"],
    reply: "You can reach Tapas via email at **tapasb.dev@gmail.com** or phone at **+91 7363971909**.\n\nYou can also connect on **LinkedIn** (linkedin.com/in/tapas-barman-2661161a0) or send a message directly through the **contact.css** tab."
  },
  {
    keys: ["gpa", "grades", "score", "sgpa", "cgpa"],
    reply: "Tapas achieved an **8.05 CGPA** at IIIT Lucknow in M.Sc. Data Science and an **8.23 CGPA** in B.Sc. Physics at APC Roy Govt College."
  },
  {
    keys: ["education", "college", "school", "university", "degree", "graduate", "iiit", "lucknow"],
    reply: "He is completing his M.Sc. in Data Science at **IIIT Lucknow** (2024–2026) with a CGPA of **8.05/10**. He also holds a B.Sc. in Physics with a CGPA of **8.23/10** from APC Roy Government College (NBU)."
  },
  {
    keys: ["project", "projects", "shipped", "portfolio", "build", "work done"],
    reply: "Tapas has built several production-grade engineering and AI systems:\n\n* **Production MLOps Platform**: Automated CI/CD pipeline with Evidently AI drift gating, SonarQube SAST, Trivy CVE scanning, and Gitleaks.\n* **Real-Time Meteorological Streaming Engine**: High-frequency telemetry pipeline using Apache Kafka and PyFlink with event-time watermarking.\n* **Doodle.ai**: Real-time vision game benchmarking multimodal model inference (local Ollama vs cloud Gemini/Groq).\n* **Multi-Agent Medical AI Platform**: Clinical RAG evaluated with Ragas, equipped with medical safety guardrails and PII scrubbing.\n* **AI Trend Monitoring System**: Autonomous LangGraph pipeline with DeepEval faithfulness and hallucination evaluation.\n* **LLM Safety & Red-Teaming Suite**: Automated evaluation suite stress-testing PII leakage, prompt injection, and toxicity.\n* **Lumina Focus Workspace**: Calm tech desktop application packaged with Electron featuring a focus shield workflow.\n\nOpen the **projects.js** tab to view live demos and code!"
  },
  {
    keys: ["pomodoro", "lumina", "focus", "desktop", "electron"],
    reply: "**Lumina Focus** is a calm-tech desktop productivity workspace built with React, TypeScript, Tailwind CSS, and Electron. It features customizable Pomodoro intervals (15–90 min), task estimation, a whitelisted multi-website focus shield, calendar scheduling, and 7-day trend analytics packaged for Windows desktop."
  },
  {
    keys: ["doodle", "scribble", "drawing", "vision", "game"],
    reply: "**Doodle.ai** is an interactive AI-powered drawing recognition game. Users draw sketches on a live canvas while multimodal vision models (local Ollama vs. cloud Gemini and Groq LLaMA-Vision) identify drawings in real-time, serving as an interactive vision model benchmark."
  },
  {
    keys: ["kafka", "flink", "streaming", "meteorological", "radiosonde", "telemetry"],
    reply: "The **Real-Time Meteorological Streaming Engine** is a distributed data engineering pipeline built with Apache Kafka, PyFlink, and Docker Compose. It ingests atmospheric and radiosonde telemetry with event-time watermarking, windowed aggregations, and fault-tolerant stateful recovery."
  },
  {
    keys: ["safety", "guardrail", "guardrails", "eval", "evaluation", "deepeval", "ragas", "red team", "redteam", "drift", "leakage"],
    reply: "Evaluation and safety are core pillars of Tapas's engineering practice:\n\n* **GenAI / LLM Evaluation**: Leverages **DeepEval** and **Ragas** to quantitatively benchmark hallucination rates, summary faithfulness, context precision, and toxicity resilience.\n* **Safety Guardrails**: Implements PII redaction, domain scope deflection, prompt injection defenses, and medical disclaimer enforcement.\n* **MLOps Governance**: Embeds **Evidently AI** drift monitoring, SonarQube static security checks, Trivy container vulnerability scans, and Gitleaks into automated CI/CD gating."
  },
  {
    keys: ["mlops", "governance", "jenkins", "trivy", "sonarqube", "dvc", "mlflow"],
    reply: "His MLOps platform establishes secure model governance: it integrates DVC data versioning, MLflow experiment tracking, and Jenkins CI/CD pipelines packed with DevSecOps tools like SonarQube (SAST), Trivy (container scan), and Gitleaks (secret detection)."
  },
  {
    keys: ["trend", "notifier", "langgraph", "agent"],
    reply: "The AI Trend Notifier is a multi-agent system built with LangGraph and LangChain. It autonomously monitors Twitter/Reddit for AI signals, runs DistilBERT sentiment classification, searches the web via Tavily, and drafts LLM newsletters via LLaMA on Groq."
  },
  {
    keys: ["medical", "chatbot", "rag", "health", "pubmed", "faiss"],
    reply: "The Medical AI Chatbot is an intelligent multi-agent chatbot built with LangGraph, LangChain, and Flask. It dynamically orchestrates FAISS vector databases, Europe PMC/PubMed research literature, and Tavily web searches to deliver aggregated clinical information."
  },
  {
    keys: ["skills", "stack", "languages", "python", "airflow", "docker"],
    reply: "His technical stack includes Python, SQL, Bash/Linux, Docker, MLflow, DVC, Apache Airflow, Jenkins, SonarQube, Trivy, Gitleaks, LangGraph, and PyTorch. Check the **skills.json** tab in the sidebar for the full list!"
  },
  {
    keys: ["experience", "job", "work", "intern", "aaizel", "iit", "bombay", "outlier", "trainer", "ai trainer"],
    reply: "Tapas has worked in multiple roles:\n1. **MLOps Intern** at Aaizel International Technologies (Dec 2025 – Mar 2026)\n2. **AI Software Research Intern** at IIT Bombay (Jul 2025 – Oct 2025)\n3. **AI Trainer – Mathematics** at Outlier (Jan 2025 – Jun 2025)"
  },
  {
    keys: ["achievements", "rank", "iit-jam", "jam"],
    reply: "He secured **All India Rank (AIR) 1200** in the competitive IIT-JAM 2024 Physics exam. He's also solved **200+ LeetCode problems** and is an active practitioner on Kaggle."
  },
  {
    keys: ["source", "repo", "code", "download", "clone", "github"],
    reply: "This portfolio website repository is publicly available on GitHub at **https://github.com/tapasbarman-ai/Portfolio-v1.git**. You can clone and inspect the full SPA codebase!"
  },
  {
    keys: ["how are you", "sup", "how's it going", "hello", "hi", "hey"],
    reply: "Hello! 👋 I am Tapas's AI Copilot. Ask me anything about his MLOps pipelines, AI projects, skills, or background!"
  },
  {
    keys: ["who is", "who are you", "about tapas", "tell me about yourself", "bio", "background", "summary"],
    reply: "Tapas Barman is an MLOps & AI Engineer pursuing M.Sc. Data Science at IIIT Lucknow. He has professional experience at IIT Bombay, Aaizel Technologies, and Outlier, specializing in automated ML pipelines, secure CI/CD, multi-agent AI systems, and LLM evaluation/alignment."
  }
];

function getLocalCopilotResponse(query) {
  const q = query.toLowerCase();
  for (const item of copilotKnowledgeBase) {
    if (item.keys.some(key => q.includes(key))) {
      return item.reply;
    }
  }
  return `I am Tapas' portfolio assistant. I can answer questions regarding his MLOps pipelines, AI projects, education at IIIT Lucknow, or work experience at Aaizel, IIT Bombay, and Outlier. For direct inquiries, email him at **tapasb.dev@gmail.com**.`;
}

function formatMarkdown(text) {
  if (!text) return "";
  
  let s = text.replace(/\r\n/g, "\n");
  
  // Code blocks
  s = s.replace(/```([a-z]*)\n([\s\S]*?)```/gi, '<pre style="background:var(--bg); border:1px solid var(--border); padding:8px 10px; border-radius:4px; margin:6px 0; overflow-x:auto;"><code>$2</code></pre>');

  // Inline code
  s = s.replace(/`([^`]+)`/g, '<code>$1</code>');

  // Bold-italic
  s = s.replace(/\*\*\*([^*]+)\*\*\*/g, '<strong><em>$1</em></strong>');

  // Bold
  s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');

  // Italic
  s = s.replace(/\*([^*]+)\*/g, '<em>$1</em>');

  // Markdown links: [text](url)
  s = s.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

  // Plain URLs (not preceded by href=" or >)
  s = s.replace(/(^|[^"'>])(https?:\/\/[^\s<)]+)/g, '$1<a href="$2" target="_blank" rel="noopener noreferrer">$2</a>');

  // Numbered list items
  s = s.replace(/^(\d+)\.\s+(.+)$/gm, '<li style="margin-left: 16px; list-style-type: decimal;">$2</li>');

  // Bullet list items
  s = s.replace(/^[-*]\s+(.+)$/gm, '<li style="margin-left: 16px; list-style-type: disc;">$1</li>');

  // Spacing and linebreaks
  s = s.replace(/\n\n+/g, '<br><br>');
  s = s.replace(/\n/g, '<br>');

  return s;
}

async function handleCopilotMessage(userText) {
  // 1. Render User Message
  appendChatMessage("user", userText);
  copilotInput.value = "";
  
  // 2. Render Typing indicator
  const typingEl = appendChatMessage("assistant", `<span class="animate-blink">...</span>`);
  copilotChat.scrollTop = copilotChat.scrollHeight;
  
  let matchedReply = "";

  // 3. Try live backend Gemini LLM API first
  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: userText, history: copilotHistory })
    });
    if (res.ok) {
      const data = await res.json();
      if (data && data.response) {
        matchedReply = data.response;
        copilotHistory.push({ role: "user", parts: [userText] });
        copilotHistory.push({ role: "model", parts: [matchedReply] });
      }
    }
  } catch (err) {
    // Backend API unavailable; gracefully fallback to client-side knowledge base
  }

  // 4. Fallback to smart local knowledge base if backend didn't respond
  if (!matchedReply) {
    matchedReply = getLocalCopilotResponse(userText);
  }

  // 5. Stream response with rich Markdown formatting
  typingEl.innerHTML = "";
  let currentWordIdx = 0;
  const words = matchedReply.split(" ");
  let accumulated = "";
  
  function streamWords() {
    if (currentWordIdx < words.length) {
      accumulated += (currentWordIdx === 0 ? "" : " ") + words[currentWordIdx];
      currentWordIdx++;
      typingEl.innerHTML = formatMarkdown(accumulated);
      copilotChat.scrollTop = copilotChat.scrollHeight;
      setTimeout(streamWords, 20);
    } else {
      typingEl.innerHTML = formatMarkdown(matchedReply);
      copilotChat.scrollTop = copilotChat.scrollHeight;
    }
  }
  streamWords();
}

function appendChatMessage(sender, text) {
  const msgEl = document.createElement("div");
  msgEl.className = `chat-msg ${sender}`;
  msgEl.innerHTML = text;
  copilotChat.appendChild(msgEl);
  copilotChat.scrollTop = copilotChat.scrollHeight;
  return msgEl;
}

// Event Listeners Setup
function setupEventListeners() {
  // Explorer Sidebar items click
  document.querySelectorAll(".file-item").forEach(item => {
    item.addEventListener("click", () => {
      const fileId = item.getAttribute("data-file");
      openFile(fileId);
    });
  });

  // Top Menu Buttons click
  document.querySelectorAll(".menu-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const menu = btn.getAttribute("data-menu");
      if (menu === "terminal") {
        toggleTerminal();
      } else if (menu === "view") {
        const isClosed = appGrid.classList.contains("sidebar-closed");
        if (isClosed) {
          appGrid.classList.remove("sidebar-closed");
          document.getElementById("actExplorer").classList.add("active");
        } else {
          appGrid.classList.add("sidebar-closed");
          document.getElementById("actExplorer").classList.remove("active");
        }
      } else if (menu === "run") {
        toggleTerminal(true);
        runTerminalCmd("help");
      } else if (menu === "help") {
        toggleGuide(true);
      } else {
        showToast(`📂 Menu '${menu}' clicked. (Demo only)`);
      }
    });
  });

  // Sidebar Toggles
  document.getElementById("actExplorer").addEventListener("click", () => {
    const isClosed = appGrid.classList.contains("sidebar-closed");
    if (isClosed) {
      appGrid.classList.remove("sidebar-closed");
      document.getElementById("actExplorer").classList.add("active");
    } else {
      appGrid.classList.add("sidebar-closed");
      document.getElementById("actExplorer").classList.remove("active");
    }
  });

  document.getElementById("actSearch").addEventListener("click", () => {
    togglePaletteOverlay(true);
  });
  
  document.getElementById("actSourceControl").addEventListener("click", () => {
    showToast("🌿 Git branch is clean. No unstaged changes.");
  });

  document.getElementById("actCopilot").addEventListener("click", () => {
    toggleCopilot();
  });

  document.getElementById("actSettings").addEventListener("click", () => {
    toggleThemeDialog(true);
  });

  // Status Bar Theme click
  document.getElementById("statusTheme").addEventListener("click", () => {
    toggleThemeDialog(true);
  });

  // Theme selector modal list clicks
  document.querySelectorAll(".theme-option").forEach(option => {
    option.addEventListener("click", () => {
      const themeId = option.getAttribute("data-theme");
      setTheme(themeId);
      toggleThemeDialog(false);
      showToast(`🎨 Theme switched to ${themeId}`);
    });
  });

  // Command Palette key overrides
  window.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "p") {
      e.preventDefault();
      togglePaletteOverlay(true);
    }
    if (e.key === "Escape") {
      togglePaletteOverlay(false);
      toggleThemeDialog(false);
    }
    // Ctrl+Shift+C toggles Copilot
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === "c") {
      e.preventDefault();
      toggleCopilot();
    }
    // Ctrl+` (Control + Backtick) toggles terminal
    if ((e.ctrlKey || e.metaKey) && (e.key === "`" || e.key === "~" || e.code === "Backquote")) {
      e.preventDefault();
      toggleTerminal();
    }
  });

  // Palette input typing
  paletteInput.addEventListener("input", (e) => {
    renderPaletteResults(e.target.value);
  });

  // Close modals on overlay clicking
  paletteOverlay.addEventListener("click", (e) => {
    if (e.target === paletteOverlay) togglePaletteOverlay(false);
  });
  themeOverlay.addEventListener("click", (e) => {
    if (e.target === themeOverlay) toggleThemeDialog(false);
  });

  // Terminal Input Execute Command
  terminalInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const cmd = terminalInput.value;
      runTerminalCmd(cmd);
      terminalInput.value = "";
    }
    // Up arrow selects last command
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (terminalHist.length > 0) {
        histIdx = Math.min(histIdx + 1, terminalHist.length - 1);
        terminalInput.value = terminalHist[histIdx];
      }
    }
    // Down arrow returns blank
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (histIdx > 0) {
        histIdx--;
        terminalInput.value = terminalHist[histIdx];
      } else {
        histIdx = -1;
        terminalInput.value = "";
      }
    }
  });

  // Copilot message triggers
  copilotSendBtn.addEventListener("click", () => {
    const text = copilotInput.value;
    if (text.trim()) handleCopilotMessage(text);
  });
  copilotInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const text = copilotInput.value;
      if (text.trim()) handleCopilotMessage(text);
    }
  });

  // Contact Form Submission Simulation
  const contactForm = document.getElementById("contactForm");
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector("button[type='submit']");
    const oldText = btn.textContent;
    btn.disabled = true;
    btn.textContent = "Sending...";
    
    // Simulate sending time delay
    setTimeout(() => {
      btn.disabled = false;
      btn.textContent = oldText;
      showToast("✉ Message sent successfully! I will reply soon.");
      contactForm.reset();
    }, 1500);
  });

  // Mobile Topbar ToggleExplorer
  document.getElementById("compactSidebarToggle").addEventListener("click", () => {
    const hidden = explorerSidebar.style.display === "flex";
    if (hidden) {
      explorerSidebar.style.display = "none";
    } else {
      explorerSidebar.style.display = "flex";
      explorerSidebar.style.position = "fixed";
      explorerSidebar.style.top = "44px";
      explorerSidebar.style.bottom = "22px";
      explorerSidebar.style.left = "0";
      explorerSidebar.style.zIndex = "999";
      explorerSidebar.style.width = "220px";
      
      // Close side explorer when file selected in mobile view
      const items = explorerSidebar.querySelectorAll(".file-item");
      const closeSidebarMobile = () => {
        explorerSidebar.style.display = "none";
        items.forEach(el => el.removeEventListener("click", closeSidebarMobile));
      };
      items.forEach(el => el.addEventListener("click", closeSidebarMobile));
    }
  });
  
  // Mobile search palette click
  document.getElementById("compactSearchBtn").addEventListener("click", () => {
    togglePaletteOverlay(true);
  });
  // Mobile copilot sidebar toggle
  document.getElementById("compactCopilotBtn").addEventListener("click", () => {
    const cpOpen = appGrid.classList.contains("copilot-open");
    toggleCopilot(!cpOpen);
    if (!cpOpen) {
      copilotPanel.style.display = "flex";
      copilotPanel.style.position = "fixed";
      copilotPanel.style.inset = "44px 0 22px 0";
      copilotPanel.style.zIndex = "999";
      copilotPanel.style.width = "100%";
      
      const copCloseBtn = copilotPanel.querySelector(".copilot-close");
      const closeCopMobile = () => {
        copilotPanel.style.display = "none";
        appGrid.classList.remove("copilot-open");
        copCloseBtn.removeEventListener("click", closeCopMobile);
      };
      copCloseBtn.addEventListener("click", closeCopMobile);
    } else {
      copilotPanel.style.display = "none";
    }
  });

  // Editor content scroll affordance listeners
  const editorContent = document.querySelector(".editor-content");
  if (editorContent) {
    editorContent.addEventListener("scroll", updateScrollHint, { passive: true });
    window.addEventListener("resize", updateScrollHint, { passive: true });
    setTimeout(updateScrollHint, 250);
  }
}
