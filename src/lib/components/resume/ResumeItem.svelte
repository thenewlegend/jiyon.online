<script lang="ts">
  import Heading from "../ui/Heading.svelte";
  import Text from "../ui/Text.svelte";

  let {
    title,
    organization = "",
    duration = "",
    metrics = "",
    link = "",
    details = []
  } = $props<{
    title: string;
    organization?: string;
    duration?: string;
    metrics?: string;
    link?: string;
    details?: string[];
  }>();
</script>

<article class="space-y-4">
  <div class="space-y-1">
    <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-2">
      <Heading level={3} text={title} class="text-xl lg:text-2xl font-semibold text-[var(--color-base-light)]" />
      {#if duration}
        <span class="text-xs uppercase font-mono tracking-widest text-[var(--color-base-muted)] whitespace-nowrap opacity-60 bg-[var(--color-base-muted)]/10 px-2 py-1 rounded-sm w-fit">
          {duration}
        </span>
      {/if}
    </div>
    
    {#if organization || metrics || link}
      <div class="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
        {#if link}
          <a href={"https://" + link} target="_blank" rel="noopener noreferrer" class="text-[var(--color-accent)] hover:opacity-80 transition-opacity font-medium">
            {organization || link}
          </a>
        {:else if organization}
          <span class="text-[var(--color-base-muted)] font-medium">
            {organization}
          </span>
        {/if}

        {#if metrics}
          <span class="text-[var(--color-base-muted)] opacity-50 flex items-center gap-2">
            <span class="w-1 h-1 rounded-full bg-current"></span>
            {metrics}
          </span>
        {/if}
      </div>
    {/if}
  </div>

  {#if details && details.length > 0}
    <ul class="space-y-2 lg:space-y-3 mt-4 text-[var(--color-base-muted)] font-light text-sm lg:text-base leading-relaxed">
      {#each details as detail}
        <li class="flex items-start gap-3">
          <span class="mt-2 w-1.5 h-1.5 shrink-0 rounded-full bg-[var(--color-accent)] opacity-60"></span>
          <span>{detail}</span>
        </li>
      {/each}
    </ul>
  {/if}
</article>
