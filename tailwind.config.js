
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#000000',
      },
      backgroundImage: {
        'mark-image': "url('../public/images/bakcground.jpeg')",
        'luces-image': "url('../public/images/luces.jpeg')",
        'luces-back-image': "url('../public/images/lucesv.jpg')"
      }
    },
    fontFamily: {
      "indie": ['Indie Flower'],
      "sans": ['font-sans'],
      "Hunter": ['Hunter'],
      "Montserrat": ['Montserrat'],
      "passion-conflict": ['Passions-Conflict', 'cursive'],
      "cursive": ['cursive']
    }
  },
  plugins: [],
}