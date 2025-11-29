# MooCalf Portfolio

Hey there! 👋 This is my personal portfolio website where I showcase my work in 3D modeling, graphic design, and community management. I built this with React and quite a numbver of other libraries and resources. This website was inspired by PedroTech, whose youtube tutorial helped me alot in learning how to make this website. I had a lot of fun making all the smooth animations, a dark/light theme, and an interactive project showcase. Hope you all like it!

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
- **Featured projects**: The projects I'm most proud of
- **Contact**: Ways to get in touch with me
- **Full projects page**: Every project I've worked on with detailed info

## Some libraries and stuff I Used

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

## The Organized File Structure

```
src/
├── Components/          # All the reusable pieces
│   ├── ui/             # Basic UI stuff (toast notifications)
│   ├── HeroSection.jsx # The landing section
│   ├── AboutSection.jsx # About me and experience
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

## Some Neat Features I Added - Just Cause

### Interactive Bits
- **Theme toggle**: A floating button that switches between dark and light modes
- **Project modals**: Click on a project to see more details
- **Smooth scrolling**: Everything moves smoothly between sections
- **Mobile menu**: Works great on phones with a hamburger menu

### Visual Touches
I used quite alot of references on this page to make it more unique to me and my own styles
- **Glassmorphism effects**: Those translucent cards with blur effects
- **Gradient borders**: Purple gradients on buttons and cards
- **Hover animations**: Cards and buttons respond when you hover over them
- **Custom buttons**: I made some cosmic and outline gradient button styles
- **Ribbon sections**: Decorative borders around section headers

### Performance Stuff
Made sure to incorpate some elements to help make the website load smoother and perform better
- **Lazy loading**: Images only load when you need them
- **Smooth animations**: Using Framer Motion for buttery smooth transitions
- **Responsive grid**: Everything looks good no matter the screen size
- **Code splitting**: Pages load faster by only loading what you need

