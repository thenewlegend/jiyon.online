<script lang="ts">
  let { id = undefined, children, class: className = '', padded = true } = $props();
</script>

<section {id} class="{padded ? 'py-8 lg:py-20' : ''} {className}">
  {@render children()}
</section>
