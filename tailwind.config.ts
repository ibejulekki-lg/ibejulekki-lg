import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', 'Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Official Ibeju-Lekki palette, grouped under `brand` so the default
        // Tailwind scales (amber-600, red-700, yellow-400...) keep working.
        // Existing `bg-brand-yellow` classes resolve to brand.yellow below.
        brand: {
          yellow: '#FFBA26', // primary highlight / fills (black text on top)
          amber:  '#B26B00', // readable yellow text on white; hovers
          hover:  '#E0A421', // yellow hover state
          ink:    '#111111', // body text + dark sections
          red:    '#BE1E2D', // touch of red (alerts, emergencies)
          cream:  '#FAFAFA', // subtle alternating section background
        },
        // `black` has no scale in Tailwind, so remapping it is safe and keeps
        // every existing bg-black / text-black usage on the brand ink tone.
        black: '#111111',
      },
    },
  },
  plugins: [],
};

export default config;
