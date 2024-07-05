let timer = document.querySelector(".timer");
let startingTime = 5;

let intervalFunction = setInterval(countDawn, 1000);
function countDawn(time) {
  let min = Math.floor(startingTime / 60);
  min = min < 10 ? "0" + min : min;
  let sec = startingTime % 60;
  sec = sec < 10 ? "0" + sec : sec;
  timer.textContent = `${min} : ${sec}`;

  startingTime > 0 ? --startingTime : clearInterval(intervalFunction);
  if (startingTime == 0)
    setTimeout(() => {
      timer.textContent = "TimeOut";
    }, 0);
}

countDawn(startingTime);
