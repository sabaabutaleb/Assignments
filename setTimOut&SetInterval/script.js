let myTimer = document.querySelector(".timer");

function startLogoutTimer(time) {
  const timer = setInterval(() => {
    let minutes = parseInt(time / 60, 10);
    let seconds = parseInt(time % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    myTimer.textContent = minutes + ":" + seconds;
    
    if (--time < 0) {
      clearInterval(timer);
      setTimeout(()=>{
        return myTimer.textContent=`You logged out`;
      },0);
    }
  }, 1000);
}


startLogoutTimer(5);
