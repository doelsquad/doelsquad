// code by  (https://github.com/1428Stef)
// file created at 6 December 2025 11:41:09 AM (UTC+3)
console.log("[*] hoverSound.js loaded.")
var sound = document.getElementById('hoverSound');

document.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('mouseenter', function() {
        sound.currentTime = 0; 
        sound.play();
    });
});

