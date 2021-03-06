/*
 * tUtils.
 * JavaScript library of lots of functions.
 * 
 * Copyright (C) 2020, Ty Gillespie. All rights reserved.
 * MIT License.
 */

"use strict";

/* String related functions. */

function generateToken(length) {
  // Feel free to edit as needed depending on what you want generated.
  let symbols = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  let final = "";
  for (let i = 0; i < length; i++) {
    final += symbols[randomInt(0, symbols.length - 1)];
  }
  return final;
}

function formatTime() {
  let clockString = "";
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  // Feel free to remove this little bit of black magic if you want 24-hour time.
  if (hours > 12) {
    hours -= 12;
    clockString += hours + ":" + minutes + " PM";
  } else {
    clockString += hours + ":" + minutes + " AM";
  }
  return clockString;
}

function formatDate() {
  let clockString = "";
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();
  clockString += "" + mm + "/" + dd + "/" + yyyy;
  return clockString;
}

/* Number/math related functions. */

function getPi() {
  return 3.141592654;
}

function randomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function randomInt(min, max) {
  // JavaScript doesn't provide an easy way to get a random int out of the box, because reasons.
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
