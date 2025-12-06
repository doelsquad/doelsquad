// code by qwkrtezzz (https://github.com/nubovik01)
// file created at 5 December 2025 11:09:02 PM (UTC+3)
console.log("[*] 1428.js loaded.");

document.addEventListener("DOMContentLoaded", () => {
  const element = document.getElementById("1428stef");

  let forwardInterval, backwardInterval;
  let base = +element.dataset.base;
  let add = +element.dataset.add;
  let target = +element.dataset.target;

  element.addEventListener("mouseenter", () => {
    clearInterval(backwardInterval);

    let [_base, _add] = [base, add];

    forwardInterval = setInterval(() => {
      if (_base >= target) {
        element.textContent = target;
        return clearInterval(forwardInterval);
      };

      element.textContent = `${_base}+${_add}`;
      _base++, _add--;
    }, 15);
  });

  element.addEventListener("mouseleave", () => {
    clearInterval(forwardInterval);

    let text = element.textContent;
    let [_base, _add] = text.includes("+")
      ? text.split("+").map(Number)
      : [+text, add + (base - +text)];

    backwardInterval = setInterval(() => {
      if (_base <= base) {
        element.textContent = base;
        return clearInterval(backwardInterval);
      };

      element.textContent = `${_base}-${_add}`;
      _base--, _add++;
    }, 15);
  });
});