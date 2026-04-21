<script lang="ts">
  import Modal from "../ui/Modal.svelte";
  import Heading from "../ui/Heading.svelte";
  import Text from "../ui/Text.svelte";
  import { onMount } from "svelte";
  import gsap from "gsap";

  let { isOpen, onClose } = $props<{ isOpen: boolean; onClose: () => void }>();

  let cardElements = $state<HTMLElement[]>([]);

  const resumeOptions = [
    {
      id: 1,
      title: "ENERGY ENGINEER | AI FOR ENERGY SYSTEMS",
      desc: "Energy Engineer with applied experience in developing RAG-based AI systems, data pipelines and scalable engineering tools.",
      file: "/JIYON P J _ Resume.pdf",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v8"/><path d="m16 4-4 4-4-4"/><path d="M4.34 11.46A9 9 0 1 0 12 21a9 9 0 0 0 7.66-14.26"/><circle cx="12" cy="12" r="3"/></svg>`,
    }
  ];

  $effect(() => {
    if (isOpen && cardElements.length > 0) {
      gsap.fromTo(
        cardElements,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, delay: 0.3, ease: "power2.out" },
      );
    }
  });

  function handleDownload(file: string) {
    const link = document.createElement("a");
    link.href = file;
    link.download = file.split("/").pop() || "Jiyon_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    onClose();
  }
</script>

<Modal {isOpen} {onClose}>
  <div class="space-y-8">
    <div class="text-center space-y-2">
      <Heading level={3} text="RESUME" class="text-2xl lg:text-3xl" />
      <Text
        text="-"
        class="text-xs uppercase tracking-widest text-[var(--color-base-muted)]"
      />
    </div>

    <div class="space-y-4">
      {#each resumeOptions as option, i}
        <button
          bind:this={cardElements[i]}
          class="w-full text-left p-5 border border-[var(--color-base-muted)]/10 bg-[var(--color-base-muted)]/5 hover:bg-[var(--color-accent)]/5 hover:border-[var(--color-accent)]/30 transition-all duration-300 group rounded-sm flex items-start gap-5 cursor-pointer"
          onclick={() => handleDownload(option.file)}
        >
          <div
            class="w-12 h-12 flex items-center justify-center rounded-sm border border-[var(--color-base-muted)]/20 text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-base-dark)] group-hover:scale-110 transition-all duration-500 transform"
          >
            {@html option.icon}
          </div>
          <div class="space-y-1">
            <h4
              class="text-sm font-bold tracking-wider text-[var(--color-base-light)] group-hover:text-[var(--color-accent)] transition-colors uppercase"
            >
              {option.title}
            </h4>
            <p
              class="text-xs text-[var(--color-base-muted)] font-light leading-relaxed group-hover:text-[var(--color-base-light)] transition-colors"
            >
              {option.desc}
            </p>
          </div>
        </button>
      {/each}
    </div>

    <!-- Technical Footer -->
    <div class="pt-6 border-t border-[var(--color-base-muted)]/10 text-center">
      <p
        class="text-[9px] uppercase tracking-[0.3em] text-[var(--color-base-muted)] opacity-50"
      >
        Forthcoming exchange is anticipated with interest
      </p>
    </div>
  </div>
</Modal>
