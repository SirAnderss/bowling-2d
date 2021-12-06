/**
 * @description Drop ramdom bowls from array given as a parameter
 *
 * @param {Array} bowlsArray Array of bowls
 * @param {Array} stateBowlsArray original bowls Array
 * @param {Number} firstBowl bowl to drop
 * @returns {array} array with the bowls dropped
 * @example dropBowlsFromArray([6, 7, 8]) // => [7, 8]
 */
export default function dropBowlsFromArray(
  bowlsArray,
  stateBowlsArray,
  firstBowl
) {
  // Random number betweent 0 and bowlsArray length
  const rand = Math.floor(Math.random() * (bowlsArray.length - 1 + 1)) + 2

  // Shuffle the bowls
  const shuffle = bowlsArray.sort((a, b) => 0.5 - Math.random())

  // Drop randowm bowls from the array
  const spliced = shuffle.splice(0, rand)

  // Remove bowls from the stateBowlsArray
  const filtered = stateBowlsArray.filter(el => spliced.includes(el))

  // Remove the first bowl from the array and return the filtered array

  return filtered.filter((el, idx) => el !== firstBowl)
}
