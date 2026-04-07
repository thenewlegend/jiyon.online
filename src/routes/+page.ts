import type { BlogPost } from '$lib/components/sections/BlogCard.svelte';

export const load = async () => {
    const postFiles = import.meta.glob('/src/lib/posts/*.md');
    
    const iterablePostFiles = Object.entries(postFiles);

    const allPosts = await Promise.all(
        iterablePostFiles.map(async ([path, resolver]) => {
            const post = await (resolver() as any);
            const slug = path.split('/').pop()?.replace('.md', '');
            
            return {
                id: slug, // Using slug as ID for compatibility
                slug: slug,
                ...post.metadata,
                link: `/blog/${slug}`
            } as BlogPost;
        })
    );

    // Sort by date (descending)
    return {
        posts: allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    };
};
