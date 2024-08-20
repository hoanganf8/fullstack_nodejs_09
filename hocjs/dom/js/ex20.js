// //Shadow Host (Element)
// var boxEl = document.querySelector(".box");

// //Shadow root
// var shadowRoot = boxEl.attachShadow({
//   mode: "open",
// });

// //Thêm content vào shadow root
// shadowRoot.innerHTML = `<h1>F8 - Học lập trình không khó</h1>`;
// var styleEl = document.createElement("style");
// styleEl.textContent = `
// h1 {
//     color: red;
// }
// `;
// shadowRoot.append(styleEl);

//Xây dựng Component Todo App
class TodoApp extends HTMLElement {
  static observedAttributes = ["theme"];
  constructor() {
    super();
    this.theme = "";
  }
  connectedCallback() {
    this.attachShadow({
      mode: "open",
    });
    this.render();
    this.addStyles();
    this.addEvent();
  }
  addStyles() {
    var style = document.createElement("style");
    style.textContent = `
        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }
        ul {
            list-style: inside;
        }    
        .todo-app {
            border: 1px solid red;
            padding: 15px;
        }
        .todo-app .theme {
            float: right;
        }
        .todo-app {
            &.theme-dark {
                background: #333;
                color: #fff;
            }
           .theme {
            .active {
                color: red;
            }
           }
        }   
    `;
    this.shadowRoot.append(style);
  }
  addEvent() {
    var themeEl = this.shadowRoot.querySelector(".theme");
    themeEl.addEventListener(
      "click",
      function (e) {
        var theme = e.target.dataset.theme;
        this.setAttribute("theme", theme);
        this.render();
        this.addStyles();
        this.addEvent();
      }.bind(this)
    );

    var form = this.shadowRoot.querySelector("form");
    var ul = this.shadowRoot.querySelector("ul");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var titleEl = e.target.elements.title;
      var value = titleEl.value;
      if (!value) {
        return alert("Vui lòng nhập");
      }
      var li = document.createElement("li");
      li.innerText = value;
      ul.append(li);
      //   e.target.reset();
      titleEl.value = "";
    });
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "theme" && oldValue !== newValue) {
      this.theme = newValue;
    }
  }

  render() {
    var template = `<div class="todo-app theme-${this.theme}">
        <h1>Todo App</h1>
        <div class="theme">
            <button class="${
              this.theme === "light" ? "active" : ""
            }" data-theme="light">Light</button>
            <button class="${
              this.theme === "dark" ? "active" : ""
            }" data-theme="dark">Dark</button>
        </div>
        <ul>
            <li>Job 1</li>
            <li>Job 2</li>
            <li>Job 3</li>
            <li>Job 4</li>
        </ul>
        <form>
            <input type="text" name="title"/>
            <button>Add</button>
        </form>
    </div>`;
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = template;
    }
  }
}
customElements.define("todo-app", TodoApp);
