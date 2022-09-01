let circleProgress = document.querySelector('.circle-progress'),
  progress = document.querySelector('.progress'),
  progressValue = document.querySelector('.progress-value'),
  progressAnimate = document.querySelector('#animate'),
  progressHide = document.querySelector('#hide');

let statusA = false;
let statusH = false;
let progressStartValue = 0;
let progressEndValue = progressValue.value;
let speed = 20;

const counter = () => {
    progressStartValue = 0;
    if (progressEndValue < 0 || progressEndValue > 100) {
      return false;
    }
    let progress = setInterval(() => {
      progressStartValue++;
      if (progressEndValue == 0) {
        progressStartValue = 0;
      }
      progressValue.value = `${progressEndValue}`;

      circleProgress.style.background = `conic-gradient(#4a95d6 ${
        progressStartValue * 3.6
      }deg, #ededed 0deg)`;

      if (progressStartValue == progressEndValue) {
        clearInterval(progress);
      }
    }, speed);
};
counter();

progressValue.addEventListener('change', changeValue);
progressAnimate.addEventListener('change', changeAnimate);
progressHide.addEventListener('change', changeHide);

function changeValue(e) {
  progressEndValue = e.target.value;
  if (e.target.value < 0 || e.target.value > 100) {
    return false;
  }
  counter();
}

function changeAnimate() {
  statusA = !statusA;
  if (statusA) {
    circleProgress.style.animation = 'spin 4s linear infinite';
  }else{
    circleProgress.style.animation = undefined;
  }
}
function changeHide(e) {
  statusH = !statusH;
  if (statusH) {
    progress.style.display = 'none';
    progressAnimate.disabled = true;
    progressAnimate.checked = false;
  } else {
    progress.style.display = 'block';
    progressAnimate.disabled = false;
  }
}
