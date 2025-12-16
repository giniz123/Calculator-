const buttons = document.querySelectorAll(".btn");
const displayElm = document.querySelector(".display");
// console.log(buttons);
let displayString = "";
const operators = ["%", "/", "+", "-", "*"];

let latestOperator = ""; //false

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const btnText = btn.innerText;
    buttonAddingToDisplayScreen(btnText);
  });
});

const buttonAddingToDisplayScreen = (button) => {
  if (button === "AC") {
    displayString = "";
    return displayfunc(displayString);
  }

  if (button === "C") {
    displayString = displayString.slice(0, -1);
    return displayfunc(displayString);
  }

  if (button === "=") {
    const lastCharacter = displayString.charAt(displayString.length - 1);
    if (operators.includes(lastCharacter)) {
      displayString = displayString.slice(0, -1);
    }

    return calculation();
  }

  if (operators.includes(button)) {
    latestOperator = button;
    console.log(latestOperator);

    const lastCharacter = displayString.charAt(displayString.length - 1);

    if (operators.includes(lastCharacter)) {
      displayString = displayString.slice(0, -1);
    }
  }

  if (button === ".") {
    const latestOperatorPos = displayString.lastIndexOf(latestOperator);
    const latestNumberSet = displayString.slice(latestOperatorPos);
    console.log(latestNumberSet);

    console.log(latestOperatorPos);

    if (!latestOperator && displayString.includes(".")) {
      return;
    }
    if (latestNumberSet.includes(".")) {
      return;
    }
  }

  displayString += button;
  displayfunc(displayString);
};

const displayfunc = (string) => {
  displayElm.innerText = string || "0.0";
};

const calculation = () => {
  const total = eval(displayString);
  displayString = total;
  return displayfunc(displayString);
};
