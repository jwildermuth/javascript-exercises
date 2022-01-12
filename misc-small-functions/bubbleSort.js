'use-strict';

/*Write a JS function that bubble sorts
a list of numbers from greatest to least*/


function bubbleSort(input) {
  let iters = 0;

  for (let i = 0; i < input.length; i++) {
    iters += 1;
    for (let j = 0; j < input.length; j++) {
      if (input[j] < input[j + 1]) {
        let tmp = input[j];
        input[j] = input[j + 1];
        input[j + 1] = tmp;
      }
    }
  }

  console.log(input)
  console.log(iters)
}


bubbleSort([1, 33, 7, 44, 2, 33, 832])

// bubbleSort([832, 44, 33, 33, 7,  2,  1])
