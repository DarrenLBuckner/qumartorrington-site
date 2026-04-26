import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "emerald-primary": "var(--color-emerald-primary)",
        "emerald-dark": "var(--color-emerald-dark)",
        "emerald-light": "var(--color-emerald-light)",
        "gold-accent": "var(--color-gold-accent)",
        "ink-black": "var(--color-ink-black)",
        "ink-body": "var(--color-ink-body)",
        "ink-soft": "var(--color-ink-soft)",
        line: "var(--color-line)",
        surface: "var(--color-surface)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
