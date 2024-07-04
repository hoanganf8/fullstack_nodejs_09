//Mảng: Cấu trúc dữ liệu có nhiều phần tử (Giá trị)
console.log(Array.prototype);
//Khai báo
var users = ["An", "Tâm", "Đạt", "Tùng"];

//Kiểm tra 1 biến có phải là mảng hay không?
// console.log(Array.isArray(users));

//Lấy số lượng phần tử
// console.log(users.length);

//Truy cập vào 1 phần tử trong mảng
// console.log(users[1]);

//Cập nhật giá trị 1 phần tử
// users[1] = "Quân";
// console.log(users);

//Thêm phần tử mới vào mảng
// users[users.length] = "Quân";
// users[users.length] = "Sơn";
// console.log(users);

//Duyệt qua từng giá trị
// for (var i = 0; i < users.length; i++) {
//   console.log(users[i]);
// }
// for (var index in users) {
//   console.log(users[index]);
// }
// for (var value of users) {
//   console.log(value);
// }
console.log(users);
// var indexDel = 2;
// var newUsers = [];
// for (var index in users) {
//   if (+index === indexDel) {
//     continue;
//   }
//   newUsers[newUsers.length] = users[index];
// }
// console.log(newUsers);

//Bài tập: Thêm phần tử mới vào đầu mảng (Không dùng hàm xử lý mảng, cú pháp ES6)
// var value = "Sơn";
// var newUsers = [value];
// for (var index in users) {
//   newUsers[newUsers.length] = users[index];
// }
// console.log(newUsers);

var users = [
  "Tạ Hoàng An",
  "Nguyễn Tuấn Anh",
  "Nguyễn Văn Dũng",
  "Phạm Văn Hiếu",
];
var keyword = "an";
//Yêu cầu: Xóa tất cả phần tử mảng có chứa keyword (Không phân biệt hoa, thường)
var newUsers = [];
for (var user of users) {
  var isMatch = user.toLowerCase().includes(keyword.toLowerCase());
  if (isMatch) {
    continue;
  }
  newUsers[newUsers.length] = user;
}
console.log(newUsers);

var numbers = [5, 2, 1, 9, 6];
//Yêu cầu: Tìm phần tử lớn nhất trong mảng và đổi chỗ phần tử đó với phần tử đầu tiên
var max = numbers[0];
var maxIndex = 0;
for (var index in numbers) {
  if (max < numbers[index]) {
    max = numbers[index];
    maxIndex = index;
  }
}
numbers[maxIndex] = numbers[0];
numbers[0] = max;
console.log(numbers);

var arr = [1, 2, 3, "F8", true, false, null];
var arr2 = [
  ["Hoàng An", "hoangan.web@gmail.com"],
  ["Hoàng An 1", "hoangan.web1@gmail.com"],
];
console.log(arr2);
console.log(arr2[0][0]);
