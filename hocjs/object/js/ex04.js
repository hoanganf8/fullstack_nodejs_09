// var queryString =
//   "status=active&keyword=ahihi&category=1&category=2&category=3";

/*
{
  status: "active",
  keyword: "ahihi",
  category: ['1', '2', '3'],
}
*/
// var query = queryString.split("&").reduce(function (prev, current) {
//   var arr = current.split("=");
//   var key = arr[0];
//   var value = arr[1];
//   if (!prev[key]) {
//     prev[key] = value;
//   } else {
//     if (!Array.isArray(prev[key])) {
//       prev[key] = [prev[key]];
//     }
//     prev[key].push(value);
//   }

//   return prev;
// }, {});
// console.log(query);

//Tham chiếu
var a = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
};
// var b = a;
// var b = Object.assign({}, a);
// var b = { ...a }; //Spread
var b = JSON.parse(JSON.stringify(a));
b.name = "Hoàng An F8";
// console.log(a);
// console.log(b);

//Optional Chaining (?.)

//1. Optional Chaining với thuộc tính
// var user = {
//   name: {
//     firstName: "An",
//   },
// };
// console.log(user?.name?.firstName);

//2. Optional Chaining với phương thức
var user = null;
user?.getFirstName?.();
