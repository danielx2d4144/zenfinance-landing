import React from 'react';
import ReactDOMServer from 'react-dom/server';
// import { StaticRouter } from 'react-router-dom/server';
import { createRootApp } from './main';

export function render(url: string) {
  // For React Router v7, we might need a different approach if StaticRouter is not directly available
  // This is a placeholder for the v7 SSR pattern
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      {createRootApp()}
    </React.StrictMode>
  );
  return html;
}
