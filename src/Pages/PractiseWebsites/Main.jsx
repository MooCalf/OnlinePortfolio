import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ThemeToggle } from "@/Components/ThemeToggle";
import { Background } from "@/Components/Background";
import { Footer } from "@/Components/Footer";
import { ArrowLeft, X, Menu } from "lucide-react";
import { cn } from "@/lib/utils.js";
import { Metadata } from "@/Components/Metadata.jsx";

const practiceWebpages = [
  {
    id: 1,
    title: "MOOdern Notes App",
    description: "This is just a Demo Page. A modern notes page utilizing Glass like effects.",
    image: "/projects/Website Images/Glass.png",
    route: "/practise-websites/landing-page-redesign"
  }
];

const PractiseWebsitesNavbar = () => {
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

const PracticeCard = ({ webpage, onShowSample, onViewWebpage }) => (
  <div className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
    <div className="h-48 overflow-hidden relative">
      <img src={webpage.image} alt={webpage.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
    </div>
    <div className="p-4">
      <h3 className="font-semibold text-lg mb-2 line-clamp-2">{webpage.title}</h3>
      <p className="text-muted-foreground text-sm mb-3 line-clamp-3">{webpage.description}</p>
      <div className="flex gap-2">
        <button className="cosmic-button px-4 py-2" onClick={() => onViewWebpage(webpage)}>View Webpage</button>
        <button className="outline-gradient-button px-4 py-2 hidden md:block" onClick={() => onShowSample(webpage)}>Show Sample</button>
      </div>
    </div>
  </div>
);

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

export default function PractiseWebsitesMain() {
  const [sampleWebpage, setSampleWebpage] = useState(null);
  const navigate = useNavigate();

  const handleShowSample = (webpage) => setSampleWebpage(webpage);
  const handleCloseSample = () => setSampleWebpage(null);
  const handleViewWebpage = (webpage) => navigate(webpage.route);

  return (
    <>
      <Metadata 
        pageTitle="Practise Websites"
        pageDescription="Explore a collection of practice web designs and layouts. Click 'Show Sample' to preview a design, or 'View Webpage' to open it fully."
      />
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative flex flex-col">
        <div className="grid-bg" aria-hidden="true" />
        <PractiseWebsitesNavbar />
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
                  Practise <span className="text-primary">Websites</span>
                </h1>
              </div>
            </div>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto px-4">
              Explore a collection of practice web designs and layouts. Click "Show Sample" to preview a design, or "View Webpage" to open it fully.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 sm:px-0">
              {practiceWebpages.map((webpage) => (
                <PracticeCard
                  key={webpage.id}
                  webpage={webpage}
                  onShowSample={handleShowSample}
                  onViewWebpage={handleViewWebpage}
                />
              ))}
            </div>
            {sampleWebpage && <SampleOverlay webpage={sampleWebpage} onClose={handleCloseSample} />}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
} 