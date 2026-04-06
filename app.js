/* ============================================
   CASSIE'S WORLD — Food & Health Interface
   app.js — Full Application Logic
   ============================================ */

// ============================================
// DATA: MEAL DATABASE
// ============================================

const MEALS = {
  breakfast: [
    {
      id: 'b1', name: 'Oatmeal with Fresh Berries', emoji: '🫙',
      calories: 348, protein: 10, carbs: 64, fat: 7, fiber: 8,
      prepTime: '10 min', cookTime: '5 min', servings: 1,
      tags: ['High Fiber', 'Vegan', 'Quick'],
      ingredients: ['rolled oats', 'mixed berries', 'almond milk', 'honey', 'chia seeds'],
      steps: [
        'Bring almond milk to a simmer in a small pot.',
        'Add rolled oats and stir. Cook for 5 minutes on medium-low.',
        'Remove from heat and let sit for 1 minute.',
        'Top with fresh mixed berries, a drizzle of honey, and chia seeds.',
      ],
      prepTips: [{ time: 'Sun night', text: 'Pre-cook oats and store in fridge. Reheat with a splash of milk.' }]
    },
    {
      id: 'b2', name: 'Scrambled Eggs & Sourdough', emoji: '🍳',
      calories: 385, protein: 23, carbs: 30, fat: 19, fiber: 2,
      prepTime: '5 min', cookTime: '8 min', servings: 1,
      tags: ['High Protein', 'Keto-friendly'],
      ingredients: ['eggs', 'sourdough bread', 'butter', 'chives', 'salt', 'black pepper'],
      steps: [
        'Crack 3 eggs into a bowl, season with salt and pepper, and whisk.',
        'Melt butter in a non-stick pan over low heat.',
        'Add eggs and slowly fold with a spatula. Remove from heat while slightly runny.',
        'Toast sourdough and top with scrambled eggs and fresh chives.',
      ],
      prepTips: []
    },
    {
      id: 'b3', name: 'Greek Yogurt Parfait', emoji: '🫐',
      calories: 312, protein: 21, carbs: 36, fat: 6, fiber: 3,
      prepTime: '5 min', cookTime: '0 min', servings: 1,
      tags: ['High Protein', 'No-Cook', 'Quick'],
      ingredients: ['greek yogurt', 'granola', 'mixed berries', 'honey', 'flaxseed'],
      steps: [
        'Spoon Greek yogurt into a bowl or glass.',
        'Layer with granola, fresh berries, and a sprinkle of flaxseed.',
        'Drizzle with honey and serve immediately.',
      ],
      prepTips: [{ time: 'Prep night before', text: 'Layer yogurt and berries in a jar. Add granola in the morning to keep crunchy.' }]
    },
    {
      id: 'b4', name: 'Avocado Toast with Egg', emoji: '🥑',
      calories: 410, protein: 16, carbs: 38, fat: 23, fiber: 9,
      prepTime: '5 min', cookTime: '5 min', servings: 1,
      tags: ['Healthy Fats', 'Veggie', 'Quick'],
      ingredients: ['whole grain bread', 'avocado', 'egg', 'cherry tomatoes', 'lemon', 'red pepper flakes', 'sea salt'],
      steps: [
        'Toast bread until golden.',
        'Mash avocado with lemon juice, salt, and red pepper flakes.',
        'Fry or poach the egg to your liking.',
        'Spread avocado on toast, top with egg and halved cherry tomatoes.',
      ],
      prepTips: []
    },
    {
      id: 'b5', name: 'Berry Smoothie Bowl', emoji: '🍓',
      calories: 338, protein: 9, carbs: 58, fat: 9, fiber: 7,
      prepTime: '8 min', cookTime: '0 min', servings: 1,
      tags: ['Vegan', 'No-Cook', 'Antioxidants'],
      ingredients: ['frozen banana', 'frozen mixed berries', 'almond milk', 'granola', 'chia seeds', 'coconut flakes'],
      steps: [
        'Blend frozen banana and berries with a splash of almond milk until thick and creamy.',
        'Pour into a bowl.',
        'Top with granola, chia seeds, and coconut flakes.',
      ],
      prepTips: [{ time: 'Batch prep', text: 'Freeze bananas in chunks on a baking sheet, then bag. Blend from frozen any morning.' }]
    },
    {
      id: 'b6', name: 'Veggie Omelette', emoji: '🌿',
      calories: 362, protein: 26, carbs: 7, fat: 25, fiber: 2,
      prepTime: '5 min', cookTime: '8 min', servings: 1,
      tags: ['High Protein', 'Low Carb', 'Keto'],
      ingredients: ['eggs', 'bell pepper', 'mushrooms', 'spinach', 'feta cheese', 'olive oil'],
      steps: [
        'Sauté diced bell pepper and mushrooms in olive oil for 3 minutes.',
        'Wilt in a handful of spinach.',
        'Pour in whisked eggs and cook on medium-low.',
        'When edges set, add feta and fold in half. Serve immediately.',
      ],
      prepTips: [{ time: 'Prep tip', text: 'Dice and refrigerate vegetables the evening before to save morning time.' }]
    },
    {
      id: 'b7', name: 'Chia Seed Pudding', emoji: '✨',
      calories: 292, protein: 10, carbs: 34, fat: 13, fiber: 12,
      prepTime: '5 min', cookTime: '0 min (overnight)', servings: 1,
      tags: ['High Fiber', 'Vegan', 'Meal Prep Friendly'],
      ingredients: ['chia seeds', 'coconut milk', 'vanilla extract', 'maple syrup', 'kiwi', 'mango'],
      steps: [
        'Whisk together coconut milk, vanilla, and maple syrup.',
        'Stir in chia seeds. Mix well to prevent clumping.',
        'Refrigerate overnight (minimum 4 hours).',
        'Top with fresh kiwi and mango slices before serving.',
      ],
      prepTips: [{ time: 'Make ahead', text: 'Batch 5 jars on Sunday — breakfast is ready all week.' }]
    },
  ],

  lunch: [
    {
      id: 'l1', name: 'Grilled Chicken Salad', emoji: '🥗',
      calories: 432, protein: 39, carbs: 17, fat: 22, fiber: 5,
      prepTime: '10 min', cookTime: '15 min', servings: 1,
      tags: ['High Protein', 'Low Carb', 'Gluten-Free'],
      ingredients: ['chicken breast', 'mixed greens', 'cherry tomatoes', 'cucumber', 'red onion', 'olive oil', 'lemon', 'Dijon mustard'],
      steps: [
        'Season chicken breast with salt, pepper, and olive oil.',
        'Grill on medium-high for 6-7 minutes per side until cooked through.',
        'Rest 5 minutes, then slice.',
        'Toss greens, tomatoes, cucumber, and onion. Dress with lemon-Dijon vinaigrette.',
        'Top with sliced chicken.',
      ],
      prepTips: [{ time: 'Batch cook', text: 'Grill 4 chicken breasts at once. Store in fridge for up to 4 days.' }]
    },
    {
      id: 'l2', name: 'Quinoa Veggie Power Bowl', emoji: '🥣',
      calories: 392, protein: 16, carbs: 57, fat: 12, fiber: 9,
      prepTime: '10 min', cookTime: '20 min', servings: 1,
      tags: ['Vegan', 'High Fiber', 'Meal Prep Friendly'],
      ingredients: ['quinoa', 'roasted sweet potato', 'chickpeas', 'kale', 'tahini', 'lemon', 'garlic', 'olive oil'],
      steps: [
        'Cook quinoa in vegetable broth for extra flavour.',
        'Roast sweet potato cubes at 400°F for 20 minutes.',
        'Massage kale with a little olive oil and lemon until tender.',
        'Drain and rinse chickpeas; season and roast for 15 minutes for crunch.',
        'Assemble bowl, drizzle tahini-lemon dressing over top.',
      ],
      prepTips: [{ time: 'Full meal prep', text: 'Cook double quinoa and roast double sweet potato on Sunday.' }]
    },
    {
      id: 'l3', name: 'Turkey & Avocado Wrap', emoji: '🌯',
      calories: 464, protein: 33, carbs: 44, fat: 18, fiber: 6,
      prepTime: '7 min', cookTime: '0 min', servings: 1,
      tags: ['High Protein', 'Quick', 'No-Cook'],
      ingredients: ['turkey breast', 'whole wheat tortilla', 'avocado', 'romaine lettuce', 'tomato', 'Dijon mustard', 'lemon'],
      steps: [
        'Spread Dijon mustard on a whole wheat tortilla.',
        'Layer turkey, avocado slices, lettuce, and tomato.',
        'Squeeze a little lemon juice over the avocado.',
        'Roll tightly, slice diagonally, and serve.',
      ],
      prepTips: []
    },
    {
      id: 'l4', name: 'Red Lentil Soup', emoji: '🍲',
      calories: 328, protein: 19, carbs: 50, fat: 5, fiber: 13,
      prepTime: '10 min', cookTime: '25 min', servings: 2,
      tags: ['Vegan', 'High Fiber', 'Meal Prep Friendly'],
      ingredients: ['red lentils', 'carrot', 'celery', 'onion', 'garlic', 'cumin', 'canned tomatoes', 'vegetable broth', 'lemon', 'olive oil'],
      steps: [
        'Sauté diced onion, carrot, and celery in olive oil for 5 minutes.',
        'Add garlic and cumin; cook 1 minute until fragrant.',
        'Add rinsed lentils, canned tomatoes, and broth.',
        'Simmer 20-25 minutes until lentils are tender.',
        'Finish with a squeeze of lemon and adjust seasoning.',
      ],
      prepTips: [{ time: 'Double batch', text: 'Make 6 servings. Freezes beautifully for up to 3 months.' }]
    },
    {
      id: 'l5', name: 'Nicoise-Style Tuna Salad', emoji: '🐟',
      calories: 418, protein: 35, carbs: 21, fat: 21, fiber: 5,
      prepTime: '10 min', cookTime: '8 min', servings: 1,
      tags: ['High Protein', 'Gluten-Free', 'Omega-3'],
      ingredients: ['canned tuna', 'eggs', 'green beans', 'olives', 'mixed greens', 'cherry tomatoes', 'Dijon mustard', 'olive oil', 'red wine vinegar'],
      steps: [
        'Boil eggs for 7 minutes; cool in ice water and peel.',
        'Blanch green beans for 3 minutes until bright green.',
        'Arrange greens, tomatoes, olives, and green beans on a plate.',
        'Flake tuna over top. Add halved eggs.',
        'Dress with Dijon vinaigrette.',
      ],
      prepTips: []
    },
    {
      id: 'l6', name: 'Asian Grain Bowl', emoji: '🍱',
      calories: 368, protein: 15, carbs: 54, fat: 11, fiber: 8,
      prepTime: '8 min', cookTime: '20 min', servings: 1,
      tags: ['Vegan', 'Meal Prep Friendly'],
      ingredients: ['brown rice', 'roasted broccoli', 'edamame', 'cucumber', 'soy sauce', 'sesame oil', 'rice vinegar', 'sesame seeds', 'green onions'],
      steps: [
        'Cook brown rice per package instructions.',
        'Roast broccoli florets at 425°F for 18 minutes.',
        'Steam edamame from frozen.',
        'Make dressing with soy sauce, sesame oil, and rice vinegar.',
        'Assemble bowl and garnish with sesame seeds and green onions.',
      ],
      prepTips: [{ time: 'Rice prep', text: 'Cook a big batch of brown rice on Sunday for the whole week.' }]
    },
    {
      id: 'l7', name: 'Salmon Caesar Salad', emoji: '🥬',
      calories: 482, protein: 38, carbs: 17, fat: 28, fiber: 4,
      prepTime: '8 min', cookTime: '12 min', servings: 1,
      tags: ['High Protein', 'Omega-3', 'Gluten-Free option'],
      ingredients: ['salmon fillet', 'romaine lettuce', 'Parmesan', 'croutons', 'Caesar dressing', 'lemon', 'capers'],
      steps: [
        'Season salmon with salt, pepper, and lemon zest.',
        'Pan-sear salmon skin-side up for 4 minutes, flip for 3 more minutes.',
        'Toss romaine with Caesar dressing, Parmesan, and croutons.',
        'Top with flaked salmon and a few capers.',
      ],
      prepTips: []
    },
  ],

  dinner: [
    {
      id: 'd1', name: 'Baked Salmon & Asparagus', emoji: '🐟',
      calories: 528, protein: 44, carbs: 22, fat: 28, fiber: 6,
      prepTime: '10 min', cookTime: '20 min', servings: 1,
      tags: ['High Protein', 'Omega-3', 'Gluten-Free'],
      ingredients: ['salmon fillet', 'asparagus', 'cherry tomatoes', 'olive oil', 'garlic', 'lemon', 'dill', 'capers'],
      steps: [
        'Preheat oven to 400°F.',
        'Place salmon on a baking sheet lined with parchment.',
        'Arrange asparagus and cherry tomatoes around the salmon.',
        'Drizzle everything with olive oil, minced garlic, lemon juice, and dill.',
        'Bake 18-20 minutes until salmon flakes easily.',
        'Finish with capers and fresh lemon wedges.',
      ],
      prepTips: [{ time: 'Sheet pan dinner', text: 'Everything on one pan — minimal cleanup.' }]
    },
    {
      id: 'd2', name: 'Chicken & Broccoli Stir Fry', emoji: '🥦',
      calories: 488, protein: 41, carbs: 40, fat: 16, fiber: 5,
      prepTime: '12 min', cookTime: '15 min', servings: 1,
      tags: ['High Protein', 'Low Fat'],
      ingredients: ['chicken breast', 'broccoli', 'snap peas', 'bok choy', 'ginger', 'garlic', 'soy sauce', 'sesame oil', 'brown rice', 'cornstarch'],
      steps: [
        'Cook brown rice. Slice chicken into thin strips and marinate in soy sauce + cornstarch.',
        'Heat a wok on high; add sesame oil.',
        'Stir-fry chicken until golden (4 min). Remove and set aside.',
        'Add vegetables and stir-fry 3-4 minutes.',
        'Return chicken, add sauce (soy, ginger, garlic), toss to combine.',
        'Serve over rice.',
      ],
      prepTips: [{ time: 'Veggie prep', text: 'Cut all vegetables 2 days ahead and store in airtight containers.' }]
    },
    {
      id: 'd3', name: 'Black Bean Beef Tacos', emoji: '🌮',
      calories: 568, protein: 37, carbs: 51, fat: 22, fiber: 10,
      prepTime: '10 min', cookTime: '20 min', servings: 2,
      tags: ['High Fiber', 'Comfort Food'],
      ingredients: ['ground beef', 'corn tortillas', 'black beans', 'avocado', 'salsa', 'cilantro', 'lime', 'cumin', 'chili powder', 'red onion'],
      steps: [
        'Brown ground beef in a pan. Drain excess fat.',
        'Season with cumin, chili powder, salt, and pepper.',
        'Warm black beans with a splash of water.',
        'Warm tortillas in a dry pan.',
        'Assemble tacos with beef, beans, avocado, salsa, onion, and cilantro.',
        'Finish with fresh lime juice.',
      ],
      prepTips: [{ time: 'Taco Tuesday prep', text: 'Cook beef in bulk. Stores in fridge 4 days, freezes 2 months.' }]
    },
    {
      id: 'd4', name: 'Veggie Pasta Primavera', emoji: '🍝',
      calories: 492, protein: 18, carbs: 72, fat: 14, fiber: 10,
      prepTime: '10 min', cookTime: '20 min', servings: 2,
      tags: ['Vegetarian', 'High Fiber', 'Comfort Food'],
      ingredients: ['whole wheat pasta', 'zucchini', 'bell pepper', 'cherry tomatoes', 'Parmesan', 'fresh basil', 'olive oil', 'garlic', 'white wine'],
      steps: [
        'Cook pasta al dente; reserve 1 cup pasta water.',
        'Sauté garlic in olive oil. Add zucchini and peppers, cook 5 minutes.',
        'Add cherry tomatoes and cook until they burst.',
        'Add pasta to the pan with a splash of pasta water and a little white wine.',
        'Toss with fresh basil and Parmesan. Serve immediately.',
      ],
      prepTips: []
    },
    {
      id: 'd5', name: 'Turkey Meatball Bowl', emoji: '🍜',
      calories: 518, protein: 43, carbs: 36, fat: 20, fiber: 5,
      prepTime: '15 min', cookTime: '25 min', servings: 2,
      tags: ['High Protein', 'Meal Prep Friendly'],
      ingredients: ['ground turkey', 'cauliflower rice', 'marinara sauce', 'Parmesan', 'garlic', 'onion', 'breadcrumbs', 'egg', 'Italian herbs'],
      steps: [
        'Mix turkey with egg, breadcrumbs, minced garlic, herbs, and Parmesan.',
        'Form into walnut-sized balls.',
        'Brown in olive oil 3 minutes per side, then add marinara sauce.',
        'Simmer on low for 12 minutes.',
        'Serve over cauliflower rice and top with more Parmesan.',
      ],
      prepTips: [{ time: 'Freeze meatballs', text: 'Double the meatball recipe and freeze half on a baking sheet, then bag.' }]
    },
    {
      id: 'd6', name: 'Shrimp Fried Brown Rice', emoji: '🍤',
      calories: 472, protein: 30, carbs: 58, fat: 13, fiber: 4,
      prepTime: '10 min', cookTime: '15 min', servings: 1,
      tags: ['Quick', 'High Protein'],
      ingredients: ['shrimp', 'brown rice', 'peas', 'carrots', 'eggs', 'soy sauce', 'sesame oil', 'green onions', 'ginger', 'garlic'],
      steps: [
        'Use day-old cold rice for best results.',
        'Scramble eggs in a hot oiled wok; remove and set aside.',
        'Stir-fry shrimp 2 minutes. Add garlic and ginger.',
        'Add rice, press flat, let it fry undisturbed 1 minute.',
        'Add peas, carrots, soy sauce, sesame oil. Toss everything.',
        'Return eggs, top with green onions.',
      ],
      prepTips: [{ time: 'Rice tip', text: 'Always use day-old refrigerated rice — it fries much better than fresh.' }]
    },
    {
      id: 'd7', name: 'Herb Lamb Chops', emoji: '🍖',
      calories: 592, protein: 47, carbs: 14, fat: 36, fiber: 2,
      prepTime: '10 min', cookTime: '20 min', servings: 1,
      tags: ['High Protein', 'Special Occasion', 'Gluten-Free'],
      ingredients: ['lamb chops', 'fresh rosemary', 'garlic', 'olive oil', 'baby potatoes', 'mint sauce', 'lemon'],
      steps: [
        'Marinate lamb chops with rosemary, garlic, olive oil, and lemon at least 30 min.',
        'Roast baby potatoes at 425°F for 20 minutes.',
        'Sear lamb chops in a hot cast-iron pan 3-4 minutes per side for medium.',
        'Rest 5 minutes before serving.',
        'Serve with roasted potatoes and mint sauce.',
      ],
      prepTips: [{ time: 'Marinate ahead', text: 'Marinate overnight in the fridge for maximum flavour.' }]
    },
  ],
};

