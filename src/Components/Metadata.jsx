import { useEffect } from 'react';
import { siteMetadata, generateMetadata } from '@/lib/metadata.jsx';

export const Metadata = ({ pageTitle = "", pageDescription = "" }) => {
  const metadata = generateMetadata(pageTitle, pageDescription);

  useEffect(() => {
    // Update document title
    document.title = metadata.title;

    // Remove existing meta tags
    const existingMetaTags = document.querySelectorAll('meta[name^="og:"], meta[name^="twitter:"], meta[name="description"], meta[name="keywords"], meta[name="author"], meta[name="robots"]');
    existingMetaTags.forEach(tag => tag.remove());

    // Create and append meta tags
    const metaTags = [
      { name: 'description', content: metadata.description },
      { name: 'keywords', content: metadata.keywords },
      { name: 'author', content: metadata.author },
      { name: 'robots', content: metadata.robots },
      
      // Open Graph tags
      { property: 'og:type', content: metadata.openGraph.type },
      { property: 'og:locale', content: metadata.openGraph.locale },
      { property: 'og:url', content: metadata.openGraph.url },
      { property: 'og:title', content: metadata.openGraph.title },
      { property: 'og:description', content: metadata.openGraph.description },
      { property: 'og:site_name', content: metadata.openGraph.siteName },
      { property: 'og:image', content: metadata.openGraph.images[0].url },
      { property: 'og:image:width', content: metadata.openGraph.images[0].width },
      { property: 'og:image:height', content: metadata.openGraph.images[0].height },
      { property: 'og:image:alt', content: metadata.openGraph.images[0].alt },
      
      // Twitter Card tags
      { name: 'twitter:card', content: metadata.twitter.card },
      { name: 'twitter:site', content: metadata.twitter.site },
      { name: 'twitter:creator', content: metadata.twitter.creator },
      { name: 'twitter:title', content: metadata.twitter.title },
      { name: 'twitter:description', content: metadata.twitter.description },
      { name: 'twitter:image', content: metadata.twitter.images[0] },
    ];

    // Add additional meta tags
    metadata.additionalMetaTags.forEach(tag => {
      metaTags.push(tag);
    });

    // Create and append meta elements
    metaTags.forEach(tag => {
      const meta = document.createElement('meta');
      if (tag.property) {
        meta.setAttribute('property', tag.property);
      } else {
        meta.setAttribute('name', tag.name);
      }
      meta.setAttribute('content', tag.content);
      document.head.appendChild(meta);
    });

    // Update or create link tags
    metadata.additionalLinkTags.forEach(linkTag => {
      const existingLink = document.querySelector(`link[rel="${linkTag.rel}"]`);
      if (existingLink) {
        existingLink.setAttribute('href', linkTag.href);
      } else {
        const link = document.createElement('link');
        link.setAttribute('rel', linkTag.rel);
        link.setAttribute('href', linkTag.href);
        document.head.appendChild(link);
      }
    });

    // Cleanup function
    return () => {
      // Remove meta tags we added
      const addedMetaTags = document.querySelectorAll('meta[property^="og:"], meta[name^="twitter:"], meta[name="description"], meta[name="keywords"], meta[name="author"], meta[name="robots"]');
      addedMetaTags.forEach(tag => {
        if (tag.getAttribute('content') === metadata.description || 
            tag.getAttribute('content') === metadata.keywords ||
            tag.getAttribute('content') === metadata.author ||
            tag.getAttribute('content') === metadata.robots) {
          tag.remove();
        }
      });
    };
  }, [pageTitle, pageDescription]);

  return null; // This component doesn't render anything
}; 