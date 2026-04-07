<script lang="ts">
  let { category, skills = [] } = $props<{
    category: string;
    skills: string[];
  }>();
  let isOpen = $state(false);

  function toSentenceCase(str: string): string {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function toggle() {
    isOpen = !isOpen;
  }
</script>

<div
  class="skill-group rounded-sm overflow-hidden transition-all duration-300 {isOpen ? 'border border-[var(--color-base-muted)]/10 hover:border-[var(--color-base-muted)]/20' : ''}"
>
  <!-- Collapsible Header -->
  <button
    class="w-full flex items-center justify-between px-5 py-4 cursor-pointer bg-[var(--color-base-muted)]/5 hover:bg-[var(--color-base-muted)]/10 transition-colors duration-300 text-left group"
    onclick={toggle}
    aria-expanded={isOpen}
  >
    <div class="flex items-center gap-3">
      <span
        class="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] shrink-0 {isOpen
          ? 'opacity-100'
          : 'opacity-40'} transition-opacity"
      ></span>
      <h3
        class="text-sm font-semibold tracking-wide text-[var(--color-base-light)] group-hover:text-[var(--color-accent)] transition-colors duration-300"
      >
        {category}
      </h3>
    </div>
    <div class="flex items-center gap-3">
      <span
        class="text-[10px] font-mono text-[var(--color-base-muted)] opacity-50"
        >{skills.length}</span
      >
      <svg
        class="w-4 h-4 text-[var(--color-base-muted)] transition-transform duration-300 {isOpen
          ? 'rotate-180'
          : 'rotate-0'}"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
  </button>

  <!-- Collapsible Content -->
  {#if isOpen}
    <div class="px-5 py-4 border-t border-[var(--color-base-muted)]/10">
      <div class="flex flex-wrap gap-2">
        {#each skills as skill}
          <span
            class="text-xs font-medium tracking-wide border border-[var(--color-base-muted)]/15 bg-[var(--color-base-muted)]/5 hover:border-[var(--color-accent)]/40 hover:bg-[var(--color-accent)]/5 transition-all duration-300 text-[var(--color-base-light)]/80 px-3 py-1.5 rounded-sm"
          >
            {toSentenceCase(skill)}
          </span>
        {/each}
      </div>
    </div>
  {/if}
</div>
