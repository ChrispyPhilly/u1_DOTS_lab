const ball = document.querySelectorAll('.js-ball');
const scoreDisplay= document.querySelector('.js-score');
const levelWinner = document.querySelector('.level-winner');

var score = 0;

ball.forEach(el => el.addEventListener('click', function () {
    if (score < 100) {
        const ballScore = Number(el.getAttribute("data-increment"))
        score = score + ballScore;
        scoreDisplay.innerText = score.toString();
        if (score >= 100){
            scoreDisplay.innerText = 100
            levelWinner.style.setProperty('opacity', 100);
        }
}}))
