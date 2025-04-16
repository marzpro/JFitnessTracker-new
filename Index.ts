{\rtf1\ansi\ansicpg1252\cocoartf2821
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import express, \{ type Request, Response, NextFunction \} from "express";\
import \{ registerRoutes \} from "./routes";\
import \{ setupVite, serveStatic, log \} from "./vite";\
\
const app = express();\
app.use(express.json());\
app.use(express.urlencoded(\{ extended: false \}));\
\
app.use((req, res, next) => \{\
  const start = Date.now();\
  const path = req.path;\
  let capturedJsonResponse: Record<string, any> | undefined = undefined;\
\
  const originalResJson = res.json;\
  res.json = function (bodyJson, ...args) \{\
    capturedJsonResponse = bodyJson;\
    return originalResJson.apply(res, [bodyJson, ...args]);\
  \};\
\
  res.on("finish", () => \{\
    const duration = Date.now() - start;\
    if (path.startsWith("/api")) \{\
      let logLine = `$\{req.method\} $\{path\} $\{res.statusCode\} in $\{duration\}ms`;\
      if (capturedJsonResponse) \{\
        logLine += ` :: $\{JSON.stringify(capturedJsonResponse)\}`;\
      \}\
\
      if (logLine.length > 80) \{\
        logLine = logLine.slice(0, 79) + "\'85";\
      \}\
\
      log(logLine);\
    \}\
  \});\
\
  next();\
\});\
\
(async () => \{\
  const server = await registerRoutes(app);\
\
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => \{\
    const status = err.status || err.statusCode || 500;\
    const message = err.message || "Internal Server Error";\
\
    res.status(status).json(\{ message \});\
    throw err;\
  \});\
\
  // importantly only setup vite in development and after\
  // setting up all the other routes so the catch-all route\
  // doesn't interfere with the other routes\
  if (app.get("env") === "development") \{\
    await setupVite(app, server);\
  \} else \{\
    serveStatic(app);\
  \}\
\
  // ALWAYS serve the app on port 5000\
  // this serves both the API and the client.\
  // It is the only port that is not firewalled.\
  const port = 5000;\
  server.listen(\{\
    port,\
    host: "0.0.0.0",\
    reusePort: true,\
  \}, () => \{\
    log(`serving on port $\{port\}`);\
  \});\
\})();\
}