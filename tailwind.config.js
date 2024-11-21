/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        'bounce-color-change': 'bounceColorChange 5s infinite', // Custom animation that combines bounce and color change
      },
      keyframes: {
        bounceColorChange: {
          '0%': {
            transform: 'translateY(0)', // Initial position (normal)
            color: 'rgb(255, 105, 180)', // Pink
          },
          '25%': {
            transform: 'translateY(-10px)', // Move up for bounce effect
            color: 'rgb(255, 99, 71)', // Red
          },
          '50%': {
            transform: 'translateY(0)', // Back to normal position
            color: 'rgb(255, 223, 0)', // Yellow
          },
          '75%': {
            transform: 'translateY(-10px)', // Move up for bounce effect
            color: 'rgb(138, 43, 226)', // Blue
          },
          '100%': {
            transform: 'translateY(0)', // Back to normal position
            color: 'rgb(255, 105, 180)', // Pink
          },
        },
      },
      boxShadow: {
        'text-glow': '0 0 0px #fff, 0 0 1px #00ff00, 0 0 10px #338aff ', // Custom text shadow
      },
    },
  },
  plugins: [],
};
