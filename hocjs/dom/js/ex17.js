var slider1 = document.querySelector(".slider-1");
//Tạo sự kiện có tên là finish với logic khi nào user kéo được 100
//Sự kiện finish được gán vào input range có class là slider-1
//Có 3 yếu tố:
// - Tên sự kiện
// - Logic
// - Element
// var finishEvent = new Event("finish");
// finishEvent.msg = "Học JS không khó";
// slider1.addEventListener("mousedown", function (e) {
//   var rate = Math.round((e.offsetX * 100) / this.clientWidth);
//   finishEvent.initialRate = rate;
// });
// slider1.addEventListener("input", function () {
//   var value = this.value;
//   if (+value === 100) {
//     slider1.dispatchEvent(finishEvent);
//   }
// });

//Lắng nghe
slider1.addEventListener("finish", function (e) {
  console.log("Logic 1");
});

var slider2 = document.querySelector(".slider-2");
slider2.addEventListener("finish", function () {
  console.log("Logic 2");
});

// requestAnimationFrame(function (timestamp) {
//   console.log(timestamp);
// });
slider1.addEventListener("dragFast", function () {
  console.log("Nhanh quá");
});
