/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      typography: ({ theme }) => ({
        invert: {
          css: {
            color: theme('colors.white'),
            a: { color: theme('colors.indigo.300') },
            strong: { color: theme('colors.white') },
            h1: { color: theme('colors.white') },
            h2: { color: theme('colors.white') },
            h3: { color: theme('colors.white') },
            code: { color: theme('colors.indigo.300') },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}


