const colorbtn = document.querySelector(".colorbtn");
const bodybg = document.querySelector("body");

const colors = [
  "yellow",
  "red",
  "green",
  "blue",
  "#3b5998",
  "purple",
  "orange",
  "cyan",
  "magenta",
  "brown",
  "pink",
  "teal",
  "navy",
  "violet",
  "gold",
  "silver",
  "crimson",
  "indigo",
  "lime",
  "salmon",
  "aquamarine",
  "peru",
  "plum",
  "tomato",
  "olive",
  "chocolate",
  "seagreen",
  "slateblue",
];

colorbtn.addEventListener("click", changeColor);

function changeColor() {
  let random = Math.floor(Math.random() * colors.length);
  bodybg.style.backgroundColor = colors[random];
}
