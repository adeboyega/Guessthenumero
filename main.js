let guess = document.querySelector('.guess')
let check = document.querySelector('.btncheck')
let message = document.querySelector('.message')
let number = document.querySelector('.number')
let correctnum = Math.floor(Math.random()*20)+1
let score = document.querySelector('.score')
let highscore = document.querySelector('.highscore')
let againbtn = document.querySelector(".btnagain")
let scorepoints = 20


//check button and its function
check.addEventListener('click',gamelogic)

//message function
function displaymessage(text){
    message.textContent = text
}

//game logic
function gamelogic(e){
    localStorage.setItem("highscore",highscore.textContent)
    scorepoints--
    if(guess.value == 0){
        displaymessage('📛 No number')
    }else if(guess.value>correctnum || guess.value<correctnum){
        guess.value>correctnum? displaymessage("👇🏻 go lower"):displaymessage("👆🏻 go higher")
        score.textContent = scorepoints
        guess.value = " "
    }else if(guess.value == correctnum){
        displaymessage("🏆 you win")
        number.textContent = correctnum
        document.querySelector('body').style.backgroundColor = "#60b347"
        number.style.width = "30rem"
        guess.value = " "
        localStorage.setItem("highscore",highscore.textContent.toString())
        if(scorepoints >localStorage.getItem("highscore") ){
            localStorage.setItem("highscore",scorepoints)
            highscore.textContent= localStorage.getItem("highscore")
        }
    }

    if(scorepoints == 0){
        displaymessage("📛 you lose")
        number.textContent = correctnum
        check.disabled = true
    }
    e.preventDefault()
}

//againbutton reload logic
againbtn.addEventListener('click',restart)
function restart(){
    console.log('active')
    score.textContent = 20
    displaymessage("Start guessing...")
    correctnum = Math.floor(Math.random()*20)+1
    number.textContent = '?'
    guess.value = " "
    document.querySelector('body').style.backgroundColor = "#222"
    number.style.width = '15rem'
}
