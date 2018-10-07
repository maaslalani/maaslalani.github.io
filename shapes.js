const WIDTH = window.innerWidth
const HEIGHT = window.innerHeight
const IMAGE_HEIGHT = 120
const IMAGE_WIDTH = 120
const NUMBER_OF_GRID_CELLS = 24
const SHAPES = [
  'triangle',
  'zigzag',
  'square',
  'circle',
  'lines',
  'circle',
  'lines',
  'zigzag',
  'square',
  'square',
]

let cells = [...Array(NUMBER_OF_GRID_CELLS).keys()]

function randomGridCell() {
  return cells.splice(Math.floor(Math.random() * cells.length), 1);
}

for (let i = SHAPES.length - 1; i >= 0; i--) {
  let shape = document.createElement("img");
  shape.setAttribute("src", `./shapes/${SHAPES[i]}.svg`)
  document.querySelector(`#grid-${randomGridCell()}`).appendChild(shape)
}
