// tailwind.config.js

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1600px',
    },
    extend: {
      colors: {
        gray: {
          90: "#4F4F4F",
        },
      },
      backgroundImage: theme => ({
        'pattern-2': "url('/path/to/pattern-2.png')",
      }),
      borderColor: theme => ({
        'gray-20': '#d1d1d1',
      }),
      borderRadius: {
        '5xl': '2rem',
      },
    },
  },
  plugins: [],
};
