var el = document.querySelector("[x-data]");
if (el) {
  var dataValue = el.getAttribute("x-data");
  if (dataValue) {
    var func = new Function(`return ${dataValue}`);
    var data = func();
    var render = function () {
      for (var key in data) {
        var outputEl = document.querySelector(`[x-text="${key}"]`);
        if (outputEl) {
          outputEl.innerText = data[key];
        }
      }
    };
    render();
    var eventEl = document.querySelector(`[click]`);
    if (eventEl) {
      var eventValue = eventEl.getAttribute("click");
      eventEl.addEventListener("click", function () {
        var func = new Function(`data.` + eventValue);
        func();
        render();
      });
    }
  }
}

// var str = "console.log('Ahihi')";
// var func = new Function(str);
// func.call();
// func();
