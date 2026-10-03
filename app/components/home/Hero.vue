<template>
  <section class="relative min-h-screen overflow-hidden">
    <!-- Ambient glow -->
    <div
      class="pointer-events-none absolute right-0 top-1/2 h-150 w-150 -translate-y-1/2 rounded-full bg-amber-400/10 blur-[120px]"
    />

    <div
      class="mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 lg:px-8"
    >
      <!-- Content -->
      <div class="relative z-10 max-w-3xl">
        <p
          class="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-amber-400"
        >
          Code Investigation
        </p>

        <h1 class="text-5xl font-bold tracking-tight sm:text-6xl lg:text-8xl">
          Every bug
          <span class="block text-zinc-500"> leaves a trace. </span>
        </h1>

        <p class="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
          Investigate broken code, uncover the culprit, and solve the case.
        </p>

        <button
          type="button"
          class="mt-10 rounded-lg bg-amber-400 px-6 py-3 font-semibold text-black transition hover:bg-amber-300"
        >
          Start Investigation
        </button>
      </div>

      <!-- Detective -->
      <div
        class="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 lg:block"
      >
        <img
          src="/images/detective.png"
          alt=""
          class="h-[80vh] w-auto object-contain opacity-90"
        />
      </div>
    </div>
  </section>
</template>
