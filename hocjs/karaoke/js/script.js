console.log(lyric);
//Tạo element
var audio = document.querySelector("audio");
var karaokeInner = document.querySelector(".karaoke-inner");
var requestId;
audio.addEventListener("play", function () {
  requestId = window.requestAnimationFrame(handleKaraoke);
});
audio.addEventListener("pause", function () {
  window.cancelAnimationFrame(requestId);
});
var lastIndex;
function handleKaraoke() {
  var currentTime = audio.currentTime * 1000;
  renderLyric(currentTime);
  renderKaraoke(currentTime);
  requestId = window.requestAnimationFrame(handleKaraoke);
}

//Hiển thị lời bài hát lên màn hình
function renderLyric(currentTime) {
  var index = lyric.findIndex(function (sentenceEl) {
    var sentenceArr = sentenceEl.words;
    var firstWord = sentenceArr[0];
    var lastWord = sentenceArr[sentenceArr.length - 1];
    return (
      currentTime >= firstWord.startTime && currentTime <= lastWord.endTime
    );
  });
  if (index !== -1 && index !== lastIndex) {
    //Nếu index = 0 ==> Hiển thị 2 câu đầu tiên
    if (index === 0) {
      karaokeInner.innerHTML = `
            <p>${getSentence(0)}</p>
            <p>${getSentence(1)}</p>
            `;
    } else {
      if (index % 2 !== 0) {
        //Ẩn hàng đầu tiên ==> Hiển thị câu tiếp theo
        nextSentence(karaokeInner.children[0], getSentence(index + 1));
      } else {
        //Ẩn hàng thứ hai ==> Hiển thị câu tiếp theo
        nextSentence(karaokeInner.children[1], getSentence(index + 1));
      }
    }

    lastIndex = index;
  }
}

//Xử lý tô màu từng từ khi hát karaoke
function renderKaraoke(currentTime) {
  var wordList = karaokeInner.querySelectorAll(".word");
  wordList.forEach(function (wordEl) {
    var startTime = wordEl.dataset.startTime;
    var endTime = wordEl.dataset.endTime;
    if (currentTime >= startTime && currentTime <= endTime) {
      var rate = ((currentTime - startTime) / (endTime - startTime)) * 100;
      wordEl.children[0].style.width = `${rate}%`;
    }
    if (currentTime > endTime) {
      wordEl.children[0].style.width = `100%`;
    }
  });
}

function getSentence(index) {
  return lyric[index].words
    .map(function (wordEl) {
      return `<span class="word" data-start-time="${wordEl.startTime}" data-end-time="${wordEl.endTime}">${wordEl.data}<span>${wordEl.data}</span></span>`;
    })
    .join(" ");
}

function nextSentence(element, sentence) {
  element.style.transition = `opacity 0.6s ease-in-out`;
  element.style.opacity = 0;
  setTimeout(function () {
    element.innerHTML = sentence;
    element.style.opacity = 1;
  }, 600);
}
