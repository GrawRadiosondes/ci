import { defineConfig } from "vite"
import { viteStaticCopy } from "vite-plugin-static-copy"

export default defineConfig({
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: ["src/colors.scss", "src/fonts.scss"],
      output: {
        assetFileNames: (assetInfo) => {
          const name = assetInfo.names?.[0] ?? ""

          if (/\.(woff2?|eot|ttf|otf)$/i.test(name)) {
            return "fonts/[name].[ext]"
          }

          return "[name].[ext]"
        },
      },
    },
  },
  plugins: [
    viteStaticCopy({
      targets: [
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
