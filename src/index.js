import TextNowrap from './text-nowrap'
import TextNowrapObserver from './text-nowrap-observer'

document.addEventListener('DOMContentLoaded', ()=>{

  for(let i=0; i < 100; i++) {
    let newElement = document.createElement('figure')
    newElement.innerHTML = getRandomContent()
    newElement.style.fontSize = "5rem"
    document.body.appendChild(newElement)
    new TextNowrap(newElement)

    let newTwoLines = document.createElement('figure')
    newTwoLines.innerHTML = getRandomContent(200, 100)
    newTwoLines.style.fontSize = "5rem"
    newTwoLines.style.borderColor = "red"
    document.body.appendChild(newTwoLines)
    new TextNowrap(newTwoLines, {
      lines: 2
    })
  }

  TextNowrapObserver.bind('.test')

})

function getRandomContent(maxLength=100, minLength=10){
  let alpha = 'aazertyuiopqsdfghjklmwxcvbn       '.split('')
  let length = Math.floor(Math.random() * (maxLength - minLength)) + minLength
  let content = ''
  for(let i = 0; i < length; i++) {
    content += alpha[Math.floor(Math.random()*alpha.length)]
  }
  return content
}
