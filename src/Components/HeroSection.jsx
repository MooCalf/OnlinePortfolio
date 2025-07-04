import { ArrowDown } from "lucide-react"
import { useCallback } from "react"

export const HeroSection = () => {
    const scrollToAbout = useCallback(() => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    }, []);

    return <section id="hero">
        <div className="relative min-h-screen flex flex-col items-center justify-center px-4">
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in">Hi, I'm</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1"> Moo</span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-3">Calf</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        I'm a creative individual specializing in 3D modeling and graphic design, with a passion for turning ideas into stunning works. My love for astronomy often inspires my art, blending cosmic themes with digital knowledge. I also have experience in community management and organization, where I focus on building engaging and collaborative spaces.
                    </p>

                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            View My Work
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <button 
            onClick={scrollToAbout}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce bg-transparent border-none cursor-pointer hover:opacity-80 transition-opacity duration-300"
            aria-label="Scroll to About section"
        >
            <span className="text-sm text-muted-foreground mb-2">Scroll</span>
            <ArrowDown className="h-5 w-5 text-primary" />
        </button>
    </section>
}