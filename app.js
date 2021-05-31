// declairing variables 
const days = document.querySelector('#days'),
    hours = document.querySelector('#hours'),
    minutes = document.querySelector('#minutes'),
    seconds = document.querySelector('#seconds'),
    countdown = document.querySelector('#countdown'),
    year = document.querySelector('#year');


// getting the full current year
const currentYear = new Date().getFullYear();

// setting timer 
const doomsDay = new Date ('01/01/2028 00:00:00');


//update countdown time
function updateCountdown(){
    const currentTime = new Date();
    const diff = doomsDay-currentTime;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24),
    h = Math.floor(diff / 1000 / 60 /60 ) % 24,
    m = Math.floor(diff / 1000 / 60) % 60,
    s = Math.floor(diff / 1000) % 60;

    // adding values to the DOM 
    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;
}

// Run every second
setInterval(updateCountdown, 1000);