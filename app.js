const button = document.querySelector(".covid-close-notice");
const covidNotice = document.querySelector(".covid-notice");
const disclaimer = document.querySelector(".disclaimer");
const disclaimerButton = document.querySelector("footer button");
const disclaimerPlaceholder = document.querySelector(".disclaimer-placeholder");
const form = document.getElementById("form");
const menu = document.getElementById("menu-prices");
const navbar = document.getElementById("nav");
const navbarOptions = document.querySelectorAll("nav li");
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

function navbarRemoveCovidNotice() {
  for (i=0; i<navbarOptions.length; i++) {
    navbarOptions[i].addEventListener('click', removeBlurAndCovidNotice);
  }
}

navbarRemoveCovidNotice();


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
  form.style.margin = "0 0 20px 0";
}


// Open or Closing Times for restaurant

// switch (expression) {
//   case expression:
//
//     break;
//   default:
//
// }

// Remove Section for Menu or Prices List
// menu.addEventListener('click', makeSectionDisappear);
//
// function makeSectionDisappear() {
//   if (!main.classList.contains("disappear")) {
//     main.classList.add("disappear");
//     navbarMakeSectionReappear();
//   }
// }
//
// // Reappear Section after Closing Menu or Prices List
// function makeSectionReappear() {
//   for (i=0; i<navbarOptions.length; i++) {
//       navbarOptions[i].addEventListener('click', navbarMakeSectionReappear);
//     }
//   }
//
// function navbarMakeSectionReappear() {
//   if (main.classList.contains("disappear")) {
//     main.classList.remove("disappear");
//   }
//   removeReappearListeners();
// }
//
// function removeReappearListeners() {
//   for (i=0; i<navbarOptions.length; i++) {
//       navbarOptions[i].removeEventListener('click', makeSectionReappear);
//     }
// }
//
// makeSectionReappear();
