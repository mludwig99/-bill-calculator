const price = document.querySelector("#price");
const people = document.querySelector("#people");
const tip = document.querySelector("#tip");
const error = document.querySelector(".error");
const countBtn = document.querySelector(".count");
const costInfo = document.querySelector(".cost-info");
const cost = document.querySelector(".cost");

const showBill = () => {
  if (price.value === "" || people.value === "" || tip === "0") {
    error.textContent = "complete all fields!";
    costInfo.style.display = "none";
  } else {
    error.textContent = "";
    countBill();
  }
};
const countBill = () => {
  const newPrice = parseFloat(price.value);
  const newPeople = parseFloat(people.value);
  const newTip = parseFloat(tip.value);

  const result = (newPrice + newPrice * newTip) / newPeople;
  costInfo.style.display = "block";

  cost.textContent = result.toFixed(2);
};

countBtn.addEventListener("click", showBill);
