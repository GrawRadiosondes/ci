const mix = require("laravel-mix");

mix.webpackConfig({
  stats: {
    children: true,
  },
});

mix.setPublicPath("dist");

mix.copy("src", "dist");

mix.sass("src/colors.scss", "/");
mix.sass("src/fonts.scss", "/").options({ processCssUrls: false });
