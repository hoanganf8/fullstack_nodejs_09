//Thực hành Prototype
// - Thêm prototype cho Object ==> Tất cả các object sẽ đều kế thừa được
// - Thêm prototype cho Constructor (Array, String...) ==> Chỉ những object được tạo ra từ Constructor đó ==> Kế thừa được

//Object ==> Constructor ==> instance

// Array.prototype.latest = function () {
//   return this[this.length - 1];
// };
// var arr = ["Item 1", "Item 2", "Item 3", "Item 4"];
// console.log(arr.latest());

// Array.prototype.map2 = function (callback) {
//   if (typeof callback !== "function") {
//     return;
//   }
//   var array = this;
//   var newArr = [];
//   for (var i = 0; i < array.length; i++) {
//     var value = array[i];
//     var index = i;
//     var result = callback(value, index);
//     newArr.push(result);
//   }
//   return newArr;
// };
// var users = ["Item 1", "Item 2", "Item 3", "Item 4"];
// var newArr = users.map2(function (user, index) {
//   return `<h3>${index + 1} - ${user}</h3>`;
// });
// console.log(newArr);

//Viết lại hàm map dưới dạng Prototype (Đặt tên là map2)

//Object Literal
//Function Constructor
// - Tạo ra 1 bản thiết kế cho đối tượng
// - Khởi tạo đối tượng từ bản thiết kế đó ==> Đối tượng được gọi là instance

//PascalCase: UserModel, CustomerService,...
function Person(name, email) {
  this.name = name;
  this.email = email;
  this.age = 32;
  this.getName = function () {
    return this.name;
  };
  this.getEmail = function () {
    return this.email;
  };
}
var person1 = new Person("Hoàng An", "hoangan.web@gmail.com");
console.log(person1);

//Kiểm tra 1 object được tạo từ Constructor nào?
// console.log(person1.constructor);
// console.log(person1.constructor.name);
// console.log(person1 instanceof Person);

//Kiểm tra 1 biến có phải là mảng không? (Không dùng hàm Array.isArray())
// var users = [];
// if (users instanceof Array) {
//   console.log("Là mảng");
// } else {
//   console.log("Không phải mảng");
// }

//Phương thức tĩnh, thuộc tính tĩnh
// - Không phụ thuộc vào đối tượng
// - Đảm bảo dữ liệu không thay đổi khi Constructor được khởi tạo lại
// - Truy cập trực tiếp từ Constructor
Person.message = "Học JS không khó"; //static property
Person.isPerson = function (instance) {
  return instance instanceof Person;
}; //static method

//Prorototype Constructor

//non-static property
Person.prototype.data = "Hello anh em F8";

//non-static method
Person.prototype.getData = function () {
  //Gọi thuộc tính message ==> console.log()
  console.log(this.constructor.message);
  return this.data;
};

Person.something = function () {
  console.log(new this().getData());
  return "Something";
};

//Từ khóa this trong phương thức tĩnh ==> Trả về Constructor

//Yêu cầu 1: Gọi hàm getData
// var person = new Person();
// console.log(person.getData());

//Yêu cầu 2: Trong hàm getData ==> Gọi thuộc tính message

console.log(Person.something());

//Yêu cầu: Trong hàm something ==> Gọi thuộc tính data
