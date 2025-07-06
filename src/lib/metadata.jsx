export const siteMetadata = {
  title: "MooCalf Portfolio",
  description: "Creative individual specializing in 3D modeling, graphic design, and community management. Passionate about astronomy, art, and building engaging online communities.",
  author: "MooCalf",
  creator: "MooCalf",
  publisher: "MooCalf",
  siteName: "MooCalf Portfolio",
  url: "https://moocalf.com",
  siteUrl: "https://moocalf.com",
  image: "/projects/MooCalf_Main Logo.png",
  imageWidth: 512,
  imageHeight: 512,
  imageAlt: "MooCalf Logo ",
  locale: "en_US",
  type: "website",
  twitterHandle: "@MooCalf_",
  keywords: [
    "MooCalf",
    "3D Modeling",
    "Graphic Design",
    "Blender",
    "Community Management",
    "Portfolio",
    "Creative",
    "Digital Art",
    "Astronomy",
    "Unreal Engine",
    "Photoshop",
    "Discord",
    "Reddit"
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://moocalf.com",
    title: "MooCalf Portfolio",
    description: "Creative individual specializing in 3D modeling, graphic design, and community management. Passionate about astronomy, art, and building engaging online communities.",
    siteName: "MooCalf Portfolio",
    images: [
      {
        url: "/projects/MooCalf_Main Logo.png",
        width: 512,
        height: 512,
        alt: "MooCalf Logo - Creative Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@MooCalf_",
    creator: "@MooCalf_",
    title: "MooCalf Portfolio",
    description: "Creative individual specializing in 3D modeling, graphic design, and community management. Passionate about astronomy, art, and building engaging online communities.",
    images: ["/projects/MooCalf_Main Logo.png"],
  },
  additionalMetaTags: [
    {
      name: "theme-color",
      content: "#6C2BD7",
    },
    {
      name: "color-scheme",
      content: "light dark",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      name: "googlebot",
      content: "index, follow",
    },
  ],
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/projects/MooCalf_Main Logo.png",
    },
    {
      rel: "apple-touch-icon",
      href: "/projects/MooCalf_Main Logo.png",
    },
    {
      rel: "manifest",
      href: "/manifest.json",
    },
  ],
};

export const generateMetadata = (pageTitle = "", pageDescription = "") => {
  const title = pageTitle 
    ? `${pageTitle} | ${siteMetadata.title}`
    : siteMetadata.title;
  
  const description = pageDescription || siteMetadata.description;

  return {
    title,
    description,
    keywords: siteMetadata.keywords.join(", "),
    author: siteMetadata.author,
    creator: siteMetadata.creator,
    publisher: siteMetadata.publisher,
    robots: "index, follow",
    openGraph: {
      ...siteMetadata.openGraph,
      title,
      description,
    },
    twitter: {
      ...siteMetadata.twitter,
      title,
      description,
    },
    additionalMetaTags: siteMetadata.additionalMetaTags,
    additionalLinkTags: siteMetadata.additionalLinkTags,
  };
};

export const generatePageMetadata = {
  home: () => generateMetadata(
    "Home",
    "Creative individual specializing in 3D modeling, graphic design, and community management. Explore my portfolio of digital art and community projects."
  ),
  projects: () => generateMetadata(
    "Projects",
    "Explore my 3D modeling projects, digital art, and creative works. From Blender to Unreal Engine, discover my passion for space and astronomy-inspired art."
  ),
  experiences: () => generateMetadata(
    "Experiences",
    "Community management experience across Discord servers and Reddit communities. Learn about my work in building engaging online spaces."
  ),
  contact: () => generateMetadata(
    "Contact",
    "Get in touch with MooCalf for collaborations, projects, or just to say hello. Available for creative projects and community management opportunities."
  ),
}; 