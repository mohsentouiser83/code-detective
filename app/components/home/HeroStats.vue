<script setup lang="ts">
interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: "10", label: "Cases" },
  { value: "3", label: "Difficulty Levels" },
  { value: "∞", label: "Bugs to Investigate" },
];
</script>

<template>
  <div class="flex flex-col gap-6 sm:flex-row sm:items-end sm:gap-10">
    <div
      v-for="(stat, index) in stats"
      :key="stat.label"
      class="flex items-baseline gap-3"
    >
      <!-- Separator line between items (desktop) -->
      <span
        v-if="index > 0"
        class="hidden h-8 w-px bg-border sm:inline-block"
        aria-hidden="true"
      />

      <div>
        <p class="text-h3 font-bold text-text-primary">{{ stat.value }}</p>
        <p
          class="mt-1 font-mono text-caption uppercase tracking-wider text-text-muted"
        >
          {{ stat.label }}
        </p>
      </div>
    </div>
  </div>
</template>
