//Class
// - class
// - extends
// - Khai báo property, method
// - constructor ==> Hàm khởi tạo trong class
// - super()
// - static

class Person {
  //Khai báo thuộc tính
  name = "Hoàng An";
  email = "hoangan.web@gmail.com";
  #income = 12000; //private property
  #data = ["Item 1", "Item 2", "Item 3"];
  static message = "Học JS không khó";

  //Phương thức khởi tạo
  constructor() {}

  //Phương thức khác
  #getName() {
    return this.name;
  }

  #getEmail() {
    return this.email;
  }

  getIncome() {
    return this.#income;
  }

  getInfo() {
    return {
      name: this.#getName(),
      email: this.#getEmail(),
    };
  }

  get latest() {
    return this.#data[this.#data.length - 1];
  }

  set latest(value) {
    this.#data.push(value);
  }

  static getMessage() {
    //this trong hàm này là gì?
    // return this.message;
    return new this().name;
  }
}

const person = new Person(); //instance
// console.log(person);
// console.log(person.getIncome());
// console.log(person.getInfo());
// person.latest = "Item 4";
// console.log(person.latest);

//element.innerHTML ==> getter
//element.innerHTML = value ==> setter
// console.log(Person.message);
// console.log(Person.getMessage());

class Counter {
  name = "F8";
  constructor() {
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log(this.name);
  }
  render() {
    const h1 = document.createElement("h1");
    h1.innerText = 0;
    document.body.append(h1);
    const btn = document.createElement("button");
    btn.innerText = `Click me`;
    btn.addEventListener("click", this.handleClick);
    document.body.append(btn);
  }
}
new Counter().render();
