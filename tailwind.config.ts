import type { Config } from 'tailwindcss'
const {colors : defaultColors } = require("tailwindcss/defaultTheme")

const colors = {
  ...defaultColors,
  ...{
    "primary" : {
      "red" : "hsl(356, 69%, 56%)",
      "green" : "hsl(163, 72%, 41%)",
      "facebook" : "hsl(208, 92%, 53%)",
      "twitter" : "hsl(203, 89%, 53%)",
      "instagram-start" : "hsl(37, 97%, 70%) ",
      "instagram-end" : "hsl(329, 70%, 58%)",
      "youtube" : "hsl(348, 97%, 39%)"
    },
    "dark" : {
      "bg" : "hsl(230, 17%, 14%)",
      "top-bg" : "hsl(232, 19%, 15%)",
      "card" : "hsl(228, 28%, 20%)",
      "text1" : "hsl(228, 34%, 66%)",
      "text2" : "hsl(0, 0%, 100%)",
      "toggle-start" : "hsl(210, 78%, 56%)",
      "toggle-end" : "hsl(146, 68%, 55%)"
    },
    "light" : {
      "bg" : "hsl(0, 0%, 100%)",
      "top-bg" : "hsl(225, 100%, 98%)",
      "card" : "hsl(227, 47%, 96%)",
      "text1" : "hsl(228, 12%, 44%)",
      "text2" : "hsl(230, 17%, 14%)",
      'toggle' : "hsl(230, 22%, 74%)"
    }

  }
}

const config: Config = {
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
      colors : colors
    },
  },
  plugins: [],
  darkMode : "class"
}
export default config
