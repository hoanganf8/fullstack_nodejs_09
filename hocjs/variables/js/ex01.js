//Comment 1 dòng
/*
Comment nhiều dòng
Comment nhiều dòng
Comment nhiều dòng
*/
//Khai báo biến
// var tenbien1, tenbien2, tenbien3
// var tenbien1=giatri1, tenbien2=giatri2, tenbien3=giatri3
// Lưu ý: Dùng cú pháp camelCase
// Cho phép: chữ thường, hoa, số, gạch dưới, $ (Không được bắt đầu bằng số)
var username, userEmail, userId;
var customer = "Hoàng An",
  course = "Fullstack";

//Hiển thị ở tab console
// console.log(customer);
// console.log(course);
// console.log(username);

//Hiển thị lên giao diện trình duyệt
// document.write(customer);
// document.body.innerHTML = course; //DOM (Học sau)
var company = "F8";
// var welcome = "<h1>Chào mừng bạn đến với " + company + "</h1>"; //parse
// welcome = welcome + "<h2>Hoàng An F8</h2>";
var welcome = `<h1>Chào mừng bạn đến với ${company}</h1>
<h2>Hoàng An F8</h2>`;
// ` ==> backtick
document.write(welcome);

var a = 10;
var b = 20;
var result = `<h2>Kết quả phép tính ${a} + ${b} = ${a + b}</h2>`;
document.write(result);

//Học sau: let, const
