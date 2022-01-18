'use-strict';

// Write a function that finds the longest subsequence shared by s1 and s2


function longestSubStr(s1, s2) {
  let results = [];

  // iterate for each char in s1
  for (i = 0; i < s1.length; i++) {
    let char = s1[i];
    let s2frag = s2;

    // look for the char in s2
    if (s2frag.includes(char)) {
      let result = char;
      let index = s2.indexOf(char) + 1
      s2frag = s2frag.slice(index)

      // if char is found, iterate over the remaining chars in s1
      for (j = i + 1; j < s1.length; j++) {
        let char = s1[j]

        // add the char to the result if it is found
        if (s2frag.includes(char)) {
          result += char;
          index = s2frag.indexOf(char)
          s2frag = s2frag.slice(index)
        }
      }
      results.push(result)
    }
  }

  // return longest string in 'results'
  let longest = ''
  results.forEach(res => {
    if (res.length > longest.length) {
      longest = res;
    }
  })
  console.log(longest)
}


longestSubStr('ICFHBDAJGEK', 'IKDBCJEFHGA')


