import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';
import sveltePreprocess from 'svelte-preprocess';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      preprocess: sveltePreprocess({
        postcss: {},
      }),
    }),
  ],
  resolve: {
    alias: [{ find: 'src', replacement: path.resolve(__dirname, 'src') }],
  },
});
