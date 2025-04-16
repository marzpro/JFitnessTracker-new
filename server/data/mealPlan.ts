import { type InsertMeal } from "../../shared/schema";

export const mealPlan: InsertMeal[] = [
  // Monday
  {
    day: "monday",
    time: "12:00 PM",
    description: "1 Cappuccino (low-cal milk)",
    calories: 100,
    dayNumber: 1
  },
  {
    day: "monday",
    time: "1:00 PM",
    description: "2 Scrambled Eggs (150 kcal) + 300g beef patty (700 kcal) + 1 tbsp Oil or mayo (50 kcal)",
    calories: 900,
    dayNumber: 1
  },
  {
    day: "monday",
    time: "7:00 PM",
    description: "100g Full-Fat Yogurt (150 kcal)",
    calories: 150,
    dayNumber: 1
  },
  
  // Tuesday
  {
    day: "tuesday",
    time: "12:00 PM",
    description: "1 Cappuccino",
    calories: 100,
    dayNumber: 2
  },
  {
    day: "tuesday",
    time: "1:00 PM",
    description: "2 Boiled Eggs (150 kcal) + 300g Grilled Chicken Breast (600 kcal) + 1 tbsp Olive oil or sauce (50 kcal)",
    calories: 800,
    dayNumber: 2
  },
  {
    day: "tuesday",
    time: "7:00 PM",
    description: "Yogurt 100g (150 kcal)",
    calories: 150,
    dayNumber: 2
  },
  
  // Wednesday
  {
    day: "wednesday",
    time: "12:00 PM",
    description: "1 Cappuccino",
    calories: 100,
    dayNumber: 3
  },
  {
    day: "wednesday",
    time: "1:00 PM",
    description: "150g Lean Beef (300 kcal) + 2 Fried Eggs (150 kcal) + 1 tbsp Olive Oil (50 kcal)",
    calories: 500,
    dayNumber: 3
  },
  {
    day: "wednesday",
    time: "7:00 PM",
    description: "150g Hake (300 kcal) OR salmon (400 kcal) + 1 Boiled Egg (70 kcal) + 1 tbsp Olive Oil (50 kcal)",
    calories: 520,
    dayNumber: 3
  },
  
  // Thursday
  {
    day: "thursday",
    time: "12:00 PM",
    description: "1 Cappuccino",
    calories: 100,
    dayNumber: 4
  },
  {
    day: "thursday",
    time: "1:00 PM",
    description: "150g Chicken Breast (300 kcal) + 2 Scrambled Eggs (150 kcal) + 1 tbsp Olive Oil (50 kcal)",
    calories: 500,
    dayNumber: 4
  },
  {
    day: "thursday",
    time: "7:00 PM",
    description: "200g Fish (400 kcal) + Mixed Vegetables (100 kcal) + 1 tbsp Olive Oil (50 kcal)",
    calories: 550,
    dayNumber: 4
  },
  
  // Friday
  {
    day: "friday",
    time: "12:00 PM",
    description: "1 Cappuccino + 1 Glass of Wine",
    calories: 220,
    dayNumber: 5
  },
  {
    day: "friday",
    time: "1:00 PM",
    description: "Skipped to balance dinner calories",
    calories: 0,
    dayNumber: 5
  },
  {
    day: "friday",
    time: "7:00 PM",
    description: "Sushi: 2 Salmon Roses (140 kcal) + 8 Prawn California Rolls (720 kcal) + Soy Sauce & Wasabi (40 kcal)",
    calories: 900,
    dayNumber: 5
  },
  
  // Saturday
  {
    day: "saturday",
    time: "12:00 PM",
    description: "1 Cappuccino + 1 Glass of Wine",
    calories: 220,
    dayNumber: 6
  },
  {
    day: "saturday",
    time: "1:00 PM",
    description: "2 scrambled eggs (140 calories) + 2 slices of bacon (90 calories) + ½ avocado (120 calories)",
    calories: 450,
    dayNumber: 6
  },
  {
    day: "saturday",
    time: "7:00 PM",
    description: "200g Lean Beef (400 kcal) + sweet potatoes 100g or 30g berries (60 kcal)",
    calories: 460,
    dayNumber: 6
  },
  
  // Sunday
  {
    day: "sunday",
    time: "12:00 PM",
    description: "1 Cappuccino",
    calories: 100,
    dayNumber: 7
  },
  {
    day: "sunday",
    time: "1:00 PM",
    description: "Light lunch",
    calories: 440,
    dayNumber: 7
  },
  {
    day: "sunday",
    time: "7:00 PM",
    description: "Dinner",
    calories: 500,
    dayNumber: 7
  }
]; 