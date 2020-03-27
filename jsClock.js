// var audio = new Audio('sound/ocean-wave.mp3');
// audio.play();

// var audio= document.querySelector("#audio");
// document.body.addEventListener("mousemove", function () {
//     audio.play()
// });

setInterval(clock, 1000);

function clock() {
    let hour = document.querySelector(".hour");
    let minute = document.querySelector(".minute");
    let second = document.querySelector(".second");

    let current = new Date();
    let seconds = current.getSeconds() /60;
    let minutes = (seconds + current.getMinutes()) /60;
    let hours = (minutes + current.getHours()) /12;

    rotate(second,seconds);
    rotate(minute,minutes);
    rotate(hour,hours)
}
function rotate(elem,rot) {
    elem.style.setProperty("--rotat", rot *360)
}