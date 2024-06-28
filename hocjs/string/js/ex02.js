var content = `<h1>Học lập trình không khó tại F8. Học lập trình không khó tại F8. Học lập trình không khó tại F8. Học lập trình không khó tại F8<h1>`;
var keyword = "trình";
var position = content.toLowerCase().indexOf(keyword.toLowerCase());
var newContent = "";
while (position !== -1) {
  newContent +=
    content.slice(0, position) +
    `<span>${content.slice(position, position + keyword.length)}</span>`;
  //Cắt bỏ đã tìm được
  content = content.slice(position + keyword.length);
  //Tìm lại ở content mới
  position = content.toLowerCase().indexOf(keyword.toLowerCase());
}
newContent += content;
document.write(newContent);

//Gợi ý: Chia chuỗi cần xử lý thành 3 phần
//Phần 1: Từ đầu đến vị trí cần xử lý
//Phần 2: Vị trí cần xử lý
//Phần 3: Sau vị trí cần xử lý đến hết

//Ý tưởng triển khi lặp chữ
/*
Tìm và highlight từ khóa đầu tiên ==> Lưu kết quả tìm được vào 1 biến (Cắt từ đầu đến hết higlight)
Cắt bỏ đoạn đã tìm được và tiến hành tìm lại
*/

var fullname = "tạ     hoàng an"; //Tạ Hoàng An
fullname = fullname.charAt(0).toUpperCase() + fullname.slice(1);
for (var i = 1; i < fullname.length; i++) {
  var char = fullname.charAt(i);
  var charNext = fullname.charAt(i + 1);
  if (char === " " && charNext !== " ") {
    var index = i + 1;
    fullname =
      fullname.slice(0, index) +
      fullname.charAt(index).toUpperCase() +
      fullname.slice(index + 1);
  }
}
console.log(fullname);
