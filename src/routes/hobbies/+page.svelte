<script lang="ts">
  import Section from "$lib/components/layout/Section.svelte";
  import Container from "$lib/components/layout/Container.svelte";
  import Grid from "$lib/components/layout/Grid.svelte";
  import Heading from "$lib/components/ui/Heading.svelte";
  import Text from "$lib/components/ui/Text.svelte";
  import HobbyCard from "$lib/components/ui/HobbyCard.svelte";
  import TagFilter from "$lib/components/ui/TagFilter.svelte";
  import HobbyDetailModal from "$lib/components/ui/HobbyDetailModal.svelte";
  import Reveal from "$lib/components/motion/Reveal.svelte";
  import { HOBBIES, type Hobby } from "$lib/config/hobbies";
  import { onMount, tick } from "svelte";
  import gsap from "$lib/animations/core";

  // State
  let selectedTag = $state<string | null>(null);
  let allTags = [...new Set(HOBBIES.flatMap((h) => h.tags))].sort();

  let gridElement = $state<HTMLElement | null>(null);

  // Modal State
  let selectedHobby = $state<Hobby | null>(null);
  let isModalOpen = $state(false);

  // Single Filtering Logic
  let filteredHobbies = $derived(
    !selectedTag
      ? HOBBIES
      : HOBBIES.filter((h) => h.tags.includes(selectedTag!)),
  );

  async function toggleTag(tag: string) {
    if (tag === "ALL") {
      selectedTag = null;
    } else {
      // Toggle off if same tag, else set new tag (single filtering)
      selectedTag = selectedTag === tag ? null : tag;
    }

    // Animate filtering
    await tick();
    animateGrid();
  }

  function handleOpenDetails(hobby: Hobby) {
    selectedHobby = hobby;
    isModalOpen = true;
  }

  function handleCloseModal() {
    isModalOpen = false;
    // Don't null selectedHobby immediately to avoid flash during exit animation
  }

  function animateGrid() {
    if (!gridElement) return;

    gsap.fromTo(
      gridElement.children,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.05,
        ease: "power2.out",
        clearProps: "all",
      },
    );
  }

  onMount(() => {
    // Initial entry animation is handled by Reveal
  });
</script>

<svelte:head>
  <title>Hobbies & Interests | Jiyon</title>
  <meta
    name="description"
    content="Explore my personal interests, hobbies, and creative pursuits outside of coding."
  />
</svelte:head>

<Section class="min-h-screen pt-32 pb-24">
  <Container>
    <!-- Header -->
    <div class="max-w-3xl mb-16">
      <Reveal animation="fade-up">
        <Heading
          level={1}
          text="Curiosity & Pursuits"
          class="text-5xl lg:text-8xl mb-8"
        />
      </Reveal>
    </div>

    <!-- Filters 
     
    <Reveal animation="fade-in" delay={0.2}>
      <div class="mb-12 border-b border-[var(--color-base-muted)]/10 pb-4">
        <TagFilter
          tags={allTags}
          selectedTags={selectedTag ? [selectedTag] : []}
          onToggle={toggleTag}
        />
      </div>
    </Reveal>
  -->

    <!-- Hobbies Grid -->
    <div bind:this={gridElement}>
      {#if filteredHobbies.length > 0}
        <Grid cols={{ base: 1, lg: 2 }} gap="gap-6 lg:gap-8">
          {#each filteredHobbies as hobby (hobby.id)}
            <div class="h-full">
              <HobbyCard {hobby} onOpenDetails={handleOpenDetails} />
            </div>
          {/each}
        </Grid>
      {:else}
        <div class="py-24 text-center">
          <Text text="No hobbies match the selected filter." muted />
          <button
            type="button"
            class="mt-4 text-[var(--color-accent)] hover:underline text-sm font-medium"
            onclick={() => toggleTag("ALL")}
          >
            Clear filters
          </button>
        </div>
      {/if}
    </div>
  </Container>
</Section>

<!-- Shared Modal -->
<HobbyDetailModal
  hobby={selectedHobby}
  isOpen={isModalOpen}
  onClose={handleCloseModal}
/>

<style>
</style>
