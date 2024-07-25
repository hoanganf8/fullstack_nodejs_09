//Number: Kiểu dữ liệu nguyên thủy dùng để xử lý số
//Hàm tạo của number là Number
console.dir(Number);

// var a = 1000 ** 1000;
// var b = 2000 ** 2000;
// console.log(a);
// console.log(b);
// console.log(a === b);

// var a = 10;
// console.log(typeof a);
// console.log(a.constructor.name === "Number");

//Ép kiểu (Cast)
// var a = "10.5a123";
// a = Number(a);
// a = +a;
// a = parseInt(a);
// a = parseFloat(a);
// console.log(a, typeof a);
//Lưu ý: Khi ở trong biểu thức có các toán tử số học ==> JS tự động ép về kiểu số (Trừ toán tử +)
// var a = "10";
// var b = 20;
// console.log(a * b);

//Số NaN ==> Ép kiểu thất bại
// var a = "10a";
// a = +a;
// console.log(a);
// var a = "10a" * 2;

// if (Number.isNaN(a)) {
//   console.log("Là số NaN");
// } else {
//   console.log("Không phải số NaN");
// }

//Số Infinity
// var a = -(1000 ** 1000);
// if (a !== Infinity && a !== -Infinity) {
//   console.log(a);
// } else {
//   console.log("Vượt quá giới hạn");
// }

//Kiểm tra số nguyên
// var a = "10";
// if (Number.isInteger(a)) {
//   console.log("Là số nguyên");
// }

//Kiểm tra số thực
// var a = 10.5;
// if (a === parseFloat(a)) {
//   console.log("Số thực");
// }

// var a = 12345.678;
//Lấy 2 chữ số phần thập phân và làm tròn (Theo toán học)
// a = a.toFixed(0);
// a = a.toPrecision(6);
// console.log(a, typeof a);

//toFixed, toPrecision ==> Trả về chuỗi

var price = 12345000000.567;
price = price.toLocaleString("zh-Hans-CN-u-nu-hanidec");
console.log(price);

var numbers = [
  5,
  "10",
  null,
  2,
  undefined,
  [],
  NaN,
  Infinity,
  8,
  -Infinity,
  {},
  [1],
  7,
  true,
  12,
  false,
];
//Tính tổng các số lẻ (Chỉ tính số và chuỗi số)
var result = numbers.reduce(function (total, number) {
  var numberCast = parseFloat(number);
  if (
    !isNaN(numberCast) &&
    !Array.isArray(number) &&
    Math.abs(numberCast) !== Infinity &&
    numberCast % 2 !== 0
  ) {
    return total + numberCast;
  }
  return total;
}, 0);
console.log(result);