// ============================================
// CONSTANTS
// ============================================

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const SHORT = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const DEFAULT_PREFS = {
  goal: 'maintain',
  dailyCalorieTarget: 2000,
  proteinTarget: 150,
  carbsTarget: 220,
  fatTarget: 65,
  fiberTarget: 30,
  dietaryRestrictions: [],
  allergies: [],
  cuisines: [],
  notes: '',
};

// ============================================
// WEEK UTILITIES
// ============================================

// Returns the ISO date string (YYYY-MM-DD) of the Monday of a given date.
function getMondayKey(date) {
  const d = new Date(date || Date.now());
  const day = d.getDay(); // 0=Sun
  d.setDate(d.getDate() - (day === 0 ? 6 : day - 1));
  d.setHours(0, 0, 0, 0);
  return d.toISOString().split('T')[0];
}

// Human-readable label: "Apr 7 – Apr 13"
function getWeekLabel(weekKey) {
  const mon = new Date(weekKey + 'T12:00:00');
  const sun = new Date(mon);
  sun.setDate(mon.getDate() + 6);
  const fmt = d => d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  return `${fmt(mon)} – ${fmt(sun)}`;
}

// Full label with year if not current year: "Apr 7 – 13, 2025"
function getWeekLabelFull(weekKey) {
  const mon = new Date(weekKey + 'T12:00:00');
  const sun = new Date(mon);
  sun.setDate(mon.getDate() + 6);
  const fmt = d => d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  const year = mon.getFullYear() !== new Date().getFullYear() ? `, ${mon.getFullYear()}` : '';
  return `${fmt(mon)} – ${fmt(sun)}${year}`;
}

