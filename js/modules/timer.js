export const timer = () => {
  const timers = document.querySelectorAll(".timer__block");
  let timerId;

  function timerHandler() {
    const date = new Date();
    const newDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate() + 1
    );
    const dateTime = date.getTime();
    const newDateTime = newDate.getTime();
    const diff = newDateTime - dateTime;

    let newSec = Math.floor((diff / 1000) % 60);
    let newMin = Math.floor((diff / 1000 / 60) % 60);
    let newHour = Math.floor((diff / 1000 / 60 / 60) % 60);

    let hour = newHour < 10 ? "0" + newHour : newHour;
    let min = newMin < 10 ? "0" + newMin : newMin;
    let sec = newSec < 10 ? "0" + newSec : newSec;

    timers[1].firstElementChild.innerHTML = hour;
    timers[2].firstElementChild.innerHTML = min;
    timers[3].firstElementChild.innerHTML = sec;
  }

  timerId = setInterval(timerHandler, 500);
  if (window.innerWidth <= 500) {
    clearInterval(timerId);
  }
};
