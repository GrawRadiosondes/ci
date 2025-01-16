const mix = require("laravel-mix");

mix.setPublicPath("dist");

mix.copy("src", "dist");

mix.sass("src/colors.scss", "/");
mix.sass("src/fonts.scss", "/").options({ processCssUrls: false });