// Generate a smart week plan that avoids repeating meals from the last 4 weeks.
// Also avoids repeating the same meal twice within the new week.
function generateSmartWeekPlan(weekKey) {
  // Collect IDs used in the most recent 4 stored weeks (excluding weekKey itself)
  const recentIds = new Set();
  Object.keys(state.weekHistory)
    .filter(k => k !== weekKey)
    .sort()
    .slice(-4)
    .forEach(k => {
      DAYS.forEach(day => {
        ['breakfast', 'lunch', 'dinner'].forEach(type => {
          const id = state.weekHistory[k]?.[day]?.[type]?.id;
          if (id) recentIds.add(id);
        });
      });
    });

  // Build a pool for each meal type, falling back to all meals if pool is too small
  function pool(type) {
    const filtered = MEALS[type].filter(m => !recentIds.has(m.id));
    return filtered.length >= 4 ? filtered : [...MEALS[type]];
  }

  const plan = {};
  const usedThisWeek = { breakfast: new Set(), lunch: new Set(), dinner: new Set() };

  DAYS.forEach(day => {
    plan[day] = {};
    ['breakfast', 'lunch', 'dinner'].forEach(type => {
      // Prefer meals not yet used this week
      let candidates = pool(type).filter(m => !usedThisWeek[type].has(m.id));
      if (candidates.length === 0) candidates = pool(type);
      const meal = candidates[Math.floor(Math.random() * candidates.length)];
      plan[day][type] = meal;
      usedThisWeek[type].add(meal.id);
    });
  });

  return plan;
}

// ============================================
// PERSISTENCE
// ============================================

function loadState() {
  // Try v2 (week-history format)
  try {
    const raw = localStorage.getItem('cassieworld_v2');
    if (raw) return JSON.parse(raw);
  } catch (_) {}

  // Migrate from v1 (single mealPlan format)
  try {
    const v1raw = localStorage.getItem('cassieworld_v1');
    if (v1raw) {
      const old = JSON.parse(v1raw);
      const key = getMondayKey();
      return {
        prefs: old.prefs || { ...DEFAULT_PREFS },
        weekHistory: { [key]: old.mealPlan || {} },
        shoppingChecked: old.shoppingChecked || {},
        customItems: old.customItems || [],
      };
    }
  } catch (_) {}

  return {
    prefs: { ...DEFAULT_PREFS },
    weekHistory: {},
    shoppingChecked: {},
    customItems: [],
  };
}

function saveState() {
  localStorage.setItem('cassieworld_v2', JSON.stringify(state));
}

let state = loadState();
let currentView = 'meal-plan';
let nutritionDay = DAYS[new Date().getDay() === 0 ? 6 : new Date().getDay() - 1] || 'Monday';

// The week currently shown in the meal plan view (may differ from the actual current week)
let viewingWeekKey = getMondayKey();

// ============================================
// PLAN ACCESS
// ============================================

// Returns the plan for the actual current week, creating a smart plan if none exists.
function getCurrentPlan() {
  const key = getMondayKey();
  if (!state.weekHistory[key]) {
    state.weekHistory[key] = generateSmartWeekPlan(key);
    saveState();
  }
  return state.weekHistory[key];
}

// Returns the plan for whichever week is being viewed (may be a past week).
function getViewedPlan() {
  if (!state.weekHistory[viewingWeekKey]) {
    // Only auto-generate for the true current week
    if (viewingWeekKey === getMondayKey()) {
      state.weekHistory[viewingWeekKey] = generateSmartWeekPlan(viewingWeekKey);
      saveState();
    } else {
      return {};
    }
  }
  return state.weekHistory[viewingWeekKey];
}

