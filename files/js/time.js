// code by (https://github.com/1428Stef)
// file created at 10 December 2025 3:27:40 PM (UTC+3)
console.log("[*] time.js loaded.");

const MoscowTimeFormatter = new Intl.DateTimeFormat('ru-RU', {
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  hour12: false,
  timeZone: 'Europe/Moscow',
});

function updateMoscowTime() {
  const now = new Date();
  const formattedTime = MoscowTimeFormatter.format(now);
  const timeElement = document.getElementById('time');
  if (timeElement) {
    timeElement.textContent = formattedTime;
  }
}

setInterval(updateMoscowTime, 1000);

updateMoscowTime();
