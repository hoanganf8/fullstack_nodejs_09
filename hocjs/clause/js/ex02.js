//Câu lệnh switch case
//Chỉ chấp nhận so sáng bằng (===)
var action = "add";
switch (action) {
  case "create":
  case "insert":
  case "add":
    console.log("Thêm");
    break;
  case "update":
  case "edit":
    console.log("Cập nhật");
    break;
  case "delete":
  case "remove":
  case "destroy":
    console.log("Xóa");
    break;
  default:
    console.log("Danh sách");
    break;
}

if (action === "create" || action === "insert" || action === "add") {
  console.log("Thêm");
} else if (action === "update" || action === "edit") {
  console.log("Cập nhật");
} else if (action === "delete" || action === "remove" || action === "destroy") {
  console.log("Xóa");
} else {
  console.log("Danh sách");
}
