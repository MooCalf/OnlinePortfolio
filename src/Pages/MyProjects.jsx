import { ThemeToggle } from "@/Components/ThemeToggle";
import { Background } from "@/Components/Background";
import { Footer } from "@/Components/Footer";
import { ArrowLeft, ExternalLink, Globe, X, Menu } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useEffect, useState, useCallback, useMemo } from "react";

const projects = [
  {
    id: 1,
    title: "3D Character Design",
    description: "A detailed 3D character model created in Blender with custom textures and rigging. This project showcases advanced character modeling techniques including sculpting, retopology, and texture painting. The character features realistic proportions and detailed facial expressions, making it suitable for animation and game development.",
    image: "/projects/image.png",
    tags: ["Blender", "3D Modeling", "Character Design"],
    demoUrl: "#",
    artstationUrl: "https://www.artstation.com/dencypher",
    height: "h-64"
  },
  {
    id: 2,
    title: "Space Scene Animation",
    description: "Animated space scene featuring planets, stars, and cosmic effects using After Effects. This project demonstrates advanced motion graphics techniques including particle systems, 3D camera movements, and dynamic lighting effects. The animation creates an immersive space environment with realistic celestial body movements.",
    image: "/projects/image.png",
    tags: ["After Effects", "Animation", "Space"],
    demoUrl: "#",
    artstationUrl: "https://www.artstation.com/dencypher",
    height: "h-80"
  },
  {
    id: 3,
    title: "UI/UX Design System",
    description: "Complete design system with components, color palettes, and interactive prototypes. This comprehensive design system includes reusable components, accessibility guidelines, and responsive design patterns. It serves as a foundation for consistent user experiences across multiple platforms and applications.",
    image: "/projects/image.png",
    tags: ["Figma", "UI/UX", "Design System"],
    demoUrl: "#",
    artstationUrl: "https://www.artstation.com/dencypher",
    height: "h-72"
  },
  {
    id: 4,
    title: "Community Management Dashboard",
    description: "Web application for managing online communities with analytics and moderation tools. This dashboard provides comprehensive community management features including user analytics, content moderation, engagement metrics, and automated reporting systems.",
    image: "/projects/image.png",
    tags: ["React", "Node.js", "Community"],
    demoUrl: "#",
    artstationUrl: "https://www.artstation.com/dencypher",
    height: "h-56"
  },
  {
    id: 5,
    title: "Astronomy Visualization",
    description: "Interactive 3D visualization of celestial bodies and planetary systems. This project uses Three.js to create an immersive educational experience where users can explore the solar system, learn about planetary orbits, and visualize astronomical phenomena in real-time.",
    image: "/projects/image.png",
    tags: ["Three.js", "Astronomy", "3D"],
    demoUrl: "#",
    artstationUrl: "https://www.artstation.com/dencypher",
    height: "h-96"
  },
  {
    id: 6,
    title: "Graphic Design Portfolio",
    description: "Collection of graphic design work including logos, posters, and branding materials. This portfolio showcases diverse design skills across various mediums including digital art, print design, and brand identity development.",
    image: "/projects/image.png",
    tags: ["Photoshop", "Illustrator", "Branding"],
    demoUrl: "#",
    artstationUrl: "https://www.artstation.com/dencypher",
    height: "h-68"
  },
  {
    id: 7,
    title: "3D Environment Design",
    description: "Immersive 3D environment with detailed textures and lighting effects. This project demonstrates advanced environment modeling techniques including procedural texturing, dynamic lighting, and atmospheric effects.",
    image: "/projects/image.png",
    tags: ["Blender", "Environment", "Lighting"],
    demoUrl: "#",
    artstationUrl: "https://www.artstation.com/dencypher",
    height: "h-76"
  },
  {
    id: 8,
    title: "Web Development Project",
    description: "Full-stack web application with modern design and responsive layout. This project showcases modern web development practices including responsive design, performance optimization, and user experience best practices.",
    image: "/projects/image.png",
    tags: ["React", "Tailwind", "Full-stack"],
    demoUrl: "#",
    artstationUrl: "https://www.artstation.com/dencypher",
    height: "h-60"
  },
  {
    id: 9,
    title: "Motion Graphics",
    description: "Dynamic motion graphics and animated infographics for various projects. This collection demonstrates advanced animation techniques including character animation, kinetic typography, and visual storytelling.",
    image: "/projects/image.png",
    tags: ["After Effects", "Motion", "Graphics"],
    demoUrl: "#",
    artstationUrl: "https://www.artstation.com/dencypher",
    height: "h-84"
  },
  {
    id: 10,
    title: "3D Product Visualization",
    description: "High-quality 3D renders of products with realistic materials and lighting. This project showcases photorealistic rendering techniques including material creation, lighting setup, and post-processing effects.",
    image: "/projects/image.png",
    tags: ["Blender", "Product", "Rendering"],
    demoUrl: "#",
    artstationUrl: "https://www.artstation.com/dencypher",
    height: "h-72"
  },
  {
    id: 11,
    title: "Interactive Web Experience",
    description: "Immersive web experience with custom animations and user interactions. This project demonstrates advanced web technologies including WebGL, custom animations, and interactive storytelling elements.",
    image: "/projects/image.png",
    tags: ["JavaScript", "Animation", "Interactive"],
    demoUrl: "#",
    artstationUrl: "https://www.artstation.com/dencypher",
    height: "h-88"
  },
  {
    id: 12,
    title: "Community Event Platform",
    description: "Platform for organizing and managing community events and meetups. This application provides comprehensive event management features including registration, ticketing, and community engagement tools.",
    image: "/projects/image.png",
    tags: ["React", "Events", "Community"],
    demoUrl: "#",
    artstationUrl: "https://www.artstation.com/dencypher",
    height: "h-64"
  }
];

const MyProjectsNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const navItems = useMemo(() => [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Contact", href: "/#contact" },
  ], []);
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);
  const handleNavClick = useCallback((href) => {
    setIsMenuOpen(false);
    if (href === "/") {
      navigate("/");
    } else if (href.startsWith('/#')) {
      navigate("/");
      setTimeout(() => {
        const sectionId = href.split('#')[1];
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [navigate]);
  const renderNavItem = useCallback((item, key) => (
    <button 
      key={key} 
      onClick={() => handleNavClick(item.href)}
      className="text-foreground/80 hover:text-primary transition-colors duration-300 bg-transparent border-none cursor-pointer"
    >
      {item.name}
    </button>
  ), [handleNavClick]);
  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300 flex justify-center pointer-events-none",
        isScrolled ? "py-3 shadow-xs" : "py-5"
      )}
    >
      <div
        className="max-w-screen-lg w-full mx-auto rounded-full bg-clip-padding flex items-center justify-between px-6 py-2 pointer-events-auto relative"
        style={{
          background: `
            linear-gradient(90deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.08) 100%),
            linear-gradient(90deg, rgba(82,8,201,0.2) 0%, rgba(68,0,179,0.2) 58%, rgba(73,2,189,0.2) 100%)
          `,
          backdropFilter: "blur(3px)",
          WebkitBackdropFilter: "blur(3px)",
          boxShadow: "0 4px 32px 0 rgba(31, 38, 135, 0.10)"
        }}
      >
        <span className="absolute inset-0 rounded-full pointer-events-none border" style={{
          border: '1px solid transparent',
          background: 'linear-gradient(90deg, #6C2BD7, #8C5CF6)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          zIndex: 1
        }} />
        <a 
          className="text-xl font-bold text-primary flex items-center" 
          href="/"
        >
          <span className="relative z-10 flex items-center gap-3">
            <img 
              src="/projects/MooCalf_Main Logo.png" 
              alt="MooCalf Logo" 
              className="h-8 w-8 rounded-full"
            />
            <span className="text-glow text-foreground">MooCalf</span>{" "}
            Portfolio
          </span>
        </a>
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => renderNavItem(item, key))}
        </div>
        <button
          onClick={() => setIsMenuOpen(prev => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
          "transition-all duration-300 md:hidden",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}>
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => renderNavItem(item, key))}
          </div>
        </div>
      </div>
    </nav>
  );
};

