'use-strict';

/*Write a JavaScript program to count the number of vowels in a given
string.*/


const countVowels = (input) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let counter = 0;

  for (let vowel of vowels) {
    if (input.includes(vowel)) { counter++ }
  }

  console.log(`${input} has ${counter} vowels.`)
}


countVowels('house')
