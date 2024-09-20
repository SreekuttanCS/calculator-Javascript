let btn = document.querySelectorAll(".btn");

// btn.addEventListener("click", function () {
// input.value=btn.innerHTML;
// });

// for (let i = 0; i < btn.length; i++) {
//   btn[i].addEventListener("click", () => {
//     input.value += btn[i].innerHTML;
//
//   });
//  }

function inputs(number) {
  let input = document.querySelector(".input");

  if (input.value == "0") {
    if (number == 0 || number == "/" || number == "*") {
      return;
    } else {
      input.value = number;
    }
  } else {
    input.value += number;
  }
  let operator = ["+", "-", "*", "/"];
  if (input.value.length-1 == operator) {
    
  }
}
function handleClear() {
  document.querySelector(".input").value = "0";
}

function result() {
  let input = document.querySelector(".input");
  input.value = eval(input);
}
