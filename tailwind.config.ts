import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['var(--font-body)', 'sans-serif'],
        headline: ['var(--font-body)', 'sans-serif'],
        code: ['var(--font-code)', 'monospace'],
      },
      colors: {
        background: 'hsl(170 20% 8%)',
        foreground: 'hsl(170 10% 85%)',
        card: {
          DEFAULT: 'hsl(170 20% 12%)',
          foreground: 'hsl(170 10% 85%)',
        },
        popover: {
          DEFAULT: 'hsl(170 20% 8%)',
          foreground: 'hsl(170 10% 85%)',
        },
        primary: {
          DEFAULT: 'hsl(160 50% 55%)',
          foreground: 'hsl(160 50% 10%)',
        },
        secondary: {
          DEFAULT: 'hsl(170 20% 15%)',
          foreground: 'hsl(170 10% 85%)',
        },
        muted: {
          DEFAULT: 'hsl(170 20% 15%)',
          foreground: 'hsl(170 10% 55%)',
        },
        accent: {
          DEFAULT: 'hsl(35 70% 65%)',
          foreground: 'hsl(35 70% 10%)',
        },
        destructive: {
          DEFAULT: 'hsl(0 70% 55%)',
          foreground: 'hsl(0 0% 98%)',
        },
        border: 'hsl(170 20% 18%)',
        input: 'hsl(170 20% 15%)',
        ring: 'hsl(160 50% 55%)',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'spatial-drift-1': {
          '0%': { transform: 'translate(0px, 0px) rotate(0deg)' },
          '25%': { transform: 'translate(10vw, 20vh) rotate(90deg)' },
          '50%': { transform: 'translate(5vw, 30vh) rotate(180deg)' },
          '75%': { transform: 'translate(-10vw, 15vh) rotate(270deg)' },
          '100%': { transform: 'translate(0px, 0px) rotate(360deg)' },
        },
        'spatial-drift-2': {
          '0%': { transform: 'translate(0px, 0px) rotate(0deg)' },
          '25%': { transform: 'translate(-15vw, 10vh) rotate(-90deg)' },
          '50%': { transform: 'translate(-5vw, -25vh) rotate(-180deg)' },
          '75%': { transform: 'translate(15vw, -10vh) rotate(-270deg)' },
          '100%': { transform: 'translate(0px, 0px) rotate(-360deg)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 1s ease-in-out',
        'spatial-drift-1': 'spatial-drift-1 80s ease-in-out infinite',
        'spatial-drift-2': 'spatial-drift-2 90s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
