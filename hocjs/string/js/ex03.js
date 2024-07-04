var fullname = "TẠ HOÀNG An";
//Kiểm tra biến fullname có phải tất cả là chữ HOA không?
var isUpperCase = function (fullname) {
  return fullname === fullname.toUpperCase();
};
console.log(isUpperCase(fullname));

//Bài tập 2: Kiểm tra độ mạnh, yếu mật khẩu
/*
>= 8 ký tự
Phải có ít nhất 1 ký tự viết HOA
Phải có ít nhất 1 ký tự viết thường
Phải có ít nhất 1 ký tự số
Phải có ít nhất 1 ký tự đặc biệt: !@#$%^&*()

Lưu ý: Không dùng Regex, mảng
*/
var isStrengthPassword = function (password) {
  var isUpper = false;
  var isLower = false;
  var isNumber = false;
  var isSpecial = false;
  if (password.length < 8) {
    return false;
  }
  var number = "0123456789";
  var special = "!@#$%^&*()";
  var countNumber = 0;
  var countUpper = 0;
  var countLower = 0;
  for (var i = 0; i < password.length; i++) {
    var char = password.charAt(i);
    //Check Uppercase
    if (char >= "A" && char <= "Z") {
      countUpper++;
      if (countUpper >= 2) {
        isUpper = true;
      }
    }
    //Check Lowercase
    if (char >= "a" && char <= "z") {
      countLower++;
      if (countLower >= 2) {
        isLower = true;
      }
    }
    //Check number
    if (number.includes(char)) {
      countNumber++;
      if (countNumber >= 2) {
        isNumber = true;
      }
    }

    //Check Special
    if (special.includes(char)) {
      isSpecial = true;
    }
  }
  return isUpper && isLower && isSpecial && isNumber;
};
console.log(isStrengthPassword("HAoangan@123"));

//Xử lý XSS
var search = window.location.search;
if (search) {
  //   var position = search.indexOf("=");
  //   var keyword = search.slice(position + 1);
  var keyword = new URLSearchParams(search).get("keyword");
  keyword = keyword.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
  document.write(keyword);
}

var url = "https://fullstack.edu.vn/khoa-hoc/fullstack/////////";

//Cách 1: Lặp qua từng ký tự và kiểm tra thủ công
//Cách 2: Dùng mảng
//Cách 3: Dùng Regex
url = url.replace(/\/*$/g, "");
console.log(url);
