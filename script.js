let loader = document.querySelector(".loader");
let progress = document.querySelector(".progress");
 let progressStart = 0,
  interval = 0,
  isPaused = false;

const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");

pauseBtn.disabled = true;

function startLoading() {
  isPaused = false;
  startBtn.disabled = true;
  pauseBtn.disabled = false;
  interval = setInterval(() => {
    if (!isPaused) {
      progressStart++;
      progress.textContent = `${progressStart}%`;
      loader.style.background = `conic-gradient(rgb(135, 31, 215) ${
        progressStart * 3.6
      }deg , rgb(128, 128, 128 , 0.1) 0deg)`;
      if (progressStart == 100) {
        progressStart = 0;
        clearInterval(interval);
        setTimeout(() => {
          progress.textContent = "0%";
          loader.style.background = `conic-gradient(rgb(135, 31, 215) 0deg , rgb(128, 128, 128 , 0.1) 0deg)`;
          startBtn.disabled = false;
          pauseBtn.disabled = true;
        }, 100);
      }
    }
  }, 100);
}

function pauseLoading() {
  startBtn.disabled = false;
  pauseBtn.disabled = true;
  isPaused = true;
  clearInterval(interval);
}

startBtn.addEventListener("click", startLoading);
pauseBtn.addEventListener("click", pauseLoading);
