import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { insertProgressSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes

  // Get meals for a specific day
  app.get("/api/meals/:day", async (req, res) => {
    const { day } = req.params;
    if (!day) {
      return res.status(400).json({ message: "Day parameter is required" });
    }

    const meals = await storage.getMealsByDay(day.toLowerCase());
    return res.json(meals);
  });

  // Get workout for a specific day
  app.get("/api/workouts/:day", async (req, res) => {
    const { day } = req.params;
    if (!day) {
      return res.status(400).json({ message: "Day parameter is required" });
    }

    const workout = await storage.getWorkoutByDay(day.toLowerCase());
    if (!workout) {
      return res.status(404).json({ message: "Workout not found" });
    }

    type ExerciseInfo = { name: string; repsAndWeight: string };

    const dayToExercisesMap: { [key: string]: ExerciseInfo[] } = {
      monday: [
        { name: "Barbell Squats", repsAndWeight: "4x8-10 (40-50% bodyweight)" },
        { name: "Romanian Deadlifts", repsAndWeight: "3x10-12 (25-35 kg)" },
        { name: "Hip Thrusts", repsAndWeight: "3x12 (40-50 kg)" },
        { name: "Calf Raises", repsAndWeight: "3x15 (Bodyweight or add dumbbells)" },
        { name: "Hanging Leg Raises", repsAndWeight: "3x12" },
      ],
      tuesday: [
        { name: "Barbell Bench Press", repsAndWeight: "4x8-10 (30-40 kg)" },
        { name: "Seated Dumbbell Shoulder Press", repsAndWeight: "3x10 (7-10 kg each)" },
      ],
      // Add more days here if needed
    };

    return res.json(dayToExercisesMap[day.toLowerCase()] || []);
  });

  // More routes can be added here...

  return createServer(app);
}