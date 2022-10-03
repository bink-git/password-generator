const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let passLeft = document.querySelector(".password-left");
let passRight = document.querySelector(".password-right");
let btn = document.querySelector(".btn");
let num = document.querySelector("input");
const numCheck = document.getElementById("numCheck");
const symCheck = document.getElementById("symCheck");
let setNum = false;
let setSym = false;

let input = document.querySelector("input");
const text = document.getElementById("text");
// const togg = document.querySelector(".toggle");
const circle = document.querySelector(".circle");

numCheck.addEventListener("click", () => {
  circle.classList.toggle("active");
  circle.classList.toggle("circle");
  if (circle.classList.contains("active")) {
    setNum = true;
    console.log("setnum");
  }
});

symCheck.addEventListener("click", (e) => {
  e.target.value = circle.classList.toggle("active");
  e.target.value = circle.classList.toggle("circle");
  if (circle.classList.contains("active")) {
    setSym = true;
    console.log("setsym", e);
  }
});

let lehgth;
input.addEventListener("input", (e) => {
  length = e.target.value;
});

function generate() {
  let pass1 = [];
  let pass2 = [];

  for (let i = 0; i < length; i++) {
    if (setNum) {
      pass1.push(
        characters.slice(54, 92)[
          Math.floor(Math.random() * characters.slice(54, 92).length)
        ]
      );
      pass2.push(
        characters.slice(54, 92)[
          Math.floor(Math.random() * characters.slice(54, 92).length)
        ]
      );
    } else {
      pass1.push(characters[Math.floor(Math.random() * characters.length)]);
      pass2.push(characters[Math.floor(Math.random() * characters.length)]);
    }
  }

  passLeft.textContent = pass1.join("");
  passRight.textContent = pass2.join("");
}

btn.addEventListener("click", generate);

passLeft.addEventListener("click", (e) => {
  const content = passLeft.textContent;
  navigator.clipboard.writeText(content);
});

passRight.addEventListener("click", (e) => {
  const content = passRight.textContent;
  navigator.clipboard.writeText(content);
});
