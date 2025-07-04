# MooCalf Portfolio

A modern, responsive portfolio website showcasing creative work in 3D modeling, graphic design, and community management. Built with React and featuring smooth animations, dark/light theme toggle, and an interactive project showcase.

## ✨ Features

- **Responsive Design**: Optimized for all device sizes with mobile-first approach
- **Dark/Light Theme**: Manual theme toggle with smooth transitions
- **Animated Background**: Dynamic grid background with glassmorphism effects
- **Smooth Navigation**: React Router with smooth scrolling between sections
- **Interactive Project Showcase**: Pinterest-style masonry grid with detailed modals
- **Contact Form**: Functional contact form with Formspree integration
- **Performance Optimized**: Efficient rendering and optimized animations
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation

## 🎨 Website Sections

- **Hero Section**: Animated introduction with scroll-to-navigate button
- **About Me**: Personal introduction with animated cards
- **Experience**: Professional background and community management experience
- **Skills**: Interactive skill showcase with filtering (Hard/Soft skills)
- **Featured Projects**: Highlighted projects with external links
- **Contact**: Contact form and social media links
- **Full Projects Page**: Complete project portfolio with detailed modals

## 🛠️ Tech Stack

- **[React 19](https://react.dev/)** - Modern React with hooks
- **[Vite](https://vitejs.dev/)** - Fast build tool and dev server
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[React Router](https://reactrouter.com/)** - Client-side routing
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[Lucide React](https://lucide.dev/)** - Beautiful icons
- **[Radix UI Toast](https://www.radix-ui.com/primitives/docs/components/toast)** - Accessible toast notifications
- **[Formspree](https://formspree.io/)** - Contact form handling

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd OnlinePortfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
src/
├── Components/          # Reusable UI components
│   ├── ui/             # Base UI components (toast)
│   ├── HeroSection.jsx # Landing section with scroll button
│   ├── AboutSection.jsx # About and Experience sections
│   ├── SkillsSection.jsx # Interactive skills showcase
│   ├── ProjectsSection.jsx # Featured projects
│   ├── ContactSection.jsx # Contact form and info
│   ├── Navbar.jsx      # Navigation with mobile menu
│   ├── ThemeToggle.jsx # Dark/light theme toggle
│   └── Background.jsx  # Grid background effects
├── Pages/              # Page components
│   ├── Home.jsx        # Main portfolio page
│   ├── MyProjects.jsx  # Full projects showcase
│   └── NotFound.jsx    # 404 page
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── assets/             # Static assets
```

## 🎯 Key Features

### Interactive Elements
- **Theme Toggle**: Floating button for dark/light mode switching
- **Skill Filtering**: Toggle between Hard Skills, Soft Skills, and All Skills
- **Project Modals**: Detailed project information with navigation between projects
- **Smooth Scrolling**: Animated scroll between sections
- **Responsive Navigation**: Mobile-friendly hamburger menu

### Visual Design
- **Glassmorphism Effects**: Translucent cards with backdrop blur
- **Gradient Borders**: Purple gradient borders on interactive elements
- **Animated Cards**: Hover effects and smooth transitions
- **Custom Buttons**: Cosmic and outline gradient button styles
- **Ribbon Sections**: Decorative borders around section headers

### Performance Features
- **Optimized Images**: Lazy loading for project images
- **Efficient Animations**: Framer Motion for smooth performance
- **Responsive Grid**: CSS Grid and Flexbox for optimal layouts
- **Code Splitting**: Route-based code splitting with React Router

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🔧 Customization

### Content Updates
- Update personal information in component files
- Replace placeholder images in `public/projects/`
- Modify project data in `ProjectsSection.jsx` and `MyProjects.jsx`
- Update contact information in `ContactSection.jsx`

### Styling Changes
- Edit CSS variables in `src/index.css`
- Modify primary color in `:root` and `.dark` sections
- Update gradient effects in utility classes
- Customize animations in CSS keyframes
