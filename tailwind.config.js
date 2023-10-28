/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode:'class',
  theme: {
    container:{
      center:true,
      padding:'16px'
    },
    extend: {
      colors:{
        primary:'#4f46e5',
        secondary:'#64748b',
        dark: '#0f172a',
        darkSecondary:'#7dd3fc'
      },
      screens:{
        '2xl':'1320px'
      }
    },
  },
  plugins: [],
}

