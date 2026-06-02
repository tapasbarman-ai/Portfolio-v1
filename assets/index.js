// Personal Bio & Config Data
const Ee = {
  role: "MLOps Engineer | AI Engineer | Data Scientist",
  location: "Lucknow, India 🇮🇳",
  email: "tapasb.dev@gmail.com",
  bio2: "Hi, Tapas here! I am a results-driven MLOps and AI Engineer pursuing M.Sc. Data Science at IIIT Lucknow. I specialize in end-to-end ML pipeline automation, LLM-powered agentic workflows, and secure DevSecOps pipelines. I love translating complex ML architectures into quantified business value.",
  links: {
    email: "tapasb.dev@gmail.com",
    linkedin: "https://www.linkedin.com/in/tapas-barman-2661161a0/",
    github: "https://github.com/tapasbarman-ai",
    kaggle: "https://www.kaggle.com/tapasbarman"
  }
};

// Typewriter rotating phrases
const Mp = [
  "Orchestrating production ML pipelines 🚀",
  "Automating secure CI/CD build chains 🛡️",
  "Designing LLM agentic systems 🧠",
  "Quantifying real-world ML business value 📈",
  "Always learning, always shipping ✨"
];

// Explorer Files list
const Zt = [
  { id: "home", name: "home.tsx", folder: "src", lang: "TypeScript React", icon: "⚛", color: "var(--pink)" },
  { id: "about", name: "about.html", folder: "src", lang: "HTML", icon: "HTML", color: "var(--orange)" },
  { id: "projects", name: "projects.js", folder: "src", lang: "JavaScript", icon: "JS", color: "var(--yellow)" },
  { id: "experience", name: "experience.ts", folder: "src", lang: "TypeScript", icon: "TS", color: "var(--blue)" },
  { id: "enterprise_projects", name: "enterprise_projects.md", folder: "src", lang: "Markdown", icon: "M↓", color: "var(--blue)" },
  { id: "contact", name: "contact.css", folder: "src", lang: "CSS", icon: "#", color: "var(--pink)" },
  { id: "skills", name: "skills.json", folder: "data", lang: "JSON", icon: "{}", color: "var(--orange)" },
  { id: "readme", name: "README.md", folder: "root", lang: "Markdown", icon: "M↓", color: "var(--blue)" }
];

// Education Data
const zp = [
  {
    id: 1,
    institution: "IIIT Lucknow",
    university: "Indian Institute of Information Technology, Lucknow",
    degree: "M.Sc. in Data Science",
    minor: "Focus: Machine Learning, Big Data Systems, MLOps Pipelines",
    gpa: "SGPA: 8.85 / 10",
    period: "2024 – 2026",
    location: "Lucknow, UP",
    icon: "🎓"
  },
  {
    id: 2,
    institution: "Acharya Prafulla Chandra Roy Government College",
    university: "University of North Bengal",
    degree: "B.Sc. in Physics",
    gpa: "CGPA: 8.23 / 10",
    period: "2020 – 2023",
    location: "Siliguri, WB",
    icon: "🏫"
  }
];

