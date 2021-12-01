/**
 * Invierte el color segun el parametro
 *
 * @module invertHex
 */

/**
 * @description Invierte el color segun el parametro si el color en HEX es incorrecto retorna #fff
 *
 * @returns {string} string
 * @example invertHex(#252525) // => '#DADADA'
 */

export default function invertHex(hex) {
  if (!hex.length) return '#fff'

  const clearString = hex.split('')
  clearString.shift()

  let joined

  if (clearString.length === 3) {
    joined = `${clearString[0]}${clearString[1]}${clearString[2]}${clearString[0]}${clearString[1]}${clearString[2]}`

    const converted = parsed(joined)

    return `#${converted}`
  }

  if (clearString.length === 6) {
    const converted = parsed(clearString.join(''))

    return `#${converted}`
  }

  return '#fff'
}

const parsed = str =>
  (Number(`0x1${str}`) ^ 0xffffff).toString(16).substr(1).toUpperCase()
