<script lang="ts">
  import Section from '../layout/Section.svelte';
  import Container from '../layout/Container.svelte';
  import TextSplit from '../motion/TextSplit.svelte';
  import Text from '../ui/Text.svelte';
  import Button from '../ui/Button.svelte';
  import Reveal from '../motion/Reveal.svelte';

  let { 
    title, 
    subtitle = '', 
    cta = undefined 
  } = $props<{
    title: string;
    subtitle?: string;
    cta?: { label: string; href: string };
  }>();
</script>

<Section class="min-h-[90vh] flex items-center">
  <Container>
    <div class="max-w-4xl space-y-12">
      <!-- High-impact text title -->
      <h1 class="text-6xl lg:text-[10rem] font-bold tracking-tighter leading-[0.9] text-[var(--color-accent)]">
        <TextSplit text={title} type="chars" animation={{ delay: 0.2, stagger: 0.05, duration: 1.2 }} />
      </h1>

      <div class="max-w-2xl space-y-8">
        {#if subtitle}
          <Reveal animation="fade-in" delay={0.8} duration={1.2}>
            <Text text={subtitle} class="text-2xl lg:text-3xl font-light tracking-tight opacity-80" />
          </Reveal>
        {/if}

        {#if cta}
          <Reveal animation="fade-up" delay={1.2} duration={1}>
            <Button label={cta.label} href={cta.href} variant="primary" class="mt-4" />
          </Reveal>
        {/if}
      </div>
    </div>
  </Container>
</Section>
