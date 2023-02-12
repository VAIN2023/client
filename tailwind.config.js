/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'temp': "url('https://www.english-heritage.org.uk/siteassets/home/learn/story-of-england/victorian/victoria_getty_leemagecorbis_crop.jpg?w=640&mode=none&scale=downscale&quality=60&anchor=&WebsiteVersion=20220516171525')"
      },
      gridTemplateRows: {
        // Simple 8 row grid
        '8': 'repeat(8, minmax(100px, 1fr))',

        // Complex site-specific row configuration
        'layout': '200px minmax(900px, 1fr) 100px',
      },
      gridTemplateColumns: {
      }
    },
    fontFamily: {
      didot: ["didot", "sans-serif"]
    }
  },
  plugins: [
    require('@headlessui/tailwindcss'),
    require('@headlessui/tailwindcss')({ prefix: 'ui' })
  ],
}
