import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import fs from "fs";

// 👇 This plugin copies .htaccess to dist automatically
const copyHtaccess = () => ({
  name: "copy-htaccess",
  closeBundle() {
    const src = "public/.htaccess";
    const dest = "dist/.htaccess";
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, dest);
      console.log("✅ .htaccess copied to dist/");
    } else {
      console.warn("⚠️ No .htaccess found in /public");
    }
  },
});

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    copyHtaccess(), // include our custom plugin
  ],
  server: {
    historyApiFallback: true, // works locally
  },
});
