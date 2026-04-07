<script lang="ts">
  import Heading from '../ui/Heading.svelte';
  import Text from '../ui/Text.svelte';

  export type BlogPost = {
    id: string;
    title: string;
    date: string;
    excerpt: string;
    readTime: string;
    link?: string;
  };

  let { post } = $props<{ post: BlogPost }>();
</script>

<a 
  href={post.link || '#'} 
  class="group block py-10 border-b border-[var(--color-base-muted)]/10 hover:bg-[var(--color-base-muted)]/5 transition-all duration-500 px-4 -mx-4 rounded-sm"
>
  <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
    <div class="space-y-4 max-w-2xl">
      <div class="flex items-center gap-4 text-[10px] uppercase font-bold tracking-[0.2em] text-[var(--color-base-muted)]">
        <span>{post.date}</span>
        <span class="w-1 h-1 bg-current rounded-full opacity-30"></span>
        <span>{post.readTime}</span>
      </div>
      
      <Heading 
        level={3} 
        text={post.title} 
        class="text-2xl lg:text-3xl group-hover:text-[var(--color-accent)] transition-colors duration-300" 
      />
      
      <Text text={post.excerpt} muted class="text-sm lg:text-base line-clamp-2" />
    </div>

    <div class="shrink-0">
      <div class="w-12 h-12 flex items-center justify-center border border-[var(--color-base-muted)]/20 rounded-full group-hover:border-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-base-dark)] transition-all duration-500 transform group-hover:rotate-45">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
      </div>
    </div>
  </div>
</a>
