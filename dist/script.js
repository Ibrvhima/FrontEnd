let buttons = document.querySelector(".buttons");
let btn = document.querySelectorAll("span");
let value = document.getElementById("value");
let toggleBtn = document.querySelector(".toggleBtn");
let body = document.querySelector("body");
let deleteBtn = document.querySelector("delete");

function evaluateExpression(expression) {
  try {
    if (/^[\d+\-*/().\s]+$/.test(expression)) {
      let result = new Function("return " + expression)();

      return parseFloat(result.toFixed(2));
    } else {
      throw new Error("Expression invalide");
    }
  } catch (error) {
    return "Erreur";
  }
}

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    if (this.innerHTML == "=") {
      value.innerHTML = evaluateExpression(value.innerHTML);
    } else if (this.innerHTML == "Cls") {
      value.innerHTML = "";
    } else if (this.innerHTML == "Del") {
      value.innerHTML = value.innerHTML.slice(0, -1);
    } else {
      value.innerHTML += this.innerHTML;
    }
  });
}

deleteBtn.addEventListener("click", function () {
  value.innerHTML = value.innerHTML.slice(0, -1);
});

toggleBtn.onclick = function () {
  body.classList.toggle("dark");
};
