// var form = document.querySelector("form");
// var todoList = document.querySelector(".todo-list");
// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   var inputEl = this.querySelector("input");
//   var value = inputEl.value;
//   if (value) {
//     var p = document.createElement("p");
//     p.innerText = value;
//     todoList.append(p);
//     inputEl.value = "";
//   }
// });

//DOMContentLoaded --> Khi cây DOM được tải
//load
// document.addEventListener("DOMContentLoaded", function () {
//   var img = document.querySelector("img");
//   console.log(img.width);
// });
// window.addEventListener("load", function () {
//   var img = document.querySelector("img");
//   console.log(img.width);
// });

window.addEventListener("load", function () {
  var loading = document.querySelector(".loading");
  loading.style.opacity = 0;
  loading.style.visibility = "hidden";
  setTimeout(() => {
    loading.style.display = "none";
  }, 400);
});

//Buổi sau: scroll
//IntersectionObserver
