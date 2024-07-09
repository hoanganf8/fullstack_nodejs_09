// - some()
// - every()
// - find()
// - findIndex
// - findLast
// - findLastIndex
// - reduce

//some(callback)
/*
- Duyệt qua từng phần tử của mảng ban đầu
- Trả về giá trị Boolean (true, false)
- Trả về true nếu có ít nhất 1 lần trong callback return về truthy
*/
// var numbers = [1, 3, 5, 6, 9];
//Kiểm tra trong mảng numbers có số chẵn không?
// var status = numbers.some(function (number) {
//   return number % 2 === 0;
// });
// console.log(status);

//every(callback)
/*
- Duyệt qua từng phần tử của mảng ban đầu
- Trả về giá trị Boolean (true, false)
- Trả về true nếu tất cả các lần lặp đều return về truthy
*/
// var numbers = [1, 2, 3, 5, 7, 9];
// //Kiểm tra trong mảng numbers xem tất cả có phải là số lẻ không?
// var status = numbers.every(function (number) {
//   return number % 2 !== 0;
// });
// console.log(status);

//find(callback)
/*
Cách hoạt động giống filter
Khác: Trả về phần tử mảng đầu tiên tìm được
*/
//findLast(callback)
/*
Cách hoạt động giống filter
Khác: Trả về phần tử cuối cùng tìm được
*/
//findIndex(callback)
/*
Cách hoạt động giống find
Khác: Trả về index đầu tiên tìm được
*/
//findLastIndex(callback)
/*
Cách hoạt động giống findLast
Khác: Trả về index cuối cùng tìm được
*/
// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var result = numbers.findLastIndex(function (number) {
//   return number > 2;
// });
// console.log(result);

//Bài tập 1:
var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 2, 7, 1];

//Tìm phần tử giao giữa 2 mảng
// [1,2]
var result = arrA.filter(function (item) {
  return arrB.includes(item);
});
// console.log(result);

//Bài tập 2:
var data = [];
var addData = function (value, status) {
  //Viết hàm
  if (status) {
    //Thêm
    if (!data.includes(value)) {
      data.push(value);
    }
  } else {
    //Xóa
    data = data.filter(function (item) {
      return item !== value;
    });
  }
};
addData("An", true);
addData("An", true);
addData("Quân", true);
addData("Đức", true);
addData("Quân", false);
// console.log(data);

//Output: ['An', 'Đức']
//Yêu cầu: Nếu status = true ==> Thêm value vào data (Kiểm tra trùng lặp). Nếu là false ==> Xóa nó đi

//reduce(callback, initialValue)
/*
Callback có 4 tham số (Chủ yếu là làm việc 3 tham số)
- prevValue
- currentValue
- index

initialValue: Giá trị khởi tạo

Cách hoạt động: 

1. Không có initialValue (Không có tham số thứ 2)
- Vòng lặp reduce sẽ chạy từ phần tử thứ 2 đến hết
- prevValue của lần lặp đầu tiên chính là phần tử đầu của mảng
- currentValue là giá trị của từng phần tử mảng khi lặp
- prevValue của lần lặp sau sẽ là return là của lần lặp trước
- Giá trị của hàm reduce là return cuối cùng của callback

2. Có initialValue
- Vòng lặp reduce sẽ chạy từ phần tử thứ nhất
- prevValue của lần lặp đầu tiên chính là initialValue
- Các ý sau giống trên
*/
var numbers = [5, 10, 15, 20, 25, 30];
// console.log(numbers);
// var result = numbers.reduce(function (prev, current, index) {
//   console.log(`prev = ${prev}, current = ${current}, index = ${index}`);
//   return current;
// }, 0);
// console.log(result);
var total = numbers.reduce(function (prev, number) {
  return prev + number;
}, 0);
// console.log(total);

//Bài tập:
var numbers = [2, 9, 5, 1, -5];
//Tìm phần tử lớn nhất dùng reduce
var max = numbers.reduce(function (prev, number) {
  if (prev < number) {
    return number;
  }
  return prev;
});
console.log(max);

var users = ["An", "Tùng", "Đạt", "Quân", "Tùng", "Nam"];
//Xóa các phần tử trùng trong mảng users
//Yêu cầu: Dùng reduce

var users = users.reduce(function (prev, current) {
  if (!prev.includes(current)) {
    prev.push(current);
  }
  return prev;
}, []);
// console.log(users);

// var numbers = [1, [2, 3], [4], 5, [[6, 7]], [[[[8]], 9]]];
// console.log(numbers);
//Làm phẳng mảng trên
//Output: [1,2,3,4,5,6,7,8,9]
//Yêu cầu: Dùng reduce, không dùng hàm flat
//Gợi ý: Xem lại giải thuật đệ quy
// var newArr = [];
// numbers.forEach(function (item) {
//   if (!Array.isArray(item)) {
//     newArr.push(item);
//   } else {
//     item.forEach(function (subItem) {
//       if (!Array.isArray(subItem)) {
//         newArr.push(subItem);
//       } else {
//         //forEach tiếp
//       }
//     });
//   }
// });
// console.log(newArr);

// var flatArray = function (arr) {
//   return arr.reduce(function (prev, current) {
//     if (!Array.isArray(current)) {
//       return prev.concat(current);
//     }
//     return prev.concat(flatArray(current));
//   }, []);
// };
// var newArr = flatArray(numbers);
// console.log(newArr);

//Chunk Array
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var size = 3;
//Chunk array với size tương ứng
//Output: [[1,2,3], [4,5,6], [7,8,9], [10,11]]
//Yêu cầu: Dùng reduce

//Ý tưởng: [[]] --> [[1]] --> [[1,2]] --> [[1,2,3]] --> [[1,2,3], [4]] --> [[1,2,3], [4,5]] --> [[1,2,3], [4,5,6]] --> [[1,2,3], [4,5,6], [7]]
console.log(numbers);
var result = numbers.reduce(
  function (prev, current) {
    //Kiểm tra mảng con có nhiêu phần tử
    if (prev[prev.length - 1].length < size) {
      prev[prev.length - 1].push(current);
    } else {
      prev.push([current]);
    }
    return prev;
  },
  [[]]
);
console.log(result);

var chunkArr2 = numbers.reduce(function (prev, current, index) {
  if (index % size === 0) {
    var subArr = numbers.slice(index, index + size);
    // var subArr = numbers.splice(0, size);
    prev.push(subArr);
  }

  return prev;
}, []);
console.log(chunkArr2);
