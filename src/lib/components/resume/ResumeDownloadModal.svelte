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
      title: "Core Mechanical + Energy",
      desc: "Ideal for heavy industry, design, and project management roles.",
      file: "/Jiyon_Resume_1.pdf",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>`,
    },
    {
      id: 2,
      title: "Mechanical + AI + Energy",
      desc: "Tailored for R&D, automation, and tech-driven engineering positions.",
      file: "/Jiyon_Resume_2.pdf",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v8"/><path d="m16 4-4 4-4-4"/><path d="M4.34 11.46A9 9 0 1 0 12 21a9 9 0 0 0 7.66-14.26"/><circle cx="12" cy="12" r="3"/></svg>`,
    },
    {
      id: 3,
      title: "All Data Included",
      desc: "A comprehensive view of my full career and academic journey.",
      file: "/Jiyon_Resume_3.pdf",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
    },
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
      <Heading level={3} text="CHOOSE ONE" class="text-2xl lg:text-3xl" />
      <Text
        text="Select the profile you'd like to explore."
        class="text-xs uppercase tracking-widest text-[var(--color-base-muted)]"
      />
    </div>

    <div class="space-y-4">
      {#each resumeOptions as option, i}
        <button
          bind:this={cardElements[i]}
          class="w-full text-left p-5 border border-[var(--color-base-muted)]/10 bg-[var(--color-base-muted)]/5 hover:bg-[var(--color-accent)]/5 hover:border-[var(--color-accent)]/30 transition-all duration-300 group rounded-sm flex items-start gap-5"
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
        Forthcoming exchange is anticipated with interest.
      </p>
    </div>
  </div>
</Modal>
