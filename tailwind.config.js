
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jakarta : ["Plus Jakarta Sans, sans-serif"],
        inter : ["Inter, sans-serif"]
      },
      colors:{
        darkBlue : '#111927',
        graytext : '#6C737F',
        purple: '#6366F1'
      }
    },
  },
  plugins: [],
}