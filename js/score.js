/**
 * Numbers of decimal digits to round to
 */
const scale = 3;

/**
 * Calculate the score awarded when having a certain percentage on a list level
 * @param {Number} rank Position on the list
 * @param {Number} percent Percentage of completion
 * @param {Number} minPercent Minimum percentage required
 * @returns {Number}
 */
export function score(rank, percent, minPercent) { //[cite: 4, 5]
  if (rank > 150) { //[cite: 4, 5]
    return 0; //[cite: 4, 5]
  } //[cite: 4, 5]
  if (rank > 75 && percent < 100) { //[cite: 4, 5]
    return 0; //[cite: 4, 5]
  } //[cite: 4, 5]

  // New formula: P(r) = 350 * (1/7)^((r - 1) / (N - 1))[cite: 1, 2]
  const r = rank; //[cite: 2]
  const basePoints = N > 1 ? 350 * Math.pow(1 / 7, (r - 1) / (N - 1)) : 350; //[cite: 1, 2]

  let score =
    basePoints *
    ((percent - (minPercent - 1)) / (100 - (minPercent - 1))); //[cite: 5]

  score = Math.max(0, score); //[cite: 5]

  if (percent !== 100) { //[cite: 5]
    return round(score - score / 3); //[cite: 5]
  } //[cite: 5]

  return Math.max(round(score), 0); //[cite: 5]
} //[cite: 5]
}

export function round(num) {
    if (!('' + num).includes('e')) {
        return +(Math.round(num + 'e+' + scale) + 'e-' + scale);
    } else {
        var arr = ('' + num).split('e');
        var sig = '';
        if (+arr[1] + scale > 0) {
            sig = '+';
        }
        return +(
            Math.round(+arr[0] + 'e' + sig + (+arr[1] + scale)) +
            'e-' +
            scale
        );
    }
}
