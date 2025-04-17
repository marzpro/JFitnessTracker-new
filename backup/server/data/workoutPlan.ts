import { type InsertWorkout, type InsertExercise } from "../../shared/schema";

export const workoutPlan: { workout: InsertWorkout; exercises: InsertExercise[] }[] = [
  {
    workout: {
      day: "monday",
      type: "Lower Body & Core",
      dayNumber: 1
    },
    exercises: [
      {
        workoutId: 1,
        name: "Barbell Squats",
        repsAndWeight: "4x8-10 (40-50% bodyweight)"
      },
      {
        workoutId: 1,
        name: "Romanian Deadlifts",
        repsAndWeight: "3x10-12 (25-35 kg)"
      },
      {
        workoutId: 1,
        name: "Hip Thrusts",
        repsAndWeight: "3x12 (40-50 kg)"
      },
      {
        workoutId: 1,
        name: "Calf Raises",
        repsAndWeight: "3x15 (Bodyweight or add dumbbells)"
      },
      {
        workoutId: 1,
        name: "Hanging Leg Raises",
        repsAndWeight: "3x12"
      }
    ]
  },
  {
    workout: {
      day: "tuesday",
      type: "Upper Body & Arms",
      dayNumber: 2
    },
    exercises: [
      {
        workoutId: 2,
        name: "Barbell Bench Press",
        repsAndWeight: "4x8-10 (30-40 kg)"
      },
      {
        workoutId: 2,
        name: "Seated Dumbbell Shoulder Press",
        repsAndWeight: "3x10 (7-10 kg each)"
      },
      {
        workoutId: 2,
        name: "Lat Pulldown",
        repsAndWeight: "3x12 (25-35 kg)"
      },
      {
        workoutId: 2,
        name: "Bicep Curls",
        repsAndWeight: "3x12 (6-8 kg each)"
      },
      {
        workoutId: 2,
        name: "Triceps Dips",
        repsAndWeight: "3x12 (Bodyweight or assisted)"
      }
    ]
  },
  {
    workout: {
      day: "wednesday",
      type: "Glutes & Hamstrings",
      dayNumber: 3
    },
    exercises: [
      {
        workoutId: 3,
        name: "Deadlifts",
        repsAndWeight: "4x8 (40-50% bodyweight)"
      },
      {
        workoutId: 3,
        name: "Bulgarian Split Squats",
        repsAndWeight: "3x10 per leg (Bodyweight or 8-10 kg dumbbells)"
      },
      {
        workoutId: 3,
        name: "Glute Bridges",
        repsAndWeight: "3x12 (30-40 kg)"
      },
      {
        workoutId: 3,
        name: "Hamstring Curls",
        repsAndWeight: "3x12 (20-30 kg)"
      }
    ]
  },
  {
    workout: {
      day: "thursday",
      type: "Full Body Strength",
      dayNumber: 4
    },
    exercises: [
      {
        workoutId: 4,
        name: "Back Squats",
        repsAndWeight: "4x8 (40-50% bodyweight)"
      },
      {
        workoutId: 4,
        name: "Deadlifts",
        repsAndWeight: "3x8 (40-50% bodyweight)"
      },
      {
        workoutId: 4,
        name: "Biceps and Triceps Combo",
        repsAndWeight: "3x12 (6 kg)"
      },
      {
        workoutId: 4,
        name: "Bent Over Rows",
        repsAndWeight: "3x10 (20-30 kg total)"
      },
      {
        workoutId: 4,
        name: "Abs",
        repsAndWeight: "200"
      }
    ]
  },
  {
    workout: {
      day: "friday",
      type: "Running",
      dayNumber: 5
    },
    exercises: [
      {
        workoutId: 5,
        name: "Steady-State Run",
        repsAndWeight: "Moderate Pace - 5-6 km"
      },
      {
        workoutId: 5,
        name: "HIIT Sprints",
        repsAndWeight: "10 rounds: 30 sec sprint / 1 min walk"
      }
    ]
  },
  {
    workout: {
      day: "saturday",
      type: "Rest Day",
      dayNumber: 6
    },
    exercises: [
      {
        workoutId: 6,
        name: "Active Recovery",
        repsAndWeight: "Walking/Stretching"
      }
    ]
  },
  {
    workout: {
      day: "sunday",
      type: "Rest Day",
      dayNumber: 7
    },
    exercises: [
      {
        workoutId: 7,
        name: "Active Recovery",
        repsAndWeight: "Walking/Stretching"
      }
    ]
  }
]; 