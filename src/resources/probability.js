/**
 * @description return boolean based on the decimal value, if the decimal value it's close to one return true, if not return false
 *
 * @returns {boolean} boolean
 * @example probability(0.75) // => true
 */
export default function probability(n) {
  return Math.random() < n
}
