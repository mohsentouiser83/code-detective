import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/components/**/*.{vue,js,ts}",
    "./app/layouts/**/*.vue",
    "./app/pages/**/*.vue",
    "./app/app.vue",
    "./app/composables/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // ── Backgrounds ────────────────────────────────────────
        background: "#0B0D0F",
        "background-subtle": "#101316",

        // ── Surfaces ───────────────────────────────────────────
        surface: "#14171A",
        "surface-elevated": "#181C20",
        "surface-hover": "#1D2126",

        // ── Borders ────────────────────────────────────────────
        border: "#23272C",
        "border-subtle": "#1B1F23",
        "border-strong": "#333A40",

        // ── Text ───────────────────────────────────────────────
        "text-primary": "#F2F4F6",
        "text-secondary": "#A9B0B8",
        "text-muted": "#6B7178",

        // ── Brand (amber) ──────────────────────────────────────
        brand: {
          DEFAULT: "#F5B942",
          hover: "#F8C862",
          muted: "#8A6A2E",
        },

        // ── Semantic ───────────────────────────────────────────
        success: {
          DEFAULT: "#4CAF7D",
          muted: "#2D5A47",
        },
        error: {
          DEFAULT: "#D9534F",
          muted: "#5C2A28",
        },
        warning: {
          DEFAULT: "#D49A3A",
          muted: "#5C4419",
        },
        info: {
          DEFAULT: "#5B9BD5",
          muted: "#2A4A63",
        },
      },

      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: [
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },

      borderRadius: {
        sm: "6px",
        DEFAULT: "8px",
        md: "8px",
        lg: "12px",
        xl: "16px",
      },

      boxShadow: {
        subtle: "0 1px 2px 0 rgba(0,0,0,0.3)",
        card: "0 2px 8px -2px rgba(0,0,0,0.35)",
        elevated: "0 8px 24px -6px rgba(0,0,0,0.5)",
        focus: "0 0 0 2px #0B0D0F, 0 0 0 4px #F5B942",
      },

      maxWidth: {
        content: "1200px",
      },

      fontSize: {
        display: ["3.75rem", { lineHeight: "1.1", fontWeight: "700" }],
        h1: ["3rem", { lineHeight: "1.1", fontWeight: "700" }],
        h2: ["2.25rem", { lineHeight: "1.2", fontWeight: "600" }],
        h3: ["1.5rem", { lineHeight: "1.3", fontWeight: "600" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6" }],
        body: ["1rem", { lineHeight: "1.6" }],
        "body-sm": ["0.875rem", { lineHeight: "1.5" }],
        caption: ["0.75rem", { lineHeight: "1.4" }],
      },

      transitionDuration: {
        DEFAULT: "150ms",
      },

      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-down": {
          "0%": { opacity: "0", transform: "translateY(-8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },

      animation: {
        "fade-in": "fade-in 200ms ease-out",
        "slide-up": "slide-up 300ms ease-out",
        "slide-down": "slide-down 200ms ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
