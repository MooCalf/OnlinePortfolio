import { Lightbulb, LightbulbOff } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils.js";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };

    return (
        <button 
            className={cn(
                "fixed max-sm:hidden bottom-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
                "focus:outline-none"
            )}
            onClick={toggleTheme}
            aria-label="Toggle theme"
        >
            {isDarkMode ? (
                <Lightbulb className="h-6 w-6 text-yellow-300" />
            ) : (
                <LightbulbOff className="h-6 w-6 text-yellow-900" />
            )}
        </button>
    );
};