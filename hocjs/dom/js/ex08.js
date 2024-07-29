/*
Chọn các element cha, con, anh em
- parentElement --> Chọn thành phần cha gần nhất
- children --> Chọn tất cả thành phần cấp 1 (Trả về 1 danh sách)
- nextElementSibling --> Chọn thành phần kế tiếp (Bên phải)
- previousElementSibling --> Chọn thành phần phía trước (Bên trái)
- parentNode
- childNodes
- nextSibling
- previousSibling
- firstChild
- lastChild
- firstElementChild
- lastElementChild
*/
// var h2 = document.querySelector("h2");
// console.log(h2);
// console.log(h2.parentElement.parentElement.parentElement);
// var wrapperEl = document.querySelector(".wrapper");
// console.log(wrapperEl.children[0].children[0]);

// var firstEl = document.querySelector(".products h2");
// console.log(
//   firstEl.nextElementSibling.nextElementSibling.previousElementSibling
// );

// var products = document.querySelector(".products");
// console.log(products.children);
// console.log(products.childNodes);

var items = document.querySelectorAll("ul a");
items.forEach(function (itemEl) {
  if (itemEl.nextElementSibling) {
    itemEl.parentElement.classList.add("has-children");
  }
});
