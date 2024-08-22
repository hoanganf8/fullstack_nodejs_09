//ES6: Phiên bản của Javascript được cập nhật năm 2015
/*
- Khai báo biến
- Function
- Object, Array
- Class
- Module
- Promise ==> Xử lý bất đồng bộ
*/

//Khai báo biến
/*
let, const ==> 
    - Chỉ hoạt động trong phạm vi mà nó khai báo và các phạm vi con
    - Không được khai báo lại trong cùng 1 phạm vi
let ==> Được phép cập nhật lại giá trị biến
const ==> Không được cập nhật lại và phải gán luôn khi khai báo    

Phạm vi: 
- Global Scope
- Function Scope
- Block Scope
- Module Scope
*/
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }
// console.log(i);

// let a = 10;
// if (a >= 10) {
//   let b = 20;
//   //   console.log(b);
//   a = b;
// }
// console.log(a);
// console.log(b);

// a = 10;
// console.log(a);
// let a;
// ==> Tìm hiểu: Temporal Dead Zone
