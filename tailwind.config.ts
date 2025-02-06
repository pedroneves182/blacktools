import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			ubuntu: [
  				'var(--font-ubuntu)'
  			]
  		},
  		colors: {
  			primary: "#232323",
        secondary: "#4F4F4F",
        accent: "#A7A7A7",
        background: "#111111",
        offwhite: "#EEEEEE"
  		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
