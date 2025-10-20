import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/Components/ThemeToggle";
import { Background } from "@/Components/Background";
import { Footer } from "@/Components/Footer";
import { ArrowLeft, X, Menu, Globe } from "lucide-react";
import { cn } from "@/lib/utils.js";
import { Metadata } from "@/Components/Metadata.jsx";

const moreProjects = [
  {
    id: 1,
    title: "MOOdern Notes App",
    description: "This is just a Demo Page. A modern notes page utilizing Glass like effects.",
    image: "/projects/Website Images/Glass.png",
    route: "/more-projects/landing-page-redesign",
    type: "internal"
  },
  {
    id: 2,
    title: "MooStyles",
    description: "An e-commerce like website for upload all my mods for games",
    image: "/projects/Banner-Moostyles.webp",
    route: "https://moostyles.com",
    type: "external"
  }
];

const MoreProjectsNavbar = () => {
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
        </div>
      </nav>
      
      {/* Mobile Menu - Outside navbar container */}
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

const PracticeCard = ({ webpage, onShowSample, onViewWebpage, onOpenModal }) => (
  <motion.div 
    className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer"
    onClick={() => onOpenModal(webpage)}
    whileHover={{ y: -5 }}
    transition={{ duration: 0.2 }}
  >
    <div className="h-48 overflow-hidden relative">
      <img src={webpage.image} alt={webpage.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute top-3 left-3">
        <span className="px-3 py-1 bg-primary/90 backdrop-blur-md text-white text-xs font-medium rounded-full">
          {webpage.type === "external" ? "External" : "Internal"}
        </span>
      </div>
    </div>
    <div className="p-4">
      <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-300">{webpage.title}</h3>
      <p className="text-muted-foreground text-sm mb-3 line-clamp-3">{webpage.description}</p>
      <div className="flex gap-2">
        <button 
          className="cosmic-button px-4 py-2 flex-1" 
          onClick={(e) => {
            e.stopPropagation();
            onViewWebpage(webpage);
          }}
        >
          {webpage.type === "external" ? "Visit Website" : "View Project"}
        </button>
        {webpage.type === "internal" && (
          <button 
            className="outline-gradient-button px-4 py-2 hidden md:block" 
            onClick={(e) => {
              e.stopPropagation();
              onShowSample(webpage);
            }}
          >
            Show Sample
          </button>
        )}
      </div>
    </div>
  </motion.div>
);

const ProjectModal = ({ project, isOpen, onClose, allProjects = [] }) => {
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

  if (!isOpen || !project) return null;

  // Get related projects (same type, excluding current project)
  const relatedProjects = allProjects
    .filter(p => p.type === project.type && p.id !== project.id)
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
                    src={project.image} 
                    alt={project.title || 'Project'}
                    className="w-full h-96 sm:h-[500px] object-cover rounded-xl shadow-2xl"
                  />
                </div>
                
                {/* Type Badge */}
                <div className="flex justify-center">
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                    {project.type === "external" ? "External Project" : "Internal Project"}
                  </span>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                      {project.type === "external" ? "External" : "Internal"}
                    </span>
                    <span className="text-muted-foreground text-sm">Project #{project.id}</span>
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">{project.title || 'Untitled Project'}</h2>
                  <p className="text-muted-foreground leading-relaxed text-lg sm:text-xl">{project.description || 'No description available.'}</p>
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href={project.route} 
                    target={project.type === "external" ? "_blank" : "_self"}
                    rel={project.type === "external" ? "noopener noreferrer" : ""}
                    className="flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl"
                  >
                    <Globe size={20} />
                    {project.type === "external" ? "Visit Website" : "View Project"}
                  </a>
                </div>
              </div>
            </div>

            {/* Related Projects Section */}
            {relatedProjects.length > 0 && (
              <div className="border-t border-border/50 pt-12">
                <div className="text-center mb-8">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2">More {project.type === "external" ? "External" : "Internal"} Projects</h3>
                  <p className="text-muted-foreground">Explore similar projects</p>
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
                          // This would need to be handled by the parent component
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
                              {relatedProject.type === "external" ? "External" : "Internal"}
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

const SampleOverlay = ({ webpage, onClose }) => (
  <div className="fixed top-0 right-0 h-full w-1/2 z-50 bg-background border-l border-border shadow-2xl animate-slide-in">
    <button className="absolute top-4 right-4 z-10 p-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300" onClick={onClose}>
      ✕
    </button>
    <div className="h-full w-full overflow-auto pt-16">
      {/* Here you would render the actual practice webpage, for now just a placeholder */}
      <iframe src={webpage.route} title={webpage.title} className="w-full h-full min-h-[80vh] border-0" />
    </div>
  </div>
);

export default function MoreProjectsMain() {
  const [sampleWebpage, setSampleWebpage] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleShowSample = (webpage) => setSampleWebpage(webpage);
  const handleCloseSample = () => setSampleWebpage(null);
  const handleViewWebpage = (webpage) => {
    if (webpage.type === "external") {
      window.open(webpage.route, "_blank", "noopener,noreferrer");
    } else {
      navigate(webpage.route);
    }
  };
  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <Metadata 
        pageTitle="More Projects"
        pageDescription="Discover additional projects and creative works. Explore different designs and implementations."
      />
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative flex flex-col">
        <div className="grid-bg" aria-hidden="true" />
        <MoreProjectsNavbar />
        <ThemeToggle />
        <Background showEffects={false} />
        <div className="pt-24 pb-8 px-4 flex-1">
          <div className="container mx-auto max-w-7xl">
            <div className="flex items-center gap-4 mb-8">
              <Link 
                to="/my-projects" 
                className="outline-gradient-button p-2"
              >
                <ArrowLeft size={20} />
              </Link>
              <div className="ribbon-section flex-1 mb-16 relative">
                <h1 className="text-3xl md:text-4xl font-bold text-center m-0">
                  More <span className="text-primary">Projects</span>
                </h1>
              </div>
            </div>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto px-4">
              Discover additional projects and creative works. Explore different designs and implementations.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 sm:px-0">
              {moreProjects.map((webpage) => (
                <PracticeCard
                  key={webpage.id}
                  webpage={webpage}
                  onShowSample={handleShowSample}
                  onViewWebpage={handleViewWebpage}
                  onOpenModal={handleOpenModal}
                />
              ))}
            </div>
            {sampleWebpage && <SampleOverlay webpage={sampleWebpage} onClose={handleCloseSample} />}
            <ProjectModal 
              project={selectedProject}
              isOpen={isModalOpen}
              onClose={handleCloseModal}
              allProjects={moreProjects}
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
} 