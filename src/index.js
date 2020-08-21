// React
import React from "react";
import ReactDOM from "react-dom";
import MenuCards from "./components/MenuCards";
import Menu from "./components/Menu";

ReactDOM.render(<MenuCards />, document.getElementById("menu-cards"));
ReactDOM.render(<Menu />, document.getElementById("menu"));


// Constant variables
const button = document.querySelector(".covid-close-notice");
const covidNotice = document.querySelector(".covid-notice");
const disclaimer = document.querySelector(".disclaimer");
const disclaimerButton = document.querySelector("footer svg");
const disclaimerPlaceholder = document.querySelector(".disclaimer-placeholder");
const form = document.getElementById("form");
const main = document.getElementById("main");

// Remove Covid Notice
button.addEventListener('click', removeBlurAndCovidNotice);

function removeBlurAndCovidNotice() {
  removeBlur();
  removeCovidNotice();
}

function removeBlur() {
  if (!main.classList.contains("no-blur")) {
    main.classList.add("no-blur");
  }
}

function removeCovidNotice() {
    if (!covidNotice.classList.contains("disappear")) {
      covidNotice.classList.add("disappear");
    }
}


// Menu Cards

// for (let i=0; i<menuCards.length; i++) {
//   menuCards[i].addEventListener("hover", () => {menuCards[i].style.top = "3px";})
// }


// Remove Disclaimer

disclaimerButton.addEventListener('click', deleteDisclaimers);

function deleteDisclaimers() {
  deleteDisclaimer();
  deletePlaceholderDisclaimer();
  moveForm();
}

function deleteDisclaimer() {
  disclaimer.style.display = "none";
}

function deletePlaceholderDisclaimer() {
  disclaimerPlaceholder.style.display = "none";
}

function moveForm() {
  form.style.margin = "0 0 0 0";
}
