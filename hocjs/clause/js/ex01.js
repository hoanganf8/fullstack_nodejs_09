//Câu lệnh rẽ nhánh
//1. if else
/*
1.1. Câu lệnh if thiếu
if (dieukien) {
    Khối lệnh
}
1.2. Câu lệnh if đủ
if (dieukien) {
    Khối lệnh đúng
} else {
    Khối lệnh sai
}
1.3. Câu lệnh if nhiều nhánh
if (dieukien1) {
    Khối lệnh 1
} else if (dieukien2) {
    Khối lệnh 2
} else if (dieukien3) {
    Khối lệnh 3
} else {
    Khối lệnh 4
}
1.4. if lồng nhau
if (dieukien1) {
    if (dieukien2) {
      Khối lệnh
    } else {
      Khối lệnh
    }
} else {
    Khối lệnh
}
*/
//2. switch case

//Bài tập: Tính lương thực nhận của 1 nhân viên sau khi đã trừ thuế
/*
Quy ước
- Lương <= 5tr --> Thuế 0%
- Lương >5tr và < 15tr --> Thuế 3%
- >=15tr --> Thuế 5%
*/
var salary = 6000000;
var income, tax;
if (salary > 0) {
  if (salary <= 5000000) {
    tax = 0;
  } else if (salary < 15000000) {
    tax = 3;
  } else {
    tax = 5;
  }
  income = salary - (salary * tax) / 100;
  console.log(`Thu nhập: ${income}`);
} else {
  console.log("Không hợp lệ");
}

//Bài kiểm tra logic
var saleRate = 5; // Phần trăm giảm giá
var salePrice = 1000000; //Giá sau khi giảm
//Tìm giá gốc
var regularPrice = salePrice / (1 - saleRate / 100);
console.log(regularPrice);

// salePrice = regularPrice * (1 - saleRate / 100);
