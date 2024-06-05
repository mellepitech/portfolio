/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/css/**/*.{html,js}", 
    "./node_modules/flowbite/**/*.js"
        
  ],
    theme: {
      extend: {   backgroundImage: {
        'hero-pattern': "url('src/assets/hero-pattern.svg')",
        'footer-texture': "url('src/assets/footer-texture.png')",
      }},
    },
    plugins: [
      require('flowbite/plugin')
  ],

  }

  
