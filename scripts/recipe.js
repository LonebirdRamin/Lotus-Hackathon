const recipe = [
    { name: "Omelette", ingredients: ["Egg", "Oil", "Butter"], image: "./source/image/omelette.jpg", nutritions: {Calories: 154, Protein: 11, Fat: 12, Carbs: 1}},
    { name: "Fried Egg", ingredients: ["Egg", "Oil"], image: "./source/image/fried-egg.webp", nutritions: {Calories: 90, Protein: 6, Fat: 7, Carbs: 0}},
    { name: "Scrambled Egg", ingredients: ["Egg", "Butter"], image: "./source/image/scrambled-egg.jpg", nutritions: {Calories: 147, Protein: 10, Fat: 11, Carbs: 1}},
    { name: "Scotch Egg", ingredients: ["Egg", "Sausage", "Breadcrumbs"], image: "./source/image/scotch-egg.jpg", nutritions: {Calories: 303, Protein: 17, Fat: 24, Carbs: 8}},
    { name: "Tenderloin Steak", ingredients: ["Tenderloin", "Butter", "Salt", "Pepper"], image: "./source/image/tenderloin-steak.jpg", nutritions: {Calories: 275, Protein: 23, Fat: 19, Carbs: 0}},
    { name: "Beef Wellington", ingredients: ["Tenderloin", "Mushroom", "Puff Pastry"], image: "./source/image/beef-wellington.jpg", nutritions: {Calories: 506, Protein: 28, Fat: 40, Carbs: 23}},
    { name: "Beef Stroganoff", ingredients: ["Tenderloin", "Mushroom", "Sour Cream"], image: "./source/image/beef-stroganoff.jpg", nutritions: {Calories: 321, Protein: 24, Fat: 20, Carbs: 9}},
    { name: "Beef Stew", ingredients: ["Tenderloin", "Carrot", "Potato"], image: "./source/image/beef-stew.jpg", nutritions: {Calories: 256, Protein: 22, Fat: 10, Carbs: 20}},
    { name: "Risotto", ingredients: ["Rice", "Butter", "Chicken Stock"], image: "./source/image/risotto.jpg", nutritions: {Calories: 350, Protein: 6, Fat: 10, Carbs: 58}},
    { name: "Kao Mun Gai", ingredients: ["Chicken Breast", "Rice", "Chicken Stock"], image: "./source/image/kao-mun-gai.jpg", nutritions: {Calories: 410, Protein: 25, Fat: 9, Carbs: 60}},
    { name: "Pad Krapow", ingredients: ["Holy Basil", "Minced Pork", "Rice"], image: "./source/image/krapow.jpg", nutritions: {Calories: 520, Protein: 20, Fat: 26, Carbs: 50}},
    { name: "Apple Pie", ingredients: ["Apple", "Butter", "Flour"], image: "./source/image/apple-pie.jpg", nutritions: {Calories: 411, Protein: 3, Fat: 19, Carbs: 58}},
    { name: "Apple Jam", ingredients: ["Apple", "Sugar", "Lemon Juice"], image: "./source/image/apple-jam.jfif", nutritions: {Calories: 240, Protein: 0, Fat: 0, Carbs: 62}}, // Assuming 100g serving
    { name: "Lime Chicken Salad", ingredients: ["Lime", "Chicken", "Avocado"], image: "./source/image/lime-chicken-salad.webp", nutritions: {Calories: 290, Protein: 25, Fat: 15, Carbs: 12}},
    { name: "Lime Ice Cream", ingredients: ["Lime", "Sugar", "Milk"], image: "./source/image/lime-ice-cream.webp", nutritions: {Calories: 207, Protein: 3, Fat: 9, Carbs: 29}},
    { name: "Shitake Soup", ingredients: ["Shitake", "Chicken Stock", "Tofu"], image: "./source/image/shitake-soup.jpg", nutritions: {Calories: 80, Protein: 6, Fat: 4, Carbs: 7}},
    { name: "Shitake Stir-fry", ingredients: ["Shitake", "Tenderloin", "Soy Sauce"], image: "./source/image/shitake-stir-fry.jpg", nutritions: {Calories: 320, Protein: 25, Fat: 14, Carbs: 20}},
    { name: "Shitake Omelette", ingredients: ["Shitake", "Egg", "Oil"], image: "./source/image/shitake-omelette.jpg", nutritions: {Calories: 180, Protein: 13, Fat: 13, Carbs: 3}},
]

const menu = localStorage.getItem('recipeName');

function createRecipeItem(recipe) {
    const div = document.createElement("div");
    div.classList.add("menu-item");

    const img = document.createElement("img");
    img.id = "menu-image";
    img.src = recipe.image;
    img.alt = recipe.name;

    const nutritionHead = document.createElement("h2");
    nutritionHead.innerText = "Nutrition Facts";

    const uldivNutrition = document.createElement("div");
    uldivNutrition.classList.add("nutrition-facts");

    const ulNutrition = document.createElement("ul");
    Object.entries(recipe.nutritions).forEach(([key, value]) => {
        const li = document.createElement("li");
        if (key === "Calories") {
            li.innerText = `${key}: ${value}kcal`;
        } else{
            li.innerText = `${key}: ${value}g`;
        }
        ulNutrition.appendChild(li);
    });

    uldivNutrition.appendChild(ulNutrition);

    const ingredientsHead = document.createElement("h2");
    ingredientsHead.innerText = "Ingredients";

    const uldivIngredient = document.createElement("div");
    uldivIngredient.classList.add("ingredients");

    const ulIngredient = document.createElement("ul");
    recipe.ingredients.forEach(ingredient => {
        const li = document.createElement("li");
        li.innerText = ingredient;
        ulIngredient.appendChild(li);
    });

    uldivIngredient.appendChild(ulIngredient);

    div.appendChild(img);
    div.appendChild(nutritionHead);
    div.appendChild(uldivNutrition);
    div.appendChild(ingredientsHead);
    div.appendChild(uldivIngredient);

    return div;
}

function addRecipe() {
    const container = document.getElementById("menu-container");
    recipe.forEach(recipe => {
        if (recipe.name === menu) {
            const recipeItem = createRecipeItem(recipe);
            container.appendChild(recipeItem);
        }
    });
}

document.getElementById('food-name').innerText = menu;
window.addEventListener("load", addRecipe);