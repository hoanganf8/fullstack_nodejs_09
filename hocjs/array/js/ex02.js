console.log(Array.prototype);
var users = ["User 1", "User 2", "User 3", "User 4", "User 2"];
console.log(users);

//Chaining: object.method1().method2().method3()

//1. at(index) ==> Lấy phần tử dựa vào index
// console.log(users.at(0));

//2. concat(arr1, arr2,...) ==> Nối các array thành 1 array
// console.log(users.concat([1, 2, 3], [4, 5, 6], ["A", "B", "C"]));
// console.log(users.concat("User 5"));

//3. fill(value) ==> Cập nhật các phần tử thành 1 giá trị
// var result = users.fill(0);
// console.log(users);
// console.log(result);

//4. includes(value) ==> Kiểm tra phần tử có trong mảng không? (Trả về true / false)
// console.log(users.includes("User 1"));

//5. indexOf(value) ==> Kiểm tra phần tử có trong mảng không? (Trả về index đầu tiên tìm được)
// console.log(users.indexOf("User 22"));

//6. lastIndexOf(value) ==> Kiểm tra phần tử có trong mảng không? (Trả về index cuối cùng tìm được)
// console.log(users.lastIndexOf("User 2"));

//7. slice(start, end) ==> Cắt mảng từ start đến end - 1 (Trả về mảng mới)
// console.log(users.slice(0, 2));
// console.log(users.slice(1));
// console.log(users.slice(-2));

//8. join() ==> Nối các phần tử trong mảng thành chuỗi
// console.log(users.join(" - "));
// var fullname = "Tạ Hoàng An";
// var firstName = fullname.split(" ").slice(-1).join();
// console.log(firstName);

//9. reverse() ==> Đảo ngược mảng (Thay đổi mảng ban đầu)
// console.log(users.reverse());
// console.log(users);

//10. sort() ==> Sắp xếp mảng theo thứ tự tăng dần (Kiểm tra theo ký tự)
// var users = ["Dũng", "An", "Tâm", "Văn"];
// users.sort();
// console.log(users);
var numbers = [2, 100, 1, 8];
// console.log("Mảng ban đầu");
// console.log(numbers);
numbers.sort(function (a, b) {
  /*
  a: Phần tử sau
  b: Phần tử trước
  Nếu hàm này return về giá trị âm ==> Tự động đổi chỗ a và b
  */
  //   console.log(b);
  //   console.log(a);
  //   console.log("---");
  //   if (a > b) {
  //     return -1;
  //   }
  return b - a;
});
// console.log(numbers);

//Lần 1: [2, 100, 1, 8]
//Lần 2: [2, 1, 100, 8]
//Lần 3: [1, 2, 100, 8]
//Lần 4: [1, 2, 8, 100]
//Lần 5: [1, 2, 8, 100]

// var number2 = [2, 100, 1, 8];
// for (var i = 0; i < numbers.length - 1; i++) {
//   for (var j = i + 1; j < numbers.length; j++) {
//     console.log(number2[i], number2[j]);
//     if (number2[i] > number2[j]) {
//       var tmp = number2[i];
//       number2[i] = number2[j];
//       number2[j] = tmp;
//     }
//   }
// }

//Hàm sort sử dụng thuật toán Merge Sort

var customers = [
  "Tạ Hoàng An",
  "Phan Văn Hiếu",
  "Nguyễn Tuấn Anh",
  "Nguyễn Văn Tuấn",
  "Nguyễn Văn Tùng",
];
//Sắp xếp mảng customers theo thứ tự tăng dần (Sắp xếp theo tên)
// var getFirstName = function (fullname) {
//   return fullname.split(" ").slice(-1).join();
// };
// customers.sort(function (a, b) {
//   if (getFirstName(b) > getFirstName(a)) {
//     return -1;
//   }
// });
// console.log(customers);

//Nguyễn Xuân Tuấn Anh
//Tạ Hoàng Anh

//Bài tập 2: Thêm 1 khách hàng vào giữa mảng customers (Sau khi đã sắp xếp ở bài 1)
// var newCustomer = "Lê Đức Nam";
// var index = (customers.length - (customers.length % 2)) / 2;
// var firstArr = customers.slice(0, index);
// var lastArr = customers.slice(index);
// var customers = firstArr.concat(newCustomer, lastArr);
// console.log(customers);

// var a = 7;
// var b = 2;
// var result = (a - (a % b)) / b;
// console.log(result);

// var fullname = "Tạ     Hoàng  An";
// fullname = fullname.split(" ");
// var fullnameArr = [];
// for (var value of fullname) {
//   if (value) {
//     fullnameArr[fullnameArr.length] = value;
//   }
// }
// fullname = fullnameArr.join(" ");
// console.log(fullname);

//11. push() ==> Thêm phần tử vào cuối mảng
// var count = users.push("A", "B", "C");
// console.log(users);
// console.log(count);

//12. unshift() ==> Thêm phần tử vào đầu mảng
// var count = users.unshift("A", "B", "C");
// console.log(users);
// console.log(count);

//13. pop() ==> Xóa phần tử cuối mảng
// var value = users.pop();
// console.log(users);
// console.log(value);

//14. shift() ==> Xóa phần tử đầu mảng
// var value = users.shift();
// console.log(users);
// console.log(value);

//15. splice(index, count) ==> Xóa count phần tử từ index
// var result = users.splice(1, 0, "Item 1", "Item 2", "Item 3", "Item 4");
// console.log(users);
// console.log(result);

//16. length ==> Lấy độ dài
var arr = ["Item 1", "Item 2", "Item 3", "Item 4"];
arr.length = 2;
console.log(arr);
