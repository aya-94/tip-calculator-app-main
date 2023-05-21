'use strict';

const button = document.getElementById("button");
const bill = document.getElementById("bill");
const customPrecent = document.getElementById("custom-precent");
const people = document.getElementById("num-ppl");
const tipAmount = document.getElementById("tip-amount");
const totalAmount = document.getElementById("total");
const errorSpan = document.querySelector(".error-span");
const val5 = document.getElementById("val-5");
const val10 = document.getElementById("val-10");
const val15 = document.getElementById("val-15");
const val25 = document.getElementById("val-25");
const val50 = document.getElementById("val-50");
const precentsArray = document.querySelectorAll(".precent");
let tipPrecent;
let isReset = false;
val5.value = 5;
val10.value = 10;
val15.value = 15;
val25.value = 25;
val50.value = 50;

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
            if(element !== customPrecent) {
                element.classList.add("active");
            }

            if(element.value > 0) {
                tipPrecent = element.value;
            } else {
                // tip precent for custom value
                customPrecent.addEventListener("keyup", () => {
                    tipPrecent = customPrecent.value;
                })
            }
        })
    });
}
precentVal();

// changing the bill value from string to number
const billVal = () => {
    return Number(bill.value);
}

// changing the people value from string to number
const peopleVal = () => {
    if(people.value > 0){
        return Number(people.value);
    }
}

// calculating the tip and presenting it on the screen
const calculateTip = (bill, customPrecent, people) => {
    let tip = bill * (customPrecent * 0.01);
    let tipResults = (tip / people).toFixed(2);
    tipAmount.innerHTML = `$${tipResults}`;
}

// calculating the total and presenting it on the screen
const calculateTotal = (bill, customPrecent, people) => {
    let total = bill + (bill * (customPrecent * 0.01));
    let totalResults = (total / people).toFixed(2);
    totalAmount.innerHTML = `$${totalResults}`;
}

//  applying styles when error accurs
const inputError = () => {
    people.classList.add("error-input-active");
    errorSpan.classList.add("error-span-active");
}

// removing error style incase error is active
const removingInputError = () => {
    people.classList.remove("error-input-active");
    errorSpan.classList.remove("error-span-active");
}

// reseting all the values
const resetValues = () => {
    bill.value = '';
    people.value = '';
    customPrecent.value = '';
    tipAmount.innerHTML = '$0.00';
    totalAmount.innerHTML = '$0.00';
    removingInputError();
    removeActivePrecent();
}

button.addEventListener("click", function() {
    removingInputError();

    // if isReset is false and number or people is 1+ 
    // we calculate the tip and change isReset value to true
    if(!isReset) {
        if(peopleVal()) {
            calculateTip(billVal(), Number(tipPrecent), peopleVal())
            calculateTotal(billVal(), Number(tipPrecent), peopleVal())
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

  

  