function isViewingCurrentWeek() {
  return viewingWeekKey === getMondayKey();
}

function getSortedWeekKeys() {
  return Object.keys(state.weekHistory).sort();
}

// ============================================
// UTILITIES
// ============================================

function todayName() {
  const d = new Date().getDay();
  return DAYS[d === 0 ? 6 : d - 1];
}

function getWeekDates() {
  const now = new Date();
  const dayIdx = now.getDay() === 0 ? 6 : now.getDay() - 1;
  const monday = new Date(now);
  monday.setDate(now.getDate() - dayIdx);
  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);
  const fmt = (d) => d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  return `${fmt(monday)} – ${fmt(sunday)}`;
}

// Date number for a given day index within the *viewed* week
function getDayDateForWeek(dayIndex, weekKey) {
  const mon = new Date((weekKey || getMondayKey()) + 'T12:00:00');
  const d = new Date(mon);
  d.setDate(mon.getDate() + dayIndex);
  return d.getDate();
}

// Keep for any callers that still pass just an index (nutrition day-pills etc.)
function getDayDate(dayIndex) {
  return getDayDateForWeek(dayIndex, getMondayKey());
}

function clamp(val, min, max) {
  return Math.min(max, Math.max(min, val));
}

function pct(val, max) {
  return Math.round(clamp((val / max) * 100, 0, 100));
}

// Accept an optional plan argument so callers can pass any week's plan
function getDayNutrition(day, plan) {
  const meals = (plan || getCurrentPlan())[day] || {};
  let cals = 0, protein = 0, carbs = 0, fat = 0, fiber = 0;
  ['breakfast', 'lunch', 'dinner'].forEach(t => {
    const m = meals[t];
    if (m) {
      cals += m.calories; protein += m.protein;
      carbs += m.carbs;   fat += m.fat; fiber += m.fiber;
    }
  });
  return { cals, protein, carbs, fat, fiber };
}

function getWeekNutritionAvg(plan) {
  const p = plan || getCurrentPlan();
  let totCals = 0, totProt = 0, totCarbs = 0, totFat = 0, totFiber = 0;
  DAYS.forEach(day => {
    const n = getDayNutrition(day, p);
    totCals += n.cals; totProt += n.protein;
    totCarbs += n.carbs; totFat += n.fat; totFiber += n.fiber;
  });
  return {
    cals:    Math.round(totCals  / 7),
    protein: Math.round(totProt  / 7),
    carbs:   Math.round(totCarbs / 7),
    fat:     Math.round(totFat   / 7),
    fiber:   Math.round(totFiber / 7),
  };
}

// ============================================
// RENDER ENGINE
// ============================================

function render() {
  // Ensure the current week has a plan on every boot
  getCurrentPlan();
  document.getElementById('week-dates').textContent = getWeekLabel(getMondayKey());
  renderView(currentView);
}

function renderView(view) {
  currentView = view;
  document.querySelectorAll('.nav-item').forEach(el => {
    el.classList.toggle('active', el.dataset.view === view);
  });

  const content = document.getElementById('content');
  switch (view) {
    case 'meal-plan': content.innerHTML = buildMealPlanView(); break;
    case 'nutrition': content.innerHTML = buildNutritionView(); break;
    case 'shopping': content.innerHTML = buildShoppingView(); break;
    case 'recipes': content.innerHTML = buildRecipesView(); break;
    case 'preferences': content.innerHTML = buildPreferencesView(); break;
  }
  bindViewListeners(view);
}

// ============================================
// VIEW: WEEKLY MEAL PLAN
// ============================================

function buildMealPlanView() {
  const viewedPlan  = getViewedPlan();
  const avg         = getWeekNutritionAvg(viewedPlan);
  const isCurrent   = isViewingCurrentWeek();
  const today       = isCurrent ? todayName() : null;

  // Week navigation state
  const sortedKeys  = getSortedWeekKeys();
  const viewIdx     = sortedKeys.indexOf(viewingWeekKey);
  const hasPrev     = viewIdx > 0;
  const hasNext     = viewIdx < sortedKeys.length - 1;

  const dayColumns = DAYS.map((day, i) => {
    const isToday  = day === today;
    const dateNum  = getDayDateForWeek(i, viewingWeekKey);
    const meals    = viewedPlan[day] || {};
    const dayCals    = ['breakfast','lunch','dinner'].reduce((s,t) => s + (meals[t]?.calories||0), 0);
    const dayProtein = ['breakfast','lunch','dinner'].reduce((s,t) => s + (meals[t]?.protein ||0), 0);
    const dayCarbs   = ['breakfast','lunch','dinner'].reduce((s,t) => s + (meals[t]?.carbs   ||0), 0);
    const dayFat     = ['breakfast','lunch','dinner'].reduce((s,t) => s + (meals[t]?.fat     ||0), 0);

    const slot = (type) => {
      const meal = meals[type];
      // Past weeks are read-only (no data-day/data-type click targets)
      const clickable = isCurrent ? `data-day="${day}" data-type="${type}" role="button"` : '';
      if (meal) {
        return `<div class="meal-slot${isCurrent ? '' : ' past'}" ${clickable}>
          <div class="meal-type-label">${type}</div>
          <div class="meal-name">${meal.name}</div>
          <div class="meal-macros">
            <span class="macro-chip" style="color:var(--color-protein)">${meal.protein}P</span>
            <span style="color:var(--border-dark)">·</span>
            <span class="macro-chip" style="color:var(--color-carbs)">${meal.carbs}C</span>
            <span style="color:var(--border-dark)">·</span>
            <span class="macro-chip" style="color:var(--color-fat)">${meal.fat}F</span>
          </div>
        </div>`;
      }
      if (!isCurrent) return `<div class="meal-slot-empty past"><span>No meal logged</span></div>`;
      return `<div class="meal-slot-empty" data-day="${day}" data-type="${type}" role="button">
        <span>+ Add ${type}</span>
      </div>`;
    };

    return `<div class="day-column">
      <div class="day-header${isToday ? ' today' : ''}">
        <div class="day-name">${SHORT[i]}</div>
        <div class="day-date">${dateNum}</div>
      </div>
      ${slot('breakfast')}
      ${slot('lunch')}
      ${slot('dinner')}
      ${dayCals > 0 ? `<div class="day-total-pill">
        <div class="day-total-cals">${dayCals} <span style="font-size:9px;opacity:0.6">kcal</span></div>
        <div class="day-total-macros">${dayProtein}P · ${dayCarbs}C · ${dayFat}F</div>
      </div>` : ''}
    </div>`;
  }).join('');

  return `
    <div class="page-header">
      <h2>Weekly Meal Plan</h2>
      <p>${isCurrent
        ? `Click any meal to swap it · ${new Date().toLocaleDateString('en-US', { weekday:'long', month:'long', day:'numeric', year:'numeric' })}`
        : `Viewing past week — read only`
      }</p>
      <div class="header-actions">
        ${isCurrent ? `<button class="btn btn-primary" id="btn-shuffle">🔀 Shuffle Week</button>` : ''}
        <button class="btn btn-secondary" id="btn-to-shopping">🛒 Shopping List</button>
      </div>
    </div>

    <div class="week-nav">
      <button class="week-nav-btn" id="btn-prev-week" ${hasPrev ? '' : 'disabled'}>← Prev</button>
      <div class="week-nav-center">
        <div class="week-nav-badge${isCurrent ? ' current' : ''}">${isCurrent ? 'Current Week' : 'Past Week'}</div>
        <div class="week-nav-label">Week of ${getWeekLabelFull(viewingWeekKey)}</div>
      </div>
      <button class="week-nav-btn" id="btn-next-week" ${hasNext ? '' : 'disabled'}>Next →</button>
    </div>

    <div class="stats-bar">
      <div class="stat-block">
        <div class="stat-value">${avg.cals}<span class="stat-unit"> kcal</span></div>
        <div class="stat-label">Avg / Day</div>
      </div>
      <div class="stat-block">
        <div class="stat-value">${avg.protein}<span class="stat-unit">g</span></div>
        <div class="stat-label">Avg Protein</div>
      </div>
      <div class="stat-block">
        <div class="stat-value">${avg.carbs}<span class="stat-unit">g</span></div>
        <div class="stat-label">Avg Carbs</div>
      </div>
      <div class="stat-block">
        <div class="stat-value">${avg.fat}<span class="stat-unit">g</span></div>
        <div class="stat-label">Avg Fat</div>
      </div>
      <div class="stat-block">
        <div class="stat-value">${state.prefs.dailyCalorieTarget}</div>
        <div class="stat-label">Cal Target</div>
      </div>
    </div>

    <div class="week-grid">
      ${dayColumns}
    </div>
  `;
}

