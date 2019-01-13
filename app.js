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
        
        let color;
        
        

        let elements = document.getElementsByClassName('color')
        for (const i of elements) {
            if(i.classList.contains('red')) {
                color = document.querySelector('.red')
            } 
            // if(i.classList.contains('blue')) {
            //     console.log(i)
            //     //color = document.querySelector('.blue')
            // } 
            // if(i.classList.contains('green')) {
            //     console.log(i)
            //     //color = document.querySelector('.blgreenue')
            // } 
            // if(i.classList.contains('yellow')) {
            //     console.log(i)
            //     //color = document.querySelector('.yellow')
            // }
        }
        
        let originalColor = getComputedStyle(color).backgroundColor //store original color
        
        function changeColor() {
            color.style.backgroundColor = 'black'

            setTimeout(() => {
                color.style.backgroundColor = originalColor
            }, 1000)
        }
        


        console.log(state.randomColor)
        let i = -1
            let startInterval = setInterval(() => {
                i = (i+1) % state.randomColor.length
                
                console.log(state.randomColor[i])
                
                


                if(state.randomColor[i] === 'red') {
                    changeColor()
                } 
    
                if(i === state.randomColor.length -1) {
                    clearInterval(startInterval)
                }
            }, 1500)    
    }

    return {
        init
    }
})()

SimonGame.init();
















// switch(state.randomColor[i]) {
//     case 'red':
//         color = document.getElementById("red")
//         changeColor()
//         break;
//     case 'blue':
//         color = document.getElementById("blue")
//         changeColor()
//         break;
//     case 'green':
//     color = document.getElementById("green")
//         changeColor()
//         break;
//     case 'yellow':
//         color = document.getElementById("yellow")  
//         changeColor()
//         break;
//     default:
//         break;
// }