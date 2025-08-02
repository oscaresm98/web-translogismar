import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-primary": "linear-gradient(135deg, #ff6a0f 0%, #ff8533 100%)",
        "gradient-secondary": "linear-gradient(135deg, #233343 0%, #2d3e52 100%)",
        "gradient-hero": "linear-gradient(135deg, rgba(35, 51, 67, 0.9) 0%, rgba(255, 106, 15, 0.8) 100%)",
      },
      colors: {
        'prima': '#ff6a0f',
        'secun': '#233343',
        'accent': {
          50: '#fff8f1',
          100: '#ffecd1',
          200: '#ffd4a3',
          300: '#ffb86a',
          400: '#ff9633',
          500: '#ff6a0f',
          600: '#f05a06',
          700: '#c7460a',
          800: '#9e3710',
          900: '#7f2f11',
        },
        'neutral': {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        'dark': {
          50: '#f6f7f8',
          100: '#e4e7ea',
          200: '#c9d0d6',
          300: '#a4afba',
          400: '#7a8897',
          500: '#5e6b7a',
          600: '#4a5562',
          700: '#3e4651',
          800: '#363c47',
          900: '#233343',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'bounce-subtle': 'bounceSubtle 2s infinite',
        'pulse-soft': 'pulseSoft 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'strong': '0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 2px 10px -2px rgba(0, 0, 0, 0.04)',
        'glow': '0 0 20px rgba(255, 106, 15, 0.3)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
export default config;
