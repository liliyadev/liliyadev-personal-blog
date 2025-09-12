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
      color: theme('colors.gray.100'), // ✅ base text color
      a: { color: theme('colors.indigo.300') },
      strong: { color: theme('colors.gray.100') },
      h1: { color: theme('colors.gray.100') },
      h2: { color: theme('colors.gray.100') },
      h3: { color: theme('colors.gray.100') },
      h4: { color: theme('colors.gray.100') },
      code: { color: theme('colors.indigo.300') },
      blockquote: { color: theme('colors.gray.100') },
      p: { color: theme('colors.gray.100') },
      li: { color: theme('colors.gray.100') },
    },
  },
}),

    },
  },
  plugins: [require('@tailwindcss/typography')],
}


