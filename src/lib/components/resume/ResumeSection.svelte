<script lang="ts">
  let { title, id, children } = $props<{ title: string; id?: string; children?: any }>();
</script>

<section {id} class="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-8 pb-16 border-b border-[var(--color-base-muted)]/10 last:border-b-0">
  <div>
    <h2 class="text-sm font-mono uppercase tracking-[0.2em] text-[var(--color-accent)] sticky top-24">
      {title}
    </h2>
  </div>
  <div class="space-y-12">
    {@render children?.()}
  </div>
</section>
