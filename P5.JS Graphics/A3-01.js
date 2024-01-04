/*
 *IAT 806 Spring 2023
 * Mewael Welearegay
 * A3-01 Program: Makes a subclass of p5.Image that implements a "mosaic(blockSize)" method to create a pixelate image.
 */
let baseImage
class ImageMosaic extends p5.Image {
  mosaic(blockSize) {
    for (let y = 0; y < this.height; y += blockSize) {
      for (let x = 0; x < this.width; x += blockSize) {
        let avgR = 0
        let avgG = 0
        let avgB = 0
        let count = 0
        for (let i = 0; i < blockSize; i++) {
          for (let j = 0; j < blockSize; j++) {
            let px = this.get(x + i, y + j)
            avgR += px[0]
            avgG += px[1]
            avgB += px[2]
            count++;
          }
        }
        avgR /= count
        avgG /= count
        avgB /= count
        for (let i = 0; i < blockSize; i++) {
          for (let j = 0; j < blockSize; j++) {
            this.set(x + i, y + j, [avgR, avgG, avgB, 255])
          }
        }
      }
    }
    this.updatePixels()
  }
}

function preload() {
  baseImage = loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/322px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg")
}

function setup() {
  createCanvas(500, 500)
  let x = baseImage.width
  let y = baseImage.height
  let newMosaic = new ImageMosaic(x, y)
  newMosaic.copy(baseImage, 0, 0, x, y, 0, 0, x, y)
  newMosaic.mosaic(10)
  image(newMosaic, 0, 0)
  newMosaic.mosaic(20)
  image(newMosaic, 0, y + 10)
  newMosaic.mosaic(30)
  image(newMosaic, 0, (y + 10) * 2)
}