<script lang="ts">
  import { onMount } from 'svelte';
  let { data } = $props();
  const { post } = data;
</script>

<svelte:component this={post.default} />
