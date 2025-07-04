import { ThemeToggle } from "@/Components/ThemeToggle";
import { Background } from "@/Components/Background";
import { Footer } from "@/Components/Footer";
import { ArrowLeft, ExternalLink, Globe, X, Menu, Instagram, Mail, Send, Twitch, Youtube, UserSearch, Twitter, Filter, ChevronDown, Star, RotateCcw } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils.js";
import { useEffect, useState, useRef } from "react";

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
    description: "A art piece inspired by (USERNAME). A mentor of mine really likes their artworks and while helping me learn more about making artistic pieces, told me to use one of their works as reference and remake it. The results were astounding.",
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
    title: "Skeleton Competition",
    description: "A stylized skeleton character created for a 3D modeling competition in the Blender Community Discord. This project was not only done for submission for a competition, but also to teach me new art styles possible in Blender.",
    image: "/projects/Project_IMGs/SkeletonCompetition_Project_IMGs.png",
    tags: ["Blender", "3D Modeling", "Character"],
    demoUrl: "#",
    artstationUrl: "https://www.artstation.com/dencypher",
    height: "h-84",
    category: "Blender"
  },
  {
    id: 10,
    title: "Supracar",
    description: "A high-performance sports car concept designed and rendered using Blender and Photoshop. This project combines 3D modeling with digital painting techniques to create a sleek, futuristic vehicle design with detailed materials and lighting.",
    image: "/projects/Project_IMGs/Supracar__Project_IMGs.jpg",
    tags: ["Blender", "Photoshop", "Vehicle Design"],
    demoUrl: "#",
    artstationUrl: "https://www.artstation.com/dencypher",
    height: "h-72",
    category: "Blender"
  },
  {
    id: 11,
    title: "Capybara",
    description: "A cute and detailed capybara character model created in Blender. I tried using a cel shader for the first time with this character while also learning the basics of sculpting and character designs.",
    image: "/projects/Project_IMGs/capybara__Project_IMGs.png",
    tags: ["Blender", "3D Modeling", "Character"],
    demoUrl: "#",
    artstationUrl: "https://www.artstation.com/dencypher",
    height: "h-88",
    category: "Blender"
  },
  {
    id: 12,
    title: "Mushroom",
    description: "A detailed mushroom environment with various species and atmospheric lighting. This project showcases organic modeling techniques, procedural texturing for natural surfaces, and environmental storytelling.",
    image: "/projects/Project_IMGs/mushroom__Project_IMGs.png",
    tags: ["Blender", "3D Modeling", "Environment"],
    demoUrl: "#",
    artstationUrl: "https://www.artstation.com/dencypher",
    height: "h-64",
    category: "Blender"
  },
  {
    id: 13,
    title: "Kronis",
    description: "A to scale version of the Kronis Planet. A fictional planet made entirely for a passion project I have been working on since mid-2025. It features a shot of the planets atmosphere and its rings with a Type B star behind it. Made in Unreal Engine 5",
    image: "/projects/Featured_IMGs/Kronis_UE5_Experience_IMG.png",
    tags: ["UE5", "Character Design", "3D Modeling"],
    demoUrl: "#",
    artstationUrl: "https://www.artstation.com/dencypher",
    height: "h-80",
    category: "UE5"
  },
  {
    id: 14,
    title: "Oberon Blender",
    description: "A detailed character model created in Blender with advanced sculpting and texturing techniques. This project demonstrates high-quality character modeling with focus on anatomical accuracy and expressive features.",
    image: "/projects/Featured_IMGs/Oberon_Blender_Experience_IMG.png",
    tags: ["Blender", "Character Design", "3D Modeling"],
    demoUrl: "#",
    artstationUrl: "https://www.artstation.com/dencypher",
    height: "h-96",
    category: "Blender"
  },
  {
    id: 15,
    title: "Kronis",
    description: "A model of a Ringed Gas Giant. The render was done using specialize camera lens made to replicate a realistic telescopic look. The Gas Giant chas the name of Kronis, it has 4 moons, though hard to see, are still visible in the image. The inspiration used was our very own gas giant, Jupiter with the rings of Saturn.",
    image: "/projects/Featured_IMGs/Kronis_Blender_Experience_IMG.png",
    tags: ["Blender", "Character Design", "3D Modeling"],
    demoUrl: "#",
    artstationUrl: "https://www.artstation.com/dencypher",
    height: "h-88",
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
    { name: "Skills", href: "/#skills" },
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
  const otherProjects = allProjects.filter(p => p.id !== project?.id).slice(0, 6);
  const handleOtherProjectClick = (otherProject) => {
    onProjectChange(otherProject);
  };
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
  const [activeCategory, setActiveCategory] = useState("All");
  const [isMobileCategoryOpen, setIsMobileCategoryOpen] = useState(false);
  const navigate = useNavigate();
  const categoryRefs = useRef({});
  const scrollContainerRef = useRef(null);
  
  const categories = [
    { name: "All", label: "All Projects" },
    { name: "Featured Projects", label: "Featured Projects", icon: Star },
    { name: "Blender", label: "Blender" },
    { name: "UE5", label: "UE5" },
    { name: "Photoshop", label: "Photoshop" },
    { name: "Illustrator", label: "Illustrator" },
    { name: "After Effects", label: "After Effects" }
  ];

  useEffect(() => {
    const selectedRef = categoryRefs.current[activeCategory];
    if (selectedRef) {
      selectedRef.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest'
      });
    }
  }, [activeCategory]);

  useEffect(() => {
    if (isMobileCategoryOpen) {
      setIsMobileCategoryOpen(false);
    }
  }, [activeCategory]);

  const handleScrollDown = () => {
    const currentIndex = categories.findIndex(cat => cat.name === activeCategory);
    const nextIndex = (currentIndex + 1) % categories.length;
    const nextCategory = categories[nextIndex];
    setActiveCategory(nextCategory.name);
    
    // Scroll to the next category
    const nextButton = categoryRefs.current[nextCategory.name];
    if (nextButton && scrollContainerRef.current) {
      nextButton.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });
    }
  };

  const handleReload = () => {
    setActiveCategory("All");
  };

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : activeCategory === "Featured Projects"
    ? projects.filter(project => 
        project.id >= 13 && project.id <= 15 // Featured projects have IDs 13-15
      )
    : projects.filter(project => 
        project.category === activeCategory || 
        project.tags.some(tag => tag === activeCategory)
      );

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };
  const handleOtherProjectClick = (otherProject) => {
    setSelectedProject(otherProject);
    setIsModalOpen(true);
  };
  const projectCards = filteredProjects.map((project) => (
    <ProjectCard key={project.id} project={project} onClick={handleProjectClick} />
  ));
  
  const MobileCategoryModal = () => (
    <div className={cn(
      "fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4",
      "transition-all duration-300",
      isMobileCategoryOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
    )}>
      <div className="bg-background rounded-2xl shadow-2xl max-w-sm w-full p-6 relative">
        <button
          onClick={() => setIsMobileCategoryOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
        >
          <X size={20} />
        </button>
        <h3 className="text-xl font-semibold mb-6 text-center">Categories</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={cn(
                "w-full text-left px-4 py-3 rounded-lg transition-all duration-300",
                activeCategory === category.name
                  ? "bg-primary text-white shadow-lg"
                  : "text-foreground/80 hover:text-primary hover:bg-primary/10"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>
        <div className="mt-6 pt-4 border-t border-border">
          <button
            onClick={() => {
              handleReload();
              setIsMobileCategoryOpen(false);
            }}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300"
          >
            <RotateCcw size={16} />
            Show All Projects
          </button>
        </div>
      </div>
    </div>
  );
  
  const Sidebar = () => (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-30 hidden lg:block h-96">
      <div 
        className="rounded-3xl bg-clip-padding flex flex-col items-center py-8 px-3 pointer-events-auto relative h-full"
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
        <span className="absolute inset-0 rounded-3xl pointer-events-none border" style={{
          border: '1px solid transparent',
          background: 'linear-gradient(90deg, #6C2BD7, #8C5CF6)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          zIndex: 1
        }} />
        <div className="relative z-10 flex flex-col h-full justify-between py-4">
          <div className="text-center">
            <h3 className="text-sm font-semibold text-primary mb-2">Categories</h3>
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-4"></div>
          </div>
          <div className="flex flex-col space-y-3 flex-1 justify-center overflow-y-auto scrollbar-hide max-h-64" ref={scrollContainerRef}>
            {categories.map((category) => (
              <button
                key={category.name}
                ref={(el) => categoryRefs.current[category.name] = el}
                onClick={() => setActiveCategory(category.name)}
                className={`text-xs font-medium px-4 py-2 rounded-full transition-all duration-300 flex items-center justify-center gap-2 ${
                  activeCategory === category.name
                    ? 'bg-primary text-white shadow-lg'
                    : 'text-foreground/80 hover:text-primary hover:bg-primary/10'
                }`}
              >
                {category.icon && <category.icon size={12} />}
                {category.label}
              </button>
            ))}
          </div>
          <div className="text-center mt-4">
            <div className="flex gap-2 justify-center">
              <button
                onClick={handleScrollDown}
                className="outline-gradient-button p-2 hover:scale-110 transition-transform duration-300"
                title="Scroll down to see more categories"
              >
                <ChevronDown size={16} />
              </button>
              <button
                onClick={handleReload}
                className="outline-gradient-button p-2 hover:scale-110 transition-transform duration-300"
                title="Show all projects"
              >
                <RotateCcw size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      <div className="grid-bg" aria-hidden="true" />
      <MyProjectsNavbar />
      <ThemeToggle />
      <Background showEffects={false} />
      <Sidebar />
      <MobileCategoryModal />
      <div className="pt-24 pb-8 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center gap-4 mb-8">
            <Link 
              to="/" 
              className="outline-gradient-button p-2"
            >
              <ArrowLeft size={20} />
            </Link>
            <div className="ribbon-section flex-1 mb-16 relative">
              <button
                onClick={() => setIsMobileCategoryOpen(true)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 lg:hidden outline-gradient-button p-2"
              >
                <Filter size={16} />
              </button>
              <h1 className="text-3xl md:text-4xl font-bold text-center m-0">
                My <span className="text-primary">Projects</span>
              </h1>
            </div>
          </div>
          <p className="text-muted-foreground max-w-2xl">
            Explore my creative journey through 3D modeling, graphic design, community management, and web development projects.
          </p>
        </div>
      </div>
      <div className="px-4 pb-24 lg:pl-24">
        <div className="container mx-auto max-w-7xl">
          {filteredProjects.length > 0 ? (
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
              {projectCards}
            </div>
          ) : (
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-muted-foreground mb-2">
                  No Posts with that tag.
                </h3>
                <p className="text-muted-foreground">
                  Try selecting a different category or check back later for new projects.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Contact Section (no form, with button to Home contact) */}
      <section className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <div className="ribbon-section mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center m-0">
              Get In <span className="text-primary">Touch</span>
            </h2>
          </div>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Like what you see? or wish to collaborate? Feel free to reach out!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6 justify-center">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">My Email:</h4>
                    <a href="mailto:dencypher01@gmail.com" className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                      dencypher01@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">My Artstation:</h4>
                    <a href="https://www.artstation.com/dencypher" className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                      dencypher
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Twitter className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Twitter:</h4>
                    <a href="https://x.com/MooCalf_" className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                      @MooCalf_
                    </a>
                  </div>
                </div>
              </div>
              <div className="pt-8">
                <h4 className="font-medium mb-4">Connect With Me</h4>
                <div className="flex space-x-4 justify-start">
                  <a href="https://www.youtube.com/@MooCalf" target="_blank" rel="noopener noreferrer" aria-label="Youtube" className="outline-gradient-button"><Youtube size={20} /></a>
                  <a href="https://www.twitch.tv/moocalf_" target="_blank" rel="noopener noreferrer" aria-label="Twitch" className="outline-gradient-button"><Twitch size={20} /></a>
                  <a href="https://www.instagram.com/cypher._01?igsh=MWlxeGY1NXpzeWtnbQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="outline-gradient-button"><Instagram size={20} /></a>
                </div>
              </div>
            </div>
            <div className="glass-send-message flex flex-col items-center justify-center text-center">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              <p className="text-muted-foreground mb-8">
                Ready to start a conversation? Click the button below to get in contact with me.
              </p>
              <button
                className="cosmic-button flex items-center gap-2 px-8 py-4 text-lg"
                onClick={() => {
                  navigate("/");
                  setTimeout(() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                }}
              >
                <Send size={20} />
                Go to Contact Form
              </button>
            </div>
          </div>
        </div>
      </section>
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