const ingredients = [
    { name: "Chicken Breast", image: "./source/image/chicken-breast.webp" },
    { name: "Tenderloin", image: "./source/image/tenderlion.png" },
    { name: "Egg", image: "./source/image/egg.png" },
    { name: "Butter", image: "./source/image/7301072.webp" },
    { name: "Holy Basil", image: "./source/image/holybasil.png" },
    { name: "Shitake", image: "./source/image/shitake.png" },
    { name: "Minced Pork", image: "./source/image/minced-pork.webp" },
    { name: "Lime", image: "./source/image/lime.png" },
    { name: "Apple", image: "./source/image/apple.png" },
    { name: "Rice", image: "./source/image/rice.png" }
];

function displayCheckedIngredients() {
    const container = document.querySelector(".basket-content");
    const savedIngredients = localStorage.getItem('checkedIngredients');
    if (savedIngredients) {
        const checkedIngredients = JSON.parse(savedIngredients);
        checkedIngredients.forEach(ingredientName => {
            const ingredient = ingredients.find(item => item.name === ingredientName);
            if (ingredient) {
                const div = document.createElement("div");
                div.classList.add("checked-ingredient");

                const img = document.createElement("img");
                img.id = "ingredient-image";
                img.src = ingredient.image;
                img.alt = ingredient.name;

                const p = document.createElement("p");
                p.textContent = ingredient.name;

                div.appendChild(p);
                div.appendChild(img);
                container.appendChild(div);
            }
        });
    }
}

window.addEventListener('load', displayCheckedIngredients);

function naviagateToRecipePage(){
    window.location.href = "foodrecipe.html";
}

function navigateToIngredientPage(){
    window.location.href = "ingredient.html";
}

function navigateToCameraPage(){
    window.location.href = "camera.html";
}