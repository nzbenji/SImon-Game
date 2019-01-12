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
        console.log(state.randomColor)
        console.log(document.body)

        var i = -1

        function start() {
            setInterval(function () {
                i = (i+1) % state.randomColor.length
                console.log(state.randomColor[i])
            }, 2000)
        }
        function stop() {
            clearInterval(i)
        }
        if(i === 6) {
            clearInterval(i)
        } else {
            //setTimeout(start, 2000)
        }
        

         //setTimeout(start, 2000)
        


        // function changeColor() {
        //     var i = -1; //if starting at 0 first starting index is index 1 (0+1)
        //     setInterval(function() {
        //         i = (i+1) % state.randomColor.length
        //         console.log(state.randomColor[i])
        //     }, 2000)
        //     if(i === state.randomColor.length) {
        //         clearInterval(changeColor)
        //     }
        // }
        // if(changeColor === state.randomColor.length) {
        //     clearInterval(changeColor)
        // } else {
        //     setTimeout(changeColor, 2000)
        // }
        
    }

    return {
        init
    }
})()

SimonGame.init();