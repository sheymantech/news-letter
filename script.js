"use strict";
const dismissBtn = document.querySelector(".dismiss-btn");
const inputValue = document.querySelector(".input-value");
const errorMessage = document.getElementById("message");
const emailSpan = document.querySelector(".email-span");
const bodyContainer1 = document.querySelector(".body-cont");
const bodyContainer2 = document.querySelector(".body-success");

const inputBtn = document.getElementById("form");

inputBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (!inputValue.checkValidity()) {
    errorMessage.classList.toggle("hidden");

    setTimeout(function () {
      errorMessage.classList.toggle("hidden");
    }, 1000);
  } else {
    bodyContainer1.classList.toggle("hidden");
    bodyContainer2.classList.toggle("hidden-success");
    emailSpan.textContent = inputValue.value;
    inputValue.value = "";
  }
});

dismissBtn.addEventListener("click", function () {
  bodyContainer1.classList.toggle("hidden");
  bodyContainer2.classList.toggle("hidden-success");
});
