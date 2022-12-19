let guess = document.querySelector('.guess')
let check = document.querySelector('.btncheck')
let message = document.querySelector('.message')
let number = document.querySelector('.number')
let correctnum = Math.floor(Math.random()*20)+1
let score = document.querySelector('.score')
let highscore = document.querySelector('.highscore')
let againbtn = document.querySelector(".btnagain")
let scorepoints = 20

againbtn.addEventListener('click',restart)
function restart(){
    console.log('active')
    score.textContent = 20
    message.textContent = "Start guessing..."
    correctnum = Math.floor(Math.random()*20)+1
    number.textContent = '?'
    guess.value = " "
    document.querySelector('body').style.backgroundColor = "#222"
    number.style.width = '15rem'
}



check.addEventListener('click',gamelogic)
function gamelogic(e){
    localStorage.setItem("highscore",highscore.textContent)
    scorepoints--
    
    if(guess.value > correctnum ){
        score.textContent = scorepoints
        message.textContent = "👇🏻 go lower"
        guess.value = " "
    }else if(guess.value < correctnum){
        message.textContent = "👆🏻 go higher"
        score.textContent = scorepoints
        guess.value = " "
    }else if(guess.value == correctnum){
        message.textContent = "🏆 you win"
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
        message.textContent = "📛 you lose"
        number.textContent = correctnum
        check.disabled = true
    }


   
    e.preventDefault()
}
