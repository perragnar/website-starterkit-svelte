import sveltePreprocess from 'svelte-preprocess';
import path from 'path';

const production = !process.env.ROLLUP_WATCH;

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sveltePreprocess({
		sourceMap: !production,
	}),
	kit: {
		target: '#svelte',
		vite: {
			resolve: {
				alias: {
					$src: path.resolve('./src/')
				}
			}
		}
	}
};

export default config;
