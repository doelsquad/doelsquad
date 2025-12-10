const now = new Date();
const formatter = new Intl.DateTimeFormat('ru-Ru', {
    hour: 'numeric', 
    hour12: false,
    timeZone: 'Europe/Moscow',
});

const hour = Number(formatter.format(now));

if (hour >= 6 && hour < 22) {
    document.body.style.cssText = `background-color: #FFF0F5`;

    let logo = document.getElementById('logo');
    logo.style.color = `#2C365A`;
    
    let logoIcon = document.getElementById('logo-icon');
    logoIcon.src ="./files/images/logo-day.png";
    logoIcon.style.width = '100px';
    logoIcon.style.height = '100px';
    console.log("day☀️")
} else {
    document.body.style.cssText = `background-color: #2b323f`;

    let logo = document.getElementById('logo');
    logo.style.color = `#FDFDF1`;
    console.log("night💤")
}