let showTime = document.querySelector(".container")
let clock = () => {
let curTime = new Date ()
let localtime = curTime.toLocaleTimeString();
showTime.textContent = localtime;
}
clock();

setInterval(clock, 1000)
