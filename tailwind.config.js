module.exports = {
  content: ['index.html', './src/**/*.{html,js}', 'admin-page/**/*.{html,js}', 'xflash-web/**/*.{html,js}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
};
