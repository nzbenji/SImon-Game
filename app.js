const SimonGame = (() => {

    //global
    const buttons = document.querySelector('.btns')
    const state = {
        start: false,
        startingIndex: 3,
        colors: ['red', 'green', 'blue', 'yellow'],
        randomColor: [],
        guessedColor: [],
        correctCounter: 0,
        wrongGuess: false
    }

    const init = _ => {
        listeners()
        computerTurn()
        getRandomColors()
    }

    const render = _ => {

    }

    const listeners = _ => {
        buttons.addEventListener('click', onMouseClick)
    }

    const onMouseClick = event => {
        const { guessedColor } = state;
        const target = event.target

        if(target.classList.contains('red')) {
            guessedColor.push('red') 
        }
        if(target.classList.contains('green')) {
            guessedColor.push('green') 
        }
        if(target.classList.contains('blue')) {
            guessedColor.push('blue') 
        }
        if(target.classList.contains('yellow')) {
            guessedColor.push('yellow') 
        }
        console.log(guessedColor)
    }

    const getRandomColors = (colors, length) => {
        return Array.from({length}, _ => colors[Math.floor(Math.random() * 4)])
    }

    const computerTurn = _ => {
        const { colors, startingIndex } = state
        state.randomColor = getRandomColors(colors, startingIndex)
        console.log(state.randomColor)
    }

    return {
        init
    }
})()

SimonGame.init();