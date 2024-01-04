/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      'red-500': '#ef4444',
      'violet-400': '#a78bfa',
      'violet-600': '#9333ea',
      'gray-100': '#f3f4f6',
      'gray-500': '#6b7280',
      'gray-800': '#1f2937',
      'gray-900': '#111827',
      'gray-950': '#030712',
    },
    fontFamily: {
      'sans': ['Saira', 'sans-serif']
    }
  },
  plugins: [],
}

