import { Navbar } from "@/Components/Navbar";
import { ThemeToggle } from "@/Components/ThemeToggle";
import { Background } from "@/Components/Background";
import { HeroSection } from "@/Components/HeroSection";
import { AboutSection } from "@/Components/AboutSection";
import { ExperienceSection } from "@/Components/ExperienceSection";
import { ProjectsSection } from "@/Components/ProjectsSection";
import { ContactSection } from "@/Components/ContactSection";
import { Footer } from "@/Components/Footer";
import { Metadata } from "@/Components/Metadata.jsx";
import { StructuredData } from "@/Components/StructuredData.jsx";

export const Home = () => (
  <>
    <Metadata 
      pageTitle="Home"
      pageDescription="Creative individual specializing in 3D modeling, graphic design, and community management. Explore my portfolio of digital art and community projects."
    />
    <StructuredData type="home" />
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      <div className="grid-bg" aria-hidden="true" />
      <Navbar />
      <ThemeToggle />
      <Background />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  </>
);