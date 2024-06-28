//IIFE
// function something() {
//   console.log("Hello");
// }
// something();

// (function (title) {
//   console.log("Hello", title);
// })("F8");

//Hàm con
// var b = 20;
// function display(c) {
//   var a = 10;
//   function showInfo() {
//     console.log("Hoàng An F8");
//     console.log(a);
//     console.log(b);
//     console.log(c);
//   }
//   showInfo();
// }
// display("F8");

//Hàm showInfo ==> Được gọi là hàm Closure
// ==> Hàm có khả năng truy cập tới các biến của phạm vi chứa nó
// ==> Chỉ gọi hàm trong phạm vi mà nó được khai báo

// var msg = "F8";
// function something() {
//   console.log("something");
// }

// window.something();
// console.log(window.msg);

//window là 1 object lớn nhất trong JS (Chạy trên trình duyệt), dùng để tạo ra mọi thứ trong JS

// function something1() {
//   var a = 10;
//   function something2() {
//     function something3() {
//       console.log("something3");
//       console.log(a);
//     }
//     something3();
//   }
//   something2();
// }
// something1();

var sum = function (a) {
  return function (b) {
    return a + b;
  };
};

var adder = sum(10);
var result1 = adder(10);
var result2 = adder(20);
// console.log(result1);
// console.log(result2);

var sum2 = function (a, b) {
  return a + b;
};

//Giải thuật đệ quy
// Kỹ thuật gọi lại chính hàm đang định nghĩa thể thực thi các bài toán lặp đi lặp lại
// Trong lập trình web, thường được dùng để giải quyết các bài toán đa cấp: menu đa cấp, chuyên mục đa cấp,...
// Lưu ý: Khi gọi lại hàm ==> Để ý điều kiện để chương trình dừng lại

/*
Ưu điểm: Dễ, nhàn cho lập trình viên
Nhược điểm: Chạy chậm
*/

function showNumber(number) {
  console.log(number);
  if (number > 1) {
    showNumber(number - 1);
  }
}
// showNumber(10);

//Tính giá trị = 1 + 2 + ... + 10
var getTotal = function (n) {
  if (n === 1) {
    return 1;
  }
  return n + getTotal(n - 1);
};

var result = getTotal(10);
console.log(result);

// 10 + getTotal(9)
// 10 + 9 + getTotal(8)
// 10 + 9 + 8 + getTotal(7)
// 10 + 9 + 8 + 7 + getTotal(6)
// 10 + 9 + 8 + 7 + 6 + getTotal(5)
// 10 + 9 + 8 + 7 + 6 + 5 + getTotal(4)
// 10 + 9 + 8 + 7 + 6 + 5 + 4 + getTotal(3)
// 10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + getTotal(2)
// 10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + getTotal(1)
// 10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1

function fibonacci(n) {
  if (n === 1 || n === 2) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

/*
1. fibonacci(5) = fibonacci(4) + fibonacci(3)
2. fibonacci(3) + fibonacci(2) + fibonacci(2) + fibonacci(1)
3. fibonacci(2) + fibonacci(1) + 1 + 1 + 1
4. 1 + 1 + 1 + 1 + 1
*/

function showFibonacci(number, count = 1) {
  console.log(fibonacci(count));
  if (count < number) {
    showFibonacci(number, count + 1);
  }
}

showFibonacci(10);
