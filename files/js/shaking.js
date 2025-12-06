// code by qwkrtezzz (https://github.com/nubovik01)
// file created at 6 December 2025 03:44:45 PM (UTC+3)
console.log("[*] shaking.js loaded.");

document.addEventListener("click", () => {
  document.body.classList.add("shake");

  setTimeout(() => {
    document.body.classList.remove("shake");
  }, 150);
});