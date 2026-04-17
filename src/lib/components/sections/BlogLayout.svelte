<script lang="ts">
  import Section from "../layout/Section.svelte";
  import Container from "../layout/Container.svelte";
  import Heading from "../ui/Heading.svelte";
  import Text from "../ui/Text.svelte";
  import Button from "../ui/Button.svelte";
  import Reveal from "../motion/Reveal.svelte";

  const url = encodeURIComponent(window.location.href);

  let { title, date, excerpt, readTime, children } = $props<{
    title: string;
    date: string;
    excerpt?: string;
    readTime?: string;
    children: any;
  }>();
</script>

<svelte:head>
  <title>{title} | JIYON P J Blog</title>
</svelte:head>

<Section class="pt-32 pb-24">
  <Container>
    <div class="max-w-3xl mx-auto mb-20 space-y-8">
      <Reveal animation="fade-in">
        <Button
          label="← Back to Insights"
          href="/blog"
          variant="secondary"
          class="mb-12 text-xs"
        />
      </Reveal>

      <div class="space-y-4">
        <div
          class="flex items-center gap-4 text-xs uppercase font-bold tracking-[0.2em] text-[var(--color-base-muted)]"
        >
          <span>{date}</span>
          {#if readTime}
            <span class="w-1 h-1 bg-current rounded-full opacity-30"></span>
            <span>{readTime}</span>
          {/if}
        </div>

        <h1
          class="text-4xl lg:text-7xl font-bold tracking-tight text-[var(--color-accent)] leading-[1.1]"
        >
          {title}
        </h1>
      </div>

      {#if excerpt}
        <Text
          text={excerpt}
          class="text-xl lg:text-2xl font-light opacity-80 border-l-2 border-[var(--color-accent)]/20 pl-6 py-2"
        />
      {/if}
    </div>

    <article class="max-w-3xl mx-auto prose-custom">
      {@render children()}
    </article>

    <div
      class="max-w-3xl mx-auto mt-32 pt-12 border-t border-[var(--color-base-muted)]/10"
    >
      <Reveal animation="fade-up">
        <div class="flex flex-col items-center text-center space-y-4">
          <span
            class="text-[10px] uppercase font-bold tracking-[0.4em] text-[var(--color-base-muted)]"
            >End of Insight</span>

          <Button
            label="Share on LinkedIn"
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}
            target="_blank"
            variant="secondary"
            class="mt-4"
          />
                  </div>
      </Reveal>
    </div>
  </Container>
</Section>

<style>
  :global(.prose-custom) {
    --prose-body: var(--color-base-light);
    --prose-headings: var(--color-accent);
    --prose-links: var(--color-accent);

    font-size: 1.125rem;
    line-height: 1.8;
    color: var(--color-base-light);
    opacity: 0.9;
  }

  @media (min-width: 1024px) {
    :global(.prose-custom) {
      font-size: 1.25rem;
    }
  }

  :global(.prose-custom h2) {
    font-size: 1.875rem;
    font-weight: 700;
    margin-top: 4rem;
    margin-bottom: 1.5rem;
    color: var(--prose-headings);
    letter-spacing: -0.02em;
  }

  :global(.prose-custom p) {
    margin-bottom: 2rem;
  }

  :global(.prose-custom li) {
    margin-bottom: 0.5rem;
    list-style-type: disc;
    margin-left: 1.5rem;
  }

  :global(.prose-custom strong) {
    color: var(--prose-headings);
    font-weight: 600;
  }

  :global(.prose-custom blockquote) {
    border-left: 4px solid var(--color-accent);
    padding-left: 2rem;
    margin: 3rem 0;
    font-style: italic;
    opacity: 0.8;
  }
</style>
