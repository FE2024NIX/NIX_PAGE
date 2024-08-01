/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        purple: '#280a38', //Fondo footer y filtro de imagen en la visión y en los servicios
        orange: '#ff7a00', //Títulos
        'purple-light': '#a851ff', //Iconos (footer) y rectangulos morados claros
        'purple-opaque': '#2c0e3e', //Filtro de imagen en el header
        'purple-super-light': '#f7f0ff', //Círculos en la sección contacto
        'purple-degraded': '#8f00ff', //Color morado para degradado de botón y texto
        'pink-degraded': '#fc00d3', //Color fucsia para degradado de botón y texto
        'orange-degraded': '#ff8a00', //Color maranja para degradado de botón y texto
        'orange-opaque': '#794304', //Filtro de imagen en la misión
        'gray-opaque': '#2B2A2C', //Filtro de imagen en la visión
      },
        'gray-input': '#eaeaea', //Bordes de formulario y componentes
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'], //Descripción en cada sección
        zen: ['Zen Dots', 'sans-serif'], //Títulos
        unbounded: ['Unbounded', 'sans-serif'], //Títulos
        orbitron: ['Orbitron', 'sans-serif'], //Títulos
      },

      screens: {
        xs: '480px', //Breakpoint para pantalla ultra pequeña (Responsive)
        mb: '320px',
      },
    },
  },
  plugins: [],
};
