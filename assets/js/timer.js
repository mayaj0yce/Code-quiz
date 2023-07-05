function beginQuiz() {

    const startButton = document.getElementById('#start');
    const quizBlock = document.querySelector('.quiz-container')
  
      if (startButton.style.display === "none"){
        startButton.style.display = "none";
      } else (
        quizBlock.style.display = "block"
      )
    }
  ;
  
  
    setTimeout(function() { alert("my message"); }, time);
  
    
  
var timeEl = document.querySelector(".time");

var secondsLeft = 10;
// var restartButton = submitButton.addEventListener('click');

const startButton = document.getElementById("start");
startButton.addEventListener("click", function setTime(){
  // Sets interval in variable
  var timerInterval = setInterval(function () {
//insert the start button to begin this. adding the timer that can end the code will be enough
    secondsLeft--;
    timeEl.textContent = secondsLeft + " timer.";
    document.getElementById('results');
    
    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);

      // Calls function to create and append image
      alert('Time is up!!');
    }
    if (submitButton === 'click') {
      clearInterval(timerInterval);
      
    }

  }, 1000);
},
),

setTime();
  
// function beginQuiz() {

//   const startButton = document.getElementById('#start');
//   const quizBlock = document.querySelector('.quiz-container')

//   if (startButton.style.display === "none") {
//     startButton.style.display = "none";
//   } else (
//     quizBlock.style.display = "block"
//   )
// }
// beginQuiz();

function sendMessage() {

}