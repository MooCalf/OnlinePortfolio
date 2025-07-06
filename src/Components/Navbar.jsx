import { cn } from "@/lib/utils.js";
import { useEffect, useState } from "react";
import { X, Menu } from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Experience", href: "/my-experiences"},
    {name: "Projects", href: "/my-projects"},
    {name: "Contact", href: "#contact"},
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const renderNavItem = (item, key, isMobile = false) => {
        const commonClasses = isMobile 
            ? "text-foreground/90 hover:text-primary transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-primary/10 w-full text-center"
            : "text-foreground/80 hover:text-primary transition-colors duration-300";
        
        if (item.href.startsWith('#')) {
            return (
                <a 
                    key={key} 
                    href={item.href} 
                    className={commonClasses}
                    onClick={() => setIsMenuOpen(false)}
                >
                    {item.name}
                </a>
            );
        }
        
        return (
            <Link 
                key={key} 
                to={item.href} 
                className={commonClasses}
                onClick={() => setIsMenuOpen(false)}
            >
                {item.name}
            </Link>
        );
    };

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
                        href="#hero"
                    >
                        <span className="relative z-10 flex items-center gap-3">
                            <img 
                                src="/projects/MooCalf_Main Logo.png" 
                                alt="MooCalf Logo" 
                                className="h-8 w-8 rounded-full"
                                loading="lazy"
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
                            {renderNavItem(item, key, true)}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};