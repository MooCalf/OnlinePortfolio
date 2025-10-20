import { useEffect } from 'react';

export const GoogleAnalytics = () => {
  useEffect(() => {
    // Google Analytics 4 (GA4) - Replace with your actual GA4 measurement ID
    const GA_MEASUREMENT_ID = 'G-F55VEHVPGM'; // Replace with your actual GA4 ID
    
    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID, {
      page_title: document.title,
      page_location: window.location.href,
      send_page_view: true
    });

    // Track page views on route changes
    const handleRouteChange = () => {
      gtag('config', GA_MEASUREMENT_ID, {
        page_title: document.title,
        page_location: window.location.href,
        send_page_view: true
      });
    };

    // Listen for popstate events (back/forward navigation)
    window.addEventListener('popstate', handleRouteChange);

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
