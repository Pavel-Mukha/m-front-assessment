let mix = require('webpack-mix');

mix.js('src/js/app.js', 'dist')
  .sass('src/scss/app.scss', 'dist')
  .options({
    processCssUrls: false
  })
  .setPublicPath('dist');