<script lang="ts">
  let { id = undefined, children, class: className = '', padded = true } = $props();
</script>

<section {id} class="{padded ? 'py-16 lg:py-24' : ''} {className}">
  {@render children()}
</section>
