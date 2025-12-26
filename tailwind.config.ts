import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#001f3f', // Navy blue
          50: '#e6eef5',
          100: '#ccdceb',
          200: '#99b9d7',
          300: '#6696c3',
          400: '#3373af',
          500: '#00509b',
          600: '#003d7a',
          700: '#002a59',
          800: '#001f3f',
          900: '#001428',
        },
        secondary: {
          DEFAULT: '#FFD700', // Gold/Yellow
          50: '#fffef0',
          100: '#fffbd6',
          200: '#fff7ad',
          300: '#fff384',
          400: '#ffef5b',
          500: '#FFD700',
          600: '#d4b200',
          700: '#a88d00',
          800: '#7c6800',
          900: '#504300',
        },
      },
    },
  },
  plugins: [],
};

export default config;
