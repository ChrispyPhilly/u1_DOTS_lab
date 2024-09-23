let score = 0; 

const ball = document.querySelector('.js-ball');
const scoreDisplay = document.querySelector('.js-score');
const levelWinner = document.querySelector('.level-winner');

//ball.addEventListener('click', () => {  
  //score += 10;  
  //console.log(`Current score: ${score}`); 

  //if (score >= 100) { 
    //console.log("Level 1 complete!");
    
  //}
//});

ball.addEventListener('click', function () {
    if (score < 100) {
        score = score + 10;
        scoreDisplay.innerText = score.toString();
        if (score >= 100){
            scoreDisplay.innerText = 100
            levelWinner.style.setProperty('opacity', 1);
        }
}})
