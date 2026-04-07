<script lang="ts">
  import Section from "$lib/components/layout/Section.svelte";
  import Container from "$lib/components/layout/Container.svelte";
  import Grid from "$lib/components/layout/Grid.svelte";
  import Heading from "$lib/components/ui/Heading.svelte";
  import Text from "$lib/components/ui/Text.svelte";
  import BlogCard from "$lib/components/sections/BlogCard.svelte";
  import Stagger from "$lib/components/motion/Stagger.svelte";
  import Reveal from "$lib/components/motion/Reveal.svelte";

  let { data } = $props();
</script>

<svelte:head>
  <title>Engineering Insights | JIYON P J</title>
  <meta
    name="description"
    content="A collection of technical notes, research, and engineering reflections by JIYON P J."
  />
</svelte:head>

<Section class="pt-32 pb-24 min-h-screen relative">
  <!-- Blueprint technical background pattern -->
  <div
    class="absolute inset-0 bg-[linear-gradient(to_right,#88888812_1px,transparent_1px),linear-gradient(to_bottom,#88888812_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0"
  ></div>

  <Container class="relative z-10">
    <header class="max-w-4xl mb-20 space-y-6">
      <Reveal animation="fade-in">
        <div class="flex items-center justify-between mb-4">
          <div
            class="flex items-center gap-2 text-[10px] uppercase font-bold tracking-[0.3em] text-[var(--color-accent)]"
          >
            <a href="/" class="hover:opacity-70 transition-opacity">Home</a>
            <span class="opacity-30">/</span>
            <span>Blog</span>
          </div>
          <div
            class="hidden md:block text-[10px] uppercase font-mono tracking-widest text-[var(--color-base-muted)] border border-[var(--color-base-muted)]/20 px-3 py-1 rounded-sm"
          >
            Total: {String(data.posts.length).padStart(2, "0")} Insights
          </div>
        </div>
        <Heading level={1} text="Engineering Insights" class="mb-4" />
        <Text
          text="A chronological log of structural research, design philosophies, and mechanical breakthroughs."
          class="text-xl lg:text-2xl font-light opacity-60 max-w-2xl"
        />
      </Reveal>
    </header>

    <Stagger stagger={0.1}>
      <div
        class="flex flex-col gap-6 pt-12 border-t border-[var(--color-base-muted)]/10"
      >
        {#each data.posts as post}
          <BlogCard {post} fullWidth={true} />
        {/each}
      </div>
    </Stagger>

    {#if data.posts.length === 0}
      <Reveal animation="fade-in" class="py-24 text-center">
        <Text
          text="The archive is currently being populated. Check back soon."
          muted
        />
      </Reveal>
    {/if}
  </Container>
</Section>
