// var btn = document.querySelector(".btn");
// btn.addEventListener("click", function (e) {
//   //   console.log(`ClientX: ${e.clientX}`);
//   //   console.log(`ClientY: ${e.clientY}`);
//   //   console.log(`offsetX: ${e.offsetX}`);
//   //   console.log(`offsetY: ${e.offsetY}`);
//   console.log(this);
//   console.log(e.target);
// });

// var items = document.querySelectorAll(".content ul li");
// items.forEach(function (item) {
//   item.addEventListener("click", function () {
//     this.style.color = `red`;
//   });
// });
// var btn = document.querySelector(".content .btn");
// var ul = document.querySelector(".content ul");
// btn.addEventListener("click", function () {
//   ul.innerHTML += `<li>Item 4</li>`;
//   items = document.querySelectorAll(".content ul li");
//   items.forEach(function (item) {
//     item.addEventListener("click", function () {
//       this.style.color = `red`;
//     });
//   });
// });

//Cách mới --> Dùng event target
var ul = document.querySelector(".content ul");
var btn = document.querySelector(".content .btn");
ul.addEventListener("click", function (e) {
  if (e.target.nodeName === "LI") {
    e.target.style.color = "red";
  }
});
btn.addEventListener("click", function () {
  ul.innerHTML += `<li>Item 4</li>`;
});
