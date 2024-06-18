//Biểu thức = Toán hạng + Toán tử
//Ví dụ: s = a + b * c

//1. Toán tử số học:
// +, -, *, /, % (Chia lấy dư), ** (Lũy thừa)
// Lưu ý với phép + ==> Chú ý kiểu dữ liệu và thực hiện ép kiểu (cast)
// var a = "10";
// var b = 20;
// var c = +a + +b;
// var c = a - b;
// var c = a ** b;
// console.log(c);

//Toán tử: ++, --

/*
Phân biệt: count++ và ++count

- Giống nhau: Đều tăng lên 1 đơn vị
- Khác nhau: 
count++: Trả về giá trị trước khi tăng
++count: Trả về giá trị sau khi tăng
*/

// var count = 1;
// var total = ++count;
// console.log(`count = ${count}`, `total = ${total}`);

// var total = count++ + ++count + 5 + ++count + count++;
// console.log(total);

//1 + 3 + 4 + 4 = 12 + 5 = 17

//2. Toán tử so sánh: Luôn trả kiểu dữ liệu Boolean (true, false)
// >, <, >=, <=, ==, ===, !=, !==
// var a = 10;
// var b = "10";
// var c = a === b;
// console.log(c);

//3. Toán tử gán (=)
// var a = 10;
// a = a + 10;
// a += 10; //a = a + 10
// a -= 5; // a = a - 5
// a *= 5; // a = a * 5
// a /= 5; // a = a / 5
// a %= 2; // a = a % 2
// a **= 2; // a = a ** 2
// console.log(a);

// var age = 18;
// if ((age = 20)) {
//   console.log("Đúng");
// }

//4. Toán tử logic (Luận lý): &&, ||, !
// &&: Kết hợp các biểu thức con, nếu tất cả đều đúng ==> Trả về true, ngược lại trả về false
// ||: Kết hợp các biểu thức con, nếu 1 biểu thức đúng ==> Trả về true. Nếu tất cả đều sai ==> Trả về false
// !: Ngược lại (Phủ định)
// Lưu ý: Trong tình huống cần kết hợp mà muốn ưu tiên ==> Thêm cặp ngoặc ()

//Độ ưu tiên: Not -> And -> Or

// var a = 10;
// var b = a >= 5 && a <= 15;
// console.log(b);

// var status = (7 > 5 && !(-5 > 1)) || 10 == 10;
// console.log(status);

//5. Toán tử 3 ngôi (dieukien ? giatridung : giatrisau)
// var a = 10;
// var b = a === 10 ? 20 : 5;
// console.log(b);

// var total = 1 + 2 + 3 + (a >= 10 ? 20 : 5) + 4 + 3;
// console.log(total);

//6. Toán tử nullish (??)

//Kiểm tra null hoặc undefined

// var a = 10; //undefined
// var b = a ?? "F8";
// console.log(b);

//Bài tập: Viết lại toán tử nullish bằng toán tử 3 ngôi

// var a = 10; //undefined
// var b = a === undefined || a === null ? "F8" : a;
// console.log(b);

//7. Truthy và Falsy
// Trong điều kiện cần phải sử dụng kiểu dữ liệu logic (boolean) mà các giá trị tự động chuyển về true --> Truthy, ngược lại gọi là Falsy

//Falsy: 0, "", null, undefined, NaN, false
//Truthy: Các trường hợp còn lại

// var a = 0;
// var b = !a ? "Đúng" : "Sai";
// console.log(b);

// //8. && (Áp dụng cho việc gán vào biểu thức) ==> Tìm giá trị của biểu thức sai
// var a = 10;
// var b = "F8";
// var c = null;
// var result = a && b !== "F8" && c && "Học JS";
// console.log(result);

//9. || (Áp dụng cho việc gán vào biểu thức) ==> Tìm giá trị của biểu thức đúng
// var a = 0;
// var b = null;
// var c = undefined;
// var result = a || b || c;
// console.log(result);

// var age = 32;
// //Kiểm tra age !== 0
// if (age) {
//   console.log("Đúng");
// } else {
//   console.log("Sai");
// }

var email = null;
//Kiểm tra biến email có dữ liệu không?
// if (email !== null && email !== "" && email !== undefined) {

// }
if (email) {
  console.log("Có dữ liệu");
} else {
  console.log("Không có dữ liệu");
}

/*
Các kiểu dữ liệu trong JS
1. Kiểu dữ liệu nguyên thủy
- String
- Number
- Boolean
- Null
- Undefined
- BigInt
- Symbol
2. Kiểu dữ liệu tham chiếu
- Object
+ Array
+ Function
+ Literal Object
*/
