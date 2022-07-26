const DEFAULT_SIZE = 16
const DEFAULT_MODE = 'sketch'

let currentSize = DEFAULT_SIZE
let currentMode = DEFAULT_MODE

const grid = document.querySelector('#grid')
const btnClear = document.querySelector('#btn-clear')
const sizeValue = document.querySelector('#size-value')
const sizeSlider = document.querySelector('#size-slider')

btnClear.onclick = () => reloadGrid()
sizeSlider.onchange = (e) => resizeGrid(e.target.value)

let mouseDown = false
grid.onmousedown = () => mouseDown = true
grid.onmouseup = () => mouseDown = false

function resizeGrid(size) {
  currentSize = size
  sizeValue.textContent = `${currentSize} x ${currentSize}`
  reloadGrid()
}

function reloadGrid() {
  grid.innerHTML = ''
  setupGrid(currentSize)
}

function changeColour(e) {
  if (e.type === 'mouseover' && !mouseDown) return
  e.target.style.backgroundColor = '#333'
}

function setupGrid(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement('div')
    gridElement.classList.add('grid-element')
    gridElement.addEventListener('mousedown', changeColour)
    gridElement.addEventListener('mouseover', changeColour)
    grid.appendChild(gridElement)
  }

}

setupGrid(DEFAULT_SIZE)