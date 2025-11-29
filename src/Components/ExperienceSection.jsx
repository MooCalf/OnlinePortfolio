import { Briefcase, Code, User, Crown, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const experienceLogos = [
  "/projects/Experience_IMGs/inzoi_logo_Experience_IMG.png",
  "/projects/Experience_IMGs/blender_logo_Experience_IMG.png",
  "/projects/Experience_IMGs/rinzoi_logo_Experience_IMG.png",
  "/projects/Experience_IMGs/rinzoimods_logo_Experience_IMG.png",
  "/projects/Experience_IMGs/rlifesimulators_logo_Experience_IMG.png",
  "/projects/Experience_IMGs/invitetracker_logo_Experience.png",
];

const ExperienceCard = ({ icon: Icon, title, description, index }) => (
  <motion.div
    className="gradient-border p-4 card-hover"
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

export const ExperienceSection = () => {
  const experienceCards = [
    {
      icon: Crown,
      title: "Senior Moderator",
      description: "Managing large Discord communities with 150,000+ members, ensuring safe and engaging environments. Capable of managing administrative teams and tasks as well as training staff members"
    },
    {
      icon: Shield,
      title: "Community Management",
      description: "Leading moderation teams, organizing events, and building collaborative online spaces."
    },
    {
      icon: Code,
      title: "Technical Support",
      description: "Providing technical assistance and troubleshooting for community members and platforms."
    }
  ];

  return (
    <motion.section id="experience" className="py-12 px-4 relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto max-w-5xl">
        <div className="ribbon-section mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center m-0">
            My <span className="text-primary">Experience</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <motion.div className="grid grid-cols-1 gap-4"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } }
            }}
            viewport={{ once: true }}
          >
            {experienceCards.map((card, index) => (
              <ExperienceCard key={index} {...card} index={index} />
            ))}
          </motion.div>
          <motion.div className="space-y-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold">Community Leader & Creative Professional</h3>
            <p className="text-muted-foreground">
              With over 5 years of experience in Community Management and creative work, I've developed strong leadership skills and a passion for building engaging online spaces. My background includes managing large Discord servers, moderating Reddit communities, and creating digital art. I thrive in collaborative environments and love helping communities grow.
            </p>
            <p className="text-muted-foreground">
              I also have excelled in contracted positions where my expertise has been sought by organizations and individual clients, delivering specialized solutions and strategic guidance tailored to their unique needs and objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center">
              <Link to="/my-experiences" className="cosmic-button">View My Experiences</Link>
            </div>
          </motion.div>
        </div>
        <div className="mt-8 overflow-hidden py-2">
          <motion.div
            className="flex gap-12 items-center"
            animate={{
              x: [0, -112 * experienceLogos.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {[...experienceLogos, ...experienceLogos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0"
              >
                <img
                  src={logo}
                  alt="Experience logo"
                  className="w-16 h-16 rounded-full object-cover opacity-50"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}; 