<script lang="ts">
  import "../app.css";
  import Navbar from "$lib/components/layout/Navbar.svelte";
  import { dev } from "$app/environment";
  import { injectAnalytics } from "@vercel/analytics/sveltekit";

  injectAnalytics({ mode: dev ? "development" : "production" });
  let { children } = $props();
</script>

<Navbar />

{@render children()}
