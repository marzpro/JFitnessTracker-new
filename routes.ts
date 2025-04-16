{\rtf1\ansi\ansicpg1252\cocoartf2821
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import type \{ Express \} from "express";\
import \{ createServer, type Server \} from "http";\
import \{ storage \} from "./storage";\
import \{ z \} from "zod";\
import \{ insertProgressSchema \} from "@shared/schema";\
\
export async function registerRoutes(app: Express): Promise<Server> \{\
  // API routes prefixed with /api\
  \
  // Get meals for a specific day\
  app.get("/api/meals/:day", async (req, res) => \{\
    const \{ day \} = req.params;\
    console.log(`Fetching meals for day: $\{day\}`);\
    \
    if (!day) \{\
      return res.status(400).json(\{ message: "Day parameter is required" \});\
    \}\
    \
    const meals = await storage.getMealsByDay(day.toLowerCase());\
    console.log(`Found $\{meals.length\} meals for day: $\{day\}`);\
    return res.json(meals);\
  \});\
\
  // Get workout for a specific day\
  app.get("/api/workouts/:day", async (req, res) => \{\
    const \{ day \} = req.params;\
    console.log(`Fetching workout for day: $\{day\}`);\
    \
    if (!day) \{\
      return res.status(400).json(\{ message: "Day parameter is required" \});\
    \}\
    \
    const workout = await storage.getWorkoutByDay(day.toLowerCase());\
    \
    if (!workout) \{\
      console.log(`No workout found for day: $\{day\}`);\
      return res.status(404).json(\{ message: "Workout not found" \});\
    \}\
    \
    // Special handling for workouts based on the day\
    // Define exercise type\
    type ExerciseInfo = \{ name: string; repsAndWeight: string \};\
\
    // Add proper index signature to the map\
    const dayToExercisesMap: \{ [key: string]: ExerciseInfo[] \} = \{\
      "monday": [\
        \{ name: "Barbell Squats", repsAndWeight: "4x8\'9610 (40\'9650% bodyweight)" \},\
        \{ name: "Romanian Deadlifts", repsAndWeight: "3x10\'9612 (25\'9635 kg)" \},\
        \{ name: "Hip Thrusts", repsAndWeight: "3x12 (40\'9650 kg)" \},\
        \{ name: "Calf Raises", repsAndWeight: "3x15 (Bodyweight or add dumbbells)" \},\
        \{ name: "Hanging Leg Raises", repsAndWeight: "3x12" \}\
      ],\
      "tuesday": [\
        \{ name: "Barbell Bench Press", repsAndWeight: "4x8\'9610 (30\'9640 kg)" \},\
        \{ name: "Seated Dumbbell Shoulder Press", repsAndWeight: "3x10 (7\'9610 kg each)" \},\
}