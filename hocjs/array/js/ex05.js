//Array.from() ==> Ép kiểu dữ liệu khác về mảng
// var fullname = "Hoàng An";
// console.log(Array.from(fullname));

// var user = {
//   0: "User 1",
//   1: "User 2",
//   2: "User 3",
//   length: 3,
// };
// user = Array.from(user);
// console.log(user);

//Ví dụ: arguments, HTMLCollection,...

function something() {
  Array.from(arguments).forEach(function (item) {
    console.log(item);
  });
}
// something(5, 10, 15, 20, 25, 30);

// console.dir(Array);

// var arr = Array.of(5, 10, 15, 20);
// console.log(arr);

//Bài toán: Tạo 1 mảng chứa các số từ 1 đến 100
// var rangeArr = Array.from(Array(100)).map(function (_, index) {
//   return index + 1;
// });
// console.log(rangeArr);

//Tham chiếu
var a = ["Hoàng An", "hoangan.web@gmail.com"];
// var b = a;
//Sao chép mảng
// 1. Shallow Copy ==> Dùng các phương thức trong mảng cho phép trả về mảng mới
// var b = a.slice(0);
// var b = Array.from(a);
// var b = [...a]; //Spead Operator (ES6)

//2. Deep Copy: Đệ quy, JSON
// - B1: Chuyển array thành json
// - B2: Chuyển json thành array
// var json = JSON.stringify(a); //Chuyển mảng a thành json
// var b = JSON.parse(json); //Chuyển json của mảng a thành mảng b
// b[0] = "Nguyễn Văn Dũng";
// console.log(a);
// console.log(b);

// var a = ["An"];
// var b = ["An"];
// console.log(JSON.stringify(a) === JSON.stringify(b));

// var a = ["An"];
// // var b = a;
// var b = Array.from(a);
// console.log(a === b);

var users = [
  ["User 1", "user1@gmail.com"],
  ["User 2", "user2@gmail.com"],
  ["User 3", "user3@gmail.com"],
];
//Tìm mảng có user@gmail.com và thêm phần tử  mới cho nó
// users = users.map(function (user) {
//   if (user.includes("user2@gmail.com")) {
//     user.push("Ahihi");
//   }
//   return user;
// });
// console.log(users);

var user = users.find(function (user) {
  return user.includes("user2@gmail.com");
});
user.push("Ahihi");
console.log(users);
