//Arrow Function

// const getMessage = (msg) => {
//   console.log("Ok chưa?", msg);
// };
// getMessage("F8");

// const sum = (a, b) => a + b;
// console.log(sum(10, 20));

// const getUser = () => ({
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
// });
// console.log(getUser());

// const users = [
//   {
//     id: 1,
//     name: "User 1",
//   },
//   {
//     id: 2,
//     name: "User 2",
//   },
//   {
//     id: 3,
//     name: "User 3",
//   },
// ];
// const getUser = (userId) => users.find(({ id }) => userId === id);
// console.log(getUser(2));

// setTimeout(() => {
//   console.log("Ok chưa?");
// }, 1000);

// const user = {
//   name: "Hoàng An",
//   getName: () => {
//     console.log(this);

//     return this.name;
//   },
// };
// console.log(user.getName());

/*
Lưu ý khi sử dụng Arrow Function: 
- Không binding được từ khóa this
- Không binding được từ khóa arguments
- Không được dùng làm Function Constructor (Khởi tạo object)
- Không có thuộc tính prototype
- Không nên sử dụng làm method của object
*/
// const doSomething = (...args) => {
//   //   console.log(arguments);
//   console.log(args);
// };
// doSomething(1, 2, 3);
// const doSomething = function () {
//   console.log("something");
// };
// doSomething.prototype.getA = function () {
//   return `getA`;
// };
// console.log(doSomething.prototype.getA());

// const user = {
//   name: "Hoàng An",
//   getInfo: function () {
//     return {
//       age: 32,
//       getAge: function () {
//         return this.age;
//       },
//       getName: () => this.name,
//     };
//   },
// };
// console.log(user.getInfo().getAge());
// console.log(user.getInfo().getName());
