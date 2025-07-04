import { ArrowRight, ExternalLink, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { useMemo } from "react";

const projects = [
  {
    id: 1,
    title: "Planet",
    description: "A beautiful landing page app using React and Tailwind.",
    image: "/projects/image.png",
    tags: ["React", "TailwindCSS", "Supabase"],
    demoUrl: "#",
    artstationUrl: "https://www.artstation.com/dencypher",
  },
  {
    id: 2,
    title: "Planet",
    description: "A beautiful landing page app using React and Tailwind.",
    image: "/projects/image.png",
    tags: ["React", "TailwindCSS", "Supabase"],
    demoUrl: "#",
    artstationUrl: "https://www.artstation.com/dencypher",
  },
  {
    id: 3,
    title: "Planet",
    description: "A beautiful landing page app using React and Tailwind.",
    image: "/projects/image.png",
    tags: ["React", "TailwindCSS", "Supabase"],
    demoUrl: "#",
    artstationUrl: "https://www.artstation.com/dencypher",
  },
];

const ProjectCard = ({ project }) => (
  <div className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
    <div className="h-48 overflow-hidden">
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
    </div>    
    <div className="p-6">
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, i) => (
          <span
            key={i}
            className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary/20 text-secondary-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
      <div className="flex justify-between items-center">
        <div className="flex space-x-3">
          <a 
            href={project.demoUrl} 
            className="text-foreground/80 hover:text-primary transition-colors duration-300" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={20} />
          </a>
          <a 
            href={project.artstationUrl} 
            className="text-foreground/80 hover:text-primary transition-colors duration-300" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <Globe size={20} />
          </a>
        </div>    
      </div>  
    </div>  
  </div>
);

export const ProjectsSection = () => {
  const projectCards = useMemo(() => 
    projects.map((project) => (
      <ProjectCard key={project.id} project={project} />
    )), []
  );

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          The contents found below are a handful of some of my proudest work I have done since my journey through life
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectCards}
        </div>
        <div className="text-center mt-12">
          <Link className="cosmic-button w-fit flex items-center mx-auto gap-2" to="/my-projects">
            Check Out More <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};