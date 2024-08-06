var root = document.querySelector("#root");
var h1 = document.createElement("h1");
h1.innerText = `Count: `;
// var span = document.createElement("span");
// span.innerText = 0;
var textNode = document.createTextNode(0);
h1.append(textNode);
var btn = document.createElement("button");
btn.innerText = `+`;
btn.addEventListener("click", function () {
  //   span.innerText++;
  //   console.dir(textNode);
  textNode.data++;
  comment.data = "Vừa tăng";
});
root.append(h1);
root.append(btn);

//Comment Node
var comment = document.createComment("Counter App");
root.append(comment);
