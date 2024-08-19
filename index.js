window.addEventListener("DOMContentLoad", () => {
  let value = document.querySelector(".value").ATTRIBUTE_NODE.valueOf();
});

const value = document.querySelector(".value").get("data-value");
const deposit_btn = document.querySelector(".deposit_btn");
const withdraw_btn = document.querySelector(".withdraw_btn");
const balance_btn = document.querySelector(".balance_btn");
let balance = 8000;
let deposit = 0;

function depositBtn() {
  let balance = 8000;
  let deposit = 6000;
  alert("Your balance is " + (balance + deposit));
}

function withdrawBtn() {
  alert("Please enter the amount you want to withdraw");
}

function balanceBtn() {
  alert("Your balance is " + value);
}

console.log(depositBtn());
