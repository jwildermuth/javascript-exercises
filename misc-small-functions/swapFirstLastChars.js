'use strict';

/*Write a JavaScript program to create a new string from a given string
changing the position of first and last characters. The string length
must be greater than or equal to 1.*/


const swapEndChars = (input) => {
  if (input.length <= 1) {
    console.log(input)
  } else {
    const first = input.slice(0, 1)
    const last = input.slice(-1)
    console.log(`${last}${input.slice(1, -1)}${first}`)
  }
}


swapEndChars('encyclopedia')
