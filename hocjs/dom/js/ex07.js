// var btn = document.querySelector(".btn");
// var offsetX = 0;
// var offsetY = 0;
// btn.addEventListener("mousedown", function (e) {
//   if (e.which === 1) {
//     document.addEventListener("mousemove", handleDrag);
//     btn.style.cursor = "all-scroll";
//     offsetX = e.offsetX;
//     offsetY = e.offsetY;
//   }
// });
// document.addEventListener("mouseup", function () {
//   document.removeEventListener("mousemove", handleDrag);
// });
// function handleDrag(e) {
//   //   btn.style.position = "absolute";
//   btn.style.top = `${e.clientY - offsetY}px`;
//   btn.style.left = `${e.clientX - offsetX}px`;
// }

//e.preventDefault() --> Ngăn hành động mặc định của thẻ html
var a = document.querySelector("a");
a.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(a.href);
});
var menu = document.querySelector(".menu");
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  menu.style.display = "block";
  menu.style.left = `${e.clientX}px`;
  menu.style.top = `${e.clientY}px`;
});
menu.addEventListener("click", function (e) {
  e.stopPropagation();
  console.log("click vào menu");
  if (e.target.nodeName === "LI") {
    e.target.style.color = "red";
  }
});
document.addEventListener("click", function () {
  menu.style.display = "none";
  console.log("Click vào document");
});
document.addEventListener("keyup", function (e) {
  if (e.key === "Escape") {
    menu.style.display = "none";
  }
});
