//DOM CSS
// var h1 = document.querySelector("h1");
// h1.style.color = `red`;
// h1.style.backgroundColor = `yellow`;
// h1.style.height = `300px`;
// var css = {
//   color: `red`,
//   backgroundColor: `yellow`,
//   backgroundImage: `url("https://picsum.photos/536/354")`,
//   transform: `translateX(200px)`,
//   height: `300px`,
// };
// Object.assign(h1.style, css);

// h1.style.color = null;

//Bài tập: Thêm 2 thuộc tính sau
// background-image --> Tự thiết lập 1 ảnh bất kỳ
// transform: translateX(200px)

var boxEl = document.querySelector(".box");
var fadeInBtn = document.querySelector(".fadein-btn");
var fadeOutBtn = document.querySelector(".fadeout-btn");
fadeOutBtn.addEventListener("click", function () {
  boxEl.style.transition = `opacity 1s ease`;
  boxEl.style.opacity = 0;
  setTimeout(function () {
    boxEl.style.display = `none`;
  }, 1000);
});
fadeInBtn.addEventListener("click", function () {
  boxEl.style.transition = `opacity 1s ease`;
  boxEl.style.display = null;
  boxEl.style.opacity = 0;
  setTimeout(function () {
    boxEl.style.opacity = 1;
  }, 500);
});
