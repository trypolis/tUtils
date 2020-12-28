/*
 * tUtils.
 * JavaScript library of lots of functions.
 * 
 * Copyright (C) 2020, Ty Gillespie. All rights reserved.
 * MIT License.
 */

'use strict';

// JavaScript doesn't provide an easy way to get a random int out of the box, because reasons.
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generates a string of random characters.
function generateToken(length) {
  // Feel free to edit as needed depending on what you want generated.
  let symbols = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
  let final = '';
  for (let i = 0; i < length; i++) {
    final += symbols[randomInt(0, symbols.length - 1)];
  }
  return final;
}

// Formats the time (e.g. 10:25:18 PM).
function formatTime() {
  let clockString = '';
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (hours > 12) {
    hours -= 12;
    clockString += hours + ':' + minutes + ' PM';
  } else {
    clockString += hours + ':' + minutes + ' AM';
  }
  return clockString;
}

// Makes the current date human-readable.
function formatDate() {
  let clockString = '';
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();
  clockString += '' + mm + '/' + dd + '/' + yyyy;
  return clockString;
}
