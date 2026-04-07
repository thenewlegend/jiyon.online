import adapter from '@sveltejs/adapter-auto';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Add .md extension to Svelte project
	extensions: ['.svelte', '.md'],

	preprocess: [
		mdsvex({
			extensions: ['.md']
		})
	],

	compilerOptions: {
		runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules') ? undefined : true)
	},

	kit: {
		adapter: adapter()
	}
};

export default config;
