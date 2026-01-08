const container = document.getElementById("container");
console.log(container.innerText); // Inner text represents visible text content of HTML
container.innerText = "JavaScript is awesome!";
console.log(container.textContent);

// How to add / remove nodes from DOM with appendChild() and removeChild().
const dessertList = document.getElementById("desserts");
const listItem = document.createElement("li");
dessertList.appendChild(listItem);
listItem.textContent = "Cookies";
const listItem2 = document.createElement("li");
dessertList.appendChild(listItem2);
listItem2.textContent = "Muffins";

const sectionEl = document.getElementById("example-section");
const lastPara = document.querySelector("#example-section p:last-of-type");
sectionEl.removeChild(lastPara);

// How do the navigator, Window, and Document work? 

console.log(navigator.userAgent);
console.log(navigator.language);
console.log(window.innerWidth);
console.log(window.location); //One can access location without using window interface
console.log(location);

console.log(document.children);

// How do you Add Attribute with setAttribute()? 
const para = document.getElementById("para");
para.setAttribute("class", "my-class");

console.log(`${para.outerHTML}`);

const divEl = document.querySelector(".my-class");
divEl.setAttribute("class", "example");

console.log(`${divEl.outerHTML}`);

// How does addEventListener Method work? 
const btn = document.getElementById("btn");
btn.addEventListener("click", () => alert("You clicked the button"));

const input = document.getElementById("input");
input.addEventListener("input", () => {
    console.log(input.value);
})

const bodyEl = document.querySelector("body");
const butn = document.getElementById("butn");

let isBgColorPurple = true;
function toggleBgColor() {
    bodyEl.style.backgroundColor = isBgColorPurple ? "pink" : "purple";
    isBgColorPurple = !isBgColorPurple;
}

butn.addEventListener("click", toggleBgColor);
const para2 = document.getElementById("para2");

para2.addEventListener("mouseover", () => {
    butn.removeEventListener("click", toggleBgColor);
});

// Using Element.style and Element.classList?

const para3El = document.getElementById("para3");
para3El.style.color = "red";

para3El.classList.add("highlight");

para3El.classList.remove("highlight");

const menu = document.getElementById("menu");
const toggleBtn = document.getElementById("toggle-btn");

toggleBtn.addEventListener("click", () => menu.classList.toggle("show"));

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM is loaded");
})

function changeImg () {
    const img = document.getElementById("example-img");
    img.src = "https://cdn.freecodecamp.org/curriculum/responsive-web-design-principles/FCCStickers-CamperBot200x200.jpg";
  img.alt = "CamperBot sticker";
  console.log("image was just changed");
}

changeImg();

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", changeImg);
} else {
  console.log("DOMContentLoaded has already fired");
  changeImg();
}

// How do the setTimeout and setInterval Methods Work? 

setTimeout(function () {
  console.log("This runs after 3 seconds");
}, 3000);

setTimeout( () => {
  console.log("This runs after 3 seconds");
}, 3000);

setInterval( () => {
  console.log("This runs every 2 seconds");
}, 2000);

const intervalID = setInterval( () => {
  console.log("This will stop after 5 seconds");
}, 1000);
setTimeout( () => {
  clearInterval(intervalID);
}, 5000);

let timeoutID = setTimeout( () => {
  console.log("This will not run");
}, 5000);

clearTimeout(timeoutID);

let timeOutId = setTimeout( () => {
  console.log("This will run if not canceled")
}, 5000);

document.querySelector("#cancelButton").addEventListener("click", () => {
  clearTimeout(timeOutId);
  console.log("Timeout Canceled");
})

const rect = document.getElementById("rect");
let postion = 0;

function update() {
  rect.style.left = postion + "px";
  postion += 2;


if(postion > window.innerWidth) {
  postion = -rect.offsetWidth;
}
}

function animate() {
  update();
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);