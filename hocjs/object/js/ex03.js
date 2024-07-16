// function User() {
//   this.name = "Hoàng An";
//   this.email = "hoangan.web@gmail.com";
//   this.first = function () {
//     return {
//       name: this.name,
//       email: this.email,
//     };
//   };
// }

// function Authentication() {
//   User.call(this);
//   this.getProfile = function () {
//     //Làm sao để truy cập vào method first của User
//     return this.first();
//   };
// }
// var user = new Authentication();
// console.log(user.getProfile());

//setter ==> Cập nhật giá trị của thuộc tính thông của 1 hàm
//getter ==> Lấy giá trị của thuộc tính thông qua 1 hàm
// ==> Cách gọi giống thuộc tính

//Ví dụ: users.length
// function Person() {
//   this.data = ["Item 1", "Item 2", "Item 3"];
//   this.getLatest = function () {
//     return this.data[this.data.length - 1];
//   };
// }
// Person.prototype = {
//   get latest() {
//     return this.data[this.data.length - 1];
//   },
//   set latest(value) {
//     this.data.push(value);
//   },
// };
// var person = new Person();
// person.latest = "Item 4";
// console.log(person.latest);

// var users = ["User 1", "User 2", "User 3", "User 4"];
// console.log(users.length);
// users.length = 2;
// console.log(users);

//Sử dụng Constructor giống như 1 Function thông thường
function Person() {
  this.name = "Hoàng An";
  this.email = "hoangan.web@gmail.com";
  return "F8";
}
// var person = new Person();
// console.log(person);
// console.log(Person());

// var age = new Number(10);
// console.log(age);
// console.log(Number(10));

// var fullnameObj = new String("Hello");
// var fullname = String("Hello");
// console.log(fullnameObj, typeof fullnameObj);
// console.log(fullname, typeof fullname);

//Có cách nào dùng từ khóa new mà vẫn trả về dữ liệu không?

// function UserTransformer(instance) {
//   this.config = function () {
//     return {
//       UID: instance.id,
//       fullname: instance.name,
//       emailAddress: instance.email,
//       status: instance.status,
//     };
//   };
//   return this.config();
// }

// var user = {
//   id: 1,
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   status: true,
// };

// var newUser = new UserTransformer(user);
// console.log(newUser);

//Nếu trong constructor return về object ==> Khi khởi tạo instance từ constructor ==> instance chứa dữ liệu return

var users = [
  {
    id: 1,
    name: "User 1",
    email: "user1@gmail.com",
  },
  {
    id: 2,
    name: "User 2",
    email: "user2@gmail.com",
  },
  {
    id: 3,
    name: "User 3",
    email: "user3@gmail.com",
  },
];
//Xóa user có email là user2@gmail.com
users = users.filter(function (user) {
  return !user.email.toLowerCase().includes("user2@gmail.com");
});
document.write(
  users
    .map(function (user) {
      return `<div>
    <h2>ID: ${user.id}</h2>
    <h2>Name: ${user.name}</h2>
    <h2>Email: ${user.email}</h2>
    </div>`;
    })
    .join("")
);