// Projects Data
const Op = [
  {
    id: 0,
    icon: "💨",
    accent: "#ff9d4b",
    type: "Production ML · Physics-Informed Forecasting",
    name: "Wind DSM Optimizer",
    desc: "Built a physics-informed ML forecasting pipeline for a 75 MW wind plant (integrated into <a href='https://www.aaizeltech.com/climateforte' target='_blank' style='color: var(--blue); text-decoration: underline; font-weight: 500;'>Climate Forte</a> — see case study in <a href='#' onclick=\"openFile('enterprise_projects'); return false;\" style='color: var(--pink); text-decoration: underline; font-weight: 500;'>enterprise_projects.md</a>) generating 96-block (15-min) day-ahead generation schedules. Reduced DSM penalty liability by 95% (24.8L to 1.3L per cycle), projecting annual savings of 1.41 Cr. Automated inference via Apache Airflow DAGs served through FastAPI.",
    tags: ["Python", "XGBoost", "FastAPI", "Apache Airflow", "MLflow", "Docker", "Pandas"],
    link: "https://github.com/tapasbarman-ai/Wind-DSM",
    demo: "https://www.aaizeltech.com/climateforte",
    period: "2025"
  },
  {
    id: 1,
    icon: "🛡️",
    accent: "#ff6fd8",
    type: "MLOps · Secure CI/CD · Governance",
    name: "Production MLOps Platform",
    desc: "Engineered an end-to-end MLOps platform covering data versioning (DVC), experiment tracking (MLflow), containerized inference, and champion-challenger promotion. Embedded production-grade quality gates in Jenkins CI/CD: data drift analysis (Evidently AI), static analysis (SonarQube), container vulnerability scanning (Trivy), and Gitleaks secret detection.",
    tags: ["Jenkins", "MLflow", "DVC", "Docker", "Evidently AI", "SonarQube", "Trivy", "Gitleaks"],
    link: "https://github.com/tapasbarman-ai/Bike-Demand-MLOps-CICD-Pipeline",
    period: "2025"
  },
  {
    id: 2,
    icon: "🧠",
    accent: "#6c63ff",
    type: "GenAI · Multi-Agent · Autonomous Monitoring",
    name: "AI Trend Notifier",
    desc: "Designed a multi-agent autonomous trend signals monitoring pipeline using LangGraph. Ingests signals from Twitter and Reddit, applies DistilBERT-based sentiment classification, enriches context using Tavily web search, and synthesizes structured summaries using LLaMA via Groq. Features a Streamlit frontend and SQLite backend.",
    tags: ["LangGraph", "LangChain", "Groq LLaMA", "Tavily API", "DistilBERT", "Streamlit", "FastAPI"],
    link: "https://github.com/tapasbarman-ai/Ai-Trend-Notifier",
    period: "2025"
  },
  {
    id: 3,
    icon: "🏥",
    accent: "#4ec9b0",
    type: "GenAI · Multi-Agent · Medical RAG",
    name: "Medical AI Chatbot",
    desc: "Developed an intelligent multi-agent medical chatbot utilizing LangGraph. Orchestrates PubMed clinical databases, local FAISS vector databases, and Tavily web searches to deliver synthesised health responses. Includes LLM fallback (70B/8B Groq), cache optimizations, and automated medical disclaimer guardrails.",
    tags: ["LangGraph", "LangChain", "Flask", "FAISS", "Groq API", "Tavily API", "Python", "Docker"],
    link: "https://github.com/Tapas000/Multi-Agent-RAG-Medical-Assistant",
    demo: "https://multi-agent-medical-rag-2.onrender.com/",
    period: "2025"
  }
];

// Skills Data
const _p = [
  {
    group: "Languages & Core Systems",
    items: [
      { name: "Python", pct: 92, color: "#ff6fd8" },
      { name: "SQL", pct: 85, color: "#facc15" },
      { name: "Bash / Shell", pct: 80, color: "#38bdf8" },
      { name: "Linux Systems", pct: 85, color: "#22c55e" },
      { name: "Git & Versioning", pct: 90, color: "#f97316" }
    ]
  },
  {
    group: "MLOps & Data Engineering",
    items: [
      { name: "MLflow", pct: 88, color: "#34d399" },
      { name: "DVC (Data Version Control)", pct: 85, color: "#22c55e" },
      { name: "Apache Airflow", pct: 82, color: "#38bdf8" },
      { name: "Apache Kafka", pct: 75, color: "#fbbf24" },
      { name: "Evidently AI (Monitoring)", pct: 80, color: "#a855f7" },
      { name: "Docker & Compose", pct: 88, color: "#38bdf8" }
    ]
  },
  {
    group: "CI/CD & DevSecOps",
    items: [
      { name: "Jenkins Pipelines", pct: 84, color: "#ef4444" },
      { name: "GitHub Actions", pct: 86, color: "#6366f1" },
      { name: "SonarQube (SAST)", pct: 80, color: "#38bdf8" },
      { name: "Trivy (Container Scan)", pct: 82, color: "#f97316" },
      { name: "Gitleaks (Secrets)", pct: 85, color: "#22c55e" }
    ]
  },
  {
    group: "Generative AI & Agentic NLP",
    items: [
      { name: "LangChain / LangGraph", pct: 85, color: "#34d399" },
      { name: "RAG Pipelines", pct: 88, color: "#38bdf8" },
      { name: "FAISS Vector Search", pct: 84, color: "#6366f1" },
      { name: "Hugging Face / LLaMA", pct: 86, color: "#f97316" }
    ]
  },
  {
    group: "Model Training & Tuning",
    items: [
      { name: "PyTorch", pct: 84, color: "#ef4444" },
      { name: "Scikit-learn", pct: 90, color: "#facc15" },
      { name: "XGBoost", pct: 88, color: "#38bdf8" },
      { name: "LoRA / QLoRA / Unsloth", pct: 80, color: "#a855f7" }
    ]
  }
];

