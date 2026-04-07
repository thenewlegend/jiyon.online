<script lang="ts">
    import Heading from "../ui/Heading.svelte";

    export type Experience = {
        id: string;
        title: string;
        organization: string;
        duration: string;
        metrics: string;
    };

    let { item, isCurrent = false } = $props<{
        item: Experience;
        isCurrent?: boolean;
    }>();
</script>

<div
    class="relative pl-8 border-l border-[var(--color-base-muted)]/20 pb-6 lg:pb-10 last:pb-0"
>
    <div
        class="absolute left-[-1.5px] top-2 w-[4px] h-[4px] bg-[var(--color-accent)] rounded-full"
    ></div>

    <div
        class="flex flex-col lg:flex-row lg:items-center justify-between mb-4 gap-4"
    >
        <div class="space-y-1">
            <div class="flex items-center gap-3">
                <Heading
                    level={4}
                    text={item.title}
                    class="text-xl lg:text-2xl"
                />
                {#if isCurrent}
                    <span
                        class="px-2 py-0.5 rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-[7px] font-bold tracking-[0.2em] border border-[var(--color-accent)]/20 shadow-[0_0_10px_var(--color-accent)] shadow-[var(--color-accent)]/10"
                        >RECENT</span
                    >
                {/if}
            </div>
            <span class="text-sm font-medium text-[var(--color-base-muted)]"
                >{item.organization}</span
            >
        </div>
        <span
            class="text-xs uppercase tracking-widest text-[var(--color-base-muted)] font-bold"
            >{item.duration}</span
        >
    </div>

    <span
        class="text-xs uppercase tracking-widest text-[var(--color-base-muted)] font-bold"
        >{item.metrics}</span
    >
</div>
