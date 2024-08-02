var progressBar = document.querySelector(".progress-bar");
var progress = progressBar.querySelector(".progress");
var progressSpan = progress.querySelector("span");
var progressBarWidth = progressBar.clientWidth;
progressBar.addEventListener("mousedown", function (e) {
  if (e.which === 1) {
    var offsetX = e.offsetX;
    var rate = (offsetX / progressBarWidth) * 100;
    progress.style.width = `${rate}%`;
    clientXSpan = e.clientX;
    offsetLeft = offsetX;
    document.addEventListener("mousemove", handleDrag);
  }
});
progressSpan.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  if (e.which === 1) {
    document.addEventListener("mousemove", handleDrag);
    clientXSpan = e.clientX;
    offsetLeft = e.target.offsetLeft;
  }
});
document.addEventListener("mouseup", function () {
  document.removeEventListener("mousemove", handleDrag);
});
var clientXSpan = 0;
var offsetLeft = 0;
function handleDrag(e) {
  var spaceMove = e.clientX - clientXSpan + offsetLeft;
  var rate = (spaceMove / progressBarWidth) * 100;
  if (rate < 0) {
    rate = 0;
  }
  if (rate > 100) {
    rate = 100;
  }
  progress.style.width = `${rate}%`;
}

//Xây dựng player
var audio = document.querySelector("audio");
var playAction = document.querySelector(".player .play-action i");
var currentTimeEl = progressBar.previousElementSibling;
var durationEl = progressBar.nextElementSibling;
var getTimeFormat = function (seconds) {
  var mins = Math.floor(seconds / 60);
  seconds = Math.floor(seconds - mins * 60);
  return `${mins < 10 ? "0" + mins : mins}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
};
audio.addEventListener("canplay", function () {
  durationEl.innerText = getTimeFormat(audio.duration);
});
playAction.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});
audio.addEventListener("play", function () {
  playAction.classList.replace("fa-play", "fa-pause");
});
audio.addEventListener("pause", function () {
  playAction.classList.replace("fa-pause", "fa-play");
});
audio.addEventListener("timeupdate", function () {
  currentTimeEl.innerText = getTimeFormat(audio.currentTime);
  var rate = (audio.currentTime / audio.duration) * 100;
  progress.style.width = `${rate}%`;
});

//DOM Nodes
