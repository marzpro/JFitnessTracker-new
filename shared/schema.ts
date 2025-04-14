import { pgTable, text, serial, integer, boolean, date, timestamp, time } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// User schema (kept from original)
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

// Program Days schema
export const programDays = pgTable("program_days", {
  id: serial("id").primaryKey(),
  dayNumber: integer("day_number").notNull(), // 1-40
  date: date("date").notNull(), // Actual calendar date
  workoutType: text("workout_type"), // e.g., "Lower Body & Core", "Rest Day", etc.
  isRestDay: boolean("is_rest_day").notNull().default(false),
});

// Meals schema
export const meals = pgTable("meals", {
  id: serial("id").primaryKey(),
  programDayId: integer("program_day_id").notNull(),
  mealTime: text("meal_time").notNull(), // "12:00 PM", "1:00 PM", "7:00 PM"
  description: text("description").notNull(), // Detailed meal description
  calories: integer("calories").notNull(),
  isOptional: boolean("is_optional").default(false),
});

// Workouts schema
export const workouts = pgTable("workouts", {
  id: serial("id").primaryKey(),
  programDayId: integer("program_day_id").notNull(),
  type: text("type").notNull(), // e.g., "Lower Body & Core", "Upper Body & Arms"
  duration: text("duration").notNull(), // "45-60 min"
  isCardio: boolean("is_cardio").default(false),
});

// Exercises schema
export const exercises = pgTable("exercises", {
  id: serial("id").primaryKey(),
  workoutId: integer("workout_id").notNull(),
  name: text("name").notNull(), // e.g., "Barbell Squats"
  sets: integer("sets").notNull(),
  reps: text("reps").notNull(),
  weightDescription: text("weight_description").notNull(), // e.g., "40-50% bodyweight"
  notes: text("notes"), // Additional instructions or form notes
});

// User Progress schema
export const progress = pgTable("progress", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  programDayId: integer("program_day_id").notNull(),
  date: date("date").notNull(),
  mealCompletions: text("meal_completions").notNull().default('[]'), // JSON array of completed meal IDs
  workoutCompleted: boolean("workout_completed").notNull().default(false),
  exerciseCompletions: text("exercise_completions").notNull().default('[]'), // JSON array of completed exercise IDs
  notes: text("notes"),
  actualCaloriesConsumed: integer("actual_calories_consumed"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

// Reminders schema (kept but modified)
export const reminders = pgTable("reminders", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  type: text("type").notNull(), // "meal" or "workout"
  title: text("title").notNull(),
  message: text("message").notNull(),
  time: text("time").notNull(),
  enabled: boolean("enabled").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

// Notification settings schema (kept as is)
export const notificationSettings = pgTable("notification_settings", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().unique(),
  enableBrowserNotifications: boolean("enable_browser_notifications").notNull().default(true),
  enableEmailNotifications: boolean("enable_email_notifications").notNull().default(false),
  emailAddress: text("email_address"),
  reminderAdvanceMinutes: integer("reminder_advance_minutes").notNull().default(15),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

// Export schemas
export const insertProgramDaySchema = createInsertSchema(programDays).omit({ id: true });
export const insertMealSchema = createInsertSchema(meals).omit({ id: true });
export const insertWorkoutSchema = createInsertSchema(workouts).omit({ id: true });
export const insertExerciseSchema = createInsertSchema(exercises).omit({ id: true });
export const insertProgressSchema = createInsertSchema(progress).omit({ id: true, createdAt: true });
export const insertReminderSchema = createInsertSchema(reminders).omit({ id: true, createdAt: true });
export const insertNotificationSettingsSchema = createInsertSchema(notificationSettings).omit({ id: true, createdAt: true });

// Export types
export type InsertProgramDay = z.infer<typeof insertProgramDaySchema>;
export type InsertMeal = z.infer<typeof insertMealSchema>;
export type InsertWorkout = z.infer<typeof insertWorkoutSchema>;
export type InsertExercise = z.infer<typeof insertExerciseSchema>;
export type InsertProgress = z.infer<typeof insertProgressSchema>;
export type InsertReminder = z.infer<typeof insertReminderSchema>;
export type InsertNotificationSettings = z.infer<typeof insertNotificationSettingsSchema>;

export type ProgramDay = typeof programDays.$inferSelect;
export type Meal = typeof meals.$inferSelect;
export type Workout = typeof workouts.$inferSelect;
export type Exercise = typeof exercises.$inferSelect;
export type Progress = typeof progress.$inferSelect;
export type Reminder = typeof reminders.$inferSelect;
export type NotificationSettings = typeof notificationSettings.$inferSelect;
