//Chuỗi: Tập hợp các ký tự
var fullname = "Tạ Hoàng An";
console.log(fullname);

//Kiểm tra 1 biến có phải là chuỗi không?
if (typeof fullname === "string") {
  console.log("Đúng");
}

//Lưu ý: Trong tất cả các kiểu dữ liệu (Trừ null, undefined) ==> JS bọc object ở bên ngoài kiểu dữ liệu để chứa các phương thức và thuộc tính xử lý với kiểu dữ liệu tương ứng
//Mỗi kiểu dữ liệu trong JS sẽ có 1 hàm tạo (Constructor) tương ứng
//Chuỗi ==> String()
//Số ==> Number()
//Logic ==> Boolean()
//Mảng ==> Array()
//Đối tượng ==> Object()

console.log(String.prototype);
// console.log(fullname.length);

var str = "Học F8 lập trình tại F8";
//1. at(index) hoặc charAt(index) ==> Trả về ký tự dựa vào index (index bắt đầu từ 0)
// console.log(str.charAt(1));

//2. charCodeAt(index) ==> Trả về mã ASCII của ký tự theo index
// console.log(str.charCodeAt(2));

//3. concat() ==> Nối chuỗi (Ít dùng)
// console.log(str.concat("Hello 1", "Hello 2", "Hello 3"));

//4. length ==> Trả về độ dài của chuỗi
// console.log(str.length);

//5. indexOf(sub_string) ==> Trả về index đầu tiên tìm được chuỗi sub_string trong chuỗi cha, nếu không tìm được trả về -1
// console.log(str.indexOf("F8"));

//6. lastIndexOf(sub_string) ==> Trả về index cuối cùng tìm được sub_string trong chuỗi cha, nếu không tìm được trả về -1
// console.log(str.lastIndexOf("F8"));

//7. includes(sub_string) ==> Tìm chuỗi sub_string trong chuỗi cha và trả về true / false
// console.log(str.includes("F8"));

//8. slice(start, end) ==> Cắt chuỗi từ start đến end-1
// console.log(str.slice(3, 5)); //từ 3 đến 4
// console.log(str.slice(4)); //từ 4 đến hết
// console.log(str.slice(-4)); //4 ký tự cuối

//9. replace(old_string, new_string) ==> Thay thế old_string thành new_string
// console.log(str.replace("F8", "F88"));

//10. replaceAll(old_string, new_string) ==> Thay thế tất cả
// console.log(str.replaceAll("F8", "F88"));

//11. startsWith(sub_string) ==> Tìm chuỗi sub_string có bắt đầu trong chuỗi cha k
// console.log(str.startsWith("Học"));

//12. endsWith(sub_string) ==> Tìm chuỗi sub_string có kết thúc trong chuỗi cha k
// console.log(str.endsWith("F8"));

//13. toUpperCase() ==> Chuyển thành chữ HOA
// console.log(str.toUpperCase());

//14. toLowerCase() ==> Chuyển bạn chữ thường
// console.log(str.toLowerCase());

//15. trim() ==> Xóa khoảng trắng đầu và cuối chuỗi

//16. trimStart(), trimLeft() ==> Xóa khoảng trắng đầu chuỗi

//17. trimEnd(), trimRight() ==> Xóa khoảng trắng cuối chuỗi
// var str = "   TẠ HOÀNG AN      ";
// console.log(str);
// console.log(str.trimEnd());

//18. split() ==> Tách chuỗi thành mảng dựa vào ký tự phân cách
// console.log(str.split(" "));

//19. repeat() ==> Lặp lại chuỗi theo số lần nhất định
// console.log("*".repeat(10));

//20. match() ==> Cắt chuỗi dựa vào biểu thức chính quy (Regex)
var str = "Hello anh em F8, So dien thoai 0388875179 va so nua 0123456789";
var phones = str.match(/0\d{9}/g);
console.log(phones);
