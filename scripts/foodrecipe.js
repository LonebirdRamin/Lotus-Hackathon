const recipe = [
    { name: "Omelette", ingredients: ["Egg", "Oil", "Butter"], image: "./source/image/omelette.jpg"},
    { name: "Fried Egg", ingredients: ["Egg", "Oil"], image: "./source/image/fried-egg.webp"},
    { name: "Scrambled Egg", ingredients: ["Egg", "Butter"], image: "./source/image/scrambled-egg.jpg"},
    { name: "Scotch Egg", ingredients: ["Egg", "Sausage", "Breadcrumbs"], image: "./source/image/scotch-egg.jpg"},
    { name: "Tenderloin Steak", ingredients: ["Tenderloin", "Butter", "Salt", "Pepper"], image: "./source/image/tenderloin-steak.jpg"},
    { name: "Beef Wellington", ingredients: ["Tenderloin", "Mushroom", "Puff Pastry"], image: "./source/image/beef-wellington.jpg"},
    { name: "Beef Stroganoff", ingredients: ["Tenderloin", "Mushroom", "Sour Cream"], image: "./source/image/beef-stroganoff.jpg"},
    { name: "Beef Stew", ingredients: ["Tenderloin", "Carrot", "Potato"], image: "./source/image/beef-stew.jpg"},
    { name: "Risotto", ingredients: ["Rice", "Butter", "Chicken Stock"], image: "./source/image/risotto.jpg"},
    { name: "Kao Mun Gai", ingredients: ["Chicken Breast", "Rice", "Chicken Stock"], image: "./source/image/kao-mun-gai.jpg"},
    { name: "Pad Krapow", ingredients: ["Holy Basil", "Minced Pork", "Rice"], image: "./source/image/krapow.jpg"},
    { name: "Apple Pie", ingredients: ["Apple", "Butter", "Flour"], image: "./source/image/apple-pie.jpg"},
    { name: "Apple Jam", ingredients: ["Apple", "Sugar", "Lemon Juice"], image: "./source/image/apple-jam.jfif"},
    { name: "Lime Chicken Salad", ingredients: ["Lime", "Chicken", "Avocado"], image: "./source/image/lime-chicken-salad.webp"},
    { name: "Lime Ice Cream", ingredients: ["Lime", "Sugar", "Milk"], image: "./source/image/lime-ice-cream.webp"},
    { name: "Shitake Soup", ingredients: ["Shitake", "Chicken Stock", "Tofu"], image: "./source/image/shitake-soup.jpg"},
    { name: "Shitake Stir-fry", ingredients: ["Shitake", "Tenderloin", "Soy Sauce"], image: "./source/image/shitake-stir-fry.jpg"},
    { name: "Shitake Omelette", ingredients: ["Shitake", "Egg", "Oil"], image: "./source/image/shitake-omelette.jpg"},
]

function createRecipeItem(recipe) {
    const div = document.createElement("div");
    div.classList.add("recipe-item");

    const img = document.createElement("img");
    img.id = "recipe-image";
    img.src = recipe.image;
    img.alt = recipe.name;

    const p = document.createElement("p");
    p.textContent = recipe.name;

    div.appendChild(img);
    div.appendChild(p);

    return div;
}

function addRecipes() {
    const container = document.getElementById("recipe-list");
    const ingredientList = JSON.parse(localStorage.getItem('checkedIngredients'));
    recipe.forEach(recipe => {
        if (recipe.ingredients.some(ingredient => ingredientList.includes(ingredient))) {
            const recipeItem = createRecipeItem(recipe);
            container.appendChild(recipeItem);
        }
    });
}

window.addEventListener("load", addRecipes);