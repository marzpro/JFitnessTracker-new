import {
  User, type InsertUser,
  Meal, type InsertMeal,
  Workout, type InsertWorkout,
  Exercise, type InsertExercise,
  Progress, type InsertProgress,
  Reminder, type InsertReminder,
  NotificationSettings, type InsertNotificationSettings
} from "./shared/schema";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Meal methods
  getMeals(dayNumber: number): Promise<Meal[]>;
  getMealsByDay(day: string): Promise<Meal[]>;
  createMeal(meal: InsertMeal): Promise<Meal>;
  
  // Workout methods
  getWorkout(dayNumber: number): Promise<Workout | undefined>;
  getWorkoutByDay(day: string): Promise<Workout | undefined>;
  createWorkout(workout: InsertWorkout): Promise<Workout>;
  
  // Exercise methods
  getExercisesByWorkoutId(workoutId: number): Promise<Exercise[]>;
  createExercise(exercise: InsertExercise): Promise<Exercise>;
  
  // Progress methods
  getProgressByUserAndDay(userId: number, dayNumber: number): Promise<Progress | undefined>;
  createProgress(progress: InsertProgress): Promise<Progress>;
  updateProgress(id: number, progress: Partial<InsertProgress>): Promise<Progress>;
  
  // Reminders methods
  getRemindersByUser(userId: number): Promise<Reminder[]>;
  getReminderById(id: number): Promise<Reminder | undefined>;
  createReminder(reminder: InsertReminder): Promise<Reminder>;
  updateReminder(id: number, reminder: Partial<InsertReminder>): Promise<Reminder>;
  deleteReminder(id: number): Promise<boolean>;
}