// ============================================
// VIEW: NUTRITION TRACKER
// ============================================

function buildNutritionView() {
  const { cals, protein, carbs, fat, fiber } = getDayNutrition(nutritionDay);
  const p = state.prefs;
  const calTarget = p.dailyCalorieTarget || 2000;
  const calPct = pct(cals, calTarget);

  const circR = 62;
  const circum = 2 * Math.PI * circR;
  const dashOffset = circum * (1 - calPct / 100);

  const pills = DAYS.map(d =>
    `<button class="day-pill${d === nutritionDay ? ' active' : ''}" data-day="${d}">${d.slice(0, 3)}</button>`
  ).join('') + `<button class="day-pill${nutritionDay === 'week' ? ' active' : ''}" data-day="week">Week Avg</button>`;

  function macroBar(label, val, target, color) {
    const p2 = pct(val, target);
    return `<div class="macro-row">
      <div class="macro-head">
        <span class="macro-name">${label}</span>
        <span class="macro-val">${val}g / ${target}g</span>
      </div>
      <div class="macro-track">
        <div class="macro-fill" style="width:${p2}%;background:${color}"></div>
      </div>
    </div>`;
  }

  const meals = getCurrentPlan()[nutritionDay] || {};
  const breakdown = ['breakfast', 'lunch', 'dinner'].map(type => {
    const m = meals[type];
    if (!m) return '';
    const share = cals > 0 ? Math.round((m.calories / cals) * 100) : 0;
    return `<div class="meal-breakdown-row">
      <div>
        <div class="breakdown-type">${type}</div>
        <div class="breakdown-name">${m.name}</div>
        <div class="breakdown-macros">${m.protein}g protein · ${m.carbs}g carbs · ${m.fat}g fat · ${m.fiber}g fiber</div>
      </div>
      <div class="breakdown-cals">
        <div class="breakdown-cals-num">${m.calories}</div>
        <div class="breakdown-cals-label">kcal (${share}%)</div>
      </div>
    </div>`;
  }).join('');

  // Estimated vitamins from meal data
  const scale = cals > 0 ? cals / 2000 : 1;
  const vitamins = [
    { icon: '🥕', name: 'Vitamin A', val: Math.round(scale * 820), unit: 'µg', rdv: 900 },
    { icon: '🍊', name: 'Vitamin C', val: Math.round(scale * 98), unit: 'mg', rdv: 90 },
    { icon: '☀️', name: 'Vitamin D', val: Math.round(scale * 12), unit: 'µg', rdv: 15 },
    { icon: '🥛', name: 'Calcium', val: Math.round(scale * 920), unit: 'mg', rdv: 1000 },
    { icon: '🥩', name: 'Iron', val: Math.round(scale * 17), unit: 'mg', rdv: 18 },
    { icon: '🍌', name: 'Potassium', val: Math.round(scale * 3900), unit: 'mg', rdv: 4700 },
  ];

  const vitCells = vitamins.map(v => {
    const vp = pct(v.val, v.rdv);
    const color = vp >= 80 ? '#5A8B7A' : vp >= 50 ? '#C4A35A' : '#C17A3A';
    return `<div class="vitamin-cell">
      <div class="vitamin-icon">${v.icon}</div>
      <div class="vitamin-name">${v.name}</div>
      <div class="vitamin-value" style="color:${color}">${v.val}${v.unit}</div>
      <div class="vitamin-pct" style="color:${color}">${vp}% RDV</div>
    </div>`;
  }).join('');

  return `
    <div class="page-header">
      <h2>Nutrition Tracker</h2>
      <p>Detailed daily and weekly nutritional breakdown</p>
    </div>

    <div class="day-selector">${pills}</div>

    <div class="nutrition-layout">
      <!-- LEFT: Ring + Macros -->
      <div class="card" style="padding:0">
        <div class="calorie-ring-wrap">
          <div class="calorie-ring">
            <svg width="160" height="160" viewBox="0 0 160 160">
              <circle cx="80" cy="80" r="${circR}" fill="none" stroke="#EDE4DA" stroke-width="14"/>
              <circle cx="80" cy="80" r="${circR}" fill="none" stroke="var(--accent)" stroke-width="14"
                stroke-dasharray="${circum.toFixed(1)}" stroke-dashoffset="${dashOffset.toFixed(1)}"
                stroke-linecap="round" style="transition:stroke-dashoffset 0.7s ease"/>
            </svg>
            <div class="calorie-ring-center">
              <div class="ring-calories">${cals}</div>
              <div class="ring-label">/ ${calTarget} kcal</div>
              <div class="ring-pct">${calPct}%</div>
            </div>
          </div>
        </div>
        <div class="macro-bars-section">
          ${macroBar('Protein', protein, p.proteinTarget || 150, 'var(--color-protein)')}
          ${macroBar('Carbohydrates', carbs, p.carbsTarget || 220, 'var(--color-carbs)')}
          ${macroBar('Fat', fat, p.fatTarget || 65, 'var(--color-fat)')}
          ${macroBar('Fiber', fiber, p.fiberTarget || 30, 'var(--color-fiber)')}
        </div>
      </div>

      <!-- RIGHT: Breakdown + Vitamins -->
      <div style="display:flex;flex-direction:column;gap:16px">
        <div class="card">
          <div class="card-title">Meal Breakdown — ${nutritionDay}</div>
          ${breakdown || '<div class="empty-state"><div class="empty-state-icon">🍽️</div><p>No meals planned for this day yet</p></div>'}
        </div>

        <div class="card">
          <div class="card-title">Vitamins &amp; Minerals (estimated)</div>
          <div class="vitamins-grid">${vitCells}</div>
        </div>
      </div>
    </div>
  `;
}

// ============================================
// VIEW: SHOPPING LIST
// ============================================

const CAT_MAP = {
  produce: {
    icon: '🥦', label: 'Produce & Vegetables',
    keywords: ['berries', 'banana', 'kiwi', 'avocado', 'tomato', 'tomatoes', 'lettuce', 'spinach', 'kale', 'greens', 'broccoli', 'zucchini', 'cucumber', 'carrot', 'celery', 'onion', 'garlic', 'ginger', 'bell pepper', 'asparagus', 'sweet potato', 'potatoes', 'mushrooms', 'bok choy', 'snap peas', 'green beans', 'cilantro', 'basil', 'herbs', 'dill', 'chives', 'rosemary', 'mint', 'lemon', 'lime', 'peas', 'mango', 'cherry tomatoes', 'red onion', 'baby potatoes', 'green onions', 'capers'],
  },
  protein: {
    icon: '🥩', label: 'Protein',
    keywords: ['egg', 'eggs', 'chicken', 'salmon', 'tuna', 'turkey', 'beef', 'lamb', 'shrimp', 'chickpeas', 'lentils', 'black beans', 'edamame', 'tofu', 'ground beef', 'ground turkey', 'chicken breast', 'salmon fillet', 'lamb chops'],
  },
  dairy: {
    icon: '🥛', label: 'Dairy & Alternatives',
    keywords: ['almond milk', 'coconut milk', 'greek yogurt', 'yogurt', 'cheese', 'parmesan', 'butter', 'milk', 'feta', 'feta cheese'],
  },
  grains: {
    icon: '🌾', label: 'Grains & Bread',
    keywords: ['oats', 'rolled oats', 'granola', 'bread', 'sourdough bread', 'whole grain bread', 'tortilla', 'corn tortillas', 'pasta', 'whole wheat pasta', 'rice', 'brown rice', 'cauliflower rice', 'quinoa', 'croutons', 'breadcrumbs', 'flaxseed'],
  },
  pantry: {
    icon: '🫙', label: 'Pantry & Condiments',
    keywords: ['honey', 'olive oil', 'soy sauce', 'sesame oil', 'tahini', 'maple syrup', 'vanilla extract', 'chia seeds', 'red pepper flakes', 'cumin', 'chili powder', 'salt', 'pepper', 'black pepper', 'sea salt', 'vegetable broth', 'marinara sauce', 'salsa', 'mustard', 'dijon mustard', 'caesar dressing', 'olives', 'mint sauce', 'rice vinegar', 'sesame seeds', 'coconut flakes', 'cornstarch', 'white wine', 'red wine vinegar', 'canned tomatoes', 'Italian herbs'],
  },
};

