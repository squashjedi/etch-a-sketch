
let gridSize = 4
const canvasDimensions = 960
const button = document.querySelector('button')
const gridContainer = document.querySelector('.grid-container')

function gridReset() {
  gridContainer.innerHTML = ""
  gridContainer.removeAttribute('style')
  gridSize = 0
  console.log('yes')
}

button.addEventListener('click', () => {
  gridReset()

  gridSize = prompt('Grid size?')

  if (gridSize > 100) {
    gridSize = prompt('Grid size?')
  }

  const gridDimensions = canvasDimensions / gridSize


  for (let i = 0; i < gridSize * gridSize; i++) {
    const div = document.createElement('div')
    gridContainer.appendChild(div)
    div.classList.add('grid-item')
  }
  // console.log(gridContainer)


  gridContainer.style.gridTemplateColumns = `${gridDimensions}px `.repeat(gridSize)
  gridContainer.style.gridTemplateRows = `${gridDimensions}px `.repeat(gridSize)


  const gridItems = document.querySelectorAll('.grid-item')

  const gridItem = gridItems.forEach((gridItem) => {
    gridItem.addEventListener('mouseover', () => {
      gridItem.style.backgroundColor = "black"
    })
  })

})
