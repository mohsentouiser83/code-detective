<script setup lang="ts">
import type { NavLink } from "~/types";

const links: NavLink[] = [
  { label: "Cases", to: "/cases" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "GitHub", to: "https://github.com", external: true },
];

const mobileMenuOpen = ref(false);

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};

// Close mobile menu on route change
const route = useRoute();
watch(
  () => route.path,
  () => {
    closeMobileMenu();
  },
);
</script>

<template>
  <header
    class="sticky top-0 z-40 border-b border-border-subtle bg-background/80 backdrop-blur-md"
  >
    <div class="mx-auto flex h-16 max-w-content items-center justify-between px-6 lg:px-8">
      <!-- Left: Logo -->
      <NuxtLink to="/" aria-label="Code Detective home" class="flex items-center">
        <LayoutBrandLogo variant="full" class="hidden sm:flex" />
        <LayoutBrandLogo variant="compact" class="sm:hidden" />
      </NuxtLink>

      <!-- Center: Desktop navigation -->
      <nav class="hidden items-center gap-8 md:flex" aria-label="Main navigation">
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
            @click="navigate"
            :class="[
              'relative text-body-sm font-medium transition-colors duration-150',
              isActive && !link.external
                ? 'text-brand'
                : 'text-text-secondary hover:text-text-primary',
            ]"
          >
            {{ link.label }}
            <!-- Active indicator -->
            <span
              v-if="isActive && !link.external"
              class="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-brand"
              aria-hidden="true"
            />
            <!-- External link icon -->
            <svg
              v-if="link.external"
              class="ml-1 inline-block h-3 w-3 text-text-muted"
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
      </nav>

      <!-- Right: Progression (desktop) -->
      <div class="hidden items-center gap-3 md:flex">
        <div
          class="flex items-center gap-2 rounded-md border border-border-subtle bg-surface px-3 py-1.5"
        >
          <span class="font-mono text-caption uppercase tracking-wider text-text-muted">
            Level
          </span>
          <span class="font-mono text-body-sm font-semibold text-text-primary">
            01
          </span>
        </div>
        <div
          class="flex items-center gap-2 rounded-md border border-border-subtle bg-surface px-3 py-1.5"
        >
          <span class="text-body-sm font-semibold text-brand">120</span>
          <span class="font-mono text-caption uppercase tracking-wider text-text-muted">
            XP
          </span>
        </div>
      </div>

      <!-- Mobile: menu button -->
      <button
        type="button"
        class="inline-flex items-center justify-center rounded-md p-2 text-text-secondary transition-colors hover:bg-surface hover:text-text-primary md:hidden"
        :aria-expanded="mobileMenuOpen"
        aria-label="Toggle navigation menu"
        aria-controls="mobile-navigation"
        @click="mobileMenuOpen = !mobileMenuOpen"
      >
        <svg
          v-if="!mobileMenuOpen"
          class="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M4 6h16M4 12h16M4 18h16"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
        <svg
          v-else
          class="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M6 6l12 12M18 6L6 18"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile navigation overlay -->
    <LayoutMobileNavigation
      :open="mobileMenuOpen"
      :links="links"
      @close="closeMobileMenu"
    />
  </header>
</template>
