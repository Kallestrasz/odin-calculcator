let displayValue = "0";
let result = null;
let firstNum = null;
let secondNum = null;
let operator = null;
const buttons = document.querySelectorAll("button");

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  if (b == 0) return a;
  return a / b;
}

function addition(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function percent(a, b) {
  return (100 * a) / b;
}

function sign(n) {
  return n * -1;
}

function updateDisplay() {
  const display = document.querySelector(".display");
  display.innerText = displayValue;
}

function operate(a, fun, b) {
  if (fun == "*") return multiplication(a, b);
  else if (fun == "/") {
    if (b === 0) {
      return "Error";
    } else {
      return division(a, b);
    }
  } else if (fun == "+") return addition(a, b);
  else if (fun == "-") return subtraction(a, b);
  else if (fun == "%") return percent(a, b);
  else alert("oh nyo");
}

function refresh() {
  displayValue = "0";
  result = null;
  firstNum = null;
  secondNum = null;
  operator = null;
  updateDisplay();
}

function clickButton() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      if (buttons[i].classList.contains("num")) {
        if (firstNum != null) secondNum = parseInt(buttons[i].innerText);
        else firstNum = parseInt(buttons[i].innerText);
        displayValue = buttons[i].innerText;
        updateDisplay();
      } else if (buttons[i].classList.contains("fun")) {
        operator = buttons[i].innerText;
        updateDisplay();
      } else if (buttons[i].classList.contains("equals")) {
        if (firstNum != null && secondNum != null && operator != null) {
          displayValue = operate(firstNum, operator, secondNum);
          firstNum = displayValue;
          updateDisplay();
        }
      } else if (buttons[i].classList.contains("decimal")) {
        updateDisplay();
      } else if (buttons[i].classList.contains("sign")) {
        if (displayValue == firstNum) displayValue = firstNum = sign(firstNum);
        else displayValue = secondNum = sign(secondNum);
        updateDisplay();
      } else if (buttons[i].classList.contains("clear")) {
        refresh();
      } else alert("oh nyo");
    });
  }
}
clickButton();
