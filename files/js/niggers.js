// code by qwkrtezzz (https://github.com/nubovik01)
// file created at 6 December 2025 03:11:01 PM (UTC+3)
console.log("[*] niggers.js loaded.");

const secretCode = [
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "ArrowUp"
];

let enteredKeys = [];

document.addEventListener("keydown", (event) => {
  enteredKeys.push(event.key);

  if (enteredKeys.length > secretCode.length) {
    enteredKeys.shift();
  };

  if (secretCode.every((key, index) => key === enteredKeys[index])) {
    document.querySelectorAll("img").forEach(img => {
      img.style.cssText = `
        transition: .4s ease;
        filter: invert(1) hue-rotate(180deg);
      `;
    });

    document.getElementById("stupid-nigga").play(); // sound
  };
});