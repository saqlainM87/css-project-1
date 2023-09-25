import type { Config } from 'tailwindcss';

const config: Config = {
    corePlugins: {
        preflight: false,
    },
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            // Colors
            colors: {
                'custom-purple-1': '#937DC2',
                'custom-purple-2': '#C689C6',
                'text-color-1': '#4D4C4C',
                'text-color-2': '#231F2D',
                'text-color-3': '#7B7881',
                'text-color-4': '#382C2C',
                'text-color-5': 'rgba(32, 31, 31, 0.80)',
                'text-color-6': '#313131',
                'bg-color-1': '#F1F1F1',
            },
            // Breakpoints
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1440px',
            },
        },
    },
    plugins: [],
};
export default config;
