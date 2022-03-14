console.log(document.getElementsByTagName('h1')[0].innerHTML = 'Hola Mundo!')
    // This returns an HTML Collection! Not an array. But it does have that length attribute!

let colorButton = document.getElementById('color-button')
    // Set the html id of 'color-button' to the colorButton variable

function colorChange(){
    /* 
        This will change the color of the header text to that set by the css class 'color-changed'
    */
    let headerText = document.getElementsByTagName('h1')[0]
    headerText.className != 'color-changed' ? headerText.className = 'color-changed' : headerText.className = ''
}

// Set Event Listener to colorButton
colorButton.addEventListener('click', colorChange)

// Add a button to the Document
let button = document.createElement('button')
let buttonDisplay = document.createElement('h2')

button.innerHTML = 'Super Clickable'
document.body.append(button)

button.addEventListener('click', () => { 
    buttonDisplay.innerHTML != 'Tell me about your day...' ?
    buttonDisplay.innerHTML = 'Tell me about your day...' :
    buttonDisplay.innerHTML = ''
    document.body.append(buttonDisplay) 
} )

// Grab a copy of text
const source = document.querySelector('div.source');

source.addEventListener('copy', (event) => {
    console.log(event)
    const selection = document.getSelection()
    console.log(selection)
    event.clipboardData.setData('text/plain', selection.toString().toUpperCase())
    event.preventDefault();
})

// Create a variable for the form
const form = document.querySelector('#testDataForm')
console.log(form)

// Add event listener to the form
form.addEventListener('submit', (event) => {
    event.preventDefault()
    let first = document.querySelector('#first-name')
    let last = document.querySelector('#last-name')
    console.log(first)
    console.log(last)
    console.log(event)
    let firstName = event.path[0][0].value
    let lastName = event.path[0][1].value
    console.log(`This came from your form: ${firstName} ${lastName}`)
})