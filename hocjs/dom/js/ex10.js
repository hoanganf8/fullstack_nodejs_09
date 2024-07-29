var carouselInner = document.querySelector(".carousel .carousel-inner");
var nextBtn = document.querySelector(".carousel .carousel-nav .next");
var prevBtn = document.querySelector(".carousel .carousel-nav .prev");

var carouselWidth = carouselInner.clientWidth;
var totalWidth = carouselWidth * carouselInner.children.length;
// console.log(carouselWidth, totalWidth);
var position = 0;
nextBtn.addEventListener("click", function () {
  if (Math.abs(position) + carouselWidth >= totalWidth) {
    return;
  }
  position -= carouselWidth;
  carouselInner.style.translate = `${position}px`;
});
prevBtn.addEventListener("click", function () {
  if (Math.abs(position) === 0) {
    return;
  }
  position += carouselWidth;
  carouselInner.style.translate = `${position}px`;
});
