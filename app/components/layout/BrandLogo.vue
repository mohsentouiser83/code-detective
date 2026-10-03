<script setup lang="ts">
interface Props {
  /** "full" = mark + wordmark, "compact" = mark only */
  variant?: "full" | "compact";
}

const props = withDefaults(defineProps<Props>(), {
  variant: "full",
});
</script>

<template>
  <span class="flex items-center gap-2.5" aria-label="Code Detective">
    <!-- Detective mark — SVG placeholder shaped as a digital investigator lens.
         When the final detective asset is available, replace this inline SVG
         with an <img> pointing to the asset in /public/images/. -->
    <span
      class="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-brand/10 border border-brand/30"
    >
      <svg
        class="h-5 w-5 text-brand"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="9" cy="9" r="6" stroke="currentColor" stroke-width="1.5" />
        <path
          d="M13.5 13.5L17 17"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <circle cx="9" cy="9" r="2.5" stroke="currentColor" stroke-width="1.2" />
      </svg>
    </span>

    <span
      v-if="variant === 'full'"
      class="text-body-lg font-bold tracking-tight text-text-primary"
    >
      Code Detective
    </span>
  </span>
</template>
