import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { populateWorkoutAndMealPlan } from "./data/populateData";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes prefixed with /api
  
  // Get meals for a specific day
  app.get("/api/meals/:day", async (req, res) => {
    const { day } = req.params;
    console.log(`Fetching meals for day: ${day}`);
    
    if (!day) {
      return res.status(400).json({ message: "Day parameter is required" });
    }
    
    const meals = await storage.getMealsByDay(day.toLowerCase());
    console.log(`Found ${meals.length} meals for day: ${day}`);
    return res.json(meals);
  });

  // Get workout for a specific day
  app.get("/api/workouts/:day", async (req, res) => {
    const { day } = req.params;
    console.log(`Fetching workout for day: ${day}`);
    
    if (!day) {
      return res.status(400).json({ message: "Day parameter is required" });
    }
    
    const workout = await storage.getWorkoutByDay(day.toLowerCase());
    
    if (!workout) {
      console.log(`No workout found for day: ${day}`);
      return res.status(404).json({ message: "Workout not found" });
    }
    
    // Get exercises for this workout
    const exercises = await storage.getExercisesByWorkoutId(workout.id);
    return res.json({ workout, exercises });
  });

  // Populate workout and meal plan data
  app.post("/api/populate", async (req, res) => {
    try {
      await populateWorkoutAndMealPlan(storage);
      return res.json({ message: "Successfully populated workout and meal plan data" });
    } catch (error) {
      console.error("Error populating data:", error);
      return res.status(500).json({ message: "Failed to populate data" });
    }
  });

  return createServer(app);
} 