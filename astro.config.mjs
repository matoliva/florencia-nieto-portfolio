import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
});
