'use strict';

const testObject = [];
const button = document.getElementById("button");
const bill = document.querySelector("#bill");
const customPrecent = document.querySelector("#custom-precent");
const people = document.querySelector("#num-ppl");
const val5 = document.querySelector("#val-5");
const val10 = document.querySelector("#val-10");
const val15 = document.querySelector("#val-15");
const val25 = document.querySelector("#val-25");
const val50 = document.querySelector("#val-50");
const precentsArray = document.querySelectorAll(".precent");
let tipPrecent;
val5.value = 5;
val10.value = 10;
val15.value = 15;
val25.value = 25;
val50.value = 50;


console.log(val5.value)



  const precentVal = () => {
    precentsArray.forEach(element => {
        element.addEventListener('click', () => {
            if(element.value > 0) {
                tipPrecent = element.value
            } else {
                tipPrecent = customPrecent.value
            }
            
            console.log(tipPrecent)
        })
    });
  }

  precentVal()

  console.log(tipPrecent)

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

  button.addEventListener("click", function() {
    if(billVal() && peopleVal()) {
        testObject.push({
        bill: billVal(),
        customPrecent: tipPrecent,
        people: peopleVal()
        })
        console.log(testObject)
    } else {
        console.log('error')
    }

  })