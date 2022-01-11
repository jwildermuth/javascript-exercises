'use-strict'

/*Write a JavaScript function that returns a passed string with
letters in alphabetical order.*/


const alphaSort = (input) => {
  let sorted = ''
  input.split('').sort().forEach((char) => {
    sorted += char;
  })
  console.log(sorted)
}


alphaSort('alphabetical')
