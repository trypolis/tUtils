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