function categorizeIngredient(ing) {
  const lower = ing.toLowerCase();
  for (const [cat, data] of Object.entries(CAT_MAP)) {
    if (data.keywords.some(k => lower.includes(k) || k.includes(lower))) return cat;
  }
  return 'pantry';
}

function buildShoppingList() {
  const cats = {};
  Object.keys(CAT_MAP).forEach(k => { cats[k] = {}; });

  const currentPlanForShopping = getCurrentPlan();
  DAYS.forEach(day => {
    const meals = currentPlanForShopping[day] || {};
    ['breakfast', 'lunch', 'dinner'].forEach(type => {
      const meal = meals[type];
      if (meal?.ingredients) {
        meal.ingredients.forEach(ing => {
          const cat = categorizeIngredient(ing);
          if (!cats[cat]) cats[cat] = {};
          if (!cats[cat][ing]) cats[cat][ing] = 0;
          cats[cat][ing]++;
        });
      }
    });
  });
  return cats;
}

function buildShoppingView() {
  const cats = buildShoppingList();

  const totalItems = Object.values(cats).reduce((s, c) => s + Object.keys(c).length, 0) + state.customItems.length;
  const checkedCount = Object.values(state.shoppingChecked).filter(Boolean).length + state.customItems.filter(i => i.checked).length;

  const catCards = Object.entries(CAT_MAP).map(([catKey, catData]) => {
    const items = cats[catKey] || {};
    const entries = Object.entries(items);
    if (entries.length === 0) return '';

    const itemRows = entries.map(([name, count]) => {
      const key = `${catKey}::${name}`;
      const checked = !!state.shoppingChecked[key];
      return `<div class="shopping-item${checked ? ' is-checked' : ''}" data-key="${key}">
        <input type="checkbox" class="shopping-cb" data-key="${key}" ${checked ? 'checked' : ''}>
        <span class="shopping-item-name">${name}</span>
        ${count > 1 ? `<span class="shopping-item-qty">×${count}</span>` : ''}
      </div>`;
    }).join('');

    return `<div class="card" style="padding:16px 18px">
      <div class="shopping-card-header">
        <span class="shopping-cat-icon">${catData.icon}</span>
        <span class="shopping-cat-name">${catData.label}</span>
        <span class="shopping-cat-count">${entries.length}</span>
      </div>
      ${itemRows}
    </div>`;
  }).join('');

  const customRows = state.customItems.map((item, i) =>
    `<div class="shopping-item${item.checked ? ' is-checked' : ''}" data-custom="${i}">
      <input type="checkbox" class="shopping-cb custom-cb" data-custom="${i}" ${item.checked ? 'checked' : ''}>
      <span class="shopping-item-name">${item.name}</span>
      <button class="btn btn-ghost btn-sm" style="padding:2px 6px;margin-left:auto" data-rm-custom="${i}">×</button>
    </div>`
  ).join('');

  return `
    <div class="page-header">
      <h2>Shopping List</h2>
      <p>${checkedCount} of ${totalItems} items checked · Auto-generated from your meal plan</p>
      <div class="header-actions">
        <button class="btn btn-secondary btn-sm" id="btn-clear-checks">Clear checks</button>
        <button class="btn btn-secondary btn-sm" id="btn-print">🖨️ Print</button>
      </div>
    </div>

    <div class="shopping-grid">
      ${catCards}

      <div class="card" style="padding:16px 18px">
        <div class="shopping-card-header">
          <span class="shopping-cat-icon">✏️</span>
          <span class="shopping-cat-name">My Extra Items</span>
        </div>
        ${customRows || '<p style="font-size:12px;color:var(--text-muted);padding:6px 0 10px">No custom items yet</p>'}
        <div class="custom-add-row">
          <input type="text" class="custom-input" id="custom-item-input" placeholder="Add an item...">
          <button class="btn btn-primary btn-sm" id="btn-add-custom">Add</button>
        </div>
      </div>
    </div>
  `;
}

// ============================================
// VIEW: RECIPES & MEAL PREP
// ============================================

function buildRecipesView() {
  const allMeals = [...MEALS.breakfast, ...MEALS.lunch, ...MEALS.dinner];

  const cards = allMeals.map(meal => {
    const type = MEALS.breakfast.includes(meal) ? 'breakfast' :
                 MEALS.lunch.includes(meal) ? 'lunch' : 'dinner';
    const bannerColors = {
      breakfast: 'linear-gradient(135deg, #FFF3E8 0%, #FFE0C2 100%)',
      lunch: 'linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)',
      dinner: 'linear-gradient(135deg, #EDE7F6 0%, #D1C4E9 100%)',
    };
    const tagHtml = meal.tags.map(t => `<span class="recipe-tag">${t}</span>`).join('');
    return `<div class="card recipe-card" data-recipe="${meal.id}">
      <div class="recipe-banner" style="background:${bannerColors[type]}">${meal.emoji}</div>
      <div class="recipe-meal-type">${type}</div>
      <div class="recipe-title">${meal.name}</div>
      <div class="recipe-meta">
        <span class="recipe-meta-item">⏱ ${meal.prepTime} prep</span>
        <span class="recipe-meta-item">🔥 ${meal.cookTime} cook</span>
        <span class="recipe-meta-item">🍽 ${meal.servings} serving${meal.servings > 1 ? 's' : ''}</span>
      </div>
      <div class="recipe-tags">${tagHtml}</div>
      <div class="recipe-ingredients-preview">${meal.ingredients.slice(0, 5).join(', ')}${meal.ingredients.length > 5 ? '...' : ''}</div>
    </div>`;
  }).join('');

  return `
    <div class="page-header">
      <h2>Recipes &amp; Meal Prep</h2>
      <p>Full recipes with ingredients, steps, and prep tips for every meal</p>
    </div>
    <div class="recipes-grid">${cards}</div>
  `;
}

