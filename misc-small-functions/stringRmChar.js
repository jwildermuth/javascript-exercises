/* Write a JavaScript program to remove a character at the specified
position of a given string and return the new string
*/


const rmChar = (text, position) => {
  const part1 = text.slice(0, position);
  const part2 = text.slice(position + 1);
  return part1 + part2;
}


console.log(rmChar('abcdefg', 2))
