'use-strict'

/*Write a JavaScript function that accepts a string as a parameter and
find the longest word within the string*/


const longestWord = (input) => {
  input = input.split(' ');
  let longest = '';
  input.forEach((word) => {
    if (word.length > longest.length) {
      longest = word;
    }
  })
  return longest;
}

console.log(longestWord('apple banana dictionary'))
