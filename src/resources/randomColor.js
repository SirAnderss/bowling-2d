/**
 * Genera un color random
 *
 * @module randomColor
 */

/**
 * @description Genera un color random en formato hexadecimal sin el #
 *
 * @returns {string} string
 * @example randomColor() // => '087FFA'
 */
export default function randomColor() {
  const letters = '0123456789ABCDEF'.split('')
  let color = ''

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }

  return `#${color}`
}
