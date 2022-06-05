import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: "404.html"
		}),

		vite: {
			mode: process.env.VITE_MODE,
		},
	}
};

export default config;
