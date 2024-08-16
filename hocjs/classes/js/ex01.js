//Class
// function Person() {
//   this.name = "Hoàng An";
//   this.email = "hoangan.web@gmail.com";
// }
// var person = new Person();
// console.log(person);

class Person {
  name = "Hoàng An";
  email = "hoangan.web@gmail.com";
  static message = "Học lập trình tại F8";
  constructor() {
    console.log("Hàm khởi tạo");
    // console.log(name, email);
  }
  getName() {
    return this.name;
  }
  getEmail() {
    return this.email;
  }
}
class User extends Person {
  constructor() {
    console.log("User constructor");
    super();
  }
  getInfo() {
    return `
    - Name: ${this.name}
    - Email: ${this.email}
    `;
  }
}
var user = new User();
console.log(user.getInfo());
