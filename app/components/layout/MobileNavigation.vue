<script setup lang="ts">
import type { NavLink } from "~/types";

interface Props {
  open: boolean;
  links: NavLink[];
}

const props = defineProps<Props>();

const emit = defineEmits<{
  close: [];
}>();

// Close on Escape key
const onKeyDown = (e: KeyboardEvent) => {
  if (e.key === "Escape" && props.open) {
    emit("close");
  }
};

onMounted(() => {
  window.addEventListener("keydown", onKeyDown);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", onKeyDown);
});

// Lock body scroll while the overlay is open
watch(
  () => props.open,
  (isOpen) => {
    if (import.meta.client) {
      document.body.style.overflow = isOpen ? "hidden" : "";
    }
  },
);

onBeforeUnmount(() => {
  if (import.meta.client) {
    document.body.style.overflow = "";
  }
});
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="open"
        class="fixed inset-0 z-50 md:hidden"
        aria-hidden="false"
      >
        <!-- Backdrop: click to close -->
        <div
          class="absolute inset-0 bg-background/80 backdrop-blur-sm"
          @click="emit('close')"
        />

        <!-- Panel -->
        <Transition name="slide-down">
          <nav
            v-if="open"
            class="relative z-10 bg-background-subtle border-b border-border"
            aria-label="Mobile navigation"
          >
            <div class="px-6 py-5">
              <!-- Links -->
              <div class="flex flex-col gap-1">
                <NuxtLink
                  v-for="link in links"
                  :key="link.to"
                  :to="link.to"
                  :external="link.external"
                  v-slot="{ href, navigate, isActive }"
                  custom
                >
                  <a
                    :href="href"
                    @click="(e) => { navigate(e); emit('close'); }"
                    :class="[
                      'flex items-center justify-between rounded-md px-3 py-3 text-body font-medium transition-colors',
                      isActive && !link.external
                        ? 'text-brand'
                        : 'text-text-secondary hover:bg-surface hover:text-text-primary',
                    ]"
                  >
                    {{ link.label }}
                    <svg
                      v-if="link.external"
                      class="h-4 w-4 text-text-muted"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M6 3H3v10h10v-3M9 3h4v4M10 10L13 7"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </NuxtLink>
              </div>

              <!-- Divider -->
              <div class="my-4 border-t border-border-subtle" />

              <!-- Progression display -->
              <div class="flex items-center gap-3">
                <div
                  class="flex items-center gap-2 rounded-md border border-border-subtle bg-surface px-3 py-1.5"
                >
                  <span
                    class="font-mono text-caption uppercase tracking-wider text-text-muted"
                  >
                    Level
                  </span>
                  <span
                    class="font-mono text-body-sm font-semibold text-text-primary"
                  >
                    01
                  </span>
                </div>
                <div
                  class="flex items-center gap-2 rounded-md border border-border-subtle bg-surface px-3 py-1.5"
                >
                  <span class="text-body-sm font-semibold text-brand">120</span>
                  <span
                    class="font-mono text-caption uppercase tracking-wider text-text-muted"
                  >
                    XP
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 200ms ease-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 200ms ease-out;
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
</style>
