//Sroll Event
//window.scrollY ==> Lấy vị trí scroll theo trục Y
//window.scrollX ==> Lấy vị trí scroll theo trục X
/*
window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
}) ==> Chuyển thanh cuộn tới vị trí đã thiết lập
*/
// var lastY = 0;
// window.addEventListener("scroll", function () {
//   if (window.scrollY > lastY) {
//     document.body.style.background = `red`;
//   } else {
//     document.body.style.background = null;
//   }
//   lastY = window.scrollY;
// });

// var btn = document.querySelector(".btn");
// btn.addEventListener("click", function () {
//   window.scroll({
//     top: 500,
//     behavior: "smooth",
//   });
// });

var topBtn = document.querySelector(".top-btn");
window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    topBtn.classList.add("show");
  } else {
    topBtn.classList.remove("show");
  }
});
topBtn.addEventListener("click", function () {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});
