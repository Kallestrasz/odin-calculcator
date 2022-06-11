function multiplication(a, b) {
	return a * b;
}

function division(a, b) {
	if (b == 0) {
		refresh();
		return a;
	}
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

function refresh() {
	click = 0;
	displayValue = "0";
	result = null;
	firstNum = null;
	secondNum = null;
	operator = null;
	updateDisplay();
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

let displayValue = "0";
let operationEnd = 0;
let firstNum = null;
let secondNum = null;
let operator = null;
let click = 0;
let currentNum = 1;
let bong = new Audio();
bong.src = "./sounds/bong.mp3";
const buttons = document.querySelectorAll("button");
function clickButton() {
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener("click", function () {
			if (buttons[i].classList.contains("num")) {
				let output;
				if (operationEnd == 1) {
					refresh();
					operationEnd = 0;
				}
				if (currentNum != 1) {
					if (click == 0) {
						output = secondNum = buttons[i].innerText;
						click = 1;
					} else output = secondNum += buttons[i].innerText;
				} else {
					if (click == 0) {
						output = firstNum = buttons[i].innerText;
						click = 1;
					} else output = firstNum += buttons[i].innerText;
				}
				displayValue = output;
				updateDisplay();
			} else if (buttons[i].classList.contains("fun")) {
				operationEnd = 0;
				operator = buttons[i].innerText;
				currentNum = 2;
				click = 0;
				updateDisplay();
			} else if (buttons[i].classList.contains("equals")) {
				bong.play();
				if (firstNum != null && secondNum != null && operator != null) {
					displayValue = operate(
						parseFloat(firstNum),
						operator,
						parseFloat(secondNum)
					);
					click = 0;
					firstNum = displayValue;
					operationEnd = 1;
					currentNum = 1;
					updateDisplay();
				}
			} else if (buttons[i].classList.contains("dot")) {
				if (currentNum == 1) {
					firstNum += ".";
				} else secondNum += ".";
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
