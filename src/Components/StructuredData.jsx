import { useEffect } from 'react';

export const StructuredData = ({ type = 'website', pageData = {} }) => {
  useEffect(() => {
    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Base organization data
    const organizationData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "MooCalf",
      "alternateName": "MooCalf Portfolio",
      "url": "https://moocalf.com",
      "logo": "https://moocalf.com/projects/MooCalf_Main%20Logo.png",
      "image": "https://moocalf.com/projects/MooCalf_Main%20Logo.png",
      "description": "Creative individual specializing in 3D modeling, graphic design, and community management. Passionate about astronomy, art, and building engaging online communities.",
      "jobTitle": "3D Artist, Graphic Designer, Community Manager",
      "worksFor": {
        "@type": "Organization",
        "name": "Freelance"
      },
      "knowsAbout": [
        "3D Modeling",
        "Graphic Design", 
        "Community Management",
        "Blender",
        "Unreal Engine",
        "Discord Moderation",
        "Digital Art",
        "Astronomy",
        "Space Art",
        "Game Development",
        "Web Design"
      ],
      "sameAs": [
        "https://twitter.com/MooCalf_",
        "https://moocalf.com"
      ],
      "hasOccupation": [
        {
          "@type": "Occupation",
          "name": "3D Artist",
          "description": "Creating digital art, 3D models, and visualizations using Blender and Unreal Engine"
        },
        {
          "@type": "Occupation", 
          "name": "Community Manager",
          "description": "Managing Discord servers and online communities with 150,000+ members"
        },
        {
          "@type": "Occupation",
          "name": "Graphic Designer",
          "description": "Creating logos, branding, and visual designs for various projects"
        }
      ],
      "alumniOf": {
        "@type": "Organization",
        "name": "Self-taught Creative Professional"
      },
      "award": [
        {
          "@type": "Award",
          "name": "Community Management Excellence",
          "description": "Successfully managed multiple large Discord communities"
        }
      ]
    };

    // Website data
    const websiteData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "MooCalf Portfolio",
      "url": "https://moocalf.com",
      "description": "Creative portfolio showcasing 3D modeling, graphic design, and community management work",
      "author": {
        "@type": "Person",
        "name": "MooCalf"
      },
      "publisher": {
        "@type": "Person",
        "name": "MooCalf"
      },
      "inLanguage": "en-US",
      "copyrightYear": "2024",
      "dateCreated": "2024",
      "dateModified": "2024-12-19",
      "mainEntity": organizationData,
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://moocalf.com/?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    };

    // Portfolio/Collection data
    const portfolioData = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "MooCalf's Creative Portfolio",
      "url": "https://moocalf.com/my-projects",
      "description": "Collection of 3D modeling projects, digital art, and creative works",
      "mainEntity": {
        "@type": "ItemList",
        "name": "Creative Projects",
        "description": "3D modeling, graphic design, and digital art projects",
        "numberOfItems": 15,
        "itemListElement": [
          {
            "@type": "CreativeWork",
            "name": "Black Hole Visualization",
            "description": "3D rendered black hole with realistic physics simulation",
            "image": "https://moocalf.com/projects/Project_IMGs/BlackHole1_Project_IMGs.png",
            "creator": {
              "@type": "Person",
              "name": "MooCalf"
            },
            "genre": "3D Art",
            "keywords": "black hole, astronomy, 3D modeling, space art"
          },
          {
            "@type": "CreativeWork",
            "name": "Saturn Planet Model",
            "description": "Photorealistic 3D model of Saturn with detailed ring system",
            "image": "https://moocalf.com/projects/Project_IMGs/Saturn_Project_IMGs.png",
            "creator": {
              "@type": "Person",
              "name": "MooCalf"
            },
            "genre": "3D Art",
            "keywords": "saturn, planet, 3D modeling, astronomy"
          },
          {
            "@type": "CreativeWork",
            "name": "Earth Art Project",
            "description": "Stylized Earth visualization with artistic interpretation",
            "image": "https://moocalf.com/projects/Project_IMGs/EarthArt_Project_IMGs.png",
            "creator": {
              "@type": "Person",
              "name": "MooCalf"
            },
            "genre": "Digital Art",
            "keywords": "earth, planet art, digital illustration"
          }
        ]
      }
    };

    // Experience data
    const experienceData = {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "MooCalf's Professional Experience",
      "url": "https://moocalf.com/my-experiences",
      "description": "Community management experience across Discord servers and Reddit communities",
      "mainEntity": {
        "@type": "Person",
        "name": "MooCalf",
        "hasOccupation": [
          {
            "@type": "Occupation",
            "name": "Community Manager",
            "occupationLocation": {
              "@type": "Place",
              "name": "Online Communities"
            },
            "description": "Managed Discord servers with 150,000+ members for inZOI by KRAFTON and Blender Community",
            "skills": ["Discord Moderation", "Community Building", "Event Organization", "Content Moderation"]
          }
        ]
      }
    };

    // Choose data based on page type
    let structuredData;
    switch (type) {
      case 'home':
        structuredData = websiteData;
        break;
      case 'projects':
        structuredData = portfolioData;
        break;
      case 'experiences':
        structuredData = experienceData;
        break;
      default:
        structuredData = websiteData;
    }

    // Merge with page-specific data
    if (pageData && Object.keys(pageData).length > 0) {
      structuredData = { ...structuredData, ...pageData };
    }

    // Create and inject script
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Cleanup
    return () => {
      const scriptToRemove = document.querySelector('script[type="application/ld+json"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [type, pageData]);

  return null;
};
