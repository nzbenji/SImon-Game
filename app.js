const SimonGame = (() => {

    //global
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


    const startGame = _ => {
        const { colors, startingIndex } = state
        state.randomColor = getRandomColors(colors, startingIndex) //Get random colors based on value of startingIndex
        
        let color = document.getElementById("red")
        let originalColor = getComputedStyle(color).backgroundColor //store original color

        color.style.backgroundColor

        let i = -1
            let startInterval = setInterval(() => {
                i = (i+1) % state.randomColor.length
                console.log(state.randomColor[i])
                
                if(state.randomColor[i] === 'red') {
                    document.getElementById("red").style.backgroundColor = 'black'
                } 
    
                if(i === state.randomColor.length -1) {
                    clearInterval(startInterval)
                }
            }, 2000)    
    }

    return {
        init
    }
})()

SimonGame.init();