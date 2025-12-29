// file: tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xl2: "1430px", // Custom breakpoint for max-width in experience section
      navbar: "1024px", // Custom breakpoint from user's HTML
    },
    extend: {
      colors: {
        primary: "#8245ec", // Purple / Indigo
        secondary: "#1f2937", // Dark Gray
      },

      /* ---------------- ANIMATIONS ---------------- */
      animation: {
        "spin-slow": "spin 14s linear infinite",
        floaty: "floaty 6s ease-in-out infinite",
        "glow-pulse": "glowPulse 4s ease-in-out infinite",
        "bounce-slow": "bounceSlow 2.5s infinite",
      },

      keyframes: {
        /* Floating effect for avatar */
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },

        /* Soft glowing pulse */
        glowPulse: {
          "0%, 100%": {
            opacity: "0.6",
            filter: "blur(12px)",
          },
          "50%": {
            opacity: "1",
            filter: "blur(18px)",
          },
        },

        /* Gentle bounce for download icon */
        bounceSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(4px)" },
        },
      },

      /* Optional: nicer shadows */
      boxShadow: {
        glow: "0 0 20px rgba(130, 69, 236, 0.6)",
      },
    },
  },
  plugins: [],
};
