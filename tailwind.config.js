/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "common-border": "#d9d9d9",
        // Modern color palette
        "dark-bg": "#0a0a0f",
        "dark-card": "#12121a",
        "glass-border": "rgba(255, 255, 255, 0.1)",
        "glass-bg": "rgba(255, 255, 255, 0.05)",
        "accent-cyan": "#00d4ff",
        "accent-purple": "#a855f7",
        "accent-pink": "#ec4899",
        "accent-green": "#22c55e",
        "accent-yellow": "#facc15",
        "accent-red": "#ef4444",
        "accent-blue": "#3b82f6",
      },
      keyframes: {
        continue: {
          "16%": { content: '"."' },
          "33%": { content: '".."' },
          "50%": { content: '"..."' },
          "66%": { content: '"...."' },
          "83%": { content: '"....."' },
          "100%": { content: '"......"' },
        },
        // Floating animation for decorative elements
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        // Gradient animation
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        // Glow pulse
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0, 212, 255, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(0, 212, 255, 0.6)" },
        },
        // Shimmer effect
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        // Fade in up
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        // Scale in
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        // Blob animation
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
      },
      animation: {
        continue: "continue 2s infinite",
        float: "float 6s ease-in-out infinite",
        gradient: "gradient 8s ease infinite",
        glow: "glow 2s ease-in-out infinite",
        shimmer: "shimmer 2s infinite",
        fadeInUp: "fadeInUp 0.6s ease-out forwards",
        scaleIn: "scaleIn 0.4s ease-out forwards",
        blob: "blob 10s ease-in-out infinite",
      },
      transitionDelay: {
        0: "0ms",
        2000: "2000ms",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        "3xl": "1920px",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
