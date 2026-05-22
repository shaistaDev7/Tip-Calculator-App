const billInput = document.getElementById("bill");
const customTipInput = document.getElementById("customTip");
const peopleInput = document.getElementById("people");

const tipButtons = document.querySelectorAll(".tip-btn");

const tipAmountText = document.getElementById("tipAmount");
const grandTotalText = document.getElementById("grandTotal");
const perPersonText = document.getElementById("perPerson");

const billError = document.getElementById("billError");
const tipError = document.getElementById("tipError");
const peopleError = document.getElementById("peopleError");

const resetBtn = document.getElementById("resetBtn");

let selectedTip = 10;
//Calculations
function calculate() {

    let bill = parseFloat(billInput.value);
    let people = parseInt(peopleInput.value);

    billError.textContent = "";
    tipError.textContent = "";
    peopleError.textContent = "";

    let valid = true;

    // Bill Validation

    if (isNaN(bill) || bill <= 0) {

        billError.textContent =
            "Bill must be greater than 0";

        valid = false;
    }

    // Tip Validation

    if (selectedTip < 0 || selectedTip > 100) {

        tipError.textContent =
            "Tip must be between 0 and 100";

        valid = false;
    }

    // People Validation

    if (
        isNaN(people) ||
        people < 1
    ) {

        peopleError.textContent =
            "Must be at least 1 person";

        valid = false;
    }

    if (!valid) {

        tipAmountText.textContent = "$0.00";
        grandTotalText.textContent = "$0.00";
        perPersonText.textContent = "$0.00";

        return;
    }

    let tipAmount =
        bill * selectedTip / 100;

    let grandTotal =
        bill + tipAmount;

    let perPerson =
        grandTotal / people;

    tipAmountText.textContent =
        "$" + tipAmount.toFixed(2);

    grandTotalText.textContent =
        "$" + grandTotal.toFixed(2);

    perPersonText.textContent =
        "$" + perPerson.toFixed(2);
}
// Tip Button
tipButtons.forEach(button => {

    button.addEventListener("click", () => {

        tipButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        selectedTip =
            Number(button.dataset.tip);

        customTipInput.value = "";

        calculate();
    });
});
//Custom Tip
customTipInput.addEventListener("input", () => {

    let custom =
        Number(customTipInput.value);

    if (!isNaN(custom)) {

        selectedTip = custom;

        tipButtons.forEach(btn =>
            btn.classList.remove("active")
        );
    }

    calculate();
});
// Live Update
billInput.addEventListener(
    "input",
    calculate
);

peopleInput.addEventListener(
    "input",
    calculate
);
// Reset Button
resetBtn.addEventListener("click", () => {

    billInput.value = "";

    customTipInput.value = "";

    peopleInput.value = "";

    selectedTip = 10;

    tipButtons.forEach(btn =>
        btn.classList.remove("active")
    );

    tipButtons[0].classList.add("active");

    billError.textContent = "";
    tipError.textContent = "";
    peopleError.textContent = "";

    tipAmountText.textContent = "$0.00";
    grandTotalText.textContent = "$0.00";
    perPersonText.textContent = "$0.00";
});
