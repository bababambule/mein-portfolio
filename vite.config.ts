import { defineConfig } from "vite";
import { resolve } from "path";
import { createHtmlPlugin } from "vite-plugin-html";

export default defineConfig({
  base: "/mein-portfolio/",
  plugins: [
    createHtmlPlugin({
      minify: true,
      pages: [
        {
          entry: "src/main.ts",
          filename: "index.html",
          template: "index.html",
          injectOptions: {
            data: {
              googleFonts: `
                <link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet">
              `,
            },
          },
        },
      ],
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        digitalProspekt: resolve(__dirname, "digital-prospekt.html"),
        bonusWallet: resolve(__dirname, "bonus-wallet.html"),
        iconPack: resolve(__dirname, "icon-pack.html"),
      },
    },
  },
});
