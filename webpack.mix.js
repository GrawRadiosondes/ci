const mix = require('laravel-mix')

mix.setPublicPath('dist')

mix.copy('src/img', 'dist/img')

mix.sass('src/css/colors.scss', '/')
mix.sass('src/css/fonts.scss', '/')