const ProjectModal = ({ project, isOpen, onClose, allProjects, onProjectChange }) => {
  const otherProjects = useMemo(() => 
    allProjects.filter(p => p.id !== project?.id).slice(0, 6),
    [allProjects, project?.id]
  );
  const handleOtherProjectClick = useCallback((otherProject) => {
    onProjectChange(otherProject);
  }, [onProjectChange]);
  if (!isOpen || !project) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto scrollbar-hide">
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-background rounded-2xl shadow-2xl max-w-7xl w-full max-h-[90vh] overflow-y-auto scrollbar-hide">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
        >
          <X size={20} />
        </button>
        <div className="flex flex-col lg:flex-row h-full">
          <div className="lg:w-2/3 p-6 lg:p-8">
            <div className="mb-6">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-auto max-h-[60vh] object-cover rounded-xl"
                loading="lazy"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">{project.title}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 pt-4">
                <a 
                  href={project.demoUrl} 
                  className="cosmic-button flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={16} />
                  View Demo
                </a>
                <a 
                  href={project.artstationUrl} 
                  className="outline-gradient-button flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Globe size={16} />
                  View ArtStation
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 p-6 lg:p-8 border-l border-border">
            <h3 className="text-xl font-semibold mb-4">More Projects</h3>
            <div className="grid grid-cols-2 gap-3">
              {otherProjects.map((otherProject) => (
                <div 
                  key={otherProject.id}
                  className="group cursor-pointer"
                  onClick={() => handleOtherProjectClick(otherProject)}
                >
                  <div className="aspect-square overflow-hidden rounded-lg">
                    <img 
                      src={otherProject.image} 
                      alt={otherProject.title} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-sm font-medium mt-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {otherProject.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, onClick }) => (
  <div className="break-inside-avoid group">
    <div 
      className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer"
      onClick={() => onClick(project)}
    >
      <div className={`${project.height} overflow-hidden relative`}>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-end justify-end p-4 opacity-0 group-hover:opacity-100">
          <div className="flex gap-2">
            <a 
              href={project.demoUrl} 
              className="outline-gradient-button p-2"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={16} />
            </a>
            <a 
              href={project.artstationUrl} 
              className="outline-gradient-button p-2"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <Globe size={16} />
            </a>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-1">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export const MyProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleProjectClick = useCallback((project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  }, []);
  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedProject(null);
  }, []);
  const handleOtherProjectClick = useCallback((otherProject) => {
    setSelectedProject(otherProject);
    setIsModalOpen(true);
  }, []);
  const projectCards = useMemo(() => 
    projects.map((project) => (
      <ProjectCard key={project.id} project={project} onClick={handleProjectClick} />
    )), [handleProjectClick]
  );
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      <div className="grid-bg" aria-hidden="true" />
      <MyProjectsNavbar />
      <ThemeToggle />
      <Background showEffects={false} />
      <div className="pt-24 pb-8 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center gap-4 mb-8">
            <Link 
              to="/" 
              className="outline-gradient-button p-2"
            >
              <ArrowLeft size={20} />
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold">
              My <span className="text-primary">Projects</span>
            </h1>
          </div>
          <p className="text-muted-foreground max-w-2xl">
            Explore my creative journey through 3D modeling, graphic design, community management, and web development projects.
          </p>
        </div>
      </div>
      <div className="px-4 pb-24">
        <div className="container mx-auto max-w-7xl">
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {projectCards}
          </div>
        </div>
      </div>
      <Footer />
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
        allProjects={projects}
        onProjectChange={handleOtherProjectClick}
      />
    </div>
  );
}; 