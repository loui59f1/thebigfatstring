"use strict";

let inputChoice;
let dropdownChoice;

document.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("Start function");

  document.querySelector("button").addEventListener("click", readInput);
}

function readInput() {
  console.log("Read input");

  inputChoice = document.querySelector("#input").value;

  console.log(inputChoice);

  let changeList = document.querySelector("#task");
  dropdownChoice = changeList.options[changeList.selectedIndex].value;
  console.log("change is: " + dropdownChoice);
}
