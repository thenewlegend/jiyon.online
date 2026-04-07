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
    tags?: string[];
  };

  let { post, fullWidth = false, lightMode = false } = $props<{ 
    post: BlogPost; 
    fullWidth?: boolean;
    lightMode?: boolean;
  }>();
</script>

<a 
  href={post.link || '#'} 
  class="group block p-6 lg:p-8 border rounded-sm flex flex-col h-full transition-all duration-500
    {fullWidth ? 'w-full' : 'w-[300px] lg:w-[420px] shrink-0 snap-start'}
    {lightMode 
      ? 'bg-[var(--color-base-dark)]/5 border-[var(--color-base-dark)]/10 hover:border-[var(--color-base-dark)]/30 hover:bg-[var(--color-base-dark)]/[0.08]' 
      : 'bg-[var(--color-base-dark)] border-[var(--color-base-muted)]/10 hover:bg-[var(--color-base-muted)]/5 hover:border-[var(--color-accent)]/40'}"
>
  <div class="flex-grow space-y-4 lg:space-y-6">
    <div class="flex items-center gap-4 text-[10px] uppercase font-bold tracking-[0.2em] opacity-60
      {lightMode ? 'text-[var(--color-base-dark)]' : 'text-[var(--color-base-muted)]'}">
      <span>{post.date}</span>
      <span class="w-1 h-1 bg-current rounded-full opacity-30"></span>
      <span>{post.readTime}</span>
    </div>
    
    <Heading 
      level={3} 
      text={post.title} 
      class="text-xl lg:text-3xl transition-colors duration-300 leading-tight line-clamp-3
        {lightMode ? 'text-[var(--color-base-dark)] group-hover:text-black' : 'text-[var(--color-base-light)] group-hover:text-[var(--color-accent)]'}" 
    />
    
    <Text 
      text={post.excerpt} 
      muted={!lightMode}
      class="text-xs lg:text-sm line-clamp-3 font-light
        {lightMode ? 'text-[var(--color-base-dark)]/70' : 'opacity-60 text-[var(--color-base-light)]'}" 
    />
    
    {#if post.tags}
      <div class="flex flex-wrap gap-2 pt-2">
        {#each post.tags as tag}
          <span class="text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-sm border
            {lightMode 
              ? 'border-[var(--color-base-dark)]/20 text-[var(--color-base-dark)]/60' 
              : 'border-[var(--color-base-muted)]/20 text-[var(--color-base-muted)]'}">
            #{tag}
          </span>
        {/each}
      </div>
    {/if}
  </div>

  <div class="mt-8 flex items-center justify-between border-t pt-4
    {lightMode ? 'border-[var(--color-base-dark)]/10' : 'border-[var(--color-base-muted)]/10'}">
    <span class="text-[10px] uppercase font-bold tracking-[0.3em] transition-colors
      {lightMode ? 'text-[var(--color-base-dark)]/60 group-hover:text-black' : 'text-[var(--color-base-muted)] group-hover:text-[var(--color-accent)]'}">
      Read Insight
    </span>
    <div class="w-8 h-8 flex items-center justify-center border rounded-full transition-all duration-500 transform group-hover:rotate-45
      {lightMode 
        ? 'border-[var(--color-base-dark)]/20 group-hover:border-[var(--color-base-dark)] group-hover:bg-[var(--color-base-dark)] group-hover:text-white' 
        : 'border-[var(--color-base-muted)]/20 group-hover:border-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-base-dark)]'}">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
    </div>
  </div>
</a>
