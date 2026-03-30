import { defineConfig } from "vite"
import { viteStaticCopy } from "vite-plugin-static-copy"

export default defineConfig({
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: ["src/colors.scss", "src/fonts.scss"],
      output: {
        assetFileNames: "[name].[ext]",
      },
    },
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: "src/fonts/*",
          dest: "fonts",
          rename: { stripBase: true },
        },
        {
          src: "src/img/*",
          dest: "img",
          rename: { stripBase: true },
        },
        {
          src: "src/img/icons/*",
          dest: "img/icons",
          rename: { stripBase: true },
        },
        {
          src: "src/img/pwa/*",
          dest: "img/pwa",
          rename: { stripBase: true },
        },
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {},
    },
  },
})
