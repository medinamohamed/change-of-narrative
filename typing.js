// Typing and Erasing text
const typing = document.querySelector(".typing");
const texts = ["society", "world", "narrative"];

let count = 0;
let index = 0;

let textsIndex = 0;

function type() {
  if (index < texts[textsIndex].length) {
    typing.textContent += texts[textsIndex].charAt(index);
    index++;
    setTimeout(type, 200);
  } else {
    setTimeout(erase, 350);
  }
}

function erase() {
  if (index > 0) {
    typing.textContent = texts[textsIndex].substring(0, index - 1);
    index--;
    setTimeout(erase, 100);
  } else {
    textsIndex++;
    if (textsIndex >= texts.length) textsIndex = 0;
    setTimeout(type, 420);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(type, 225);
});
