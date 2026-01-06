console.log("Day 2: Leaning DOM");
const container = document.getElementById("container");
console.log(container);

const sectionEl = document.querySelector("section");
console.log(sectionEl);

const profile = document.getElementById("profile");
console.log(profile);

const profileEl = document.querySelector("div");
console.log(profileEl);

const highlightEl = document.querySelector(".highlight") 
console.log(highlightEl);

console.log(document.querySelectorAll("div"));

const text = document.querySelectorAll(".text");
console.log(text);

const item = document.querySelectorAll("#item");
console.log(item);

const link = document.querySelectorAll("a[href='https://www.freecodecamp.org/']");
console.log(link);

const ingredients = document.querySelectorAll("ul.ingredients li");
console.log(ingredients);
console.log(ingredients.length);
console.log(ingredients[0]);
console.log(ingredients[1]);
console.log(ingredients[2]);

for(let i = 0; i < ingredients.length; i++) {
    console.log(ingredients[i]);
}

const test = document.querySelectorAll("article");
console.log(test);

const profileAlter = document.querySelectorAll("#profile");
console.log(profileAlter);

profile.textContent = "Learning DOM - Day 2";
profile.style.color = "crimson";
profile.style.fontSize = "1.5rem";
profile.style.background = "papayawhip";
profile.style.padding = "1rem";

for(let i = 0; i < ingredients.length; i++) {
    ingredients[i].style.color = "purple";
}

const box = document.getElementById("box");
box.innerHTML = "<h1>Using Inner HTML</h1><ul><li>Cheese</li><li>Tomato</li></ul>";

const img = document.createElement("img");
img.src = "https://www.shutterstock.com/image-photo/delicious-homemade-lasagna-classic-italian-600w-2567855997.jpg";
img.alt = "A slice of lasagna on a plate.";
box.appendChild(img);
img.style.width = "20rem";







