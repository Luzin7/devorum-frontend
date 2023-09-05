/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        text: 'var(--text)',
        background: 'var(--bg)',
        primary: 'var(--primary)',
        input: 'var(--input)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        footerUp: 'var(--footer-up)',
        footerMid: 'var(--footer-mid)',
        footerDown: 'var(--footer-down)',
      },
    },
  },
  plugins: [],
};
