var items = document.querySelectorAll(".menu a");
items.forEach(function (itemEl) {
  var subMenu = itemEl.nextElementSibling;
  if (subMenu) {
    itemEl.parentElement.classList.add("has-children");
  }
  itemEl.addEventListener("click", function (e) {
    e.preventDefault();
    if (subMenu) {
      var menuActive = document.querySelector(".menu li.active");
      this.parentElement.classList.toggle("active");
      if (menuActive) {
        menuActive.classList.remove("active");
      }
    }
  });
});
