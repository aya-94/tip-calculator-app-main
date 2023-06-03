'use strict';

const buttonEl = document.getElementById("button");
const billEl = document.getElementById("bill");
const customPrecentEl = document.getElementById("custom-precent");
const peopleEl = document.getElementById("num-ppl");
const tipAmountEl = document.getElementById("tip-amount");
const totalAmountEl = document.getElementById("total");
const errorSpanEl = document.querySelector(".error-span");
const val5 = document.getElementById("val-5");
const val10 = document.getElementById("val-10");
const val15 = document.getElementById("val-15");
const val25 = document.getElementById("val-25");
const val50 = document.getElementById("val-50");
const precentsArray = document.querySelectorAll(".precent");

let tipPrecent;
let isReset = false;

// assigning value to buttons
const precentButtonVal = () => {
    val5.value = 5;
    val10.value = 10;
    val15.value = 15;
    val25.value = 25;
    val50.value = 50;
}

// unable & disable button
const toggleButton = () => {
    if (billEl.value.trim() === '' || peopleEl.value.trim() === '' || tipPrecent === undefined) {
        buttonEl.classList.add("disable-button");
        buttonEl.disabled = true;
    } else {
        buttonEl.classList.remove("disable-button");
        buttonEl.disabled = false;
    }
}

// removing styles from precent buttons
const removeActivePrecent = () => {
    precentsArray.forEach(element => {
        element.classList.remove("active");
    })
}

// applying active class on current precent button and getting the precent value
const precentVal = () => {
    precentsArray.forEach(element => {
        // applying active class on current precent button
        element.addEventListener('click', () => {
            removeActivePrecent();

            // getting the precent value
            if(element !== customPrecentEl) {
                element.classList.add("active");
            }

            // assigning value to the tip precent
            if(element.value > 0) {
                tipPrecent = element.value;  
            }
            toggleButton();
        })
    });
}

// changing the value from string to number
const stringToNum = (el) => {
    return Number(el.value);
}

// calculating the tip and total to present it on the screen
const calculate = (bill, customPrecent, people) => {
    let tip = bill * (customPrecent * 0.01);
    let tipResults = (tip / people).toFixed(2);
    let total = bill + (bill * (customPrecent * 0.01));
    let totalResults = (total / people).toFixed(2);
    totalAmountEl.innerHTML = `$${totalResults}`;
    tipAmountEl.innerHTML = `$${tipResults}`;
}

//  applying styles when error accurs
const inputError = () => {
    peopleEl.classList.add("error-input-active");
    errorSpanEl.classList.add("error-span-active");
}

// removing error style incase error is active
const removingInputError = () => {
    peopleEl.classList.remove("error-input-active");
    errorSpanEl.classList.remove("error-span-active");
}

// reseting all the values
const resetValues = () => {
    billEl.value = '';
    peopleEl.value = '';
    customPrecentEl.value = '';
    tipAmountEl.innerHTML = '$0.00';
    totalAmountEl.innerHTML = '$0.00';
    buttonEl.innerHTML = 'Calculate';
    removingInputError();
    removeActivePrecent();
    toggleButton();
}

precentButtonVal();
precentVal();

billEl.addEventListener("keyup", toggleButton);
customPrecentEl.addEventListener("keyup", toggleButton);
peopleEl.addEventListener("keyup", toggleButton);

// tip precent for custom value
customPrecentEl.addEventListener("keyup", () => {
    tipPrecent = customPrecentEl.value;
});

buttonEl.addEventListener("click", function() {
    removingInputError();

    // if isReset is false and number or people is 1+ 
    // we calculate the tip and change isReset value to true
    if(!isReset) {
        if(peopleEl.value > 0) {
            calculate(stringToNum(billEl), Number(tipPrecent), stringToNum(peopleEl));
            buttonEl.innerHTML = 'Reset';
            isReset = !isReset;
        } else {
            inputError()
        }       
    } else {
        // if isReset is true, we reset all the values and change it to false
        resetValues();
        isReset = !isReset; 
    }
})