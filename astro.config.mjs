import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { VitePWA } from 'vite-plugin-pwa';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap()],
  site: 'https://mblcdev.com/',
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Mblcdev',
        short_name: 'Mblcdev',
        description:
          'Desarrollador web freelancer con experiencia en el desarrollo de páginas web y sistemas de administración.',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'mblcdev-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'mblcdev-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
