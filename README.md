# Visual Studio Code Themed Developer Portfolio

A high-fidelity, premium developer portfolio website for Tapas Barman, designed and structured exactly like the VS Code IDE. 

This is a **Single Page Application (SPA)** written in clean, modern vanilla HTML, CSS, and JS. It requires no complex build steps, bundlers, or package installs, making it extremely lightweight, highly performant, and simple to deploy.

## Features

- **Interactive File Explorer Sidebar**: Click folder and file icons to open/close pages inside the editor pane.
- **VS Code Editor System**: Tabs management bar (open, close, active tab states) and directory breadcrumbs.
- **Interactive Terminal Simulator**: Type standard commands (`help`, `ls`, `cat`, `whoami`, `socials`, `theme <name>`, `clear`) with console response outputs and command line history.
- **Custom Color Themes**: Toggle dynamically between 6 VS Code palettes:
  - Default (VS Code Dark Modern)
  - Tokyo Night
  - Catppuccin Macchiato
  - Nord Code
  - Rosé Pine
  - Gruvbox Retro Dark
- **Copilot Chat Assistant**: Pre-programmed simulated AI chatbot tuned with Gen-Z responses, dry developer humor, and contextual knowledge of projects, skills, education, and career details.
- **Micro-Animations**: VS Code retro-style custom cursor (circle follower and dot) that reacts on hover, typing indicators, terminal blinking cursor, and tab/page transition animations.
- **Full Responsiveness**: Collapses into a compact, mobile-friendly navigation view on smaller screens.

---

## Getting Started

### 1. Running Locally
Simply open `index.html` directly in any web browser!
```bash
# Alternatively, run a local development server for a more realistic setup
npx serve .
```

### 2. Hosting / Deploying
Since there is no build step, you can drag and drop this folder directly into:
- **Vercel**
- **Netlify**
- **GitHub Pages**

---

## How to Customize It For Yourself

To make this portfolio website your own, open [assets/index.js](file:///c:/Users/tb619/Videos/Projects/Portfolio/assets/index.js) and customize the data structures at the top:

### 1. Update Bio and Links
Edit the `Ee` object to customize your role, location, email, bio paragraph, and platform profile URLs:
```javascript
const Ee = {
  role: "Your Title @ Your Company",
  location: "Your Location 📍",
  email: "your.email@example.com",
  bio2: "A paragraph about your hobbies, passions, and background...",
  links: {
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-profile",
    medium: "https://medium.com/@your-profile",
    // Add or remove links. The UI will render buttons for all active links.
  }
};
```

### 2. Update Typewriter Text
Change the strings inside the `Mp` array to customize the text that cycles on your home landing page:
```javascript
const Mp = [
  "Building robust databases 💻",
  "Optimizing ML inference pipelines 🚀",
  "Writing clean Python code 🐍"
];
```

### 3. Update Projects List
Modify the project cards inside the `Op` array. You can add as many projects as you want:
```javascript
const Op = [
  {
    id: 0,
    icon: "🐍", // Emoji for card top
    accent: "#ff9d4b", // Left-edge color stripe on hover
    type: "Backend · API · Python", // Project categories
    name: "My Awesome Tool", // Title
    desc: "A brief summary of what the tool accomplishes and the problem it solves.",
    tags: ["FastAPI", "PostgreSQL", "Docker"], // Tech tags
    link: "https://github.com/username/project", // Github link
    demo: "https://my-live-demo.com/" // Optional demo link (leave blank if none)
  }
];
```

### 4. Update Tech Skills
Modify the groups and items inside the `_p` array to show your own skillset progress meters (0-100%):
```javascript
const _p = [
  {
    group: "Languages",
    items: [
      { name: "Python", pct: 95, color: "#ff6fd8" },
      { name: "SQL", pct: 85, color: "#a855f7" }
    ]
  }
];
```

### 5. Update Career Experience
Add or edit jobs and internships in the `Hp` list:
```javascript
const Hp = [
  {
    date: "2026 - Present",
    current: true, // blue dot highlight
    role: "Senior Software Engineer",
    company: "My Company",
    desc: "Responsibilities, technical stacks used, and primary achievements.",
    tags: ["PostgreSQL", "FastAPI", "Docker"]
  }
];
```

### 6. Swap Avatar Image
To change the avatar profile photo on the home page, change the background-image URL inside [assets/index.css](file:///c:/Users/tb619/Videos/Projects/Portfolio/assets/index.css) under `.home-avatar`:
```css
.home-avatar {
  background-image: url("profile.jpg"); /* Local path or remote URL to your profile image */
}
```

### 7. Update Resume File
To update the downloadable PDF resume:
- Replace the existing `Resume.pdf` file in the root directory with your own PDF file. Ensure the name remains exactly `Resume.pdf` so the sidebar and command palette download routes work seamlessly.

### 8. Connect Copilot Assistant Answers
To adjust what the Copilot chatbot answers when users ask questions, modify the keywords and replies inside the `copilotKnowledgeBase` array at the bottom of [assets/index.js](file:///c:/Users/tb619/Videos/Projects/Portfolio/assets/index.js).
