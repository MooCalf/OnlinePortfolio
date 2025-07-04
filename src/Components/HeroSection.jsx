import { ArrowDown } from "lucide-react"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const TypewriterText = ({ text, className }) => {
    const [displayText, setDisplayText] = useState('');
    const [isTyping, setIsTyping] = useState(true);
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        let currentIndex = 0;
        let typingInterval;
        let cursorInterval;

        const typeText = () => {
            if (isTyping) {
                if (currentIndex <= text.length) {
                    setDisplayText(text.slice(0, currentIndex));
                    currentIndex++;
                } else {
                    setIsTyping(false);
                    setTimeout(() => {
                        setIsTyping(true);
                        currentIndex = 0;
                        setDisplayText('');
                    }, 2000);
                }
            }
        };

        const blinkCursor = () => {
            setShowCursor(prev => !prev);
        };

        typingInterval = setInterval(typeText, 150);
        cursorInterval = setInterval(blinkCursor, 500);

        return () => {
            clearInterval(typingInterval);
            clearInterval(cursorInterval);
        };
    }, [text, isTyping]);

    return (
        <motion.span className={className}>
            {displayText}
            {showCursor && <motion.span 
                className="inline-block w-0.5 h-8 bg-primary ml-1"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.5, repeat: Infinity }}
            />}
        </motion.span>
    );
};

export const HeroSection = () => {
    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return <motion.section id="hero"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative"
    >
        <div className="relative min-h-screen flex flex-col items-center justify-center px-4 z-10">
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <motion.h1
                        className="text-4xl md:text-6xl font-bold tracking-tight"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
                    >
                        <span>Hi, I'm</span>
                        <TypewriterText text=" MooCalf" className="text-primary" />
                    </motion.h1>
                    <motion.p
                        className="text-lg md:text-xl text-muted-foreground max-2xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
                    >
                        I'm a creative individual specializing in 3D modeling and graphic design, with a passion for turning ideas into stunning works. My love for astronomy often inspires my art, blending cosmic themes with digital knowledge. I also have experience in community management and organization, where I focus on building engaging and collaborative spaces.
                    </motion.p>
                    <motion.div
                        className="pt-4"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
                    >
                        <a href="#projects" className="cosmic-button">
                            View My Work
                        </a>
                    </motion.div>
                </div>
            </div>
        </div>
        <motion.button 
            onClick={scrollToAbout}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center bg-transparent border-none cursor-pointer hover:opacity-80 transition-opacity duration-300 z-50"
            aria-label="Scroll to About section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.7, type: "spring", stiffness: 120 }}
            whileHover={{ scale: 1.1 }}
        >
            <span className="text-sm text-muted-foreground mb-2">Scroll</span>
            <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
                <ArrowDown className="h-5 w-5 text-primary" />
            </motion.div>
        </motion.button>
    </motion.section>
}