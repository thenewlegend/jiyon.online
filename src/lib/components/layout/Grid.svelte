<script lang="ts">
  type Responsive<T> = {
    base: T;
    lg?: T;
  };

  let { cols = { base: 1, lg: 2 }, gap = 'gap-8', class: className = '', children } = $props<{
    cols?: Responsive<number>;
    gap?: string;
    class?: string;
    children: any;
  }>();

  // Mapping columns to static Tailwind classes for static analysis compatibility
  const colBaseMap: Record<number, string> = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6'
  };

  const colLgMap: Record<number, string> = {
    1: 'lg:grid-cols-1',
    2: 'lg:grid-cols-2',
    3: 'lg:grid-cols-3',
    4: 'lg:grid-cols-4',
    5: 'lg:grid-cols-5',
    6: 'lg:grid-cols-6',
    8: 'lg:grid-cols-8',
    12: 'lg:grid-cols-12'
  };

  const gridClass = $derived(`grid ${colBaseMap[cols.base] || 'grid-cols-1'} ${cols.lg ? (colLgMap[cols.lg] || '') : ''} ${gap} ${className}`);
</script>

<div class={gridClass}>
  {@render children()}
</div>
