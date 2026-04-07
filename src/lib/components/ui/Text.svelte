<script lang="ts">
  let { 
    text, 
    class: className = '', 
    muted = false 
  } = $props<{
    text: string;
    class?: string;
    muted?: boolean;
  }>();

  const textClass = $derived(`text-base lg:text-lg leading-relaxed ${muted ? 'text-[var(--color-base-muted)]' : 'text-[var(--color-base-light)]'} ${className}`);
</script>

<p class={textClass}>
  {text}
</p>
