const SimonGame = (() => {
  // global
  const buttons = document.querySelector('.btns')
  
  const state = {
    start: false,
    startingIndex: 6,
    colors: ['red', 'green', 'blue', 'yellow'],
    randomColor: [],
    guessedColor: [],
    correctCounter: 0,
    wrongGuess: false
  }

  const init = _ => {
    listeners()
    startGame()
  }

  const render = _ => {

  }

  const listeners = _ => {
    buttons.addEventListener('click', onMouseClick)
  }

  const onMouseClick = event => {
    const {guessedColor} = state
    const target = event.target

    if (target.classList.contains('red')) {
      guessedColor.push('red')
    }
    if (target.classList.contains('green')) {
      guessedColor.push('green')
    }
    if (target.classList.contains('blue')) {
      guessedColor.push('blue')
    }
    if (target.classList.contains('yellow')) {
      guessedColor.push('yellow')
    }
    console.log(guessedColor)
  }

  const getRandomColors = (colors, length) => {
    return Array.from({length}, _ => colors[Math.floor(Math.random() * 4)])
  }

  const startGame = _ => {
    const {colors, startingIndex} = state
    state.randomColor = getRandomColors(colors, startingIndex) // Get random colors based on value of startingIndex

    var color
    var originalColor // store original color
    let elements = document.getElementsByClassName('color')

    function changeColor () {
      color.style.backgroundColor = 'black'

      setTimeout(() => {
        color.style.backgroundColor = originalColor
      }, 1000)
    }

    console.log(state.randomColor)
    let i = -1
    let startInterval = setInterval(() => {
      i = (i + 1) % state.randomColor.length

      console.log(state.randomColor[i])

      switch (state.randomColor[i]) {
        case 'red':
          color = document.querySelector('.red')
          originalColor = getComputedStyle(color).backgroundColor
          changeColor()
          break

        case 'blue':
          color = document.querySelector('.blue')
          originalColor = getComputedStyle(color).backgroundColor
          changeColor()
          break

        case 'green':
          color = document.querySelector('.green')
          originalColor = getComputedStyle(color).backgroundColor
          changeColor()
          break
        case 'yellow':
          color = document.querySelector('.yellow')
          originalColor = getComputedStyle(color).backgroundColor
          changeColor()
          break
        default:
          break
      }

      if (i === state.randomColor.length - 1) {
        console.log(state.randomColor.length - 1)
        originalColor = getComputedStyle(color).backgroundColor
        clearInterval(startInterval)
      }
    }, 1500)
  }

  return {
    init
  }
})()

SimonGame.init()

// if(state.randomColor[i] === 'red') {
//     color = document.querySelector('.red')
//     originalColor = getComputedStyle(color).backgroundColor
//     changeColor()
// }
// if(state.randomColor[i] === 'blue') {
//     color = document.querySelector('.blue')
//     originalColor = getComputedStyle(color).backgroundColor
//     changeColor()
// }
// if(state.randomColor[i] === 'green') {
//     color = document.querySelector('.green')
//     originalColor = getComputedStyle(color).backgroundColor
//     changeColor()
// }
// if(state.randomColor[i] === 'yellow') {
//     color = document.querySelector('.yellow')
//     originalColor = getComputedStyle(color).backgroundColor
//     changeColor()
// }
