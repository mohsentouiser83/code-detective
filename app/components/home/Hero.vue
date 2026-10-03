<script setup lang="ts">
// Detective character — SVG silhouette placeholder.
// Designed as a modern digital investigator: confident posture, fedora hat,
// coat collar, and a raised magnifying glass. When the final asset is
// available as a raster image, replace this SVG with an <img> tag pointing
// to /public/images/detective.svg or .png.
</script>

<template>
  <section class="relative min-h-screen overflow-hidden bg-background">
    <!-- ── Background layers ─────────────────────────────────── -->

    <!-- Ambient amber glow (restrained) -->
    <div
      class="pointer-events-none absolute right-[10%] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-brand/8 blur-[100px]"
      aria-hidden="true"
    />

    <!-- Faint code fragments -->
    <div
      class="pointer-events-none absolute inset-0 select-none overflow-hidden"
      aria-hidden="true"
    >
      <div
        class="absolute left-[8%] top-[18%] font-mono text-xs leading-relaxed text-text-muted/15"
      >
        const evidence = collect();<br />
        if (bug.isActive) {<br />
        &nbsp;&nbsp;investigate(suspects);<br />
        }
      </div>
      <div
        class="absolute bottom-[12%] left-[12%] font-mono text-xs leading-relaxed text-text-muted/12"
      >
        function traceError(e) {<br />
        &nbsp;&nbsp;return e.stack
        <span class="text-brand/20">.filter(Boolean)</span>;<br />
        }
      </div>
      <div
        class="absolute right-[5%] top-[12%] font-mono text-xs leading-relaxed text-text-muted/10"
      >
        // CASE_FILE: 001<br />
        // STATUS: OPEN
      </div>
    </div>

    <!-- Thin investigation lines -->
    <div
      class="pointer-events-none absolute inset-0"
      aria-hidden="true"
    >
      <div
        class="absolute left-0 top-[30%] h-px w-full bg-gradient-to-r from-transparent via-border-subtle to-transparent"
      />
      <div
        class="absolute left-0 top-[70%] h-px w-full bg-gradient-to-r from-transparent via-border-subtle to-transparent"
      />
    </div>

    <!-- ── Content ───────────────────────────────────────────── -->

    <div
      class="relative z-10 mx-auto flex min-h-screen max-w-content flex-col justify-center px-6 py-20 lg:px-8"
    >
      <!-- Two-column grid: content + detective -->
      <div class="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-8">
        <!-- Left: Content -->
        <div class="max-w-xl">
          <!-- Eyebrow with evidence marker -->
          <div class="mb-6 flex items-center gap-2.5">
            <span
              class="flex h-5 w-5 items-center justify-center rounded-sm bg-brand/10"
            >
              <svg
                class="h-3 w-3 text-brand"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
              >
                <circle cx="5" cy="5" r="3.5" stroke="currentColor" stroke-width="1.2" />
                <path
                  d="M7.5 7.5L10 10"
                  stroke="currentColor"
                  stroke-width="1.2"
                  stroke-linecap="round"
                />
              </svg>
            </span>
            <p
              class="font-mono text-sm font-medium uppercase tracking-[0.3em] text-brand"
            >
              Code Investigation
            </p>
          </div>

          <!-- Headline -->
          <h1 class="text-h1 tracking-tight lg:text-display">
            Every bug
            <span class="block text-text-muted">leaves a trace.</span>
          </h1>

          <!-- Supporting text -->
          <p class="mt-8 max-w-md text-body-lg text-text-secondary">
            Investigate broken code, uncover the culprit, and fix the case.
          </p>

          <!-- CTAs -->
          <div class="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <NuxtLink to="/cases">
              <button
                type="button"
                class="inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-6 py-3 font-semibold text-black transition-colors duration-150 hover:bg-brand-hover active:bg-brand-hover/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Start Investigation
                <svg
                  class="h-4 w-4"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </NuxtLink>

            <NuxtLink to="/how-it-works">
              <button
                type="button"
                class="inline-flex items-center justify-center rounded-lg border border-border bg-surface px-6 py-3 font-medium text-text-secondary transition-colors duration-150 hover:border-border-strong hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                How It Works
              </button>
            </NuxtLink>
          </div>

          <!-- Stats row -->
          <div class="mt-16 border-t border-border-subtle pt-8">
            <HomeHeroStats />
          </div>
        </div>

        <!-- Right: Detective character -->
        <div class="relative hidden justify-self-center lg:block">
          <!-- Subtle amber rim glow behind character -->
          <div
            class="pointer-events-none absolute inset-0 rounded-full bg-brand/5 blur-[80px]"
            aria-hidden="true"
          />

          <!-- Detective SVG silhouette -->
          <svg
            viewBox="0 0 400 520"
            class="relative h-[520px] w-auto max-w-full"
            aria-label="Digital detective character silhouette"
            role="img"
          >
            <defs>
              <!-- Amber rim light gradient -->
              <linearGradient id="rim-light" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#F5B942" stop-opacity="0" />
                <stop offset="40%" stop-color="#F5B942" stop-opacity="0" />
                <stop offset="75%" stop-color="#F5B942" stop-opacity="0.15" />
                <stop offset="95%" stop-color="#F5B942" stop-opacity="0.3" />
                <stop offset="100%" stop-color="#F5B942" stop-opacity="0" />
              </linearGradient>
              <!-- Body gradient -->
              <linearGradient id="body-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#181C20" />
                <stop offset="100%" stop-color="#0B0D0F" />
              </linearGradient>
            </defs>

            <!-- Fedora hat -->
            <path
              d="M120 120 Q120 85 200 80 Q280 85 280 120 L285 125 L285 135 L115 135 L115 125 Z"
              fill="url(#body-grad)"
              stroke="#23272C"
              stroke-width="1"
            />
            <!-- Hat band -->
            <rect x="120" y="128" width="160" height="6" fill="#1B1F23" />

            <!-- Head/face silhouette -->
            <ellipse cx="200" cy="165" rx="38" ry="45" fill="url(#body-grad)" stroke="#23272C" stroke-width="1" />

            <!-- Coat shoulders -->
            <path
              d="M130 210 Q160 200 200 200 Q240 200 270 210 L290 230 L300 280 L100 280 L110 230 Z"
              fill="url(#body-grad)"
              stroke="#23272C"
              stroke-width="1"
            />

            <!-- Coat body -->
            <path
              d="M110 280 L100 480 L140 500 L160 500 L165 340 L235 340 L240 500 L260 500 L300 480 L290 280 Z"
              fill="url(#body-grad)"
              stroke="#23272C"
              stroke-width="1"
            />

            <!-- Coat collar -->
            <path
              d="M165 210 L200 245 L235 210 L220 260 L200 250 L180 260 Z"
              fill="#14171A"
              stroke="#23272C"
              stroke-width="1"
            />

            <!-- Coat inner line -->
            <line x1="200" y1="250" x2="200" y2="340" stroke="#1B1F23" stroke-width="1" />

            <!-- Right arm raised (holding magnifying glass) -->
            <path
              d="M270 210 Q310 200 330 160 Q335 150 325 145 Q315 140 305 148 Q280 175 265 200"
              fill="url(#body-grad)"
              stroke="#23272C"
              stroke-width="1"
            />

            <!-- Hand -->
            <circle cx="328" cy="142" r="8" fill="#181C20" stroke="#23272C" stroke-width="1" />

            <!-- Magnifying glass handle -->
            <line x1="328" y1="138" x2="345" y2="118" stroke="#333A40" stroke-width="3" stroke-linecap="round" />

            <!-- Magnifying glass ring -->
            <circle cx="355" cy="105" r="18" fill="none" stroke="#F5B942" stroke-width="2" opacity="0.6" />
            <circle cx="355" cy="105" r="16" fill="none" stroke="#F5B942" stroke-width="0.5" opacity="0.3" />

            <!-- Amber rim light overlay (right edge of silhouette) -->
            <path
              d="M200 80 Q280 85 280 120 L285 125 L285 135 L280 135 L280 120 Z M280 135 L290 230 L300 280 L290 280 L285 230 Z M300 280 L300 480 L295 480 L295 280 Z"
              fill="url(#rim-light)"
              opacity="0.8"
            />
          </svg>

          <!-- Technical metadata — decorative -->
          <div
            class="pointer-events-none absolute -left-4 top-8 font-mono text-caption uppercase tracking-wider text-text-muted/40"
            aria-hidden="true"
          >
            CASE FILE // 001
          </div>
          <div
            class="pointer-events-none absolute -right-2 bottom-12 font-mono text-caption uppercase tracking-wider text-text-muted/40"
            aria-hidden="true"
          >
            STATUS: OPEN
          </div>
        </div>
      </div>

      <!-- Mobile detective (visible below lg) -->
      <div class="mt-12 flex justify-center lg:hidden">
        <svg
          viewBox="0 0 400 520"
          class="h-64 w-auto opacity-80"
          aria-label="Digital detective character silhouette"
          role="img"
        >
          <defs>
            <linearGradient id="rim-light-m" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#F5B942" stop-opacity="0" />
              <stop offset="75%" stop-color="#F5B942" stop-opacity="0.12" />
              <stop offset="95%" stop-color="#F5B942" stop-opacity="0.25" />
              <stop offset="100%" stop-color="#F5B942" stop-opacity="0" />
            </linearGradient>
            <linearGradient id="body-grad-m" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#181C20" />
              <stop offset="100%" stop-color="#0B0D0F" />
            </linearGradient>
          </defs>
          <path d="M120 120 Q120 85 200 80 Q280 85 280 120 L285 125 L285 135 L115 135 L115 125 Z" fill="url(#body-grad-m)" stroke="#23272C" stroke-width="1" />
          <rect x="120" y="128" width="160" height="6" fill="#1B1F23" />
          <ellipse cx="200" cy="165" rx="38" ry="45" fill="url(#body-grad-m)" stroke="#23272C" stroke-width="1" />
          <path d="M130 210 Q160 200 200 200 Q240 200 270 210 L290 230 L300 280 L100 280 L110 230 Z" fill="url(#body-grad-m)" stroke="#23272C" stroke-width="1" />
          <path d="M110 280 L100 480 L140 500 L160 500 L165 340 L235 340 L240 500 L260 500 L300 480 L290 280 Z" fill="url(#body-grad-m)" stroke="#23272C" stroke-width="1" />
          <path d="M165 210 L200 245 L235 210 L220 260 L200 250 L180 260 Z" fill="#14171A" stroke="#23272C" stroke-width="1" />
          <line x1="200" y1="250" x2="200" y2="340" stroke="#1B1F23" stroke-width="1" />
          <path d="M270 210 Q310 200 330 160 Q335 150 325 145 Q315 140 305 148 Q280 175 265 200" fill="url(#body-grad-m)" stroke="#23272C" stroke-width="1" />
          <circle cx="328" cy="142" r="8" fill="#181C20" stroke="#23272C" stroke-width="1" />
          <line x1="328" y1="138" x2="345" y2="118" stroke="#333A40" stroke-width="3" stroke-linecap="round" />
          <circle cx="355" cy="105" r="18" fill="none" stroke="#F5B942" stroke-width="2" opacity="0.5" />
        </svg>
      </div>
    </div>
  </section>
</template>
