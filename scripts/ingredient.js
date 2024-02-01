const ingredients = [
    { name: "Chicken Breast", image: "./source/image/chicken-breast.png" },
    { name: "Tenderlion", image: "./source/image/tenderlion.png" },
    { name: "Egg", image: "./source/image/egg.png" },
    { name: "Butter", image: "./source/image/7301072.webp" },
    { name: "Holy Basil", image: "./source/image/holybasil.png" },
    { name: "Shitake", image: "./source/image/shitake.jfif" },
    { name: "Minced Pork", image: "./source/image/minced-pork.webp" },
    { name: "Lime", image: "./source/image/lime.png" },
    { name: "Apple", image: "./source/image/apple.jfif" },
    { name: "Rice", image: "./source/image/rice.png" }
];

function createIngredientItem(ingredient) {
    const div = document.createElement("div");
    div.classList.add("ingredient-item");
    
    const img = document.createElement("img");
    img.id = "ingredient-image";
    img.src = ingredient.image;
    img.alt = ingredient.name;

    const p = document.createElement("p");
    p.textContent = ingredient.name;

    div.appendChild(img);
    div.appendChild(p);

    return div;
}

function addIngredients() {
    const container = document.getElementById("ingredient-list");
    ingredients.forEach(ingredient => {
        const ingredientItem = createIngredientItem(ingredient);
        container.appendChild(ingredientItem);
    });
}

window.addEventListener("load", addIngredients);