'use strict';

const testObject = [];
const button = document.getElementById("button");
const bill = document.getElementById("bill");
const customPrecent = document.getElementById("custom-precent");
const people = document.getElementById("num-ppl");
const tipAmount = document.getElementById("tip-amount");
const totalAmount = document.getElementById("total");
const val5 = document.getElementById("val-5");
const val10 = document.getElementById("val-10");
const val15 = document.getElementById("val-15");
const val25 = document.getElementById("val-25");
const val50 = document.getElementById("val-50");
const precentsArray = document.querySelectorAll(".precent");
let tipPrecent;
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
            console.log(element == customPrecent)
            if(element.value > 0) {
                tipPrecent = element.value
                console.log(element.value)
            } else {
                customPrecent.addEventListener("keyup", () => {
                    tipPrecent = customPrecent.value;
                })
            }
        })
    });
  }

  precentVal();

  const billVal = () => {
    if(bill.value < 1){
        console.log('cannot be 0')
    } else {
        return Number(bill.value);
    }
  }

  const peopleVal = () => {
    if(people.value < 1){
        console.log('cannot be 0')
    } else {
        return Number(people.value);
    }
  }

  const calculateTip = () => {
    let tip = testObject[0].bill * (testObject[0].customPrecent * 0.01)
    let tipResults = (tip / testObject[0].people).toFixed(2)
    console.log(tipResults)
    tipAmount.innerHTML = `$${tipResults}`
  }


  const calculateTotal = () => {
    let total = testObject[0].bill + (testObject[0].bill * (testObject[0].customPrecent * 0.01))
    let totalResults = (total / testObject[0].people).toFixed(2)
    console.log(totalResults)
    totalAmount.innerHTML = `$${totalResults}`
  }

  button.addEventListener("click", function() {
    if(billVal() && peopleVal()) {
        testObject.push({
        bill: billVal(),
        customPrecent: Number(tipPrecent),
        people: peopleVal()
        })
        console.log(testObject)
    } else {
        console.log('error')
    }
    calculateTip()
    calculateTotal()

    button.addEventListener("click", function() {
        bill.value = '';
        people.value = '';
        tipAmount.innerHTML = '$0.00';
        totalAmount.innerHTML = '$0.00';

        precentsArray.forEach(element => {
            precentsArray.forEach(element => {
                element.classList.remove("active");
            })
        })
      })
  })

  

  
