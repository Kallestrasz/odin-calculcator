const buttons = document.querySelectorAll("button");
let result = null;

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
  return a % b;
}

function operate(a, operator, b) {
  if (operator == "*") return multiplication(a, b);
  else if (operator == "/") return division(a, b);
  else if (operator == "+") return addition(a, b);
  else if (operator == "-") return subtraction(a, b);
  else return percent(a, b);
}
