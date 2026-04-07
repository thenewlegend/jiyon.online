<script lang="ts">
  import Section from '$lib/components/layout/Section.svelte';
  import Container from '$lib/components/layout/Container.svelte';
  import Grid from '$lib/components/layout/Grid.svelte';
  import Heading from '$lib/components/ui/Heading.svelte';
  import Text from '$lib/components/ui/Text.svelte';
  import BlogCard from '$lib/components/sections/BlogCard.svelte';
  import Stagger from '$lib/components/motion/Stagger.svelte';
  import Reveal from '$lib/components/motion/Reveal.svelte';

  let { data } = $props();
</script>

<svelte:head>
  <title>Engineering Insights | JIYON P J</title>
  <meta name="description" content="A collection of technical notes, research, and engineering reflections by JIYON P J." />
</svelte:head>

<Section class="pt-32 pb-24 min-h-screen">
  <Container>
    <header class="max-w-4xl mb-20 space-y-6">
      <Reveal animation="fade-in">
        <div class="flex items-center gap-2 text-[10px] uppercase font-bold tracking-[0.3em] text-[var(--color-accent)] mb-4">
          <a href="/" class="hover:opacity-70 transition-opacity">Home</a>
          <span class="opacity-30">/</span>
          <span>Archive</span>
        </div>
        <Heading level={1} text="Engineering Insights" class="mb-4" />
        <Text 
          text="A chronological log of structural research, design philosophies, and mechanical breakthroughs." 
          class="text-xl lg:text-2xl font-light opacity-60 max-w-2xl"
        />
      </Reveal>
    </header>

    <Stagger stagger={0.1}>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-8 border-t border-[var(--color-base-muted)]/10">
        {#each data.posts as post}
          <div class="border-b border-[var(--color-base-muted)]/5 hover:bg-[var(--color-base-muted)]/5 transition-colors px-4 -mx-4 rounded-sm">
            <BlogCard {post} />
          </div>
        {/each}
      </div>
    </Stagger>

    {#if data.posts.length === 0}
      <Reveal animation="fade-in" class="py-24 text-center">
        <Text text="The archive is currently being populated. Check back soon." muted />
      </Reveal>
    {/if}
  </Container>
</Section>
