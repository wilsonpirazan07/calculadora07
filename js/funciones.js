let num1 = "";
let num2 = "";
let operator = "";
let result = 0;

function add() {
  result = parseFloat(num1) + parseFloat(num2);
}

function subtract() {
  result = parseFloat(num1) - parseFloat(num2);
}

function multiply() {
  result = parseFloat(num1) * parseFloat(num2);
}

function divide() {
  result = parseFloat(num1) / parseFloat(num2);
}

function updateResult() {
  document.getElementById("result").innerHTML = result;
}

function clear() {
  num1 = "";
  num2 = "";
  operator = "";
  result = 0;
  updateResult();
}

function calculate() {
  switch (operator) {
    case "+":
      add();
      break;
    case "-":
      subtract();
      break;
    case "*":
      multiply();
      break;
    case "/":
      divide();
      break;
  }
  updateResult();
}

function addNum(num) {
  if (operator === "") {
    num1 += num;
  } else {
    num2 += num;
  }
  updateResult();
}

function addOperator(op) {
  if (operator !== "") {
    calculate();
  }
  operator = op;
}

document.getElementById("clear").addEventListener("click", clear);

document.getElementById("equals").addEventListener("click", calculate);

document.getElementById("add").addEventListener("click", function() {
  addOperator("+");
});

document.getElementById("subtract").addEventListener("click", function() {
  addOperator("-");
});

document.getElementById("multiply").addEventListener("click", function() {
  addOperator("*");
});

document.getElementById("divide").addEventListener("click", function() {
  addOperator("/");
});

document.getElementById("num0").addEventListener("click", function() {
  addNum("0");
});

document.getElementById("num1").addEventListener("click", function() {
  addNum("1");
});

document.getElementById("num2").addEventListener("click", function() {
  addNum("2");
});

document.getElementById("num3").addEventListener("click", function() {
  addNum("3");
});

document.getElementById("num4").addEventListener("click", function() {
  addNum("4");
});

document.getElementById("num5").addEventListener("click", function() {
  addNum("5");
});

document.getElementById("num6").addEventListener("click", function() {
  addNum("6");
});

document.getElementById("num7").addEventListener("click", function() {
  addNum("7");
});
