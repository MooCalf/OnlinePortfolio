import { ArrowRight, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Kronis - UE5 Experience",
    description: "A stunning Unreal Engine 5 project showcasing advanced 3D environment design and lighting techniques.",
    image: "/projects/Featured_IMGs/Kronis_UE5_Experience_IMG.png",
    tags: ["Unreal Engine 5", "3D Environment", "Lighting"],
    artstationUrl: "https://www.artstation.com/dencypher",
  },
  {
    id: 2,
    title: "Oberon - Blender Experience",
    description: "An impressive Blender project demonstrating character design and 3D modeling expertise.",
    image: "/projects/Featured_IMGs/Oberon_Blender_Experience_IMG.png",
    tags: ["Blender", "3D Modeling", "Environment"],
    artstationUrl: "https://www.artstation.com/dencypher",
  },
  {
    id: 3,
    title: "Kronis - Blender Experience",
    description: "A detailed Blender project showcasing environment modeling and texturing skills.",
    image: "/projects/Featured_IMGs/Kronis_Blender_Experience_IMG.png",
    tags: ["Blender", "Environment", "Texturing"],
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
  const navigate = useNavigate();
  
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <div className="ribbon-section mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center m-0">
            Featured <span className="text-primary">Projects</span>
          </h2>
        </div>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          The contents found below are a handful of some of my proudest work I have done since my journey through life. They highlight my deep interest in astronomy and the boundless limits of space
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="text-center mt-12">
          <button 
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            onClick={() => {
              navigate("/my-projects");
              setTimeout(() => window.scrollTo(0, 0), 100);
            }}
          >
            Check Out More <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};