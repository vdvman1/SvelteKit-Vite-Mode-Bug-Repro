import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: "404.html"
		}),

		vite: {
			mode: "custom",
		},
	}
};

export default config;
