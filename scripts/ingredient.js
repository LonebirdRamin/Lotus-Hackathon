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

function createIngredientItem(ingredient) {
    const div = document.createElement("div");
    div.classList.add("ingredient-item");
    
    const img = document.createElement("img");
    img.id = "ingredient-image";
    img.src = ingredient.image;
    img.alt = ingredient.name;

    const p = document.createElement("p");
    p.textContent = ingredient.name;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("invisible-checkbox");

    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(checkbox)

    div.onclick = function() {
        checkbox.checked = !checkbox.checked;
        div.classList.toggle("checked", checkbox.checked);
        sendData();
    };
    return div;
}

function addIngredients() {
    const container = document.getElementById("ingredient-list");
    ingredients.forEach(ingredient => {
        const ingredientItem = createIngredientItem(ingredient);
        container.appendChild(ingredientItem);
    });
    restoreCheckedIngredients();
}

function sendData() {
    const checkedIngredients = [];
    const checkboxes = document.querySelectorAll('.checked .invisible-checkbox');
    checkboxes.forEach(checkbox => {
        const ingredientName = checkbox.parentNode.querySelector('p').textContent;
        console.log(ingredientName)
        checkedIngredients.push(ingredientName);
    });
    localStorage.setItem('checkedIngredients', JSON.stringify(checkedIngredients));
}

function restoreCheckedIngredients() {
    const savedIngredients = localStorage.getItem('checkedIngredients');
    if (savedIngredients) {
        const checkedIngredients = JSON.parse(savedIngredients);
        const checkboxes = document.querySelectorAll('.invisible-checkbox');
        checkboxes.forEach(checkbox => {
            const nextElement = checkbox.parentNode.querySelector('p').textContent;
            console.log(nextElement)
            if (checkedIngredients.includes(nextElement)) { 
                checkbox.checked = true;
                checkbox.parentElement.classList.add("checked");
            }
        });
    }
}

window.addEventListener("load", addIngredients);
document.addEventListener("click", toggleCheck);
document.querySelectorAll('.ingredient-item').forEach(item => item.addEventListener('click', toggleCheck));