import { useEffect } from 'react';

export const GoogleAnalytics = () => {
  useEffect(() => {
    // Google Analytics 4 (GA4) - Your actual GA4 measurement ID
    const GA_MEASUREMENT_ID = 'G-F55VEHVPGM';
    
    // Load Google Analytics script (exactly as provided)
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    // Initialize gtag (exactly as provided)
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID);

    // Enhanced tracking for SPA (Single Page Application)
    const trackPageView = () => {
      gtag('config', GA_MEASUREMENT_ID, {
        page_title: document.title,
        page_location: window.location.href,
        page_path: window.location.pathname,
        send_page_view: true
      });
    };

    // Track initial page view
    trackPageView();

    // Track page views on route changes (for React Router)
    const handleRouteChange = () => {
      trackPageView();
    };

    // Listen for popstate events (back/forward navigation)
    window.addEventListener('popstate', handleRouteChange);

    // Track custom events for portfolio interactions
    const trackPortfolioEvents = () => {
      // Track project modal opens
      const projectCards = document.querySelectorAll('[data-project-card]');
      projectCards.forEach(card => {
        card.addEventListener('click', () => {
          const projectTitle = card.getAttribute('data-project-title');
          gtag('event', 'project_view', {
            project_title: projectTitle,
            event_category: 'Portfolio',
            event_label: 'Project Modal Open'
          });
        });
      });

      // Track external link clicks
      const externalLinks = document.querySelectorAll('a[href^="http"]');
      externalLinks.forEach(link => {
        link.addEventListener('click', () => {
          gtag('event', 'external_link_click', {
            link_url: link.href,
            link_text: link.textContent,
            event_category: 'Navigation',
            event_label: 'External Link'
          });
        });
      });

      // Track filter usage
      const filterButtons = document.querySelectorAll('[data-filter]');
      filterButtons.forEach(button => {
        button.addEventListener('click', () => {
          const filterValue = button.getAttribute('data-filter');
          gtag('event', 'filter_used', {
            filter_value: filterValue,
            event_category: 'Portfolio',
            event_label: 'Category Filter'
          });
        });
      });
    };

    // Initialize event tracking after a short delay
    setTimeout(trackPortfolioEvents, 1000);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return null;
};

export const GoogleSearchConsole = () => {
  useEffect(() => {
    // Google Search Console verification meta tag
    // Replace with your actual verification code
    const verificationCode = 'your-verification-code-here';
    
    const meta = document.createElement('meta');
    meta.name = 'google-site-verification';
    meta.content = verificationCode;
    document.head.appendChild(meta);

    return () => {
      const existingMeta = document.querySelector('meta[name="google-site-verification"]');
      if (existingMeta) {
        existingMeta.remove();
      }
    };
  }, []);

  return null;
};

// Utility function to track custom events
export const trackEvent = (eventName, parameters = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

// Utility function to track page views
export const trackPageView = (pagePath, pageTitle) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-F55VEHVPGM', {
      page_path: pagePath,
      page_title: pageTitle,
    });
  }
};
