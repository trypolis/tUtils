/*
 * tUtils.
 * JavaScript library of lots of functions.
 * 
 * Copyright (C) 2020, Ty Gillespie. All rights reserved.
 * MIT License.
 */

"use strict";

// Global objects.
let synth = window.speechSynthesis;

// JavaScript doesn't provide an easy way to get a random int out of the box, because reasons.
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

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
  if (hours > 12) {
    // We want 12-hour time.
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

function speak(text) {
  const utterThis = new SpeechSynthesisUtterance(text);
  if (typeof synth.stop !== 'undefined') {
    synth.stop();
  }
  synth.speak(utterThis);
}

function getPi() {
  return 3.141592654;
}

// Returns a random Arbitrary number.
function randomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
