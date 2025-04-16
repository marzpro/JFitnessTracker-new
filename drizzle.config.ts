<<<<<<< HEAD
{\rtf1\ansi\ansicpg1252\cocoartf2821
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import \{ defineConfig \} from "drizzle-kit";\
\
if (!process.env.DATABASE_URL) \{\
  throw new Error("DATABASE_URL, ensure the database is provisioned");\
\}\
\
export default defineConfig(\{\
  out: "./migrations",\
  schema: "./shared/schema.ts",\
  dialect: "postgresql",\
  dbCredentials: \{\
    url: process.env.DATABASE_URL,\
  \},\
\});\
}
=======
import { defineConfig } from "drizzle-kit";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL, ensure the database is provisioned");
}

export default defineConfig({
  out: "./migrations",
  schema: "./shared/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});
>>>>>>> 0757d37088bf80c4b46d9b979735b68d79074c34
