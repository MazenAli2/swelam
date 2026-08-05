import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#FFB800",
                background: "#0A0A0A",
                surface: "#141414",
                accent: "#FFD700",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            animation: {
                'glow': 'glow 2s ease-in-out infinite alternate',
            },
            keyframes: {
                glow: {
                    'from': { boxShadow: '0 0 5px #FFB800, 0 0 10px #FFB800' },
                    'to': { boxShadow: '0 0 20px #FFB800, 0 0 30px #FFB800' },
                }
            }
        },
    },
    plugins: [],
};
export default config;
