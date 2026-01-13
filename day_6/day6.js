const hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const title = document.querySelector(".nav__title");

function getRandomNum () {
   return Math.floor(Math.random() * hex.length); 
}

function generateColor () {
   let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNum()];
    } 
    return hexColor;
}

let oldColor;

btn.addEventListener("click", () => {

let newColor = generateColor();

do {
    newColor = generateColor();
} while(oldColor === newColor);

document.body.style.backgroundColor = newColor;
color.textContent = newColor;
title.style.color = newColor;
oldColor = newColor;
});