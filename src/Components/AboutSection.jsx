import { Briefcase, Code, User, Orbit, Brush } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const DivisionCard = ({ icon: Icon, title, description, index }) => (
  <motion.div
    className="gradient-border p-6 card-hover"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1 + index * 0.15, duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-full bg-primary/10">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <div className="text-left">
        <h4 className="font-semibold text-lg">{title}</h4>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  </motion.div>
);

export const AboutSection = () => {
  const divisionCards = [
    {
      icon: Orbit,
      title: "Astronomy",
      description: "I love stargazing and learning about the universe. Space inspires my creativity and curiosity."
    },
    {
      icon: Brush,
      title: "3D Modeling & Graphic Design",
      description: "I enjoy creating digital art, from 3D models to eye-catching graphics. It's my favorite way to express ideas."
    }
  ];

  return (
    <motion.section id="about" className="py-24 px-4 relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto max-w-5xl">
        <div className="ribbon-section mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center m-0">
            About <span className="text-primary">Me</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold">Hey, I'm MooCalf!</h3>
            <p className="text-muted-foreground">
              I'm a creative soul who loves art, games, and building online communities. I enjoy learning new things, helping others, and making friends along the way. When I'm not working, you'll find me drawing, gaming, or exploring new tech. Let's connect!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">Get In Touch!</a>
              <a href="" className="outline-gradient-button">CV Not Available Yet</a>
            </div>
          </motion.div>
          <motion.div className="grid grid-cols-1 gap-6"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } }
            }}
            viewport={{ once: true }}
          >
            {divisionCards.map((card, index) => (
              <DivisionCard key={index} {...card} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export const ExperienceSection = () => {
  const divisionCards = [
    {
      icon: Code,
      title: "Community Management",
      description: "Managed and moderated multiple community Discord servers of sizes over 150,000+ people for inZOI by KRAFTON, Blender Community, ensuring a safe and engaging environment aligned with the communities guidelines."
    },
    {
      icon: User,
      title: "Player & Community Support",
      description: "Responded to community inquiries, escalated technical or behavioral issues to appropriate teams, and provided consistent support to players. Collaborated with other moderators and community managers to organize events, implement server improvements, and update moderation protocols."
    },
    {
      icon: Briefcase,
      title: "Moderation & Feedback",
      description: "Utilized tools such as Discord bots (e.g., MEE6, Dyno, AutoMod, Wick) to enforce rules, manage roles, and streamline moderation tasks. Collected community feedback and reported recurring issues to development and marketing teams to support ongoing improvement of the game and player experience."
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <div className="ribbon-section mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center m-0">
            <span className="text-primary">Experience</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-1 gap-6"> 
            {divisionCards.map((card, index) => (
              <DivisionCard key={index} {...card} />
            ))}
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Passionate Artist and Community Manager.</h3>
            <p className="text-muted-foreground">
              I have 5+ years of experience working in and with multiple different projects and programs, all driven by a genuine love for creative and collaborative communities. My journey has allowed me to develop a strong sense of adaptability, and a proactive approach to problem solving. I thrive in team environments, communicate clearly, and am always eager to learn and support others. My dedication, reliability, and positive attitude make me a pleasure to work with and a valuable asset to any team or project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <Link to="/my-experiences" className="cosmic-button">View My Experiences</Link>
              <a href="" className="outline-gradient-button">CV Not Available Yet</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};