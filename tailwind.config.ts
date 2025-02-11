import type { Config } from 'tailwindcss';
import TailwindAnimate from 'tailwindcss-animate';

import { spacing } from './src/styles/theme';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/stories/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing,
      maxWidth: {
        content: '600px',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        gray: {
          1: '#F7F8F9',
          2: '#E8EBED',
          3: '#C9CDD2',
          4: '#9EA4AA',
          5: '#72787F',
          6: '#454C53',
          7: '#171719',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          strong: '#6F3CC8',
          normal: '#D3BAFF',
          natural: '#F8F4FF',
          neon: '#7020FF',
          assistive: '#E6D8FF',
        },
        static: {
          black: '#000000',
          white: '#FFFFFF',
        },
      },
      borderRadius: {
        default: 'var(--radius)', // 기본 border-radius (0.5rem)
        lg: '20px', // round-20
        md: '16px', // round-16
        sm: '10px', // round-10
        xs: '6px', // round-6
        none: '0px',
        round: '9999px',
        full: '50%',
      },
      fontFamily: {
        sans: ['"Pretendard Variable"', 'sans-serif'], // 기본 적용
        nexon: ['"NEXON Lv1 Gothic Low"', 'sans-serif'],
      },
      fontSize: {
        title: ['20px', { lineHeight: '140%', letterSpacing: '-0.02em' }],
        heading: ['18px', { lineHeight: '140%', letterSpacing: '-0.02em' }],
        body: ['16px', { lineHeight: '150%', letterSpacing: '-0.02em' }],
        label1: ['14px', { lineHeight: '150%', letterSpacing: '-0.02em' }],
        label2: ['13px', { lineHeight: '150%', letterSpacing: '-0.02em' }],
        caption1: ['12px', { lineHeight: '150%', letterSpacing: '-0.02em' }],
        caption2: ['10px', { lineHeight: '150%', letterSpacing: '-0.02em' }],
        headline: ['20px', { lineHeight: '140%', letterSpacing: '0' }],
        moduleBody: ['16px', { lineHeight: '20px', letterSpacing: '-0.02em' }],
      },
      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      dropShadow: {
        moduleText: '0 0 3px rgba(0, 0, 0, 0.5)',
        navbar: '0px -1px 6px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [TailwindAnimate],
};

export default config;
