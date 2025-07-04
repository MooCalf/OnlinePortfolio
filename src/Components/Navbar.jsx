import { cn } from "@/lib/utils";
import { useEffect, useState, useCallback } from "react";
import { X, Menu } from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Projects", href: "/my-projects"},
    {name: "Contact", href: "#contact"},
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleScroll = useCallback(() => {
        setIsScrolled(window.scrollY > 10);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    const closeMenu = useCallback(() => setIsMenuOpen(false), []);

    const renderNavItem = useCallback((item, key) => {
        const commonClasses = "text-foreground/80 hover:text-primary transition-colors duration-300";
        
        if (item.href.startsWith('#')) {
            return (
                <a 
                    key={key} 
                    href={item.href} 
                    className={commonClasses}
                    onClick={closeMenu}
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
                onClick={closeMenu}
            >
                {item.name}
            </Link>
        );
    }, [closeMenu]);

    return (
        <nav className={cn(
            "fixed w-full z-40 transition-all duration-300",
            isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
        )}>
            <div className="container flex items-center justify-between">
                <a 
                    className="text-xl font-bold text-primary flex items-center" 
                    href="#hero"
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

                {/*Desktop Nav Bar*/}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item, key) => renderNavItem(item, key))}
                </div>

                {/* mobile nav */}
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