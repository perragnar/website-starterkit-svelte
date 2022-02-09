import sveltePreprocess from 'svelte-preprocess';
import path from 'path';
import adapter from '@sveltejs/adapter-static';

const production = !process.env.ROLLUP_WATCH;

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: sveltePreprocess({
    sourceMap: !production,
  }),
  kit: {
    adapter: adapter(),
    vite: {
      resolve: {
        alias: {
          $src: path.resolve('./src/'),
        },
      },
    },
  },
};

export default config;
