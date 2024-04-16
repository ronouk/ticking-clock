//using degree of rotation

let hr = document.getElementById("hourhand");
let min = document.getElementById("minutehand");
let sec = document.getElementById("secondhand");

function displayTime(){
    let date = new Date();
    let ss = date.getSeconds();
    let mm = date.getMinutes();
    let hh = date.getHours();

    let sRotation = ss*(360/60);
    let mRotation = 6*mm + ss*(6/60);
    let hRotation = 30*hh + mm*(30/60);

    sec.style.transform = `rotate(${sRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    hr.style.transform = `rotate(${hRotation}deg)`;

}

setInterval(displayTime, 1000);

displayTime()
