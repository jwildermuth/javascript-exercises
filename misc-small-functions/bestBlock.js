'use-strict'

/*  Write a JS function that finds the best block/location for the given
list of requirements. The 'best' block would be where the reqs are
minimal distance away.
  */


const blocks = [
  {
    'gym': false,
    'school': true,
    'store': false
  },
  {
    'gym': true,
    'school': false,
    'store': false
  },
  {
    'gym': true,
    'school': true,
    'store': false
  },
  {
    'gym': false,
    'school': true,
    'store': false
  },
  {
    'gym': false,
    'school': true,
    'store': true
  },
  {
    'gym': false,
    'school': false,
    'store': false
  },
]

const reqs = ['gym', 'school', 'store']  // => index3 is best


function getBestBlock() {
  let bestBlock = 0
  let bestScore = blocks.length * reqs.length
  for (let i = 0; i < blocks.length; i++) {
    let score = 0;
    reqs.forEach(req => {
      if (!blocks[i][req]) {
        // Get ranges in both directions from the current block
        const rngDown = Array.from(Array(i).keys()).reverse()
        const rngUp = Array.from(Array(blocks.length - (i + 1))
          .keys())
          .map(num => num + (i + 1))


        function findClosestReq(range) {
          // determine how many hops away the given req is in a range
          for (let j = 0; j < range.length; j++) {
            if (blocks[range[j]][req]) {
              let distance = j + 1
              return distance * distance
            }
          }
          return blocks.length  // return max value if not found
        }


        // get best score for each range
        let bestDown = blocks.length
        let bestUp = blocks.length
        if (rngDown.length > 0) {
          bestDown = findClosestReq(rngDown)
        }
        if (rngUp.length > 0) {
          bestUp = findClosestReq(rngUp)
        }
        score += Math.min(bestDown, bestUp);
      }
    })

    console.log(`Block ${i} score: ${score}`)
    if (score < bestScore) {
      bestScore = score;
      bestBlock = i;
    }
  }
  console.log(`Block ${bestBlock} is the best with a score of: ${bestScore}`)
}


getBestBlock()