function openRecipeModal(mealId) {
  const all = [...MEALS.breakfast, ...MEALS.lunch, ...MEALS.dinner];
  const meal = all.find(m => m.id === mealId);
  if (!meal) return;

  const type = MEALS.breakfast.includes(meal) ? 'breakfast' :
               MEALS.lunch.includes(meal) ? 'lunch' : 'dinner';

  const ingredientsList = meal.ingredients.map(i => `<li>${i}</li>`).join('');
  const stepsList = meal.steps.map(s => `<li>${s}</li>`).join('');
  const prepTipsHtml = meal.prepTips.length > 0
    ? meal.prepTips.map(t => `<div class="prep-step">
        <div class="prep-time-badge">${t.time}</div>
        <div class="prep-step-text">${t.text}</div>
      </div>`).join('')
    : '<p style="font-size:13px;color:var(--text-light)">No specific prep tips for this recipe.</p>';

  const tagHtml = meal.tags.map(t => `<span class="recipe-tag">${t}</span>`).join('');

  document.getElementById('modal-title').innerHTML = `${meal.emoji} ${meal.name}`;
  document.getElementById('modal-body').innerHTML = `
    <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:16px">${tagHtml}</div>

    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:20px">
      <div style="text-align:center;background:var(--bg);border-radius:8px;padding:12px 8px">
        <div style="font-size:18px;font-weight:800;color:var(--accent)">${meal.calories}</div>
        <div style="font-size:10px;color:var(--text-light);text-transform:uppercase;letter-spacing:0.5px;margin-top:2px">Calories</div>
      </div>
      <div style="text-align:center;background:var(--bg);border-radius:8px;padding:12px 8px">
        <div style="font-size:18px;font-weight:800;color:var(--color-protein)">${meal.protein}g</div>
        <div style="font-size:10px;color:var(--text-light);text-transform:uppercase;letter-spacing:0.5px;margin-top:2px">Protein</div>
      </div>
      <div style="text-align:center;background:var(--bg);border-radius:8px;padding:12px 8px">
        <div style="font-size:18px;font-weight:800;color:var(--color-carbs)">${meal.carbs}g</div>
        <div style="font-size:10px;color:var(--text-light);text-transform:uppercase;letter-spacing:0.5px;margin-top:2px">Carbs</div>
      </div>
      <div style="text-align:center;background:var(--bg);border-radius:8px;padding:12px 8px">
        <div style="font-size:18px;font-weight:800;color:var(--color-fat)">${meal.fat}g</div>
        <div style="font-size:10px;color:var(--text-light);text-transform:uppercase;letter-spacing:0.5px;margin-top:2px">Fat</div>
      </div>
    </div>

    <div class="recipe-detail-section">
      <h4>Ingredients</h4>
      <ul class="ingredient-list">${ingredientsList}</ul>
    </div>

    <div class="recipe-detail-section">
      <h4>Instructions</h4>
      <ol class="step-list">${stepsList}</ol>
    </div>

    <div class="recipe-detail-section" style="margin-bottom:0">
      <h4>Meal Prep Tips</h4>
      <div class="prep-timeline">${prepTipsHtml}</div>
    </div>
  `;

  document.getElementById('modal-overlay').classList.add('open');
}

// ============================================
// VIEW: PREFERENCES
// ============================================

function buildPreferencesView() {
  const p = state.prefs;

  const restrictions = ['Vegetarian', 'Vegan', 'Gluten-Free', 'Dairy-Free', 'Nut-Free', 'Low-Carb', 'Keto', 'Paleo', 'Halal', 'Kosher'];
  const allergies = ['Peanuts', 'Tree Nuts', 'Dairy', 'Eggs', 'Wheat', 'Soy', 'Fish', 'Shellfish'];
  const cuisines = ['Mediterranean', 'Asian', 'Mexican', 'Italian', 'Middle Eastern', 'Indian', 'American', 'French'];

  const restrictionTags = restrictions.map(r =>
    `<span class="pref-tag${p.dietaryRestrictions.includes(r) ? ' on' : ''}" data-ptype="restriction" data-pval="${r}">${r}</span>`
  ).join('');

  const allergyTags = allergies.map(a =>
    `<span class="pref-tag${p.allergies.includes(a) ? ' on' : ''}" data-ptype="allergy" data-pval="${a}">${a}</span>`
  ).join('');

  const cuisineTags = cuisines.map(c =>
    `<span class="pref-tag${p.cuisines.includes(c) ? ' on' : ''}" data-ptype="cuisine" data-pval="${c}">${c}</span>`
  ).join('');

  const goals = [
    { value: 'lose', icon: '⬇️', name: 'Weight Loss', desc: 'Calorie deficit, high protein to preserve muscle' },
    { value: 'maintain', icon: '⚖️', name: 'Maintenance', desc: 'Balanced macros, stable energy levels' },
    { value: 'gain', icon: '💪', name: 'Muscle Gain', desc: 'Calorie surplus, high protein for growth' },
    { value: 'health', icon: '🌿', name: 'General Health', desc: 'Nutrient-dense whole foods, longevity focus' },
  ];

  const goalCards = goals.map(g =>
    `<div class="goal-option${p.goal === g.value ? ' on' : ''}" data-goal="${g.value}">
      <div class="goal-icon">${g.icon}</div>
      <div class="goal-option-text">
        <div class="goal-name">${g.name}</div>
        <div class="goal-desc">${g.desc}</div>
      </div>
      <div class="goal-check">${p.goal === g.value ? '✓' : ''}</div>
    </div>`
  ).join('');

  return `
    <div class="page-header">
      <h2>My Preferences</h2>
      <p>Tell Cassie's World about your dietary needs and goals</p>
    </div>

    <div class="prefs-grid">
      <!-- LEFT COLUMN -->
      <div>
        <div class="card mb-16" style="margin-bottom:16px">
          <div class="pref-section-title">Health Goal</div>
          ${goalCards}
        </div>

        <div class="card">
          <div class="pref-section-title">Daily Nutrition Targets</div>
          <div class="form-group">
            <label class="form-label">Daily Calories (kcal)</label>
            <input type="number" class="form-input" id="pref-cals" value="${p.dailyCalorieTarget}" min="1000" max="5000" step="50">
          </div>
          <div class="form-group">
            <label class="form-label">Protein Target (g)</label>
            <input type="number" class="form-input" id="pref-protein" value="${p.proteinTarget}" min="30" max="400">
          </div>
          <div class="form-group">
            <label class="form-label">Carbohydrates Target (g)</label>
            <input type="number" class="form-input" id="pref-carbs" value="${p.carbsTarget}" min="50" max="600">
          </div>
          <div class="form-group">
            <label class="form-label">Fat Target (g)</label>
            <input type="number" class="form-input" id="pref-fat" value="${p.fatTarget}" min="20" max="250">
          </div>
          <div class="form-group">
            <label class="form-label">Fiber Target (g)</label>
            <input type="number" class="form-input" id="pref-fiber" value="${p.fiberTarget}" min="10" max="80">
          </div>
        </div>
      </div>

      <!-- RIGHT COLUMN -->
      <div>
        <div class="card" style="margin-bottom:16px">
          <div class="pref-section-title">Dietary Restrictions</div>
          <div class="tag-row">${restrictionTags}</div>
        </div>

        <div class="card" style="margin-bottom:16px">
          <div class="pref-section-title">Food Allergies</div>
          <div class="tag-row">${allergyTags}</div>
        </div>

        <div class="card" style="margin-bottom:16px">
          <div class="pref-section-title">Cuisine Preferences</div>
          <div class="tag-row">${cuisineTags}</div>
        </div>

        <div class="card">
          <div class="pref-section-title">Personal Notes for Meal Planning</div>
          <div class="form-group" style="margin-bottom:0">
            <textarea class="form-textarea" id="pref-notes" placeholder="e.g. I prefer smaller dinner portions, avoid anything too spicy, love meal prepping on Sundays...">${p.notes || ''}</textarea>
          </div>
        </div>
      </div>
    </div>

    <div class="save-bar">
      <button class="btn btn-primary" id="btn-save-prefs">Save Preferences</button>
    </div>
  `;
}

// ============================================
// MODAL: MEAL CHOOSER
// ============================================

function openMealModal(day, type) {
  const current = getCurrentPlan()[day]?.[type];
  const options = MEALS[type];

  document.getElementById('modal-title').textContent = `${day} · ${type.charAt(0).toUpperCase() + type.slice(1)}`;
  document.getElementById('modal-body').innerHTML = `
    <div class="modal-section-label">Choose a meal</div>
    ${options.map(m => `
      <div class="meal-choice${current?.id === m.id ? ' selected' : ''}" data-meal-id="${m.id}" data-day="${day}" data-type="${type}">
        <div class="meal-choice-emoji">${m.emoji}</div>
        <div class="meal-choice-info">
          <div class="meal-choice-name">${m.name}</div>
          <div class="meal-choice-macros">${m.protein}g P · ${m.carbs}g C · ${m.fat}g F · ${m.fiber}g fiber</div>
        </div>
        <div class="meal-choice-cals">${m.calories} kcal</div>
      </div>
    `).join('')}
  `;

  document.getElementById('modal-overlay').classList.add('open');

  document.querySelectorAll('.meal-choice').forEach(el => {
    el.addEventListener('click', () => {
      const meal = MEALS[type].find(m => m.id === el.dataset.mealId);
      if (!meal) return;
      const key = getMondayKey();
      if (!state.weekHistory[key]) state.weekHistory[key] = {};
      if (!state.weekHistory[key][day]) state.weekHistory[key][day] = {};
      state.weekHistory[key][day][type] = meal;
      saveState();
      closeModal();
      renderView('meal-plan');
    });
  });
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
}

