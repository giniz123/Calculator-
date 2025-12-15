const buttons = document.querySelectorAll(".btn");
const displayElm = document.querySelector(".display");
// console.log(buttons);
let displayString = "";

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const btnText = btn.innerText;
    buttonAddingToDisplayScreen(btnText);
  });
});

const buttonAddingToDisplayScreen = (button) => {
  if (button === "AC") {
    console.log(button);
    displayString = "";
    return displayfunc(displayString);
  }

  if (button === "C") {
    displayString = displayString.slice(0, -1);
    return displayfunc(displayString);
  }

  if (button === "=") {
    return calculation();
  }

  displayString += button;
  displayfunc(displayString);
};

const displayfunc = (string) => {
  displayElm.innerText = string || "0.0";
};

const calculation = () => {
  const total = eval(displayString);
  return displayfunc(total);
};
