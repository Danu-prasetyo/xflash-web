module.exports = {
  content: ['index.html', './src/**/*.{html,js,tsx}', 'admin-page/**/*.{html,js,tsx}', 'xflash-web/**/*.{html,js,tsx}'],
  purge: ['index.html', './src/**/*.{html,js,tsx}', 'admin-page/**/*.{html,js,tsx}', 'xflash-web/**/*.{html,js,tsx}'],
  enabled: process.env.NODE_ENV === 'production',
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
