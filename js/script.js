// Copyright (c) 2022 Ava Venturino All rights reserved
//
// Created by: Ava Venturino
// Created on: Mar 2022
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit-6-03-JS/sw.js", {
    scope: "/ICS20-Unit-6-03-JS/",
  });
}

/**
 * Input
 */
function myButtonClicked() {
  if (localStorage.updateCookieCount) {
    localStorage.updateCookieCount = Number(localStorage.updateCookieCount) + 1;
  } else {
    localStorage.updateCookieCount = +1;
  }
  document.getElementById("answer").innerHTML =
    "You have clicked the cookie " + localStorage.updateCookieCount + " times";
}
