/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('../../public/images/header-1.jpg')",
      },
      colors: {
        'light-dark': '#222',
        'light-red': '#fc5252',
        'light-purple': '#381ddb',
        'very-light-purple': '#bbb0fb',
      },
    },
    plugins: [],
  },
}
