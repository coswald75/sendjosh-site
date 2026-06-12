import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://sendjosh.org',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
