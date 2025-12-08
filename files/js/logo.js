// code by  (https://github.com/1428Stef)
// file created at 8 December 2025 1:29:09 PM (UTC+3)
console.log("[*] logo.js loaded.")
const img = document.querySelector('.header-logo img');

img.addEventListener('mousemove', e => {
  const rect = img.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = ((y - centerY) / centerY) * 20;
  const rotateY = ((x - centerX) / centerX) * -20;

  img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

img.addEventListener('mouseleave', () => {
  img.style.transform = 'rotateX(0deg) rotateY(0deg)';
});
