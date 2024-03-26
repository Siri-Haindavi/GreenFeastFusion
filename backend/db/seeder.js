const Filter = require("../models/filterItemSchema"); // Path to the Filter model
const forceSeed = false; // Set this to true to force seed the database
const defaultFilters  = [
  { type: "Spice level", name: "Mild" },
  { type: "Spice level", name: "Medium" },
  { type: "Spice level", name: "Hot" },
  { type: "Dietary needs", name: "High Protein" },
  { type: "Dietary needs", name: "Vegan" },
  { type: "Dietary needs", name: "No nuts" },
  { type: "Meal type", name: "Salad" },
  { type: "Meal type", name: "Rice bowls" },
  { type: "Meal type", name: "Entrees" },
];

async function seedFilters() {
  try {
    const filtersExist = await Filter.countDocuments();
    if (filtersExist === 0 || forceSeed) {
      if (forceSeed) {
        await Filter.deleteMany();
      }

      await Filter.insertMany(defaultFilters);
      console.log("Filters have been seeded");
    } else {
      console.log("Filters already exist");
    }
  } catch (error) {
    console.error("Error seeding filters:", error);
  }
}

// Call this function when you want to seed your database
seedFilters().then(() => {});

const Product = require("../models/productSchema"); // Your Product model file path

