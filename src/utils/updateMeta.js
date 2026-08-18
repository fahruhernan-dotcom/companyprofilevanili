import { seoRoutes, siteBaseUrl } from '../config/seoConfig';

/**
 * Updates DOM meta tags and Schema.org JSON-LD dynamically on route change
 */
export function updateDocumentMeta(routeKey) {
  if (typeof document === 'undefined') return;

  const meta = seoRoutes[routeKey] || seoRoutes.home;

  // Title
  document.title = meta.title;

  // Helper to set or create meta tag
  const setMetaTag = (attrName, attrValue, content) => {
    let el = document.querySelector(`meta[${attrName}="${attrValue}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attrName, attrValue);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  // Helper to set or create link tag
  const setLinkTag = (rel, href) => {
    let el = document.querySelector(`link[rel="${rel}"]`);
    if (!el) {
      el = document.createElement('link');
      el.setAttribute('rel', rel);
      document.head.appendChild(el);
    }
    el.setAttribute('href', href);
  };

  // Standard Meta Tags
  setMetaTag('name', 'description', meta.description);
  setMetaTag('name', 'keywords', meta.keywords);
  setMetaTag('name', 'title', meta.title);
  setLinkTag('canonical', meta.canonical);

  // Open Graph
  setMetaTag('property', 'og:title', meta.title);
  setMetaTag('property', 'og:description', meta.description);
  setMetaTag('property', 'og:url', meta.canonical);
  if (meta.ogImage) {
    setMetaTag('property', 'og:image', meta.ogImage);
  }

  // Twitter Card
  setMetaTag('property', 'twitter:title', meta.title);
  setMetaTag('property', 'twitter:description', meta.description);
  if (meta.ogImage) {
    setMetaTag('property', 'twitter:image', meta.ogImage);
  }

  // Schema.org JSON-LD structured data
  if (meta.schema) {
    let jsonLdScript = document.querySelector('script[type="application/ld+json"]#dynamic-schema');
    if (!jsonLdScript) {
      jsonLdScript = document.createElement('script');
      jsonLdScript.type = 'application/ld+json';
      jsonLdScript.id = 'dynamic-schema';
      document.head.appendChild(jsonLdScript);
    }
    jsonLdScript.textContent = JSON.stringify(meta.schema, null, 2);
  }
}
