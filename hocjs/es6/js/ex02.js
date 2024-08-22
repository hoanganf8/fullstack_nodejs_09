//Object, Array
//Destructuring
//Cú pháp của ES6 cho phép phá vỡ cấu trúc của array, object để truy cập vào các phần tử và lưu thành các biến riêng biệt
// const user = {
//   fullname: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   age: 32,
//   "status-text": "success",
//   address: "Hà Nội",
//   gender: "Nam",
//   position: "Giảng viên",
// };
// console.log(user);

// const fullname = user.fullname;
// const email = user.email;
// const { fullname: username, email, age = 30, "status-text": statusText } = user;
// console.log(username, email, age, statusText);
// const { fullname, email, ...data } = user;
// console.log(data);

// const profile = {
//   displayName: "Hoàng An",
//   emails: {
//     id: 1,
//     email: "hoangan.web@gmail.com",
//   },
// };
// const {
//   displayName,
//   emails: { email },
// } = profile;
// console.log(displayName, email);

// var key = "fullname";
// const { [key]: a } = user;
// console.log(a);

// const users = [
//   "Hoàng An",
//   "hoangan.web@gmail.com",
//   32,
//   "Hà Nội",
//   "Giảng viên",
//   "Nam",
// ];
// console.log(users);
// const [fullname, email, , address, ...data] = users;
// console.log(fullname, email, address);
// console.log(data);

// const doSomething = function ({ fullname, email }) {
//   //   const { fullname, email } = opt;
//   console.log(fullname, email);
// };

// doSomething({
//   fullname: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   password: "123456",
// });

//Named Arguments
// const doSomething = function ({
//   name,
//   email = "admin@gmail.com",
//   status = true,
//   isShow = false,
// }) {
//   console.log(`Name: `, name);
//   console.log(`Email: `, email);
//   console.log(`Status: `, status);
//   console.log(`IsShow: `, isShow);
// };
// // doSomething("User 1", "user1@gmail.com");
// // doSomething("User", "admin@gmail.com", false);
// doSomething({ name: "User 1", status: false });

//Spread Operator
// const oldObj = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
// };
// const newObj = {
//   teacher: "Hoàng An F8",
//   price: 12000,
//   ...oldObj,
// };
// console.log(newObj);

// const data = {
//   msg: "Học JS không khó",
//   products: ["Product 1", "Product 2"],
// };
// //Sao chép object data và lưu vào biến newData, sau đó thực hiện thêm Product 3 vào key products
// const newData = { ...data, products: [...data.products, "Product 3"] };
// console.log(newData);
// console.log(data);

//Object Literal Enhanced
// const name = "Hoàng An";
// const email = "hoangan.web@gmail.com";
// const age = 32;
// const user = {
//   name,
//   email,
//   age,
//   getName() {
//     return this.name;
//   },
// };
// console.log(user);
