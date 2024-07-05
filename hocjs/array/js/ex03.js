//Vòng lặp mảng
var users = ["User 1", "User 2", "User 3", "User 4"];
console.log(users);
//1. forEach(callback)
// - Duyệt qua từng phần tử của mảng và trả kết quả vào callback
// - Callback có 2 tham số: value, index
// users.forEach(function (value, index) {
//   console.log(value, index);
// });

//2. map(callback)
// - Duyệt qua từng phần tử của mảng trả về value, index ở callback
// - Trả về 1 mảng mới có số lượng phần tử bằng mảng ban đầu
// - Giá trị các phần tử của mảng mới là giá trị của callback (Callback return về giá trị nào ==> Lưu vào mảng mới)
// var newArr = users.map(function (value, index) {
//   console.log(value, index);
//   return `${index + 1} - ${value}`;
// });
// console.log(newArr);

//3. filter(callback)
// - Duyệt qua từng phần tử của mảng ban đầu
// - Trả về 1 mảng mới, giá trị phần tử của mảng mới sẽ là các phần tử của mảng ban đầu nếu callback trả về truthy
var numbers = [0, 1, 3, 5, 7, 8, 9];
console.log(numbers);
var newArr = numbers.filter(function (value, index) {
  //   return value % 2 !== 0;
  //   return true;
  return value;
});
// console.log(newArr);

// var fullname = "Tạ    Hoàng   An";
// var newName = fullname
//   .split(" ")
//   .filter(function (item) {
//     return item;
//   })
//   .join(" ");
// console.log(newName);

//Bài tập: Xóa khách hàng có email là: customer2@gmail.com

var customers = [
  ["Customer 1", "customer1@gmail.com", 32],
  ["Customer 2", "customer2@gmail.com", 28],
  ["Customer 3", "customer3@gmail.com", 31],
  ["Customer 4", "customer4@gmail.com", 29],
];
console.log(customers);
// customers = customers.filter(function (customer) {
//   return !customer.includes("customer2@gmail.com");
// });

// console.log(customers);

//Bài tập 2: Tăng tuổi của customer: customer2@gmail.com thêm 2 tuổi
//Gợi ý: Dùng map
// customers = customers.map(function (customer) {
//   if (customer.includes("customer2@gmail.com")) {
//     customer[2] += 2;
//   }
//   return customer;
// });
// console.log(customers);

//Bài tập 3:
var users = ["User 1", "User 2", "User 3", "User 2", "User 4"];
console.log(users);
//Yêu cầu: Xóa phần tử trùng
var newUsers = [];
users.forEach(function (user) {
  if (!newUsers.includes(user)) {
    newUsers.push(user);
  }
});
// console.log(newUsers);

//Buổi sau:
// - some()
// - every()
// - find()
// - findIndex
// - findLast
// - findLastIndex
// - reduce

// var a = ["Hoàng An"];
// var b = a;
// b[0] = "Hoàng An f8";
// console.log(a);
// console.log(b);
