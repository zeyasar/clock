const digiHour = document.querySelector('.hour');
const digiMinute = document.querySelector('.minute');
const digiSecond = document.querySelector('.second');
const meridiem = document.querySelector('.meridiem');
const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

console.log(digiHour.textContent);
function displayTime() {
    const date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    if (h == 0){
        h = 12;
    }else if(h > 12){
        h -= 12;
        meridiem.textContent = 'PM';
    }
    
    h = (h<10) ? '0'+ h : h;
    m = (m<10) ? '0'+ m : m;
    s = (s<10) ? '0'+ s : s;

    digiHour.textContent = h;
    digiMinute.textContent = m;
    digiSecond.textContent = s;

    const seconds = date.getSeconds();
    const secondsDegrees = seconds / 60 * 360 + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  
    const mins = date.getMinutes();
    const minsDegrees = mins / 60 * 360 + seconds / 60 * 6 + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = date.getHours();
    const hourDegrees = hour / 12 * 360 + mins / 60 * 30 + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}
displayTime();
setInterval(displayTime,1000);