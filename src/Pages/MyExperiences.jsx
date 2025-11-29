import { ThemeToggle } from "@/Components/ThemeToggle";
import { Background } from "@/Components/Background";
import { Footer } from "@/Components/Footer";
import { ArrowLeft, Users, ExternalLink, Shield, Crown, X, Menu } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils.js";
import { useEffect, useState } from "react";
import { Metadata } from "@/Components/Metadata.jsx";
import { StructuredData } from "@/Components/StructuredData.jsx";

const discordServers = [
  {
    id: 1,
    name: "InZOI",
    description: "Welcome to the official inZOI Discord Server! We invite inZOI and life sim fans to chat, share and find the latest news",
    memberCount: "150,000+",
    image: "/projects/Experience_IMGs/inzoi_banner_Experience_IMG.png",
    logo: "/projects/Experience_IMGs/inzoi_logo_Experience_IMG.png",
    inviteUrl: "https://discord.gg/inzoi",
    role: "Senior Moderator",
    features: ["Game Updates", "Community Events", "Player Support"],
    onlineCount: "12,450",
    boostLevel: 3
  },
  {
    id: 2,
    name: "Blender Community",
    description: "Blender 3D, CG, and VFX community for artists, designers, and game developers to chat, create, and collaborate together.",
    memberCount: "160,000+",
    image: "/projects/Experience_IMGs/blender_banner_Experience_IMG.png",
    logo: "/projects/Experience_IMGs/blender_logo_Experience_IMG.png",
    inviteUrl: "https://discord.gg/yfj6jbd2",
    role: "Chat Moderator",
    features: ["3D Art Showcase", "Tutorials", "Workshop Events", "Technical Support"],
    onlineCount: "8,230",
    boostLevel: 3
  },
  {
    id: 3,
    name: "r/inZOI",
    description: "Welcome to the Official fan-made Reddit page! We invite inZOI and life simulation fans to chat, share and find the latest news.",
    memberCount: "71,000+",
    image: "/projects/Experience_IMGs/rinzoi_banner_Experience_IMG.png",
    logo: "/projects/Experience_IMGs/rinzoi_logo_Experience_IMG.png",
    inviteUrl: "https://www.reddit.com/r/inZOI/",
    role: "Head Moderator",
    features: ["Community Discussions", "Game Updates", "Player Guides", "Fan Content"],
    onlineCount: "1,200",
    boostLevel: 0
  },
  {
    id: 4,
    name: "r/inZOIMods",
    description: "A subreddit for the discussion and use of mods for the game, inZOI, a life simulation game where players become gods within the game, allowing them to change everything as they wish and experience endless new stories in various forms of life.",
    memberCount: "2,000+",
    image: "/projects/Experience_IMGs/rinzoimods_banner_Experience_IMG.png",
    logo: "/projects/Experience_IMGs/rinzoimods_logo_Experience_IMG.png",
    inviteUrl: "https://www.reddit.com/r/inZOIMods/",
    role: "Owner",
    features: ["Mod Development", "Resource Sharing", "Technical Support", "Community Events"],
    onlineCount: "450",
    boostLevel: 0
  },
  {
    id: 5,
    name: "r/LifeSimulators",
    description: "A place to discuss life simulators, by fans for fans. We discuss games like The Sims, inZOI, Paralives and many more!",
    memberCount: "23,000+",
    image: "/projects/Experience_IMGs/rlifesimulators_banner__Experience_IMG.png",
    logo: "/projects/Experience_IMGs/rlifesimulators_logo_Experience_IMG.png",
    inviteUrl: "https://www.reddit.com/r/LifeSimulators/",
    role: "Moderator",
    features: ["Game Discussions", "Community Events", "News & Updates", "Fan Content"],
    onlineCount: "850",
    boostLevel: 0
  },
  {
    id: 6,
    name: "Invite Tracker Support",
    description: "Invite Tracker is a powerful Discord bot which offers many features such as invite tracking, giveaways, messages tracking and much more.",
    memberCount: "47,000+",
    image: "/projects/Experience_IMGs/invitetracker_banner_Experience.png",
    logo: "/projects/Experience_IMGs/invitetracker_logo_Experience.png",
    inviteUrl: "https://discord.gg/2DyfDXR92G",
    role: "Junior Moderator",
    features: ["User Support", "Bot Support", "Bot Updates"],
    onlineCount: "3,200",
    boostLevel: 3
  },

];

const MyExperiencesNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Projects", href: "/my-projects" },
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
    } else if (href === "/my-projects") {
      navigate("/my-projects");
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

const ServerModal = ({ server, isOpen, onClose, allServers, onServerChange }) => {
  if (!isOpen || !server) return null;
  const otherServers = allServers.filter(s => s.id !== server.id).slice(0, 6);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto scrollbar-hide">
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-background rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto scrollbar-hide">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
        >
          <X size={20} />
        </button>
        <div className="flex flex-col md:flex-row h-full">
          <div className="md:w-2/3 p-6 md:p-8 flex flex-col items-center">
            <div className="mb-6 w-full">
              <div className="overflow-hidden rounded-xl mb-4">
                <img 
                  src={server.image} 
                  alt={server.name} 
                  className="w-full h-40 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={server.logo} 
                  alt={server.name + ' logo'} 
                  className="h-16 w-16 rounded-full border-4 border-background -mt-12 bg-background object-cover shadow-lg"
                />
                <div>
                  <h2 className="text-2xl font-bold">{server.name}</h2>
                  <div className="flex items-center gap-2 mt-1">
                    <Users size={16} className="text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{server.memberCount} members</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-2">
                {server.role === "Owner" && <Crown className="h-5 w-5 text-red-500" />}
                {server.role === "Community Manager" && <Crown className="h-5 w-5 text-yellow-400" />}
                {server.role === "Head Moderator" && <Shield className="h-5 w-5 text-orange-500" />}
                {server.role === "Senior Moderator" && <Shield className="h-5 w-5 text-blue-400" />}
                {server.role === "Chat Moderator" && <Shield className="h-5 w-5 text-green-400" />}
                {server.role === "Moderator" && <Shield className="h-5 w-5 text-green-400" />}
                <span className="text-xs text-muted-foreground font-medium">{server.role}</span>
                {server.boostLevel > 0 && (
                  <span className="ml-2 px-2 py-1 rounded-full bg-purple-500/80 text-xs text-white">Level {server.boostLevel} Boost</span>
                )}
              </div>
              <p className="text-muted-foreground text-base mb-4">{server.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {server.features.map((feature, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
              <a 
                href={server.inviteUrl} 
                className={`flex items-center gap-2 text-base mt-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  server.name.startsWith('r/') 
                    ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105' 
                    : 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                }`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Click to Join
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
          <div className="md:w-1/3 p-6 md:p-8 border-t md:border-t-0 md:border-l border-border">
            <h3 className="text-lg font-semibold mb-4">Other Communities</h3>
            <div className="grid grid-cols-2 gap-3">
              {otherServers.map((otherServer) => (
                <div 
                  key={otherServer.id}
                  className="group cursor-pointer"
                  onClick={() => onServerChange(otherServer)}
                >
                  <div className="aspect-square overflow-hidden rounded-lg">
                    <img 
                      src={otherServer.image} 
                      alt={otherServer.name} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-xs font-medium mt-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {otherServer.name}
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

const ServerCard = ({ server, onClick }) => (
  <div className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border border-border cursor-pointer" onClick={() => onClick(server)}>
    <div className="h-48 overflow-hidden relative rounded-t-xl">
      <img 
        src={server.image} 
        alt={server.name} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
      {server.boostLevel > 0 && (
        <div className="absolute top-3 left-3">
          <div className="flex items-center gap-1 bg-purple-500/80 backdrop-blur-sm rounded-full px-2 py-1">
            <span className="text-xs text-white">Level {server.boostLevel}</span>
          </div>
        </div>
      )}
      <div className="absolute top-3 right-3">
        {server.role === "Owner" && <Crown className="h-5 w-5 text-red-500" />}
        {server.role === "Community Manager" && <Crown className="h-5 w-5 text-yellow-400" />}
        {server.role === "Head Moderator" && <Shield className="h-5 w-5 text-orange-500" />}
        {server.role === "Senior Moderator" && <Shield className="h-5 w-5 text-blue-400" />}
        {server.role === "Chat Moderator" && <Shield className="h-5 w-5 text-green-400" />}
        {server.role === "Moderator" && <Shield className="h-5 w-5 text-green-400" />}
      </div>
    </div>    
    <div className="p-6">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-semibold line-clamp-1">{server.name}</h3>
        <div className="flex items-center gap-1 text-muted-foreground">
          <Users size={16} />
          <span className="text-sm">{server.memberCount}</span>
        </div>
      </div>
      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{server.description}</p>
      <div className="flex flex-wrap gap-1 mb-4">
        {server.features.slice(0, 3).map((feature, index) => (
          <span
            key={index}
            className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
          >
            {feature}
          </span>
        ))}
        {server.features.length > 3 && (
          <span className="px-2 py-1 text-xs font-medium bg-secondary/20 text-secondary-foreground rounded-full">
            +{server.features.length - 3} more
          </span>
        )}
      </div>
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground font-medium">{server.role}</span>
        <a 
          href={server.inviteUrl} 
          className={`flex items-center gap-2 text-sm px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
            server.name.startsWith('r/') 
              ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105' 
              : 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
          }`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Click to Join
          <ExternalLink size={14} />
        </a>
      </div>
    </div>  
  </div>
);

export const MyExperiences = () => {
  const [selectedServer, setSelectedServer] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleServerClick = (server) => {
    setSelectedServer(server);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedServer(null);
  };
  const handleOtherServerClick = (otherServer) => {
    setSelectedServer(otherServer);
    setIsModalOpen(true);
  };
  return (
    <>
      <Metadata 
        pageTitle="Experiences"
        pageDescription="Community management experience across Discord servers and Reddit communities. Learn about my work in building engaging online spaces."
      />
      <StructuredData type="experiences" />
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
        <div className="grid-bg" aria-hidden="true" />
        <MyExperiencesNavbar />
        <ThemeToggle />
        <Background />
      <div className="pt-24 pb-8 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center gap-4 mb-8">
            <Link 
              to="/" 
              className="outline-gradient-button p-2"
            >
              <ArrowLeft size={20} />
            </Link>
            <div className="ribbon-section flex-1 mb-16">
              <h1 className="text-3xl md:text-4xl font-bold text-center m-0">
                My <span className="text-primary">Experiences</span>
              </h1>
            </div>
          </div>
          <p className="text-muted-foreground max-w-2xl mb-12">
            Discover the Discord communities and Reddit subreddits I help moderate and manage. Each community represents a unique experience in community building, moderation, and fostering engaging environments.
          </p>
        </div>
      </div>
      <div className="px-4 pb-24">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {discordServers.map((server) => (
              <ServerCard key={server.id} server={server} onClick={handleServerClick} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
      <ServerModal
        server={selectedServer}
        isOpen={isModalOpen}
        onClose={closeModal}
        allServers={discordServers}
        onServerChange={handleOtherServerClick}
      />
    </div>
    </>
  );
}; 