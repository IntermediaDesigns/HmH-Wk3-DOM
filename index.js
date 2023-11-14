// Create a empty Div for #1
const body = document.body

for (let i = 0; i < 7; i++) {
  const divContainer = document.createElement('div')
  divContainer.setAttribute('id', `divContainer${i}`)
  divContainer.setAttribute('class', 'divContainer')
  body.appendChild(divContainer)

  const numHeader = document.createElement('h1')
  divContainer.appendChild(numHeader)
  numHeader.setAttribute('id', `numHeader${i}`)
  numHeader.setAttribute('class', 'numHeader')
  numHeader.textContent = `${i + 1}`

  const divider = document.createElement('hr')
  divider.setAttribute('id', `divider${i}`)
  divider.setAttribute('class', 'dividers')

  body.appendChild(divider)
}

// Remove hr from bottom div
const removeDiv = document.querySelector('#divider6')
removeDiv.remove()

// Remove #7 from bottom div
const removeNum = document.querySelector('#numHeader6')
removeNum.remove()

// Create a blue square for #2
const blueBox = document.createElement('div')
blueBox.setAttribute('id', 'blueBox')

const blueBoxContainer = document.querySelector('#divContainer1')
blueBoxContainer.prepend(blueBox)

// Insert an image (image-2) for #2
const imgBox = document.createElement("img")
imgBox.setAttribute("src", 'https://preview.redd.it/jd25yqv8xsf31.jpg?width=640&crop=smart&auto=webp&s=9f146e09eed275511b156916db118ec9bb70a2da')

const imgContainer = document.querySelector('#divContainer2')
imgContainer.prepend(imgBox)

// 100 red squares in 2 rows for #3
const redBox = document.createElement('div')
redBox.setAttribute('id', 'redBox')

const redBoxContainer = document.querySelector('#divContainer3')
redBoxContainer.style.display = "flex";
redBoxContainer.style.flexWrap = "wrap";

redBoxContainer.prepend(redBox)

// Emoji ghost appearing and disappearing for #4

// Insert text and emoji of rabbit x 20 for #5

// Create countdown with bomb emoji when seconds are up for #6