// Additional familiar tools
const Dp = ["Apache Kafka", "Snowflake", "MinIO / S3", "Tavily API", "Groq API", "LoRA", "QLoRA", "Unsloth", "Model Quantisation", "YOLO", "EasyOCR", "Evidently AI", "SonarQube", "Trivy", "Gitleaks", "Nexus OSS", "SQLite", "TEDS", "WER/CER Metrics"];

// Experiences Data
const Hp = [
  {
    date: "Dec 2025 - Present",
    current: true,
    role: "MLOps Engineer Intern",
    company: "Aaizel International Technologies Pvt. Ltd.",
    location: "On-Site",
    desc: "Architected ETL & ML inference pipelines for <a href='https://www.aaizeltech.com/climateforte' target='_blank' style='color: var(--blue); text-decoration: underline; font-weight: 500;'>Climate Forte</a> (75 MW wind platform — see case study in <a href='#' onclick=\"openFile('enterprise_projects'); return false;\" style='color: var(--pink); text-decoration: underline; font-weight: 500;'>enterprise_projects.md</a>) using Apache Airflow and MinIO/S3. Implemented full ML lifecycle: MLflow, DVC, Evidently AI drift checks, and Jenkins CI/CD with champion-challenger deployment. Built OSINT backend for VidyaDristi using NER, embeddings, and FAISS. Secured pipeline using SonarQube, Trivy, Gitleaks, and Nexus.",
    tags: ["Apache Airflow", "MLflow", "DVC", "Evidently AI", "Jenkins", "FAISS", "Docker", "DevSecOps"]
  },
  {
    date: "Jul 2025 - Oct 2025",
    current: false,
    role: "AI Software Research Intern",
    company: "Indian Institute of Technology Bombay (IIT Bombay)",
    location: "Remote",
    desc: "Engineered Tamil & Sanskrit OCR systems for Kalanjiyam, IIT Bombay's ancient Siddha literature preservation platform. Replaced Tesseract with EasyOCR (3x throughput, 18% CER reduction). Designed a YOLO + Transformer table extraction pipeline (22% accuracy boost), integrated via FastAPI REST endpoints.",
    tags: ["EasyOCR", "YOLO", "FastAPI", "Transformers", "Python", "OCR Metrics", "REST APIs"]
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
});

// Window resize listener
window.addEventListener("resize", checkViewport);

