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
