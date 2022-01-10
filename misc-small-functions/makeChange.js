'use-strict';

/*Write a JS function that determines number of each coin to make
a given total*/


function makeChange(total) {
  const coins = [25, 10, 5, 1];
  let coinCount = {};

  coins.forEach((coin) => {
    let count = Math.floor(total / coin);
    if (count) { coinCount[coin] = count };
    total = total % coin;
  })

  console.log(coinCount)
}

makeChange(99)
