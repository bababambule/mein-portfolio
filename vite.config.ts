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
                <link href="https://fonts.googleapis.com/css2?family=Pacifico&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">`,
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
