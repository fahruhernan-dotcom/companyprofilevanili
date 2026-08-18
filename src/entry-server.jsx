import React from 'react';
import { renderToString } from 'react-dom/server';
import { App } from './App';
import { seoRoutes } from './config/seoConfig';

/**
 * Server-Side / Build-Time entry renderer for Static Site Generation (SSG)
 * @param {string} routeKey - Route identifier ('home', 'about', 'vanilla', 'coffee', 'quality', 'buyers')
 * @returns {{ html: string, meta: object }}
 */
export function render(routeKey = 'home') {
  const html = renderToString(<App initialRoute={routeKey} />);
  const meta = seoRoutes[routeKey] || seoRoutes.home;
  return { html, meta };
}