function checkViewport() {
  const isMobile = window.innerWidth < 1024;
  if (isMobile) {
    compactView.classList.remove("hidden");
    appGrid.classList.add("hidden");
    mirrorActiveTabToMobile();
  } else {
    compactView.classList.add("hidden");
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
    window.open("Resume.pdf", "_blank");
    showToast("📄 opening resume PDF...");
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
  if (activeContainer) activeContainer.scrollTop = 0;

  // Mirror to mobile layout
  mirrorActiveTabToMobile();
}

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
      <div style="font-size: 24px; margin-bottom: 8px;">${proj.icon}</div>
      <div class="flex justify-between items-center mb-1">
        <h4 class="font-bold text-vscode-bright text-md">${proj.name}</h4>
        <span class="text-[10px] text-vscode-dim">${proj.period}</span>
      </div>
      <p class="text-[10px] text-vscode-green mb-2" style="font-weight: 500;">${proj.type}</p>
      <p class="text-xs text-vscode-dim leading-relaxed mb-4 flex-1">${proj.desc}</p>
      <div class="badge-row mb-4">
        ${proj.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
      <div class="flex gap-2">
        <a class="btn btn-secondary py-1 px-3 text-[11px]" href="${proj.link}" target="_blank">🔗 GitHub</a>
        ${proj.demo ? `<a class="btn btn-primary py-1 px-3 text-[11px]" href="${proj.demo}" target="_blank">🚀 Demo</a>` : ''}
      </div>
    </div>
  `).join('');

  // 2. Experience Timeline
  const experienceTimeline = document.getElementById("experienceTimeline");
  experienceTimeline.innerHTML = Hp.map(exp => `
    <div class="timeline-item ${exp.current ? 'current' : ''}">
      <div class="timeline-dot"></div>
      <span class="text-xs text-vscode-dim tracking-wide" style="display: block; margin-bottom: 4px;">${exp.date}</span>
      <h4 class="font-display font-extrabold text-lg text-vscode-bright mb-1">${exp.role}</h4>
      <span class="text-sm text-vscode-blue" style="font-weight: 500;">@ ${exp.company}</span>
      <p class="text-xs text-vscode-dim leading-relaxed mt-2 mb-3">${exp.desc}</p>
      <div class="badge-row">
        ${exp.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
    </div>
  `).join('');

  // 3. Social Media Contacts
  const socialsGrid = document.getElementById("socialsGrid");
  const platformColors = {
    email: { color: "#4ec9b0", bg: "rgba(78, 201, 176, 0.08)" },
    linkedin: { color: "#0077b5", bg: "rgba(0, 119, 181, 0.08)" },
    github: { color: "#e6edf3", bg: "rgba(230, 237, 243, 0.08)" },
    kaggle: { color: "#20beff", bg: "rgba(32, 190, 255, 0.08)" }
  };
  
  socialsGrid.innerHTML = Object.entries(Ee.links).map(([platform, url]) => {
    if (platform === "support" || platform === "upi") return '';
    const style = platformColors[platform] || { color: "var(--text)", bg: "rgba(255, 255, 255, 0.03)" };
    
    return `
      <a class="social-btn" href="${platform === 'email' ? 'mailto:' + url : url}" target="_blank" 
         style="--accent-hover-color: ${style.color}; background: ${style.bg};">
        <span class="uppercase tracking-widest font-bold text-[10px]">${platform}</span>
      </a>
    `;
  }).join('');

  // 4. Skills Section
  const skillsGrid = document.getElementById("skillsGrid");
  skillsGrid.innerHTML = _p.map(group => `
    <div class="card">
      <h3 class="text-xs uppercase tracking-widest text-vscode-yellow mb-3 pb-1" style="border-bottom: 1.5px solid var(--border)">${group.group}</h3>
      <div style="display: flex; flex-direction: column;">
        ${group.items.map(skill => `
          <div class="skill-item">
            <span class="skill-name text-vscode-dim">${skill.name}</span>
            <div class="skill-bar-outer">
              <div class="skill-bar-inner" style="background: ${skill.color}" data-pct="${skill.pct}"></div>
            </div>
            <span class="skill-pct" style="color: ${skill.color}">${skill.pct}%</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  // Familiar skills badges
  const alsoFamiliarBadges = document.getElementById("alsoFamiliarBadges");
  alsoFamiliarBadges.innerHTML = Dp.map(skill => `
    <span class="badge">${skill}</span>
  `).join('');
}

// Animate Skills Bar Fill
function animateSkills() {
  document.querySelectorAll(".skill-bar-inner").forEach(bar => {
    const targetPct = bar.getAttribute("data-pct");
    bar.style.width = targetPct + "%";
  });
}

// Sidebars & Dialog controls
function toggleCopilot(open) {
  const isCurrentlyOpen = appGrid.classList.contains("copilot-open");
  const targetState = open !== undefined ? open : !isCurrentlyOpen;
  
  if (targetState) {
    appGrid.classList.add("copilot-open");
    document.getElementById("actCopilot").classList.add("active");
    // scroll to bottom
    setTimeout(() => copilotChat.scrollTop = copilotChat.scrollHeight, 100);
  } else {
    appGrid.classList.remove("copilot-open");
    document.getElementById("actCopilot").classList.remove("active");
  }
}

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
  { name: "enterprise_projects.md", id: "enterprise_projects", desc: "AaizelTech enterprise projects (Weather API & Radiosonde)", shortcut: "src" },
  { name: "contact.css", id: "contact", desc: "Social handles & contact form", shortcut: "src" },
  { name: "skills.json", id: "skills", desc: "Show comprehensive tech stacks", shortcut: "data" },
  { name: "README.md", id: "readme", desc: "Display repository overview", shortcut: "root" },
  { name: "Resume.pdf", id: "resume", desc: "Download PDF resume", shortcut: "root" },
  { name: "Tapas' Copilot", id: "copilot", desc: "Toggle AI side assistant panel", shortcut: "tool" }
];

function renderPaletteResults(query) {
  const filtered = paletteOptions.filter(opt => 
    opt.name.toLowerCase().includes(query.toLowerCase()) || 
    opt.desc.toLowerCase().includes(query.toLowerCase())
  );
  
  paletteList.innerHTML = filtered.map((opt, idx) => `
    <div class="palette-item ${idx === 0 ? 'active' : ''}" data-id="${opt.id}">
      <div>
        <span style="font-weight:bold;">${opt.name}</span>
        <span style="color:var(--dim); font-size:10px; margin-left: 10px;">${opt.desc}</span>
      </div>
      <span class="palette-item-shortcut">${opt.shortcut}</span>
    </div>
  `).join('');
  
  // click navigation logic
  document.querySelectorAll(".palette-item").forEach(item => {
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
        &lt;dir&gt;&nbsp;&nbsp;src/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(home.tsx, about.html, projects.js, experience.ts, enterprise_projects.md, contact.css)<br>
        &lt;dir&gt;&nbsp;&nbsp;data/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(skills.json)<br>
        &lt;file&gt;&nbsp;README.md<br>
        &lt;file&gt;&nbsp;Resume.pdf
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

// Simulated Copilot Chatbot Engine
// Maintains GenZ phrases deck to prevent consecutive repeats
const genZDeck = [
  "she ate and left no crumbs 💅",
  "understood the assignment 💯",
  "it's giving backend lead energy",
  "main character energy 🚀",
  "we don't miss 🎯",
  "the pipeline is her 🐍",
  "era unlocked ✨",
  "rent free 🧠",
  "not a drill 🚨",
  "slay tbh 💅"
];
let genZIndex = 0;

function getGenZPhrase() {
  const phrase = genZDeck[genZIndex];
  genZIndex = (genZIndex + 1) % genZDeck.length;
  return phrase;
}

// Local mock replies for key terms matching her system prompt content
const copilotKnowledgeBase = [
  {
    keys: ["who", "about", "bio", "tapas", "barman"],
    reply: "Tapas Barman is an MLOps & AI Engineer pursuing M.Sc. Data Science at IIIT Lucknow. He has production experience at IIT Bombay and Aaizel Technologies, specializing in automated ML pipelines, secure CI/CD, and multi-agent AI systems."
  },
  {
    keys: ["education", "college", "school", "university", "degree", "graduate", "iiit", "lucknow"],
    reply: "He is completing his M.Sc. in Data Science at **IIIT Lucknow** (2024–2026) with an SGPA of **8.85/10**. He also holds a B.Sc. in Physics with a CGPA of **8.23/10** from APC Roy Government College (NBU)."
  },
  {
    keys: ["gpa", "grades", "score", "sgpa", "cgpa"],
    reply: "Tapas achieved an **8.85 SGPA** at IIIT Lucknow in M.Sc. Data Science and an **8.23 CGPA** in B.Sc. Physics at APC Roy Govt College."
  },
  {
    keys: ["projects", "shipped", "portfolio", "build"],
    reply: "He has built several high-impact MLOps and GenAI systems: **Wind DSM Optimizer** (a forecasting platform saving ~1.41 Cr annually), a **Secure Production MLOps Platform** with Jenkins/SonarQube, an autonomous **AI Trend Notifier** (LangGraph), and an intelligent multi-agent **Medical AI Chatbot** combining RAG and PubMed."
  },
  {
    keys: ["wind", "dsm", "climate forte", "forecasting"],
    reply: "The Wind DSM Optimizer is a physics-informed ML forecasting platform for a 75 MW wind plant. It uses XGBoost and NOAA GFS weather forecasts via Airflow DAGs, reducing grid penalty liability by 95% (24.8L to 1.3L per cycle) and saving ~1.41 Cr annually."
  },
  {
    keys: ["mlops", "governance", "jenkins", "trivy", "sonarqube"],
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
    keys: ["experience", "job", "work", "intern", "aaizel", "iit", "bombay"],
    reply: "Tapas works as an MLOps Engineer Intern at **Aaizel International Technologies** (Dec 2025–Present) and previously worked as an AI Software Research Intern at **IIT Bombay** (Jul 2025–Oct 2025) engineering Indic OCR subsystems."
  },
  {
    keys: ["contact", "email", "reach", "hire", "collab", "linkedin", "message"],
    reply: "You can reach Tapas via email at **tapasb.dev@gmail.com** or phone at **+91 7363971909**. You can also connect on **LinkedIn** (linkedin.com/in/tapas-barman-2661161a0) or drop a message directly through the **contact.css** form."
  },
  {
    keys: ["achievements", "rank", "iit-jam", "jam"],
    reply: "He secured **All India Rank (AIR) 1200** in the competitive IIT-JAM 2024 Physics exam. He's also solved **200+ LeetCode problems** and is an active practitioner on Kaggle."
  },
  {
    keys: ["source", "repo", "code", "download", "clone"],
    reply: "This portfolio website repository is publicly available on GitHub at **https://github.com/tapasbarman-ai/Portfolio-v1.git**. You can clone and inspect the full SPA codebase!"
  },
  {
    keys: ["how are you", "sup", "how's it going"],
    reply: "I am doing great! Tapas is currently orchestrating MLflow model registries or studying big data systems for IIIT Lucknow. Let me know what you want to explore next!"
  }
];

function handleCopilotMessage(userText) {
  const query = userText.toLowerCase();
  
  // 1. Render User Message
  appendChatMessage("user", userText);
  copilotInput.value = "";
  
  // 2. Render Typing indicator
  const typingEl = appendChatMessage("assistant", `<span class="animate-blink">...</span>`);
  copilotChat.scrollTop = copilotChat.scrollHeight;
  
  // 3. Search Reply
  let matchedReply = "";
  for (const item of copilotKnowledgeBase) {
    if (item.keys.some(key => query.includes(key))) {
      matchedReply = item.reply;
      break;
    }
  }
  
  if (!matchedReply) {
    matchedReply = `I am Tapas' portfolio assistant. I couldn't match that query, but he works in Python, MLOps, and NLP at **Aaizel Technologies**. For specific questions, email him directly at **tapasb.dev@gmail.com** or open the **contact.css** tab to send a DM.`;
  }
  
  // Mix in a GenZ phrase if appropriate (replaces keyword template placeholders or appends)
  if (matchedReply.includes("understood the assignment") || matchedReply.includes("era unlocked")) {
    // Keep as is
  } else {
    // Occasionally append GenZ phrases
    if (Math.random() > 0.4) {
      matchedReply += " " + getGenZPhrase();
    }
  }

  // 4. Stream typing response
  setTimeout(() => {
    typingEl.innerHTML = "";
    let currentChars = 0;
    const words = matchedReply.split(" ");
    
    function streamWords() {
      if (currentChars < words.length) {
        typingEl.innerHTML += (currentChars === 0 ? "" : " ") + words[currentChars];
        currentChars++;
        copilotChat.scrollTop = copilotChat.scrollHeight;
        setTimeout(streamWords, 50);
      }
    }
    streamWords();
  }, 750);
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
      if (fileId !== "resume") openFile(fileId);
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
        openFile("readme");
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
}
