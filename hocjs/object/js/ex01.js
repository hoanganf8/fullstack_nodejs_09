//Đối tượng (Object): Khái niệm trừu tượng để mô tả 1 đối tượng cụ thể
// - Đặc điểm (Thuộc tính)
// - Hành động (Phương thức)
//Trong js, hầu hết đều là đối tượng

//Khởi tạo Object
var user = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
  age: 32,
  getName: function () {
    return "Hello anh em";
  },
  //key: value
};
//Thêm key vào object
user.address = "Hà Nội";
user["location"] = "Việt Nam";

//Cập nhật giá trị 1 key trong object
user.name = "Hoàng An F8";

//Xóa 1 key trong object
delete user.email;

//Duyệt qua từng phần tử của object (Duyệt key)
// for (var key in user) {
//   if (typeof user[key] === "function") {
//     console.log(user[key]());
//   } else {
//     console.log(user[key]);
//   }
// }

var product = {
  name: "Laptop",
  price: 2000,
  infomation: {
    ssd: "512GB",
    ram: "8GB",
  },
};
// console.log(product.infomation.ssd);

//Bài tập
//Nối 2 object và lưu vào obj3 (Không dùng hàm có sẵn của Object)
// var obj1 = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
// };
// var obj2 = {
//   age: 32,
//   role: "Teacher",
// };
// var obj3 = {};
// for (var key in obj1) {
//   obj3[key] = obj1[key];
// }
// for (var key in obj2) {
//   obj3[key] = obj2[key];
// }
// console.log(obj3);

var user = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
  age: 32,
};

//Object.keys() ==> Lấy danh sách key trong object và trả về array
// console.log(Object.keys(user));

//Ví dụ: Kiểm tra 1 object có dữ liệu hay không?
// var a = {};
// if (Object.keys(a).length) {
//   console.log("Có dữ liệu");
// } else {
//   console.log("Không có dữ liệu");
// }

//Object.values() ==> Lấy các value trong object và lưu vào 1 mảng
// console.log(Object.values(user));

//Object.entries() ==> Lấy cả key và value của object và trả về mảng 2 chiều
// console.log(Object.entries(user));

//Object.fromEntries() ==> Chuyển mảng 2 chiều thành object
// var arr = [
//   ["name", "Hoàng An"],
//   ["email", "hoangan.web@gmail.com"],
//   ["address", "Hà Nội"],
// ];
// console.log(arr);
// console.log(Object.fromEntries(arr));

//Bài tập
var query = {
  category: 1,
  keyword: "Khóa học Fullstack",
  status: true,
};
//Chuyển thành query string: category=1&keyword=Khóa+học+Fullstack&status=true
//Lưu ý: Không dùng các hàm có sẵn để xử lý URL
// var queryString = "";
// for (var key in query) {
//   queryString += `&${key}=${query[key]}`;
// }
// queryString = queryString.slice(1).replaceAll(" ", "+");
// console.log(queryString);

var queryString = Object.entries(query)
  .map(function (item) {
    return item.join("=");
  })
  .join("&")
  .replaceAll(" ", "+");
console.log(queryString);

//Bài tập: Chuyển queryString trên thành object query
var allowArr = ["true", "false"];
var query = queryString
  .replaceAll("+", " ")
  .split("&")
  .map(function (item) {
    var itemArr = item.split("=");
    if (!isNaN(+itemArr[1])) {
      itemArr[1] = +itemArr[1];
    }
    if (allowArr.includes(itemArr[1])) {
      itemArr[1] = itemArr[1] === "true";
    }
    return itemArr;
  });
query = Object.fromEntries(query);
console.log(query);

//Object.assign(target, source1, source2, ...sourceN) ==> Nối object

// var user = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
// };
// var course = {
//   courseName: "Fullstack 09",
//   coursePrice: 1000,
// };
// // var newObj = Object.assign(user, course);
// var newObj = Object.assign({}, user, course);
// console.log(user);
// console.log(newObj);

//Từ khóa this (Context)
// var user = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   getName: function () {
//     return this.name;
//   },
//   getInfo: function () {
//     var _this = this;
//     return {
//       age: 32,
//       getEmail: function () {
//         // console.log(this);
//         console.log(_this.email);
//       },
//     };
//   },
// };
// user.getInfo().getEmail();

// var a = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
// };
// var b = {
//   course: "Fullstack",
//   teacher: "Hoàng An",
//   getEmail: function () {
//     console.log(this.email);
//   },
// };
//Hàm bind()
// b.getEmail.bind(a)();

//Hàm call()
var a = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
};
function something(a, b) {
  console.log(this);
  console.log(a, b);
}
// something.bind(a)(10, 20);
// something.call(a, 10, 20);

//Hàm apply
var args = [10, 20];
// something.apply(a, args);
Object.prototype.message = "Hello anh em F8";
var user = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
  combineValues: function () {
    //Lấy tất cả giá trị của các key không phải là hàm và gán vào 1 mảng
    var result = [];
    Object.keys(this).forEach(function (key) {
      if (typeof this[key] !== "function") {
        result.push(this[key]);
      }
    }, this);
    console.log(result);
  },
};
console.log(user.message);

var product = {
  name: "Laptop",
};
console.log(product.message);

// var fullname = "Hoàng An";
// console.log(fullname.message);
// var status = true;
// console.log(status.message);
// var age = 32;
// console.log(age.message);
// function getMessage() {}
// console.log(getMessage.message);

//Trong js ==> Hàm tạo Object là to nhất (Hay còn gọi là Object cụ tổ)
// console.dir(String.prototype);
// console.log(Array.prototype);
// console.log(Number.prototype);
// console.log(Boolean.prototype);

String.prototype.getFirstName = function () {
  var result = this.split(" ").slice(-1).join();
  console.log(result);
};
var fullname = "Tạ Hoàng An";
fullname.getFirstName();
