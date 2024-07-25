//Event: Hành động từ phía người dùng tác động lên các thẻ html
// - Các thẻ html có sẵn các event
// - Việc của lập trình viên ==> Lắng nghe các event đó để thực thi 1 công việc cụ thể
// - Định nghĩa các công việc bằng 1 hàm (Event Handler)
// - Trong Event Handler luôn có 1 tham số gọi là event object (Mô tả thông tin của event)
// var btnEl = document.querySelector(".btn");
// btnEl.onclick = function (e) {
//   console.log("Click me");
//   console.log(e);
// };
// btnEl.onmouseover = function () {
//   console.log("Di vào");
// };
// btnEl.onmouseout = function () {
//   console.log("Rời khỏi");
// };
// btnEl.onmousemove = function () {
//   console.log("Di chuyển");
// };
// var inputEl = document.querySelector("input");
// inputEl.onblur = function () {
//   console.log("Blur");
// };
// inputEl.onfocus = function () {
//   console.log("Focus");
// };
// inputEl.onchange = function () {
//   console.log("Change");
// };
// inputEl.onpaste = function () {
//   console.log("Bạn vừa dán");
// };
// var formEl = document.querySelector("form");
// formEl.onsubmit = function () {
//   console.log("ok chưa?");
//   var value = formEl.querySelector("input").value;
//   console.log(value);
//   return false;
// };

// document.onkeyup = function (e) {
//   //   console.log("Bạn vừa nhả phím gì đó");
//   //   console.log(e.key);
//   if (e.key === "Enter") {
//     document.body.style.background = `yellow`;
//   }

//   if (e.key === "Escape") {
//     document.body.style.background = null;
//   }
// };

// var h1El = document.querySelector("h1");
// h1El.onclick = function () {
//   console.log("Click me");
// };
// h1El.onclick = function () {
//   console.log("Click me 2");
// };

//Event Listener
// - addEventListener
// - removeEventListener
var btn2El = document.querySelector(".btn-2");
// btn2El.addEventListener("click", function () {
//   console.log("Click me 2");
// });
// btn2El.addEventListener("click", function () {
//   console.log("Ok chưa?");
// });
var count = 0;
var handleClick = function () {
  console.log(`Count: `, ++count);
  if (count === 5) {
    btn2El.removeEventListener("click", handleClick);
  }
};
btn2El.addEventListener("click", handleClick);
