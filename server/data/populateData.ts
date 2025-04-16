import { IStorage } from "../../storage";
import { workoutPlan } from "./workoutPlan";
import { mealPlan } from "./mealPlan";

export async function populateWorkoutAndMealPlan(storage: IStorage): Promise<void> {
  // Clear existing data for week 1 (optional)
  // await clearExistingData(storage);

  // Populate workouts and exercises
  const workoutPromises = workoutPlan.map(async (plan) => {
    const workout = await storage.createWorkout(plan.workout);
    const exercisePromises = plan.exercises.map(exercise => 
      storage.createExercise({
        ...exercise,
        workoutId: workout.id
      })
    );
    await Promise.all(exercisePromises);
  });
  await Promise.all(workoutPromises);

  // Populate meals
  const mealPromises = mealPlan.map(meal => storage.createMeal(meal));
  await Promise.all(mealPromises);
}

// Helper function to clear existing data (optional)
async function clearExistingData(storage: IStorage): Promise<void> {
  // Note: This would require adding delete methods to the storage interface
  // await storage.deleteExercises();
  // await storage.deleteMeals();
  // await storage.deleteWorkouts();
} 