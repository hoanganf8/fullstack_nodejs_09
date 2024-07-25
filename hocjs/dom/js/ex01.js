/*
DOM = Document Object Model
Mô hình hóa tài liệu HTML thành các object để dễ dàng thao tác, chỉnh sửa HTML
==> Sử dụng các object để thay đổi HTML ==> Giao diện sẽ thay đổi

Các loại DOM
- DOM Document
- DOM Element
- DOM HTML
- DOM CSS
- DOM Event
- DOM Event Listener
- DOM Node, NodeList
- DOM Navigation
- Bổ sung: Web Component, Custom Element, Shadow DOM
*/

//DOM Element ==> Thao tác dựa vào các thẻ html có sẵn để trả về object (Element Node)

//1. document.getElementById(id)
// ==> Chỉ trả về 1 phần tử đầu tiên

//2. document.getElementsByClassName(ten_class)
// ==> Trả về 1 danh sách các element thỏa mãn điều kiện

//3. document.getElementsByTagName(ten_the)
// ==> Trả về 1 danh sách các element thỏa mãn điều kiện

//4. document.querySelector(selector)
// ==> Dựa vào selector của css để chọn và trả về 1 phần tử đầu tiên

//5. document.querySelectorAll(selector)
// ==> Dựa vào selector của css để chọn và trả về 1 danh sách chứa các phần tử thỏa mãn

// var titleList = document.querySelectorAll(".title");
// console.log(titleList);

// var boxList = document.getElementsByClassName("box");
// var boxEl = boxList[0];
// var titleList = boxEl.getElementsByClassName("title");
// var titleEl = titleList[0];
// console.log(titleEl);

// var titleEl = document.querySelector(".box > .title");
// console.log(titleEl);

//Trường hợp đặc biệt
// console.log(document.head);
// console.log(document.body);
// console.log(document.title);
// document.title = "F8 - Học lập trình để đi làm";
console.log(document.login_form.email);
// document.login_form.email.value = "hoangan.web@gmail.com";
document.login_form.email.placeholder = "Địa chỉ email...";

//DOM Event, DOM HTML
