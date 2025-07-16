const display = document.getElementById("display");
const buttons = document.querySelectorAll(".bttn");
const clear = document.getElementById("clear");
const equal = document.getElementById("equal");

let expression = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (value) {
      expression += value;
      display.value = expression;
    }
  });
});

clear.addEventListener("click", () => {
  expression = "";
  display.value = "";
});

equal.addEventListener("click", () => {
  try {
    const result = eval(expression);
    display.value = result;
    expression = result.toString();
  } catch (err) {
    display.value = "Error";
    expression = "";
  }
});
