import express from "express";
import { createServer } from "http";
import { setupVite, serveStatic, log } from "../vite";

async function startServer() {
  const app = express();
  const server = createServer(app);

  if (process.env.NODE_ENV === "production") {
    // In production, serve the built static files
    serveStatic(app);
  } else {
    // In development, use Vite in middleware mode
    await setupVite(app, server);
  }

  const PORT = process.env.PORT || 3000;
  server.listen(PORT, () => {
    log(`Server running at http://localhost:${PORT}`, "startup");
  });
}

startServer().catch((err) => {
  console.error(err);
  process.exit(1);
});