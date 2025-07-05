# MooCalf Portfolio

Hey there! 👋 This is my personal portfolio website where I showcase my work in 3D modeling, graphic design, and community management. I built this with React and had a lot of fun adding smooth animations, a dark/light theme toggle, and an interactive project showcase.

## What's Cool About This Site

- **Looks great everywhere**: Works perfectly on phones, tablets, and desktops
- **Dark mode toggle**: Because sometimes you just need to switch things up
- **Animated background**: A subtle grid that adds some life to the page
- **Smooth scrolling**: Everything flows nicely as you navigate around
- **Project showcase**: My favorite projects displayed in a Pinterest-style grid
- **Contact form**: Actually works! (Thanks Formspree)
- **Fast and accessible**: Quick loading and works with screen readers

## What You'll Find Here

- **Hero section**: A quick intro with a button that smoothly takes you to the good stuff
- **About me**: Who I am and what I do (with some animated cards for flair)
- **Experience**: My professional journey and community management work
- **Skills**: What I'm good at, organized into hard skills and soft skills
- **Featured projects**: The projects I'm most proud of
- **Contact**: Ways to get in touch with me
- **Full projects page**: Every project I've worked on with detailed info

## Tech Stuff I Used

- **React 19** - Because I like staying current
- **Vite** - Makes development super fast
- **Tailwind CSS** - For styling without the headache
- **React Router** - Smooth page transitions
- **Framer Motion** - Beautiful animations
- **Lucide React** - Clean, simple icons
- **Radix UI Toast** - For those nice notification popups
- **Formspree** - Handles my contact form submissions

## Want to Run This Locally?

1. **Clone it**
   ```bash
   git clone <repository-url>
   cd OnlinePortfolio
   ```

2. **Install the dependencies**
   ```bash
   npm install
   ```

3. **Start the dev server**
   ```bash
   npm run dev
   ```

4. **Build for production** (if you want to deploy it)
   ```bash
   npm run build
   ```

## How I Organized This

```
src/
├── Components/          # All the reusable pieces
│   ├── ui/             # Basic UI stuff (toast notifications)
│   ├── HeroSection.jsx # The landing section
│   ├── AboutSection.jsx # About me and experience
│   ├── SkillsSection.jsx # My skills showcase
│   ├── ProjectsSection.jsx # Featured projects
│   ├── ContactSection.jsx # Contact form and info
│   ├── Navbar.jsx      # Navigation menu
│   ├── ThemeToggle.jsx # Dark/light mode switch
│   └── Background.jsx  # The animated background
├── Pages/              # Different pages
│   ├── Home.jsx        # Main portfolio page
│   ├── MyProjects.jsx  # All my projects
│   └── NotFound.jsx    # 404 page
├── hooks/              # Custom React hooks
├── lib/                # Helper functions
└── assets/             # Images and other static files
```

## Some Neat Features I Added

### Interactive Bits
- **Theme toggle**: A floating button that switches between dark and light modes
- **Skill filtering**: You can toggle between Hard Skills, Soft Skills, or see them all
- **Project modals**: Click on a project to see more details
- **Smooth scrolling**: Everything moves smoothly between sections
- **Mobile menu**: Works great on phones with a hamburger menu

### Visual Touches
- **Glassmorphism effects**: Those translucent cards with blur effects
- **Gradient borders**: Purple gradients on buttons and cards
- **Hover animations**: Cards and buttons respond when you hover over them
- **Custom buttons**: I made some cosmic and outline gradient button styles
- **Ribbon sections**: Decorative borders around section headers

### Performance Stuff
- **Lazy loading**: Images only load when you need them
- **Smooth animations**: Using Framer Motion for buttery smooth transitions
- **Responsive grid**: Everything looks good no matter the screen size
- **Code splitting**: Pages load faster by only loading what you need

## Browser Support

Works great on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Want to Customize This?

### Updating Content
- Change the personal info in the component files
- Replace the placeholder images in `public/projects/`
- Update project data in `ProjectsSection.jsx` and `MyProjects.jsx`
- Modify contact info in `ContactSection.jsx`

### Styling Changes
- Edit the CSS variables in `src/index.css`
- Change the primary color in the `:root` and `.dark` sections
- Update gradient effects in the utility classes
- Customize animations in the CSS keyframes

Feel free to use this as a starting point for your own portfolio! Just remember to make it your own. 😊
