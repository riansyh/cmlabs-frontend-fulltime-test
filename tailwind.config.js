/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        "primary": '#F6FAF2',
        "secondary-1": '#87B05B',
        "secondary-2": '#6E9E3A',
        "dark-1": '#00090C',
        "dark-2": '#0B0B0B',
      }
    },
    boxShadow: {
      'smooth': "0px 7px 15px rgba(0, 0, 0, 0.04)"
    }
  },
  plugins: [],
}