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
const redBoxContainer = document.querySelector('#divContainer3');
redBoxContainer.style.display = "flex";
redBoxContainer.style.flexWrap = "wrap";

for (let i = 0; i < 100; i++) {
  // Create a new div element for each square
  const redBox = document.createElement('div');
  // Style the square
  redBox.style.width = '10px';
  redBox.style.height = '10px';
  redBox.style.background = 'red';
  redBox.style.margin = '3px'; 
  
  redBoxContainer.prepend(redBox);
}

// Emoji ghost appearing and disappearing for #4
const ghost = document.createElement("div");
  ghost.setAttribute('id', `ghostEmoji`);
  ghost.setAttribute('class', 'ghostEmoji');
  ghost.textContent = "👻";

const ghostContainer = document.querySelector('#divContainer4');

ghostContainer.prepend(ghost);

let seconds = 0;

setInterval(function () {
  if (seconds % 4 === 0) {
    ghost.textContent = "👻";
} else {
    ghost.textContent = "";
}
seconds++;
}, 2500);

// Insert text "I'm a magician. If I hover over a rabbit, it will disapear!" and emoji of rabbit for #5 🐇 
const text = document.createElement("p");
text.setAttribute("id", `textLine`);
text.setAttribute("class", 'textLine');
text.textContent = "I'm a magician. If I hover over a rabbit, it will disapear!";

const rabbitContainer = document.querySelector('#divContainer5');
  rabbitContainer.setAttribute("id", `rabbitContainer`);
  rabbitContainer.style.display = "flex";
  rabbitContainer.style.flexWrap = "wrap";
  rabbitContainer.prepend(text);

for (let i = 0; i < 20; i++) {
const rabbit = document.createElement("div");
  rabbit.setAttribute('class', 'rabbitEmoji');
  rabbit.textContent = "🐇";
  rabbit.style.margin = '3px'; 

  rabbitContainer.prepend(rabbit);
  } 

  
 

// Create countdown with bomb emoji when seconds are up for #6
