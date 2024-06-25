//Kỹ thuật tách các đoạn chương trình con ==> Hàm
/*
Biến: Lưu trữ dữ liệu (Thể hiện dưới dạng danh từ)
Hàm: Đoạn chương trình (Thể hiện dưới dạng hành động, động từ)

Cú pháp: 
1. Định nghĩa hàm
function tenHam() {
    Nội dung hàm
}
function tenHam(thamso1, thamso2,...) {
    Nội dung hàm
}    
2. Gọi hàm
tenHam()
tenHam(doiso1, doiso2,...)    
*/

// function getTotal(a, b) {
//   var total = a + b;
//   console.log(total);
// }

// getTotal(10, 20);
// getTotal(15, 25);
// getTotal(30, 30);

// function showMessage(msg, type = "success") {
//   console.log(msg);
//   console.log(type);
// }
// showMessage("Học lập trình không khó", "error");

//Hàm có giá trị trả về (Return Function)
//Hàm không có giá trị trả về (Void Function)
//Lưu ý khi dùng return:
// ==> Khi đã gọi từ khóa return ==> Hàm sẽ bị thoát (Các đoạn chương trình phía dưới return không có tác dụng)
function getTotal(a, b) {
  var total = a + b;
  //   console.log(total);
  return total;
  console.log("Hello");
}
// console.log(`Kết quả là: ${getTotal(10, 20)}`);

function division(a, b) {
  if (b === 0) {
    return 0;
  }
  return a / b;
}
console.log(division(10, 0));

//Bài tập: Viết hàm kiểm tra số nguyên tố
//Nếu isShow = true ==> Hiển thị kết quả dạng console.log ngay trong hàm
//Nếu isShow = false ==> return về true / false và sẽ thực hiện hiển thị kết quả ngoài hàm
function showResult(number, isShow, status) {
  var msgSuccess = `${number} là số nguyên tố`;
  var msgError = `${number} không phải số nguyên tố`;
  if (!isShow) {
    return status;
  }
  console.log(status ? msgSuccess : msgError);
}
function isPrime(number, isShow = false) {
  if (number <= 1 || number % 1 !== 0) {
    return showResult(number, isShow, false);
  }
  for (var i = 2; i < number; i++) {
    if (number % i === 0) {
      return showResult(number, isShow, false);
    }
  }
  return showResult(number, isShow, true);
}
// console.log(isPrime(43, false));
// isPrime(43, true);

//Biến toàn cục, biến cục bộ
//Biến cục bộ ==> Chỉ được sử dụng trong phạm vi hàm
// var data = "Học JS không khó"; //Biến toàn cục
// function getMessage() {
//   return data;
// }
// function setMessage(value) {
//   data = value;
// }

// setMessage("JS");
// console.log(getMessage());

// Hàm ẩn danh (Anonymous Function)
// - Không có tên
// - Muốn chạy được phải gán nó vào 1 biến hoặc gọi trong hàm khác thông qua tham số

// console.log(something);
// var something = function getA() {
//   console.log("Xin chào anh em F8");
// };
// // ==> Expression Function
// something();
// getA();

// function getA() {
//   console.log("Xin chào anh em F8");
// }
// var something = getA;
// something();
// getA();

// var something = function () {
//   console.log("Xin chào anh em F8");
// };
// if (typeof something === "function") {
//   // console.log("something là function");
//   something();
// }

//arguments Keyword
// var getMax = function (a, b) {
//   console.log(a, b);
//   console.log(arguments);
// };
// getMax(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//rest parameters ==> Tham số còn lại
var getMax = function (a, b, ...args) {
  console.log(a, b);
  console.log(args);
};
getMax(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// console.log("A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10");
