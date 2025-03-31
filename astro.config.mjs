import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

import mdx from "@astrojs/mdx";

import { astroExpressiveCode } from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  integrations: [astroExpressiveCode({
    themes: ['catppuccin-mocha', 'catppuccin-latte'],
    styleOverrides: {
      textMarkers: {
        markHue: '310',
        borderOpacity: '75%',
        backgroundOpacity: '15%'
      }
    }
  }), mdx()],
});