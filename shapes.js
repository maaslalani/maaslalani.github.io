const WIDTH = window.innerWidth
const HEIGHT = window.innerHeight
const IMAGE_HEIGHT = 120
const IMAGE_WIDTH = 120
const SHAPES = [
  'square',
  'square',
  'square',
  'circle',
  'circle',
  'triangle',
  'lines',
  'lines',
  'zigzag',
  'zigzag',
]

let shapes = document.querySelector('geometric-shapes')

function randomHeight() {
  return Math.random() * (HEIGHT - IMAGE_HEIGHT)
}

function randomWidth() {
  return Math.random() * (WIDTH / 2 - IMAGE_WIDTH)
}

for (let i = SHAPES.length - 1; i >= 0; i--) {
  let shape = document.createElement("img");
  shape.setAttribute("src", `./shapes/${SHAPES[i]}.svg`)
  shape.style.position = "absolute"
  shape.style.top = `${randomHeight()}px`
  shape.style.right = `${randomWidth()}px`
  shapes.appendChild(shape)
}