const veganProductSeedData = [
  {
    title: "Vegan Lentil Soup",
    description: "A comforting soup with lentils and aromatic spices.",
    filters: ["Vegan", "Soup", "Low Calories"],
    ingredients:
      "Lentils, carrots, onions, garlic, vegetable broth, cumin, paprika, salt, pepper",
    how_to_prepare:
      "1. In a large pot, heat oil over medium heat. Add onions, carrots, and garlic. Cook until onions are soft. 2. Add lentils, vegetable broth, and spices. Bring to a boil, then reduce heat and simmer for 20 minutes. 3. Serve hot and enjoy!",
    servingsPerContainer: "4",
    servingSize: "1 cup",
    nutrition: [
      { name: "Calories", value: 230, unit: "kcal" },
      { name: "Protein", value: 15, unit: "g" },
      { name: "Carbohydrates", value: 40, unit: "g" },
      { name: "Fat", value: 2, unit: "g" },
    ],
  },
  {
    title: "Chickpea Spinach Salad",
    description: "A nutritious salad with chickpeas and fresh vegetables.",
    filters: ["Vegan", "Salad", "High Protein"],
    ingredients:
      "Chickpeas, spinach, cherry tomatoes, cucumber, red onion, olive oil, lemon juice, salt, pepper",
    how_to_prepare:
      "1. In a large bowl, combine chickpeas, spinach, tomatoes, cucumber, and onion. 2. In a small bowl, whisk together olive oil, lemon juice, salt, and pepper. 3. Pour dressing over salad and toss to combine. 4. Serve and enjoy!",
    servingsPerContainer: "4",
    servingSize: "2 cups",
    nutrition: [
      { name: "Calories", value: 180, unit: "kcal" },
      { name: "Protein", value: 8, unit: "g" },
      { name: "Carbohydrates", value: 25, unit: "g" },
      { name: "Fat", value: 7, unit: "g" },
    ],
  },
  {
    title: "BBQ Jackfruit Sandwich",
    description: "Shredded jackfruit in a rich BBQ sauce served in a bun.",
    filters: ["Vegan", "Sandwich", "High Fiber"],
    ingredients: "Jackfruit, BBQ sauce, buns, coleslaw, pickles, red onion",
    how_to_prepare:
      "1. Drain and rinse jackfruit, then shred with a fork. 2. In a pan, heat jackfruit and BBQ sauce over medium heat. Cook for 10 minutes. 3. Assemble sandwiches with jackfruit, coleslaw, pickles, and onion. 4. Serve and enjoy!",
    servingsPerContainer: "4",
    servingSize: "1 sandwich",
    nutrition: [
      { name: "Calories", value: 300, unit: "kcal" },
      { name: "Protein", value: 10, unit: "g" },
      { name: "Carbohydrates", value: 45, unit: "g" },
      { name: "Fat", value: 8, unit: "g" },
    ],
  },
  {
    title: "Stuffed Bell Peppers",
    description: "Bell peppers filled with quinoa, beans, and vegetables.",
    filters: ["Vegan", "Entree", "Gluten-Free"],
    ingredients:
      "Bell peppers, quinoa, black beans, corn, onions, tomatoes, spices",
    how_to_prepare:
      "1. Preheat oven to 375°F. 2. In a bowl, mix together cooked quinoa, beans, corn, onions, and tomatoes. 3. Cut tops off bell peppers and remove seeds. 4. Stuff peppers with quinoa mixture and place in a baking dish. 5. Bake for 25 minutes. 6. Serve and enjoy!",
    servingsPerContainer: "4",
    servingSize: "1 pepper",
    nutrition: [
      { name: "Calories", value: 220, unit: "kcal" },
      { name: "Protein", value: 10, unit: "g" },
      { name: "Carbohydrates", value: 35, unit: "g" },
      { name: "Fat", value: 5, unit: "g" },
    ],
  },
  {
    title: "Vegan Chili",
    description: "A spicy chili made with beans and various vegetables.",
    filters: ["Vegan", "Chili", "Spicy"],
    ingredients:
      "Kidney beans, black beans, tomatoes, onions, bell peppers, chili powder, cumin, garlic",
    how_to_prepare:
      "1. In a large pot, sauté onions, peppers, and garlic until soft. 2. Add beans, tomatoes, and spices. 3. Bring to a boil, then reduce heat and simmer for 30 minutes. 4. Serve hot and enjoy!",
    servingsPerContainer: "6",
    servingSize: "1 cup",
    nutrition: [
      { name: "Calories", value: 250, unit: "kcal" },
      { name: "Protein", value: 15, unit: "g" },
      { name: "Carbohydrates", value: 40, unit: "g" },
      { name: "Fat", value: 3, unit: "g" },
    ],
  },
  {
    title: "Mushroom Risotto",
    description: "Creamy risotto cooked with flavorful mushrooms.",
    filters: ["Vegan", "Entree", "Soy-Free"],
    ingredients:
      "Arborio rice, mushrooms, vegetable broth, onions, garlic, white wine, nutritional yeast",
    how_to_prepare:
      "1. In a large pot, sauté onions and garlic until soft. 2. Add rice and cook for 2 minutes. 3. Add wine and cook until absorbed. 4. Gradually add broth, stirring until absorbed. 5. Stir in mushrooms and nutritional yeast. 6. Serve hot and enjoy!",
    servingsPerContainer: "4",
    servingSize: "1 cup",
    nutrition: [
      { name: "Calories", value: 300, unit: "kcal" },
      { name: "Protein", value: 10, unit: "g" },
      { name: "Carbohydrates", value: 45, unit: "g" },
      { name: "Fat", value: 5, unit: "g" },
    ],
  },
  {
    title: "Vegan Sushi Rolls",
    description: "Sushi rolls filled with avocado, cucumber, and tofu.",
    filters: ["Vegan", "Sushi", "Low Fat"],
    ingredients:
      "Sushi rice, nori, avocado, cucumber, tofu, rice vinegar, soy sauce, wasabi, pickled ginger",
    how_to_prepare:
      "1. Cook sushi rice according to package instructions. 2. Place nori on a bamboo mat. 3. Spread rice over nori, leaving a 1-inch border. 4. Add avocado, cucumber, and tofu. 5. Roll tightly and slice into pieces. 6. Serve with soy sauce, wasabi, and pickled ginger.",
    servingsPerContainer: "4",
    servingSize: "6 pieces",
    nutrition: [
      { name: "Calories", value: 250, unit: "kcal" },
      { name: "Protein", value: 8, unit: "g" },
      { name: "Carbohydrates", value: 40, unit: "g" },
      { name: "Fat", value: 5, unit: "g" },
    ],
  },
  {
    title: "Curried Cauliflower Soup",
    description: "A smooth soup with the warmth of curry spices.",
    filters: ["Vegan", "Soup", "Curry"],
    ingredients:
      "Cauliflower, onions, garlic, vegetable broth, curry powder, coconut milk",
    how_to_prepare:
      "1. In a large pot, sauté onions and garlic until soft. 2. Add cauliflower, broth, and curry powder. 3. Simmer for 20 minutes. 4. Blend until smooth. 5. Stir in coconut milk. 6. Serve hot and enjoy!",
    servingsPerContainer: "4",
    servingSize: "1 cup",
    nutrition: [
      { name: "Calories", value: 200, unit: "kcal" },
      { name: "Protein", value: 8, unit: "g" },
      { name: "Carbohydrates", value: 30, unit: "g" },
      { name: "Fat", value: 10, unit: "g" },
    ],
  },
  {
    title: "Vegan Tacos",
    description: "Tacos filled with seasoned lentils and fresh veggies.",
    filters: ["Vegan", "Tacos", "Mexican"],
    // ... other fields
  },
  {
    title: "Vegan Pad Thai",
    description: "A classic Thai noodle dish with a vegan twist.",
    filters: ["Vegan", "Noodles", "Thai"],
    // ... other fields
  },
  {
    title: "Vegan Pizza",
    description: "Pizza with vegan cheese and a variety of toppings.",
    filters: ["Vegan", "Pizza", "Italian"],
    // ... other fields
  },
  {
    title: "Vegan Chocolate Cake",
    description: "Rich chocolate cake that is completely dairy-free.",
    filters: ["Vegan", "Dessert", "Chocolate"],
    // ... other fields
  },
  {
    title: "Vegan Burger",
    description: "A hearty burger patty made from black beans and vegetables.",
    filters: ["Vegan", "Burger", "American"],
    // ... other fields
  },
  {
    title: "Vegan Caesar Salad",
    description: "A classic salad with a creamy vegan Caesar dressing.",
    filters: ["Vegan", "Salad", "Low Carb"],
    // ... other fields
  },
  {
    title: "Vegan Breakfast Burrito",
    description: "A filling burrito with tofu scramble and vegetables.",
    filters: ["Vegan", "Breakfast", "Protein-Rich"],
    // ... other fields
  },
];

async function seedProducts() {
  try {
    const productsExist = await Product.countDocuments();
    if (productsExist === 0 || forceSeed) {
      if (forceSeed) {
        await Product.deleteMany();
      }

      for (let productData of veganProductSeedData) {
        const filterIds = [];
        for (let filterName of productData.filters) {
          const filterId = await Filter.findOne()
            .where("name")
            .equals(filterName)
            .select("_id");
          if (filterId) {
            filterIds.push(filterId);
          } else {
            console.log(
              `Filter not found for ${filterName}, skipping this filter.`
            );
          }
        }
        productData.filters = filterIds;
        const product = new Product(productData);
        await product.save();
      }
      console.log("Vegan products have been seeded");
    } else {
      console.log("Products already exist in the database");
    }
  } catch (error) {
    console.error("Error seeding products:", error);
  }
}

// Call this function when you want to seed your database
seedProducts().then(() => {});
