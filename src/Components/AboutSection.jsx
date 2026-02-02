import { Briefcase, Code, User, Orbit, Brush, Download } from "lucide-react";
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

const BusinessCard = ({ index }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/projects/Logo Images/MooCalf Business Card.png';
    link.download = 'MooCalf Business Card.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      className="gradient-border p-6 card-hover relative group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 + index * 0.15, duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="relative">
        <img 
          src="/projects/Logo Images/MooCalf Business Card.png" 
          alt="MooCalf Business Card" 
          className="w-full h-auto object-contain rounded-lg"
        />
        <div className="absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 md:group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-200">
          <div className="bg-black/50 backdrop-blur-sm rounded-b-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-lg text-white">MooCalf Business Card</h4>
                <p className="text-white/90 text-sm">Download my business card for easy contact information.</p>
              </div>
              <button
                onClick={handleDownload}
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 active:bg-primary/20 transition-colors duration-200"
                title="Download Business Card"
              >
                <Download className="h-5 w-5 text-primary" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

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
              I'm a creative soul who loves art, games, and building online communities. I enjoy learning new things, helping others, and making friends along the way. When I'm not working, you'll find me drawing, gaming, or exploring new technology or softwares. <br/><br/>I have a passion for 3D modeling and graphic design, creating everything from environmental designs to realistic scaled planets. One of my biggest interests is astronomy and anything relating to space exploration. This has lead me into making my own fictional universe using my 3D Modeling skills and playing space related games <br/><br/> My experience in community management has taught me the importance of clear communication and fostering positive environments where people can connect and grow together. I'm always excited to collaborate on creative projects and share knowledge with others who share similar interests. I am always eager to connect and make new experiences!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">Get In Touch!</a>
              <a href="#contact" className="outline-gradient-button">Resume/CV available on request</a>
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
            <BusinessCard index={2} />
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
              <a href="#contact" className="outline-gradient-button">Resume/CV available on request</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};