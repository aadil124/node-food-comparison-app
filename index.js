const readline = require("readline-sync");
const foodData = require("./data.json");

const getFoodDetails = (foodName) => {
  return foodData.foodItems.find(
    (food) => food.name.toLowerCase() === foodName.toLowerCase()
  );
};

const compareFoods = (food1, food2) => {
  console.log("\nComparing", food1.name, "and", food2.name, "\n");

  const traits = ["texture", "odor", "flavor", "ingredients", "cookingMethods"];

  traits.forEach((trait) => {
    console.log(`--- ${trait.toUpperCase()} ---`);
    console.log(`${food1.name}:`, food1[trait]);
    console.log(`${food2.name}:`, food2[trait]);
    console.log("---------------------------------------\n");
  });
};

const startComparison = () => {
  console.log("\nWelcome to the Food Comparison App!\n");
  console.log(
    "Available food items:",
    foodData.foodItems.map((food) => food.name).join(", ")
  );

  const food1Name = readline.question("\nEnter the first food item: ");
  const food1 = getFoodDetails(food1Name);

  if (!food1) {
    console.log("Food not found!");
    return;
  }

  const food2Name = readline.question("Enter the second food item: ");
  const food2 = getFoodDetails(food2Name);

  if (!food2) {
    console.log("Food not found!");
    return;
  }

  compareFoods(food1, food2);
};

startComparison();
