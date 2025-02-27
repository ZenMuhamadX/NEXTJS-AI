// tailwind.config.js

module.exports = {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         backgroundImage: {
            "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            "gradient-conic":
               "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
         },
         colors: {
            colors: {
               primary: "#EEEEEE",
               accent: "#00ADB5",
               secondary: "#393E46",
               dark: "#141414",
               body: "#18181aff",
            },
         },
      },
   },
   plugins: [],
};
