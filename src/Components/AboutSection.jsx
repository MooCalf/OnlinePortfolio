import { Briefcase, Code, User } from "lucide-react";
import { useMemo } from "react";

const DivisionCard = ({ icon: Icon, title, description }) => (
  <div className="gradient-border p-6 card-hover">
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-full bg-primary/10">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <div className="text-left">
        <h4 className="font-semibold text-lg">{title}</h4>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  </div>
);

export const AboutSection = () => {
  const divisionCards = useMemo(() => [
    {
      icon: Code,
      title: "Community Management",
      description:
        "Managed and moderated multiple community Discord servers of sizes over 150,000+ people for inZOI by KRAFTON, Blender Community, ensuring a safe and engaging environment aligned with the communities guidelines."
    },
    {
      icon: User,
      title: "Player & Community Support",
      description:
        "Responded to community inquiries, escalated technical or behavioral issues to appropriate teams, and provided consistent support to players. Collaborated with other moderators and community managers to organize events, implement server improvements, and update moderation protocols."
    },
    {
      icon: Briefcase,
      title: "Moderation & Feedback",
      description:
        "Utilized tools such as Discord bots (e.g., MEE6, Dyno, AutoMod, Wick) to enforce rules, manage roles, and streamline moderation tasks. Collected community feedback and reported recurring issues to development and marketing teams to support ongoing improvement of the game and player experience."
    }
  ], []);

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Passionate Artist and Community Manager.</h3>
            <p className="text-muted-foreground">
              I have 5+ years of experience working in and with multiple different projects and programs, all driven by a genuine love for creative and collaborative communities. My journey has allowed me to develop a strong sense of adaptability, and a proactive approach to problem solving. I thrive in team environments, communicate clearly, and am always eager to learn and support others. My dedication, reliability, and positive attitude make me a pleasure to work with and a valuable asset to any team or project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch!
              </a>
              <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                CV Not Available Yet
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6"> 
            {divisionCards.map((card, index) => (
              <DivisionCard key={index} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};