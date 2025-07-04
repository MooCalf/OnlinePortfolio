import { Navbar } from "@/Components/Navbar";
import { ThemeToggle } from "@/Components/ThemeToggle";
import { Background } from "@/Components/Background";
import { HeroSection } from "../Components/HeroSection";
import { AboutSection } from "../Components/AboutSection";
import { SkillsSection } from "../Components/SkillsSection";
import { ProjectsSection } from "../Components/ProjectsSection";
import { ContactSection } from "../Components/ContactSection";
import { Footer } from "../Components/Footer";

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Navigation Bar */}
            <Navbar />
            {/* Theme Toggle */}
            <ThemeToggle />
            {/* Background Effects */}
            <Background />
            {/* Main Content */}
            <main>
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ProjectsSection />
                <ContactSection />
            </main>
            {/* Footer */}
            <Footer />
        </div>
    );
};