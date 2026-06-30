import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { createRootApp } from './main';

export function render(url: string) {
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <StaticRouter location={url}>
        {createRootApp()}
      </StaticRouter>
    </React.StrictMode>
  );
  return html;
}
