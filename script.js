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

  const precentVal = () => {
    precentsArray.forEach(element => {
        element.addEventListener('click', () => {
            precentsArray.forEach(element => {
                element.classList.remove("active");
            })
            if(element !== customPrecent) {
                element.classList.add("active");
            }
            if(element.value > 0) {
                tipPrecent = element.value
            } else {
                customPrecent.addEventListener("keyup", () => {
                    tipPrecent = customPrecent.value;
                })
            }
            console.log(tipPrecent)
        })
    });
  }
  precentVal();

  const billVal = () => {
    return Number(bill.value);
  }

  const peopleVal = () => {
    if(people.value <= 0){
        console.log('cannot be 0')
    } else {
        return Number(people.value);
    }
  }

  const calculateTip = (bill, customPrecent, people) => {
    let tip = bill * (customPrecent * 0.01)
    let tipResults = (tip / people).toFixed(2)
    console.log(tipResults)
    tipAmount.innerHTML = `$${tipResults}`
  }


  const calculateTotal = (bill, customPrecent, people) => {
    let total = bill + (bill * (customPrecent * 0.01))
    let totalResults = (total / people).toFixed(2)
    console.log(totalResults)
    totalAmount.innerHTML = `$${totalResults}`
  }

  const inputError = () => {
    people.classList.add("error-input-active");
    errorSpan.classList.add("error-span-active");
  }

  button.addEventListener("click", function() {
    console.log(tipPrecent)
    people.classList.remove("error-input-active");
    errorSpan.classList.remove("error-span-active");
    if(!isReset) {
        if(billVal() && peopleVal()) {
            calculateTip(billVal(), Number(tipPrecent), peopleVal())
            calculateTotal(billVal(), Number(tipPrecent), peopleVal())
            isReset = true;
        } else {
            console.log('error')
            inputError()
        }       
    } else {
        bill.value = '';
        people.value = '';
        customPrecent.value = '';
        tipAmount.innerHTML = '$0.00';
        totalAmount.innerHTML = '$0.00';
        people.classList.remove("error-input-active");
        errorSpan.classList.remove("error-span-active");

        precentsArray.forEach(element => {
            precentsArray.forEach(element => {
                element.classList.remove("active");
            })
        })
        isReset = false; 
    }
    // isReset = !isReset;
  })

  

  
