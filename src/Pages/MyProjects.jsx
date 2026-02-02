import { ThemeToggle } from "@/Components/ThemeToggle";
import { Background } from "@/Components/Background";
import { Footer } from "@/Components/Footer";
import { ArrowLeft, ExternalLink, Globe, X, Menu, Instagram, Mail, Send, Twitch, Youtube, Twitter, Filter, ChevronDown, Star, RotateCcw, Eye, ChevronUp } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils.js";
import { useEffect, useState, useRef } from "react";
import { Metadata } from "@/Components/Metadata.jsx";
import { StructuredData } from "@/Components/StructuredData.jsx";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Gas Giant",
    description: "A nameless, gas giant with no rings to be found. It has only 1 visible moon, about the size of the Earths moon. The inspiration used was Saturn. Rendered using specialize camera lens to give the effect of a telescopic and realistic look. This project was done to learn the uses of custom camera lens and effects in engine.",
    image: "/projects/Project_IMGs/GasGiant_Project_IMGs.png",
    tags: ["Blender", "3D Modeling", "Planets"],
    demoUrl: "#",
    artstationUrl: "https://www.artstation.com/dencypher",
    height: "h-64",
    category: "Blender"
  },
  {
    id: 2,
    title: "Lava World",
    description: "A hostile lava world with molten rivers and volcanic terrain created in Blender. This project demonstrates advanced material creation with emission shaders, procedural displacement, and dynamic lighting to simulate the intense heat and glow of molten rock.",
    image: "/projects/Project_IMGs/LavaWorld_Project_IMGs.png",
    tags: ["Blender", "3D Modeling", "Environment"],
    demoUrl: "#",
    artstationUrl: "https://www.artstation.com/dencypher",
    height: "h-80",
    category: "Blender"
  },
  {
    id: 3,
    title: "Dust World",
    description: "A barren dust world with atmospheric dust storms and rocky terrain. This project showcases particle systems for dust effects, procedural texturing for surface details, and atmospheric scattering to create a desolate alien landscape.",
    image: "/projects/Project_IMGs/DustWorld_Project_IMGs.png",
    tags: ["Blender", "3D Modeling", "Environment"],
    demoUrl: "#",
    artstationUrl: "https://www.artstation.com/dencypher",
    height: "h-72",
    category: "Blender"
  },
  {
    id: 4,
    title: "Ice World",
    description: "A frozen ice world with crystalline formations and glacial landscapes. This project demonstrates advanced material creation with ice and snow shaders, procedural displacement for surface details, and atmospheric effects for the cold environment.",
    image: "/projects/Project_IMGs/IceWorld-_Project_IMGs.png",
    tags: ["Blender", "3D Modeling", "Environment"],
    demoUrl: "#",
    artstationUrl: "https://www.artstation.com/dencypher",
    height: "h-56",
    category: "Blender"
  },
  {
    id: 5,
    title: "Earth Art",
    description: "A art piece inspired by @gracile_jp on twitter. A mentor of mine really likes their artworks and while helping me learn more about making artistic pieces, told me to use one of their works as reference and remake it. The results were astounding.",
    image: "/projects/Project_IMGs/EarthArt_Project_IMGs.png",
    tags: ["Blender", "3D Modeling", "Planets"],
    demoUrl: "#",
    artstationUrl: "https://www.artstation.com/dencypher",
    height: "h-96",
    category: "Blender"
  },
  {
    id: 6,
    title: "Saturn",
    description: "A detailed recreation of Saturn with its iconic ring system and atmospheric bands. This project demonstrates advanced ring system modeling, atmospheric shaders, and realistic planetary texturing techniques.",
    image: "/projects/Project_IMGs/Saturn_Project_IMGs.png",
    tags: ["Blender", "3D Modeling", "Planets"],
    demoUrl: "#",
    artstationUrl: "https://www.artstation.com/dencypher",
    height: "h-68",
    category: "Blender"
  },
  {
    id: 7,
    title: "Black Hole 1",
    description: "A mesmerizing black hole visualization with accretion disk and gravitational lensing effects. This project showcases the final results of a design that has taken up to 3 months to complete. It help me learn to be persistence and the need for disciplin.",
    image: "/projects/Project_IMGs/BlackHole1_Project_IMGs.png",
    tags: ["Blender", "3D Modeling", "Space"],
    demoUrl: "#",
    artstationUrl: "https://www.artstation.com/dencypher",
    height: "h-76",
    category: "Blender"
  },
  {
    id: 8,
    title: "Black Hole 2",
    description: "An alternative black hole visualization with different lighting and atmospheric conditions. This project is an expansion of \"Black Hole 1\". A full shot of the blackhole with camera effects to capture a near-real representation of a blackhole",
    image: "/projects/Project_IMGs/BlackHole2_Project_IMGs.png",
    tags: ["Blender", "3D Modeling", "Space"],
    demoUrl: "#",
    artstationUrl: "https://www.artstation.com/dencypher",
    height: "h-60",
    category: "Blender"
  },
  {
    id: 9,
    title: "Supracar",
    description: "A futuristic concept car design featuring sleek aerodynamics and cutting-edge technology. This project demonstrates advanced automotive modeling techniques, material design, and lighting setup for product visualization.",
    image: "/projects/Project_IMGs/Supracar__Project_IMGs.jpg",
    tags: ["Blender", "3D Modeling", "Automotive"],
    demoUrl: "#",
    artstationUrl: "https://www.artstation.com/dencypher",
    height: "h-72",
    category: "Blender"
  },
  {
    id: 10,
    title: "Capybara",
    description: "A charming 3D model of a capybara created with attention to anatomical accuracy and character design. This project showcases organic modeling techniques, fur simulation, and character lighting.",
    image: "/projects/Project_IMGs/capybara__Project_IMGs.png",
    tags: ["Blender", "3D Modeling", "Character"],
    demoUrl: "#",
    artstationUrl: "https://www.artstation.com/dencypher",
    height: "h-64",
    category: "Blender"
  },
  {
    id: 11,
    title: "Mushroom",
    description: "A detailed botanical study of various mushroom species with realistic textures and lighting. This project demonstrates organic modeling, procedural texturing, and natural lighting techniques.",
    image: "/projects/Project_IMGs/mushroom__Project_IMGs.png",
    tags: ["Blender", "3D Modeling", "Nature"],
    demoUrl: "#",
    artstationUrl: "https://www.artstation.com/dencypher",
    height: "h-80",
    category: "Blender"
  },
  {
    id: 12,
    title: "Skeleton Competition",
    description: "A detailed anatomical study showcasing advanced bone structure modeling and realistic material creation. This project demonstrates precision modeling techniques and medical visualization approaches.",
    image: "/projects/Project_IMGs/SkeletonCompetition_Project_IMGs.png",
    tags: ["Blender", "3D Modeling", "Anatomy"],
    demoUrl: "#",
    artstationUrl: "https://www.artstation.com/dencypher",
    height: "h-88",
    category: "Blender"
  },
  {
    id: 13,
    title: "Denken's Staff",
    description: "A mystical staff design featuring intricate magical elements and ornate details. This project showcases fantasy weapon design, complex geometry modeling, and magical effect visualization.",
    image: "/projects/Project_IMGs/Denkens Staff.png",
    tags: ["Blender", "3D Modeling", "Fantasy"],
    demoUrl: "#",
    artstationUrl: "https://www.artstation.com/dencypher",
    height: "h-96",
    category: "Blender"
  },
  {
    id: 14,
    title: "Fern's Staff",
    description: "An elegant nature-inspired staff with organic curves and botanical elements. This project demonstrates organic modeling techniques and natural material creation for fantasy weaponry.",
    image: "/projects/Project_IMGs/Ferns Staff.png",
    tags: ["Blender", "3D Modeling", "Fantasy"],
    demoUrl: "#",
    artstationUrl: "https://www.artstation.com/dencypher",
    height: "h-92",
    category: "Blender"
  },
  {
    id: 15,
    title: "Frieren's Staff",
    description: "A sophisticated magical staff design with intricate runes and mystical energy effects. This project showcases advanced fantasy weapon modeling and magical effect integration.",
    image: "/projects/Project_IMGs/Frierens Staff.png",
    tags: ["Blender", "3D Modeling", "Fantasy"],
    demoUrl: "#",
    artstationUrl: "https://www.artstation.com/dencypher",
    height: "h-84",
    category: "Blender"
  },
  {
    id: 16,
    title: "Stark's Axe",
    description: "A powerful battle axe design with robust construction and warrior aesthetics. This project demonstrates weapon design principles and combat-ready modeling techniques.",
    image: "/projects/Project_IMGs/Starks Axe.png",
    tags: ["Blender", "3D Modeling", "Weapons"],
    demoUrl: "#",
    artstationUrl: "https://www.artstation.com/dencypher",
    height: "h-76",
    category: "Blender"
  },
  {
    id: 17,
    title: "Ubel's Staff",
    description: "A dark and mysterious staff design with shadowy elements and ominous energy. This project showcases dark fantasy aesthetics and atmospheric weapon design.",
    image: "/projects/Project_IMGs/Ubels Staff.png",
    tags: ["Blender", "3D Modeling", "Fantasy"],
    demoUrl: "#",
    artstationUrl: "https://www.artstation.com/dencypher",
    height: "h-88",
    category: "Blender"
  },
  {
    id: 18,
    title: "Book Design",
    description: "A collection of book cover designs showcasing typography, layout, and visual storytelling. This project demonstrates graphic design principles and print media creation.",
    image: "/projects/Project_IMGs/Book Design (1).png",
    images: [
      "/projects/Project_IMGs/Book Design (1).png",
      "/projects/Project_IMGs/Book Design (2).png"
    ],
    tags: ["Photoshop", "Design", "Graphic Design"],
    demoUrl: "#",
    artstationUrl: "https://www.artstation.com/dencypher",
    height: "h-80",
    category: "Photoshop",
    hasMultipleImages: true
  },
  {
    id: 20,
    title: "ARNOO Shift 0.1.0",
    description: "Experience the perfect fusion of traditional craftsmanship and modern technology with the ARNOO Shift 0.1.0. This innovative clock combines analog elegance with digital convenience, featuring Bluetooth connectivity, smart time calibration, and voice assistance capabilities. Whether you prefer the rhythmic sounds of traditional clockwork or the silence of digital precision, the Shift 0.1.0 adapts to your lifestyle. Created using Blender for 3D modeling and rendered with advanced materials, then enhanced with Photoshop for final photo editing and post-processing effects.",
    image: "/projects/Project_IMGs/AC_1.png",
    images: [
      "/projects/Project_IMGs/AC_1.png",
      "/projects/Project_IMGs/DC_1.png",
      "/projects/Project_IMGs/DC & AC_1.png",
      "/projects/Project_IMGs/GroupC_1.png"
    ],
    tags: ["Blender", "Photoshop", "Product Design", "3D Modeling"],
    demoUrl: "https://moostyles.com",
    artstationUrl: "https://moostyles.com",
    height: "h-72",
    category: "Product Design",
    hasMultipleImages: true
  }
  ,
  {
    id: 21,
    title: "Earth Satallite Image",
    description: "Drifting off into nothingness...soon to become a 'Pale Blue Dot'. Earth really is a marvel, even when done digitally. The model was made using 3 simple cubes turned into spheres, textured by a 21k resolution mapping of the earth texture provided by NASA images. Its amazing how we are able to create entire worlds using simple methods.",
    image: "/projects/Project_IMGs/Earth_Satallite.png",
    tags: ["Blender"],
    demoUrl: "#",
    artstationUrl: "https://www.artstation.com/dencypher",
    height: "h-80",
    category: "Blender"
  }
];

const MyProjectsNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Experience", href: "/my-experiences" },
    { name: "Contact", href: "/#contact" },
  ];
  
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const handleNavClick = (href) => {
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
    } else if (href === "/my-experiences") {
      navigate("/my-experiences");
    }
  };
  
  const renderNavItem = (item, key) => (
    <button 
      key={key} 
      onClick={() => handleNavClick(item.href)}
      className="text-foreground/80 hover:text-primary transition-colors duration-300 bg-transparent border-none cursor-pointer"
    >
      {item.name}
    </button>
  );
  
  return (
    <>
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
                src="/projects/Logo Images/MooCalf Logo - Full Color.png" 
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
        </div>
      </nav>
      
      {/* Mobile Menu */}
      <div className={cn(
        "fixed top-0 left-0 w-screen h-screen bg-background/95 backdrop-blur-md z-50 flex flex-col items-center justify-center",
        "transition-all duration-300 md:hidden",
        isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-6 p-2 text-foreground hover:text-primary transition-colors duration-200"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
        <div className="flex flex-col space-y-4 text-xl text-center w-full max-w-sm px-4">
          {navItems.map((item, key) => (
            <div key={key} className="w-full">
              {renderNavItem(item, key)}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const CategoryDropdown = ({ categories, activeCategory, setActiveCategory, isOpen, setIsOpen, dropdownRef }) => (
  <div className="relative" ref={dropdownRef}>
    <button
      onClick={() => setIsOpen(!isOpen)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setIsOpen(!isOpen);
        }
        if (e.key === 'Escape') {
          setIsOpen(false);
        }
      }}
      className="outline-gradient-button p-3 flex items-center gap-2 hover:scale-105 transition-transform duration-300"
      title="Filter by category"
      aria-expanded={isOpen}
      aria-haspopup="true"
    >
      <Filter size={18} />
      <span className="hidden sm:inline text-sm font-medium">Categories</span>
      <ChevronDown 
        size={16} 
        className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
      />
    </button>
    
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full right-0 mt-2 w-72 sm:w-80 bg-card/95 backdrop-blur-md border border-border/50 rounded-2xl shadow-2xl z-50 overflow-hidden"
          role="menu"
          aria-label="Category filter menu"
        >
          <div className="p-4">
            <div className="text-center mb-4">
              <h3 className="text-sm font-semibold text-primary mb-2">Categories</h3>
              <div className="w-8 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
            </div>
            <div className="space-y-2 max-h-64 overflow-y-auto scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => {
                    setActiveCategory(category.name);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left text-sm font-medium px-4 py-3 rounded-xl transition-all duration-300 flex items-center gap-3 ${
                    activeCategory === category.name
                      ? 'bg-primary text-white shadow-lg'
                      : 'text-foreground/80 hover:text-primary hover:bg-primary/10'
                  }`}
                  role="menuitem"
                  aria-current={activeCategory === category.name ? 'true' : 'false'}
                  data-filter={category.name}
                >
                  {category.icon && <category.icon size={16} />}
                  {category.label}
                </button>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-border/20">
              <button
                onClick={() => {
                  setActiveCategory("All");
                  setIsOpen(false);
                }}
                className="w-full outline-gradient-button py-2 text-sm font-medium flex items-center justify-center gap-2"
                data-filter="All"
              >
                <RotateCcw size={16} />
                Show All Projects
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const ProjectCard = ({ project, index, onOpenModal }) => (
  <motion.div 
    key={project.id}
    className="group cursor-pointer"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ 
      delay: index * 0.05, 
      duration: 0.5, 
      ease: "easeOut"
    }}
    onClick={() => onOpenModal(project)}
    data-project-card
    data-project-title={project.title}
  >
    <div className="relative overflow-hidden rounded-3xl bg-card/50 backdrop-blur-sm border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02]">
      {/* Image Container */}
      <div className={`relative ${project.height} overflow-hidden`}>
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 bg-primary/90 backdrop-blur-md text-white text-xs font-medium rounded-full">
            {project.category}
          </span>
        </div>

        {/* Multiple Images Indicator */}
        {project.hasMultipleImages && (
          <div className="absolute top-3 right-3">
            <div className="w-8 h-8 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">+{project.images?.length || 1}</span>
            </div>
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags?.slice(0, 3).map((tag, index) => (
            <span 
              key={index} 
              className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
            >
              {tag}
            </span>
          ))}
          {project.tags && project.tags.length > 3 && (
            <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
        
        {/* Action Button */}
        <button className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-xl font-medium text-sm hover:bg-primary/90 transition-colors duration-200 flex items-center justify-center gap-2">
          <Eye size={16} />
          View Project
        </button>
      </div>
    </div>
  </motion.div>
);

const ProjectModal = ({ project, isOpen, onClose, allProjects = [] }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Add null check for project
  const images = project?.hasMultipleImages ? project.images : [project?.image];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Reset image index when project changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [project]);

  // Early return if no project
  if (!isOpen || !project) return null;

  // Get related projects (same category, excluding current project)
  const relatedProjects = allProjects
    .filter(p => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative bg-card rounded-2xl max-w-7xl w-full max-h-[95vh] overflow-y-auto custom-scrollbar"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
          >
            <X size={20} />
          </button>
          
          <div className="p-6 sm:p-8">
            {/* Main Project Section */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-12">
              {/* Image Section */}
              <div className="space-y-6">
                <div className="relative">
                  <img 
                    src={images[currentImageIndex] || project.image} 
                    alt={project.title || 'Project'}
                    className="w-full h-96 sm:h-[500px] object-cover rounded-xl shadow-2xl"
                  />
                  
                  {/* Image Navigation */}
                  {images && images.length > 1 && (
                    <>
                      <button
                        onClick={() => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors backdrop-blur-sm"
                      >
                        <ChevronUp size={20} className="rotate-[-90deg]" />
                      </button>
                      <button
                        onClick={() => setCurrentImageIndex((prev) => (prev + 1) % images.length)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors backdrop-blur-sm"
                      >
                        <ChevronUp size={20} className="rotate-90" />
                      </button>
                    </>
                  )}
                </div>
                
                {/* Image Indicators */}
                {images && images.length > 1 && (
                  <div className="flex justify-center gap-3">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentImageIndex ? 'bg-primary scale-125' : 'bg-muted hover:bg-muted-foreground'
                        }`}
                      />
                    ))}
                  </div>
                )}
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags?.map((tag, index) => (
                    <span key={index} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Content Section */}
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                    <span className="text-muted-foreground text-sm">Project #{project.id}</span>
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">{project.title || 'Untitled Project'}</h2>
                  <p className="text-muted-foreground leading-relaxed text-lg sm:text-xl">{project.description || 'No description available.'}</p>
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  {project.demoUrl && project.demoUrl !== "#" && (
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl"
                    >
                      <Globe size={20} />
                      View Demo
                    </a>
                  )}
                  {project.artstationUrl && (
                    <a 
                      href={project.artstationUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 px-8 py-4 bg-secondary text-secondary-foreground rounded-xl hover:bg-secondary/90 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl"
                    >
                      <ExternalLink size={20} />
                      ArtStation
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Related Projects Section */}
            {relatedProjects.length > 0 && (
              <div className="border-t border-border/50 pt-12">
                <div className="text-center mb-8">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2">More {project.category} Projects</h3>
                  <p className="text-muted-foreground">Explore similar projects in this category</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedProjects.map((relatedProject, index) => (
                    <motion.div
                      key={relatedProject.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group cursor-pointer"
                      onClick={() => {
                        onClose();
                        setTimeout(() => {
                          setSelectedProject(relatedProject);
                          setIsModalOpen(true);
                        }, 300);
                      }}
                    >
                      <div className="relative overflow-hidden rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500">
                        <div className="relative h-48 overflow-hidden">
                          <img 
                            src={relatedProject.image} 
                            alt={relatedProject.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute top-3 left-3">
                            <span className="px-3 py-1 bg-primary/90 backdrop-blur-md text-white text-xs font-medium rounded-full">
                              {relatedProject.category}
                            </span>
                          </div>
                        </div>
                        
                        <div className="p-6 space-y-4">
                          <div className="space-y-2">
                            <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                              {relatedProject.title}
                            </h4>
                            <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                              {relatedProject.description}
                            </p>
                          </div>
                          
                          <div className="flex flex-wrap gap-2">
                            {relatedProject.tags?.slice(0, 2).map((tag, tagIndex) => (
                              <span 
                                key={tagIndex} 
                                className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export const MyProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  
  const categories = [
    { name: "All", label: "All Projects" },
    { name: "Featured Projects", label: "Featured Projects", icon: Star },
    { name: "Blender", label: "Blender" },
    { name: "BlockBench", label: "BlockBench" },
    { name: "UE5", label: "UE5" },
    { name: "Photoshop", label: "Photoshop" },
    { name: "Illustrator", label: "Illustrator" },
    { name: "After Effects", label: "After Effects" },
    { name: "Product Design", label: "Product Design" }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsCategoryDropdownOpen(false);
      }
    };

    if (isCategoryDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isCategoryDropdownOpen]);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const navigateToMoreProjects = () => {
    navigate("/more-projects");
  };

  return (
    <>
      <Metadata 
        pageTitle="My Projects"
        pageDescription="Explore my creative journey through 3D modeling, graphic design, community management, and web development projects."
      />
      <StructuredData type="projects" />
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative flex flex-col">
        <div className="grid-bg" aria-hidden="true" />
        <MyProjectsNavbar />
        <ThemeToggle />
        <Background showEffects={false} />
        
        {/* Hero Section */}
        <motion.section 
          className="pt-32 pb-16 px-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="max-w-full mx-auto">
            <div className="flex items-center justify-between mb-8">
              <Link 
                to="/" 
                className="outline-gradient-button p-3 hover:scale-105 transition-transform duration-300"
              >
                <ArrowLeft size={20} />
              </Link>
              
              {/* Category Dropdown */}
              <CategoryDropdown 
                categories={categories}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                isOpen={isCategoryDropdownOpen}
                setIsOpen={setIsCategoryDropdownOpen}
                dropdownRef={dropdownRef}
              />
            </div>
            
            <div className="text-center mb-12">
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
              >
                My <span className="text-primary">Projects</span>
              </motion.h1>
              <motion.p 
                className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
              >
                Explore my creative journey through 3D modeling, graphic design, community management, and web development projects.
              </motion.p>
            </div>
          </div>
        </motion.section>
        
        {/* Projects Grid */}
        <motion.section 
          className="px-6 pb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <div className="max-w-full mx-auto">
            <motion.div 
              className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 2xl:columns-5 gap-6 space-y-6"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.8
                  }
                }
              }}
            >
              <AnimatePresence>
                {filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                    onOpenModal={openModal}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.section>

        {/* Call to Action Section */}
        <motion.section 
          className="py-16 px-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 md:p-12"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Want to see more?</h3>
              <p className="text-muted-foreground mb-8 text-lg">
                Check out my additional projects and creative experiments in the More Projects section.
              </p>
              <button 
                onClick={navigateToMoreProjects} 
                className="cosmic-button px-8 py-4 text-lg font-medium"
              >
                Explore More Projects
              </button>
            </motion.div>
          </div>
        </motion.section>
        
        <Footer />
      </div>
      
      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
        allProjects={projects}
      />
    </>
  );
};