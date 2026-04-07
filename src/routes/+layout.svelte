<script lang="ts">
  import "../app.css";
  import Navbar from "$lib/components/layout/Navbar.svelte";
  import { dev } from "$app/environment";
  import { injectAnalytics } from "@vercel/analytics/sveltekit";
  import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit";

  import { onMount } from "svelte";

  import { ScrollTrigger } from "gsap/ScrollTrigger";

  injectSpeedInsights();

  injectAnalytics({ mode: dev ? "development" : "production" });
  let { children } = $props();

  onMount(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
    ScrollTrigger.refresh();
  });
</script>

<Navbar />

{@render children()}
