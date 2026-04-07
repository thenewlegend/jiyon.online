<script lang="ts">
  let { category, skills = [] } = $props<{ category: string; skills: string[] }>();
</script>

<div class="space-y-4">
  <h3 class="text-sm font-semibold tracking-wide text-[var(--color-base-light)] uppercase border-b border-[var(--color-base-muted)]/20 pb-2 inline-block">
    {category}
  </h3>
  <div class="flex flex-wrap gap-2">
    {#each skills as skill}
      <span class="text-xs uppercase font-medium tracking-wide border border-[var(--color-base-muted)]/20 bg-[var(--color-base-muted)]/5 hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]/10 transition-colors duration-300 text-[var(--color-base-light)] px-3 py-1.5 rounded-sm">
        {skill}
      </span>
    {/each}
  </div>
</div>
