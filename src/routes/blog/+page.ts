import { fetchPosts } from '$lib/utils/posts';

export const load = async () => {
    return {
        posts: await fetchPosts()
    };
};
