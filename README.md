# DevOps + LLM Engineer Portfolio

A modern, high-performance portfolio website targeting DevOps Engineer and LLM Developer roles. Built with React + Vite, featuring AI-themed animations, dark/light theme toggle, and comprehensive project showcase.

## 🎯 Overview

This portfolio emphasizes:
- **DevOps Engineering**: CI/CD, Docker, Kubernetes, AWS, Terraform
- **LLM Development**: OpenAI/Gemini integration, LangChain, RAG architecture
- **Cloud Infrastructure**: AWS deployments, infrastructure automation
- **Security & Automation**: Network security, process automation

## 🚀 Features

### ✨ Design & UX
- **Modern Dark Theme** (default) with optional light theme toggle
- **AI Robot + DevOps Gear animations** in hero section
- **Smooth scroll animations** with `prefers-reduced-motion` support
- **Fully responsive** design (mobile, tablet, desktop)
- **WCAG AA compliant** for accessibility

### 📋 Sections
1. **Hero** - One-line value prop with animated visuals
2. **About** - Concise DevOps/LLM focus with quick facts
3. **Skills** - Categorized tech stack with proficiency levels
4. **Projects** - Tabbed interface (Web Apps, AI, Automation, DevOps)
5. **Experience** - Impact-focused achievements with metrics
6. **Contact** - Form + social links + response time indicator
7. **Footer** - Quick links, social media, back-to-top button

### 🎨 Brand Identity
- **Colors**: Deep navy/charcoal background, electric cyan & lime accents
- **Typography**: Fira Code (monospace headings), Inter (body text)
- **Iconography**: Minimal AI robot + DevOps infinity loop

## 📦 Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Custom CSS with CSS Variables, Tailwind utility classes
- **Animations**: CSS animations, SVG graphics
- **State Management**: React hooks
- **Build Tool**: Vite
- **Deployment**: Ready for Vercel/Netlify/GitHub Pages

## 🛠️ Getting Started

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development

The dev server runs on `http://localhost:5173` with hot module replacement (HMR).

## 📝 Updating Content

### Adding/Editing Projects

Edit `src/components/Projects.jsx`:

```javascript
const projects = [
  {
    id: 1,
    title: 'Project Title',
    subtitle: 'Short Description',
    category: ['web', 'ai', 'automation', 'devops'], // Choose applicable
    image: ProjectImage, // Import from assets/projects/
    description: 'Full description...',
    impact: [
      'Metric 1 with percentage/numbers',
      'Metric 2 showing value delivered',
      'Metric 3 demonstrating scale'
    ],
    techStack: ['React', 'Docker', 'AWS', ...],
    role: 'Your Role',
    year: '2024',
    links: {
      demo: 'https://live-url.com',
      repo: 'https://github.com/...'
    }
  }
];
```

**Categories**:
- `web` - Web Applications
- `ai` - AI Projects
- `automation` - Automation Scripts/Tools
- `devops` - DevOps Pipelines & Infrastructure

### Updating Experience

Edit `src/components/Experience.jsx`:

```javascript
const experiences = [
  {
    company: 'Company Name',
    role: 'Job Title',
    type: 'Role Type (e.g., DevOps & Cloud Engineering)',
    duration: 'Month Year – Month Year',
    location: 'Remote/Hybrid/On-site',
    description: 'Brief role summary...',
    achievements: [
      'Impact statement with % or metric',
      'Another achievement with quantifiable result',
      'Technical improvement with time/cost savings'
    ],
    technologies: ['Tech1', 'Tech2', 'Tech3']
  }
];
```

### Updating Skills

Edit `src/components/Skills.jsx`:

```javascript
const skillCategories = [
  {
    id: 'category-id',
    title: 'Category Name',
    icon: '🚀', // Emoji icon
    color: '--accent-cyan', // or '--accent-lime'
    skills: [
      {
        name: 'Skill Name',
        level: 85, // 0-100
        description: 'Brief description'
      }
    ]
  }
];
```

### Updating About Section

Edit `src/components/AboutMe.jsx` to update intro paragraphs and quick facts.

### Updating Contact Info

Edit `src/components/ContactMe.jsx` and `src/components/Footer.jsx` for:
- Email address
- GitHub username
- LinkedIn profile
- Social media links

## 🎨 Customizing Colors

All colors are defined in `src/App.css` using CSS variables:

```css
:root {
  --bg-primary: #0a0e27;
  --accent-cyan: #00d9ff;
  --accent-lime: #a6ff00;
  /* ... more variables */
}

[data-theme="light"] {
  /* Light theme overrides */
}
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import repository in Vercel
3. Build command: `npm run build`
4. Output directory: `dist`
5. Deploy!

### Netlify

1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy

### GitHub Pages

1. Install: `npm install --save-dev gh-pages`
2. Add to `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```
3. Run: `npm run deploy`

## 📊 Performance Targets

- **Performance**: ≥ 95
- **Accessibility**: ≥ 95
- **Best Practices**: ≥ 95
- **SEO**: ≥ 90

### Optimization Features
- ✅ Lazy loading for non-critical assets
- ✅ CSS containment for performance
- ✅ Reduced motion support
- ✅ Semantic HTML
- ✅ ARIA labels
- ✅ Skip-to-content link
- ✅ Keyboard navigation
- ✅ Focus states

## 🔒 Security

- No API keys in code
- Form uses `mailto:` (client-side only)
- External links use `rel="noreferrer"`
- CSP-ready structure

## 📱 Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Known Issues & Limitations

- Contact form uses `mailto:` protocol (no backend)
- Resume PDF path is hardcoded - update manually
- Project images should be optimized manually before upload

## 📄 License

This portfolio template is open source. Feel free to use it as inspiration, but please don't copy it entirely. Create your own unique version!

## 🤝 Contributing

This is a personal portfolio, but if you find bugs or have suggestions, feel free to open an issue.

## 📧 Contact

**Yohans (John) Bekele**
- Email: yohans.Bekele@thomsonreuters.com
- GitHub: [@johnbekele](https://github.com/johnbekele)
- LinkedIn: [Yohans Bekele](https://www.linkedin.com/in/yohans-bekele)

---

**Built with ❤️ using React + Vite** | Deployed on Vercel
