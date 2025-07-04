# MooCalf Portfolio

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Features a beautiful animated background with meteors and stars, smooth scrolling navigation, and a comprehensive project showcase.

## ✨ Features

- **Responsive Design**: Optimized for all device sizes
- **Dark/Light Theme**: Manual theme toggle with smooth transitions
- **Animated Background**: Dynamic meteor and star effects with parallax planet
- **Smooth Navigation**: React Router with smooth scrolling between sections
- **Project Showcase**: Pinterest-style masonry grid with modal details
- **Performance Optimized**: React hooks optimization, memoization, and efficient rendering
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation

## 🚀 Performance Optimizations

### React Hooks Optimization
- **useCallback**: Prevents unnecessary re-renders for event handlers
- **useMemo**: Memoizes expensive calculations and component arrays
- **useEffect**: Proper dependency arrays and cleanup functions

### Component Structure
- **Extracted Reusable Components**: DivisionCard, SkillCard, ProjectCard, etc.
- **Optimized Event Handlers**: Debounced scroll listeners and efficient state updates
- **Memoized Data**: Static arrays and objects memoized to prevent recreation

### Rendering Optimizations
- **Conditional Rendering**: Components only render when needed
- **Efficient Lists**: Proper key props and optimized map functions
- **Background Effects**: Optimized meteor and star generation

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icons
- **Radix UI** - Accessible UI primitives

## 📁 Project Structure

```
src/
├── Components/          # Reusable UI components
│   ├── ui/             # Base UI components (toast, etc.)
│   ├── Background.jsx  # Animated background effects
│   ├── Navbar.jsx      # Navigation component
│   ├── ThemeToggle.jsx # Theme switching
│   └── ...             # Other section components
├── Pages/              # Page components
│   ├── Home.jsx        # Main portfolio page
│   ├── MyProjects.jsx  # Projects showcase page
│   └── NotFound.jsx    # 404 page
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── assets/             # Static assets
```

## 🎨 Key Features

### Background Effects
- **Meteors**: Continuous meteor animation with individual spawning
- **Stars**: Dynamic star generation based on viewport size
- **Planet**: Parallax planet effect in dark mode
- **Responsive**: Effects adapt to screen size and theme

### Navigation
- **Smooth Scrolling**: Between sections on the same page
- **Route Navigation**: Between different pages
- **Mobile Menu**: Responsive hamburger menu
- **Active States**: Visual feedback for current section

### Project Showcase
- **Masonry Layout**: Pinterest-style grid layout
- **Modal Details**: Full project information in modal
- **Image Gallery**: Hover effects and action buttons
- **Responsive Grid**: Adapts to different screen sizes

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

## 📝 Customization

### Colors and Theme
- Edit CSS variables in `src/index.css`
- Modify primary color in `:root` and `.dark` sections
- Update gradient effects in utility classes

### Content
- Update personal information in component files
- Replace placeholder images in `public/projects/`
- Modify project data in `ProjectsSection.jsx` and `MyProjects.jsx`

### Animations
- Adjust animation timing in CSS keyframes
- Modify meteor and star generation in `Background.jsx`
- Update parallax effects and transitions

## 🔧 Performance Tips

1. **Image Optimization**: Use optimized images and consider lazy loading
2. **Bundle Size**: Monitor bundle size with `npm run build`
3. **Lighthouse**: Run Lighthouse audits for performance insights
4. **Code Splitting**: Consider lazy loading for larger components

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
