import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        text: 'var(--text)',
        whiteText: '#faf2fc',
        background: 'var(--bg)',
        topicBackground: 'var(--bg-topic)',
        primary: 'var(--primary)',
        input: 'var(--input)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        footerUp: 'var(--footer-up)',
        footerMid: 'var(--footer-mid)',
        footerDown: 'var(--footer-down)'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
export default config;
