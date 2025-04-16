<<<<<<< HEAD
{\rtf1\ansi\ansicpg1252\cocoartf2821
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import type \{ Config \} from "tailwindcss";\
\
export default \{\
  darkMode: ["class"],\
  content: ["./client/index.html", "./client/src/**/*.\{js,jsx,ts,tsx\}"],\
  theme: \{\
    extend: \{\
      borderRadius: \{\
        lg: "var(--radius)",\
        md: "calc(var(--radius) - 2px)",\
        sm: "calc(var(--radius) - 4px)",\
      \},\
      colors: \{\
        background: "hsl(var(--background))",\
        foreground: "hsl(var(--foreground))",\
        card: \{\
          DEFAULT: "hsl(var(--card))",\
          foreground: "hsl(var(--card-foreground))",\
        \},\
        popover: \{\
          DEFAULT: "hsl(var(--popover))",\
          foreground: "hsl(var(--popover-foreground))",\
        \},\
        primary: \{\
          DEFAULT: "hsl(var(--primary))",\
          foreground: "hsl(var(--primary-foreground))",\
        \},\
        secondary: \{\
          DEFAULT: "hsl(var(--secondary))",\
          foreground: "hsl(var(--secondary-foreground))",\
        \},\
        muted: \{\
          DEFAULT: "hsl(var(--muted))",\
          foreground: "hsl(var(--muted-foreground))",\
        \},\
        accent: \{\
          DEFAULT: "hsl(var(--accent))",\
          foreground: "hsl(var(--accent-foreground))",\
        \},\
        destructive: \{\
          DEFAULT: "hsl(var(--destructive))",\
          foreground: "hsl(var(--destructive-foreground))",\
        \},\
        border: "hsl(var(--border))",\
        input: "hsl(var(--input))",\
        ring: "hsl(var(--ring))",\
        chart: \{\
          "1": "hsl(var(--chart-1))",\
          "2": "hsl(var(--chart-2))",\
          "3": "hsl(var(--chart-3))",\
          "4": "hsl(var(--chart-4))",\
          "5": "hsl(var(--chart-5))",\
        \},\
        sidebar: \{\
          DEFAULT: "hsl(var(--sidebar-background))",\
          foreground: "hsl(var(--sidebar-foreground))",\
          primary: "hsl(var(--sidebar-primary))",\
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",\
          accent: "hsl(var(--sidebar-accent))",\
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",\
          border: "hsl(var(--sidebar-border))",\
          ring: "hsl(var(--sidebar-ring))",\
        \},\
      \},\
      keyframes: \{\
        "accordion-down": \{\
          from: \{\
            height: "0",\
          \},\
          to: \{\
            height: "var(--radix-accordion-content-height)",\
          \},\
        \},\
        "accordion-up": \{\
          from: \{\
            height: "var(--radix-accordion-content-height)",\
          \},\
          to: \{\
            height: "0",\
          \},\
        \},\
      \},\
      animation: \{\
        "accordion-down": "accordion-down 0.2s ease-out",\
        "accordion-up": "accordion-up 0.2s ease-out",\
      \},\
    \},\
  \},\
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],\
\} satisfies Config;\
}
=======
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
>>>>>>> 0757d37088bf80c4b46d9b979735b68d79074c34
