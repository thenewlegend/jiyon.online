<script lang="ts">
  import '../app.css';
  import Navbar from '$lib/components/layout/Navbar.svelte';
  let { children } = $props();
</script>

<Navbar />

{@render children()}
