import { pgTable, text, serial, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// User schema
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Meal schema
export const meals = pgTable("meals", {
  id: serial("id").primaryKey(),
  day: text("day").notNull(), // e.g., "monday", "tuesday"
  time: text("time").notNull(), // e.g., "12:00 PM"
  description: text("description").notNull(),
  calories: integer("calories").notNull(),
  dayNumber: integer("day_number").notNull(), // 1-40
});

export const insertMealSchema = createInsertSchema(meals).omit({
  id: true,
});

export type InsertMeal = z.infer<typeof insertMealSchema>;
export type Meal = typeof meals.$inferSelect;

// Workout schema
export const workouts = pgTable("workouts", {
  id: serial("id").primaryKey(),
  day: text("day").notNull(), // e.g., "monday", "tuesday"
  type: text("type").notNull(), // e.g., "Lower Body & Core"
  dayNumber: integer("day_number").notNull(), // 1-40
});

export const insertWorkoutSchema = createInsertSchema(workouts).omit({
  id: true,
});

export type InsertWorkout = z.infer<typeof insertWorkoutSchema>;
export type Workout = typeof workouts.$inferSelect;

// Exercise schema
export const exercises = pgTable("exercises", {
  id: serial("id").primaryKey(),
  workoutId: integer("workout_id").notNull(),
  name: text("name").notNull(),
  repsAndWeight: text("reps_and_weight").notNull(),
});

export const insertExerciseSchema = createInsertSchema(exercises).omit({
  id: true,
});

export type InsertExercise = z.infer<typeof insertExerciseSchema>;
export type Exercise = typeof exercises.$inferSelect;

// Progress schema
export const progress = pgTable("progress", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  dayNumber: integer("day_number").notNull(),
  completed: boolean("completed").notNull().default(false),
});

export const insertProgressSchema = createInsertSchema(progress).omit({
  id: true,
});

export type InsertProgress = z.infer<typeof insertProgressSchema>;
export type Progress = typeof progress.$inferSelect;

// Reminder schema
export const reminders = pgTable("reminders", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  time: text("time").notNull(),
  message: text("message").notNull(),
  enabled: boolean("enabled").notNull().default(true),
});

export const insertReminderSchema = createInsertSchema(reminders).omit({
  id: true,
});

export type InsertReminder = z.infer<typeof insertReminderSchema>;
export type Reminder = typeof reminders.$inferSelect;

// Notification Settings schema
export const notificationSettings = pgTable("notification_settings", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  workoutReminders: boolean("workout_reminders").notNull().default(true),
  mealReminders: boolean("meal_reminders").notNull().default(true),
});

export const insertNotificationSettingsSchema = createInsertSchema(notificationSettings).omit({
  id: true,
});

export type InsertNotificationSettings = z.infer<typeof insertNotificationSettingsSchema>;
export type NotificationSettings = typeof notificationSettings.$inferSelect;

export interface User {
  id: number;
  username: string;
  password: string;
  createdAt: Date;
}

export interface InsertUser {
  username: string;
  password: string;
}

export interface Meal {
  id: number;
  day: string;
  time: string;
  description: string;
  calories: number;
  dayNumber: number;
  createdAt: Date;
}

export interface InsertMeal {
  day: string;
  time: string;
  description: string;
  calories: number;
  dayNumber: number;
}

export interface Workout {
  id: number;
  day: string;
  type: string;
  dayNumber: number;
  createdAt: Date;
}

export interface InsertWorkout {
  day: string;
  type: string;
  dayNumber: number;
}

export interface Exercise {
  id: number;
  workoutId: number;
  name: string;
  repsAndWeight: string;
  createdAt: Date;
}

export interface InsertExercise {
  workoutId: number;
  name: string;
  repsAndWeight: string;
}

export interface Progress {
  id: number;
  userId: number;
  dayNumber: number;
  workoutCompleted: boolean;
  mealPlanFollowed: boolean;
  notes?: string;
  createdAt: Date;
}

export interface InsertProgress {
  userId: number;
  dayNumber: number;
  workoutCompleted: boolean;
  mealPlanFollowed: boolean;
  notes?: string;
}

export interface Reminder {
  id: number;
  userId: number;
  time: string;
  message: string;
  isActive: boolean;
  createdAt: Date;
}

export interface InsertReminder {
  userId: number;
  time: string;
  message: string;
  isActive: boolean;
}

export interface NotificationSettings {
  id: number;
  userId: number;
  workoutReminders: boolean;
  mealReminders: boolean;
  progressUpdates: boolean;
  createdAt: Date;
}

export interface InsertNotificationSettings {
  userId: number;
  workoutReminders: boolean;
  mealReminders: boolean;
  progressUpdates: boolean;
}
