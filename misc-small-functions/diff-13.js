// Write a JavaScript program to get the difference between a given
// number and 13, if the number is greater than 13 return double the
// absolute difference


function diff13(num) {
  num > 13 ?
    console.log(num * 2) :
    console.log(13 - num);
}

diff13(13)
