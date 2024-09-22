const calculatorScreen = document.querySelector(".calculator-screen");

const updateScreen = (number) => {
  calculatorScreen.value = number;
};

let previousNumber = "";
let calculationOperator = " ";
let currentNumber = "0";

const inputNumber = (number) => {
  if (currentNumber == "0") {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
};

const numbers = document.querySelectorAll(".number");

for (let a = 0; a < numbers.length; a++) {
  numbers[a].addEventListener("click", (e) => {
    inputNumber(e.target.value);
    updateScreen(previousNumber + calculationOperator + currentNumber);
  });
}

const inputOperator = (operator) => {
  previousNumber = currentNumber;
  calculationOperator = operator;
  currentNumber = "";
};

const operators = document.querySelectorAll(".operator");
for (let a = 0; a < operators.length; a++) {
  operators[a].addEventListener("click", (e) => {
    inputOperator(e.target.value);
    updateScreen(previousNumber + e.target.value);
  });
}

const calculate = () => {
  let result = " ";
  switch (calculationOperator) {
    case "+":
      result = parseInt(previousNumber) + parseInt(currentNumber);
      break;
    case "-":
      result = parseInt(previousNumber) - parseInt(currentNumber);
      break;
    case "x":
      result = parseInt(previousNumber) * parseInt(currentNumber);
      break;
    case "/":
      result = parseFloat(previousNumber) / parseFloat(currentNumber);
      break;
    default:
      break;
  }
  currentNumber = result;
  calculationOperator = "";
};

const equalSign = document.querySelector(".equal-sign");
equalSign.addEventListener("click", () => {
  calculate();
  updateScreen(currentNumber);
});

const clearAll = () => {
  previousNumber = "";
  calculationOperator = "";
  currentNumber = "0";
  updateScreen(currentNumber);
};

const allClear = document.querySelector(".all-clear");
allClear.addEventListener("click", () => {
  clearAll();
});

const inputPercentage = () => {
  if (currentNumber === "0") return;
  currentNumber = (parseFloat(currentNumber) / 100).toString();
  updateScreen(currentNumber);
};

const percentage = document.querySelector(".percentage");
percentage.addEventListener("click", () => {
  inputPercentage();
});