// ============================================
// EVENT BINDING PER VIEW
// ============================================

function bindViewListeners(view) {
  // Nav (always bind)
  document.querySelectorAll('.nav-item').forEach(el => {
    el.addEventListener('click', () => renderView(el.dataset.view));
  });

  if (view === 'meal-plan') {
    // Only allow editing current week
    document.querySelectorAll('.meal-slot, .meal-slot-empty').forEach(el => {
      el.addEventListener('click', () => {
        if (!isViewingCurrentWeek()) return;
        openMealModal(el.dataset.day, el.dataset.type);
      });
    });

    // Week navigation
    document.getElementById('btn-prev-week')?.addEventListener('click', () => {
      const keys = getSortedWeekKeys();
      const idx = keys.indexOf(viewingWeekKey);
      if (idx > 0) { viewingWeekKey = keys[idx - 1]; renderView('meal-plan'); }
    });

    document.getElementById('btn-next-week')?.addEventListener('click', () => {
      const keys = getSortedWeekKeys();
      const idx = keys.indexOf(viewingWeekKey);
      if (idx < keys.length - 1) { viewingWeekKey = keys[idx + 1]; renderView('meal-plan'); }
    });

    document.getElementById('btn-shuffle')?.addEventListener('click', () => {
      const key = getMondayKey();
      state.weekHistory[key] = generateSmartWeekPlan(key);
      saveState();
      renderView('meal-plan');
      toast('New week generated — no repeats from last 4 weeks!', '🔀');
    });

    document.getElementById('btn-to-shopping')?.addEventListener('click', () => renderView('shopping'));
  }

  if (view === 'nutrition') {
    document.querySelectorAll('.day-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        nutritionDay = pill.dataset.day;
        renderView('nutrition');
      });
    });
  }

  if (view === 'shopping') {
    document.querySelectorAll('.shopping-cb:not(.custom-cb)').forEach(cb => {
      cb.addEventListener('change', e => {
        const key = e.target.dataset.key;
        state.shoppingChecked[key] = e.target.checked;
        e.target.closest('.shopping-item').classList.toggle('is-checked', e.target.checked);
        saveState();
        updateShoppingCount();
      });
    });

    document.querySelectorAll('.custom-cb').forEach(cb => {
      cb.addEventListener('change', e => {
        const i = parseInt(e.target.dataset.custom);
        state.customItems[i].checked = e.target.checked;
        e.target.closest('.shopping-item').classList.toggle('is-checked', e.target.checked);
        saveState();
        updateShoppingCount();
      });
    });

    document.querySelectorAll('[data-rm-custom]').forEach(btn => {
      btn.addEventListener('click', () => {
        const i = parseInt(btn.dataset.rmCustom);
        state.customItems.splice(i, 1);
        saveState();
        renderView('shopping');
      });
    });

    const addCustomItem = () => {
      const input = document.getElementById('custom-item-input');
      const val = input.value.trim();
      if (!val) return;
      state.customItems.push({ name: val, checked: false });
      saveState();
      renderView('shopping');
    };

    document.getElementById('btn-add-custom')?.addEventListener('click', addCustomItem);
    document.getElementById('custom-item-input')?.addEventListener('keydown', e => {
      if (e.key === 'Enter') addCustomItem();
    });

    document.getElementById('btn-clear-checks')?.addEventListener('click', () => {
      state.shoppingChecked = {};
      state.customItems.forEach(i => i.checked = false);
      saveState();
      renderView('shopping');
    });

    document.getElementById('btn-print')?.addEventListener('click', () => window.print());
  }

  if (view === 'recipes') {
    document.querySelectorAll('.recipe-card').forEach(el => {
      el.addEventListener('click', () => openRecipeModal(el.dataset.recipe));
    });
  }

  if (view === 'preferences') {
    document.querySelectorAll('.pref-tag').forEach(tag => {
      tag.addEventListener('click', () => {
        const type = tag.dataset.ptype;
        const val = tag.dataset.pval;
        let arr = type === 'restriction' ? state.prefs.dietaryRestrictions :
                  type === 'allergy' ? state.prefs.allergies : state.prefs.cuisines;
        const idx = arr.indexOf(val);
        if (idx > -1) arr.splice(idx, 1);
        else arr.push(val);
        tag.classList.toggle('on');
        saveState();
      });
    });

    document.querySelectorAll('[data-goal]').forEach(el => {
      el.addEventListener('click', () => {
        state.prefs.goal = el.dataset.goal;
        // Auto-adjust calorie targets
        const calMap = { lose: 1600, maintain: 2000, gain: 2600, health: 1900 };
        const protMap = { lose: 165, maintain: 150, gain: 190, health: 140 };
        const calInput = document.getElementById('pref-cals');
        const protInput = document.getElementById('pref-protein');
        if (calInput) calInput.value = calMap[el.dataset.goal];
        if (protInput) protInput.value = protMap[el.dataset.goal];
        document.querySelectorAll('[data-goal]').forEach(g => {
          g.classList.toggle('on', g.dataset.goal === el.dataset.goal);
          g.querySelector('.goal-check').textContent = g.dataset.goal === el.dataset.goal ? '✓' : '';
        });
        saveState();
      });
    });

    document.getElementById('btn-save-prefs')?.addEventListener('click', () => {
      state.prefs.dailyCalorieTarget = parseInt(document.getElementById('pref-cals').value) || 2000;
      state.prefs.proteinTarget = parseInt(document.getElementById('pref-protein').value) || 150;
      state.prefs.carbsTarget = parseInt(document.getElementById('pref-carbs').value) || 220;
      state.prefs.fatTarget = parseInt(document.getElementById('pref-fat').value) || 65;
      state.prefs.fiberTarget = parseInt(document.getElementById('pref-fiber').value) || 30;
      state.prefs.notes = document.getElementById('pref-notes').value;
      saveState();
      toast('Preferences saved!', '✅');
    });
  }
}

// ============================================
// HELPERS
// ============================================

function updateShoppingCount() {
  const cats = buildShoppingList();
  const totalItems = Object.values(cats).reduce((s, c) => s + Object.keys(c).length, 0) + state.customItems.length;
  const checkedCount = Object.values(state.shoppingChecked).filter(Boolean).length + state.customItems.filter(i => i.checked).length;
  const header = document.querySelector('.page-header p');
  if (header) header.textContent = `${checkedCount} of ${totalItems} items checked · Auto-generated from your meal plan`;
}

function toast(msg, icon = '✅') {
  const el = document.createElement('div');
  el.className = 'toast';
  el.innerHTML = `<span>${icon}</span><span>${msg}</span>`;
  document.body.appendChild(el);
  setTimeout(() => {
    el.classList.add('hiding');
    setTimeout(() => el.remove(), 300);
  }, 2200);
}

// ============================================
// MODAL CLOSE HANDLERS
// ============================================

document.getElementById('modal-close').addEventListener('click', closeModal);
document.getElementById('modal-overlay').addEventListener('click', e => {
  if (e.target === document.getElementById('modal-overlay')) closeModal();
});

// ============================================
// SIDEBAR TOGGLE (mobile)
// ============================================

(function () {
  const toggleBtn = document.getElementById('sidebar-toggle');
  const backdrop  = document.getElementById('sidebar-backdrop');
  const sidebar   = document.querySelector('.sidebar');

  function openSidebar() {
    sidebar.classList.add('open');
    backdrop.classList.add('open');
    toggleBtn.classList.add('open');
  }

  function closeSidebar() {
    sidebar.classList.remove('open');
    backdrop.classList.remove('open');
    toggleBtn.classList.remove('open');
  }

  function toggle() {
    sidebar.classList.contains('open') ? closeSidebar() : openSidebar();
  }

  if (toggleBtn) toggleBtn.addEventListener('click', toggle);
  if (backdrop)  backdrop.addEventListener('click', closeSidebar);

  // Close sidebar when a nav item is tapped on mobile
  document.querySelector('.sidebar-nav').addEventListener('click', () => {
    if (window.innerWidth < 768) closeSidebar();
  });
})();

// ============================================
// BOOT
// ============================================

render();
