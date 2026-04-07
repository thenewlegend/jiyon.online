<script lang="ts">
  let { children, class: className = '', fluid = false } = $props();
</script>

<div class="{fluid ? 'w-full' : 'max-w-screen-xl mx-auto'} px-4 lg:px-8 {className}">
  {@render children()}
</div>
