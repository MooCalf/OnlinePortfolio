import { useState } from "react";
import { cn } from "@/lib/utils.js";
import { motion } from "framer-motion";

const skills = [
  { name: "Photoshop", level: 70, category: "hard", description: "Proficient in photo editing, compositing, and digital art creation." },
  { name: "Blender", level: 80, category: "hard", description: "Experienced in 3D modeling, sculpting, and animation for games and art." },
  { name: "Unreal Engine 5", level: 30, category: "hard", description: "Basic knowledge of real-time rendering and environment setup." },
  { name: "DaVinci Resolve", level: 20, category: "hard", description: "Familiar with video editing and color grading workflows." },
  { name: "Substance Painter", level: 60, category: "hard", description: "Texturing 3D models for realistic and stylized projects." },
  { name: "After Effects", level: 45, category: "hard", description: "Motion graphics and visual effects for video projects." },
  { name: "Figma", level: 60, category: "hard", description: "UI/UX design for web and mobile applications." },
  { name: "HTML/CSS", level: 70, category: "hard", description: "Building responsive and accessible web layouts." },
  { name: "JavaScript", level: 50, category: "hard", description: "Adding interactivity and dynamic features to websites." },
  { name: "Git/GitHub", level: 60, category: "hard", description: "Version control and collaborative project management." },
  { name: "OBS Studio", level: 75, category: "hard", description: "Live streaming and content creation for online platforms." },
  { name: "Discord Bots", level: 80, category: "hard", description: "Experienced in configuring and managing 3rd party Discord bots (e.g., MEE6, Dyno, Wick) for moderation and engagement." },
  { name: "Canva", level: 85, category: "hard", description: "Quick design for social media and marketing materials." },
  { name: "Team Leadership", level: 85, category: "soft", description: "Guiding teams to achieve goals and foster collaboration." },
  { name: "Communication", level: 90, category: "soft", description: "Clear, empathetic, and effective in all settings." },
  { name: "Problem Solving", level: 80, category: "soft", description: "Creative and analytical approach to overcoming challenges." },
  { name: "Adaptability", level: 95, category: "soft", description: "Thrives in dynamic environments and learns quickly." },
  { name: "Conflict Resolution", level: 75, category: "soft", description: "Mediating disputes and finding positive outcomes." },
  { name: "Time Management", level: 85, category: "soft", description: "Efficiently balances multiple projects and deadlines." },
  { name: "Attention to Detail", level: 80, category: "soft", description: "Ensures high quality and accuracy in all work." },
  { name: "Creativity", level: 90, category: "soft", description: "Brings fresh ideas and unique perspectives to projects." },
  { name: "Collaboration", level: 88, category: "soft", description: "Works well with diverse teams and stakeholders." },
  { name: "Empathy", level: 92, category: "soft", description: "Understands and supports the needs of others." },
  { name: "Public Speaking", level: 70, category: "soft", description: "Comfortable presenting to groups and leading discussions." },
];

const categories = ["all", "hard", "soft"];
const categoryLabels = { all: "All Skills", hard: "Hard Skills", soft: "Soft Skills" };

const SkillCard = ({ skill, index }) => (
  <motion.div
    className="skill-card p-6 rounded-lg shadow-xs card-hover"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1 + index * 0.08, duration: 0.5, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <div className="text-left mb-2 flex items-center justify-between">
      <h3 className="font-semibold text-lg">{skill.name}</h3>
      <span className="text-sm text-muted-foreground">{skill.level}%</span>
    </div>
    <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden mb-2">
      <div 
        className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
        style={{ width: skill.level + "%" }}
      />
    </div>
    {skill.description && (
      <div className="text-xs text-muted-foreground mt-1 italic">{skill.description}</div>
    )}
  </motion.div>
);

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSkills = activeCategory === "all"
    ? skills
    : skills.filter((skill) => skill.category === activeCategory);

  return (
    <motion.section id="skills" className="py-24 px-4 relative bg-secondary/30"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto max-w-5xl">
        <div className="ribbon-section mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center m-0">
            My <span className="text-primary">Skills</span>
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-12 relative glass-navbar-skillbar">
          <span className="glass-navbar-skillbar-border" />
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {categoryLabels[category]}
            </button>
          ))}
        </div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } }
          }}
          viewport={{ once: true }}
        >
          {filteredSkills.map((skill, key) => (
            <SkillCard key={key} skill={skill} index={key} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};