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
  class="group block shrink-0 snap-start w-[300px] lg:w-[420px] p-6 lg:p-8 border border-[var(--color-base-muted)]/10 bg-[var(--color-base-dark)] hover:border-[var(--color-accent)]/40 transition-all duration-500 rounded-sm flex flex-col h-full"
>
  <div class="flex-grow space-y-4 lg:space-y-6">
    <div class="flex items-center gap-4 text-[10px] uppercase font-bold tracking-[0.2em] text-[var(--color-base-muted)] opacity-60">
      <span>{post.date}</span>
      <span class="w-1 h-1 bg-current rounded-full opacity-30"></span>
      <span>{post.readTime}</span>
    </div>
    
    <Heading 
      level={3} 
      text={post.title} 
      class="text-xl lg:text-3xl group-hover:text-[var(--color-accent)] transition-colors duration-300 leading-tight line-clamp-3" 
    />
    
    <Text text={post.excerpt} muted class="text-xs lg:text-sm line-clamp-3 opacity-60 font-light" />
  </div>

  <div class="mt-8 flex items-center justify-between">
    <span class="text-[10px] uppercase font-bold tracking-[0.3em] text-[var(--color-base-muted)] group-hover:text-[var(--color-accent)] transition-colors">Read Insight</span>
    <div class="w-8 h-8 flex items-center justify-center border border-[var(--color-base-muted)]/20 rounded-full group-hover:border-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-base-dark)] transition-all duration-500 transform group-hover:rotate-45">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
    </div>
  </div>
</a>
