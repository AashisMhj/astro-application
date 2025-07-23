import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [mdx(), sitemap()],
	vite: {
    preview: {
      host: true,
      port: 3000,
      allowedHosts: ['ec2-54-161-15-209.compute-1.amazonaws.com','*']
    }
  }
});
