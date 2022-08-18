const output = document.querySelector('pre')

function handleClick(event) {
  output.innerHTML += `You clicked on ${event.currentTarget.tagName}\n`  
}


for(let element of document.querySelectorAll('*')) {
  element.addEventListener('click', handleClick)
  element.addEventListener('click', handleClick, true)
}