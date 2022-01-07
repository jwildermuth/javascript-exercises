/* Write a JavaScript program to check whether a given integer is
within 20 of 100 or 400. */

const targets = [100, 400];
const margin = 20;
const input = 388;  //user inputed number


function within20(input) {
  targets.forEach((target) => {
    const min = target - margin;
    const max = target + margin;
    if (input >= min && input <= max) {
      console.log(`${input} is within ${margin} of ${target}`)
    }
  })
}

within20(input)
