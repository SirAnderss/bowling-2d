export default function dropBowlsFromArray(
  bowlsArray,
  stateBowlsArray,
  firstBowl
) {
  // Random number betweent 0 and bowlsArray length
  const rand =
    Math.floor(Math.random() * (bowlsArray.length - 1 + 1)) +
      stateBowlsArray.length >
    5
      ? 5
      : 1

  // Shuffle the bowls
  const shuffle = bowlsArray.sort((a, b) => 0.5 - Math.random())

  // Drop randowm bowls from the array
  const spliced = shuffle.splice(0, rand)

  // Remove bowls from the stateBowlsArray
  const filtered = stateBowlsArray.filter(el => !spliced.includes(el))

  // Remove the first bowl from the array and return the filtered array
  return filtered.filter(el => el !== firstBowl)
}
