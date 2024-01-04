/*
 *IAT 806 Spring 2023
 * Mewael Welearegay
 * A3-02 Program: Programs a small app that demonstrates kinetic text with wavy motion.
 */

let currentTyped = ""
let angle = 0
let y = 100
let letterPositions = []

function setup() {
  createCanvas(400, 400)
  let inp = createInput("")
  inp.position(200, 10)
  inp.size(100)
  inp.input(myInputEvent)
}

function myInputEvent() {
  currentTyped = this.value()

  letterPositions = []
  for (let i = 0; i < currentTyped.length; i++) {
    letterPositions.push({x: 100 + i * 10, y: y})
  }
}

function draw() {
  background(240)
  text("Type here:", 120, 25)

  for (let i = 0; i < currentTyped.length; i++) {
    let letterAngle = angle + i * 0.2
    letterPositions[i].y = 150 + sin(letterAngle) * 50
    text(currentTyped.charAt(i), letterPositions[i].x, letterPositions[i].y)
  }

  angle += 0.1
}