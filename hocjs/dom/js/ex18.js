//Trigger Event
// var btn = document.querySelector(".btn");
// var colorList = ["red", "green", "yellow", "blueviolet"];
// var index = 0;
// btn.addEventListener("click", function () {
//   var color = colorList[index];
//   index++;
//   if (index === colorList.length) {
//     index = 0;
//   }
//   document.body.style.background = color;
// });

// setInterval(function () {
//   btn.click();
// }, 1000);

var quantityEl = document.querySelector(".quantity");
var inputEl = quantityEl.querySelector("input");
var minusBtn = quantityEl.querySelector(".minus-btn");
var plusBtn = quantityEl.querySelector(".plus-btn");
HTMLElement.prototype.change = function () {
  var changeEvent = new Event("change");
  this.dispatchEvent(changeEvent);
};

inputEl.addEventListener("change", function () {
  var quantity = this.value;
  console.log(quantity);
});
plusBtn.addEventListener("click", function () {
  inputEl.value++;
  inputEl.change();
});
minusBtn.addEventListener("click", function () {
  if (inputEl.value > 1) {
    inputEl.value--;
  }
  inputEl.change();
});
