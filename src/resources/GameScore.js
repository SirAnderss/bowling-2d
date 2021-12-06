export default function GameScore(score) {
  this.game = score

  this.frameCount = 0
  this.score = 0
  this.scoreByFrames = []

  this.calcScore = function () {
    let i = 0

    do {
      // see if we're at the last roll
      if (this.gameOver()) {
        break
      }

      let frameScore = 0
      const roll1 = this.game[i]

      // tally score for a strike
      if (roll1 == 10) {
        frameScore = 10 + this.game[i + 1] + this.game[i + 2]
      } else {
        // find out how many pins the second roll knocked down
        const roll2 = this.game[++i]

        // tally score for spare or sum the two rolls
        if (roll1 + roll2 == 10) {
          frameScore = 10 + this.game[i + 1]
        } else {
          frameScore = roll1 + roll2
        }
      }

      this.score += frameScore
      this.scoreByFrames.push(this.score)

      this.frameCount++
      i++
    } while (i < this.game.length)

    return this.score
  }

  this.gameOver = function () {
    // frame count starts at 0 so 10 is really the eleventh frame (in other words the game is over)
    return this.frameCount == 10
  }
}
