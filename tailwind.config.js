/** @type {import('tailwindcss').Config} */
export default {
  corePlugins: {
    preflight: false, // 禁用默认样式重置以避免与 Element Plus 冲突
  },
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#60a070',
        secondary: '#afd53d',
      },
    },
  },
  plugins: [],
}
