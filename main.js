let num1, num2, op;
let show = document.querySelector(".show");
let dot = false;
let equal = false;
ops = ["+", "*", "/"];

function inputs(number) {
  let display = document.querySelector(".input");

  if (number == "." && dot == true) return;
  if (display.value == 0) {
    if (number == 0 || ops.includes(number)) return;
    else display.value = number;
  } else {
    if (ops.includes(number) || number == "-") {
      num1 = display.value;
      console.log(num1);

      op = number;
      show.value = num1 + op;
      
      display.value = "0";
      dot = false;
    } else {
      if (equal) {
        display.value = "";
        equal = false;
      }
      display.value += number;
      if (number == ".") dot = true;
    }
  }
}

function result() {
  let display = document.querySelector(".input");
  equal = true;
  num2
   = display.value;
  show.value = num1 + op + num2;
  switch (op) {
    case "+":
      display.value = Number(num1) + Number(num2);
      break;
    case "-":
      display.value = Number(num1) - Number(num2);
      break;
    case "*":
      display.value = Number(num1) * Number(num2);
      break;
    case "/":
      if (num2 == 0) {
        display.value = "Cannot divided by Zero";
      } else {
        display.value = parseFloat(num1) / parseFloat(num2);
      }
      break;
  }
}

function handleClear() {
  document.querySelector(".input").value = "0";
  document.querySelector(".show").value = "";
}
function deletes() {
  let currentvalue = document.querySelector(".input").value;
  if (currentvalue.length == 1) {
    document.querySelector(".input").value = "0";
  } else {
    document.querySelector(".input").value = currentvalue.slice(0, -1);
  }
}
