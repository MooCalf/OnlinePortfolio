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
      { property: 'og:determiner', content: metadata.openGraph.determiner },
      
      // Open Graph Images (multiple images)
      ...metadata.openGraph.images.map((image, index) => [
        { property: `og:image`, content: image.url },
        { property: `og:image:width`, content: image.width },
        { property: `og:image:height`, content: image.height },
        { property: `og:image:alt`, content: image.alt },
        { property: `og:image:type`, content: image.type }
      ]).flat(),
      
      // Open Graph Article tags
      ...(metadata.openGraph.article ? [
        { property: 'og:article:published_time', content: metadata.openGraph.article.publishedTime },
        { property: 'og:article:modified_time', content: metadata.openGraph.article.modifiedTime },
        { property: 'og:article:author', content: metadata.openGraph.article.author },
        { property: 'og:article:section', content: metadata.openGraph.article.section },
        ...metadata.openGraph.article.tag.map(tag => ({ property: 'og:article:tag', content: tag }))
      ] : []),
      
      // Open Graph Profile tags
      ...(metadata.openGraph.profile ? [
        { property: 'og:profile:first_name', content: metadata.openGraph.profile.firstName },
        { property: 'og:profile:last_name', content: metadata.openGraph.profile.lastName },
        { property: 'og:profile:username', content: metadata.openGraph.profile.username },
        { property: 'og:profile:gender', content: metadata.openGraph.profile.gender }
      ] : []),
      
      // Twitter Card tags
      { name: 'twitter:card', content: metadata.twitter.card },
      { name: 'twitter:site', content: metadata.twitter.site },
      { name: 'twitter:creator', content: metadata.twitter.creator },
      { name: 'twitter:title', content: metadata.twitter.title },
      { name: 'twitter:description', content: metadata.twitter.description },
      
      // Twitter Images
      ...metadata.twitter.images.map((image, index) => [
        { name: `twitter:image`, content: image.url },
        { name: `twitter:image:alt`, content: image.alt }
      ]).flat(),
      
      // Twitter App tags
      ...(metadata.twitter.app ? [
        { name: 'twitter:app:name:iphone', content: metadata.twitter.app.name.iphone },
        { name: 'twitter:app:name:ipad', content: metadata.twitter.app.name.ipad },
        { name: 'twitter:app:name:googleplay', content: metadata.twitter.app.name.googleplay },
        { name: 'twitter:app:id:iphone', content: metadata.twitter.app.id.iphone },
        { name: 'twitter:app:id:ipad', content: metadata.twitter.app.id.ipad },
        { name: 'twitter:app:id:googleplay', content: metadata.twitter.app.id.googleplay },
        { name: 'twitter:app:url:iphone', content: metadata.twitter.app.url.iphone },
        { name: 'twitter:app:url:ipad', content: metadata.twitter.app.url.ipad },
        { name: 'twitter:app:url:googleplay', content: metadata.twitter.app.url.googleplay }
      ] : [])
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