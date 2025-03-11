import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "menu-gradient": "linear-gradient(to right, #70195114, white, #70195114)",
      },
    },
    fontFamily: {
      poppins: ["Poppins"],
      poppinsBold: ["PoppinsBold"],
      poppinsExtraBold: ["PoppinsExtraBold"],
    },
  },
  plugins: [],
} satisfies Config;
