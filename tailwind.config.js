/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#FAF9F6",
        surface: "#F4F2ED",
        "surface-elevated": "#EAE7E1",
        "ink-deep": "#0B0E14",
        "ink": "#111317",
        "ink-muted": "#5A6578",
        "stone-border": "#E5E1D8",
        "architectural-amber": "#D97706",
        "architectural-gold": "#B45309",
        "drafting-cyan": "#0284C7",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        widest: ".2em",
        superwide: ".25em",
      },
      boxShadow: {
        subtle: "0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.03)",
        card: "0 4px 20px -2px rgba(17, 19, 23, 0.06)",
        float: "0 20px 40px -6px rgba(17, 19, 23, 0.12)",
      }
    },
  },
  plugins: [],
};
