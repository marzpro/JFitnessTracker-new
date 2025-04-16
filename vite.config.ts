<<<<<<< HEAD
{\rtf1\ansi\ansicpg1252\cocoartf2821
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import \{ defineConfig \} from "vite";\
import react from "@vitejs/plugin-react";\
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";\
import path, \{ dirname \} from "path";\
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";\
import \{ fileURLToPath \} from "url";\
\
const __filename = fileURLToPath(import.meta.url);\
const __dirname = dirname(__filename);\
\
export default defineConfig(\{\
  plugins: [\
    react(),\
    runtimeErrorOverlay(),\
    themePlugin(),\
    ...(process.env.NODE_ENV !== "production" &&\
    process.env.REPL_ID !== undefined\
      ? [\
          await import("@replit/vite-plugin-cartographer").then((m) =>\
            m.cartographer(),\
          ),\
        ]\
      : []),\
  ],\
  resolve: \{\
    alias: \{\
      "@": path.resolve(__dirname, "client", "src"),\
      "@shared": path.resolve(__dirname, "shared"),\
      "@assets": path.resolve(__dirname, "attached_assets"),\
    \},\
  \},\
  root: path.resolve(__dirname, "client"),\
  build: \{\
    outDir: path.resolve(__dirname, "dist/public"),\
    emptyOutDir: true,\
  \},\
\});\
}
=======
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
import path, { dirname } from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    themePlugin(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true,
  },
});
>>>>>>> 0757d37088bf80c4b46d9b979735b68d79074c34
