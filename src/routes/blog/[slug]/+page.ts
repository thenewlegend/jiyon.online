import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	try {
    // Import all posts
		const posts = import.meta.glob('/src/lib/posts/*.md');
    const path = `/src/lib/posts/${params.slug}.md`;

    // Find the one that matches our slug
    const post = await posts[path]();

		if (!post) {
			throw error(404, 'Post not found');
		}

		return {
			post: post as any,
      meta: (post as any).metadata
		};
	} catch (e) {
		throw error(404, 'Post not found');
	}
};
