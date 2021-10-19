//select elements
const secondArrow = document.querySelector('.sec-hand');
const minuteArrow = document.querySelector('.min-hand');
const hourArrow = document.querySelector('.hour-hand');


function setDate() {
    const time =  new Date();
    //SECONDS
    const seconds = time.getSeconds();
    //convert seconds to degrees for arrow rotation
    //adding 90 because in css style we put transform 90, so to put right position of arrow
    //to check, try to run console seconds and arrow without 90deg. Will be not matched
    const secondsDegrees = ((seconds / 60) *  360) + 90;
    //connecting rotation of arrow with seconds values
    secondArrow.style.transform = `rotate(${secondsDegrees}deg)`;
    console.log(seconds);


    //MINUTES
    const minutes = time.getMinutes();
    const minutesDegrees = ((minutes / 60) *  360) + 90;
    minuteArrow.style.transform = `rotate(${minutesDegrees}deg)`;


    //HOURS
    const hours = time.getHours();
    const hoursDegrees = ((hours / 12) *  360) + 90;
    hourArrow.style.transform = `rotate(${hoursDegrees}deg)`;
}
setInterval(setDate, 1000);