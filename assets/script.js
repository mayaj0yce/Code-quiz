var timer = document.getElementById('countdown');
var myQuestions = document.getElementById('question-box');
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");



function winGame() {
  wordBlank.textContent = "YOU WON!!!🏆 ";
  winCounter++
  startButton.disabled = false;
  setWins()
}

function loseGame() {
  wordBlank.textContent = "GAME OVER";
  loseCounter++
  startButton.disabled = false;
  setLosses()
}


function startTimer() {

  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
      
      if (isWin && timerCount > 0) {
       
        clearInterval(timer);
        winGame();
      }
    }
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
      loseGame();
    }
  }, 1000);
}






function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

  function showQuestions(questions, quizContainer) {
    var output = [];
    var answers;

    // for
	}

  function showResults(questions, quizContainer, resultsContainer) {
    // code will go here
  }

  // show the questions
  showQuestions(questions, quizContainer);

  // when user clicks submit, show results
  submitButton.onclick = function () {
    showResults(questions, quizContainer, resultsContainer);
  }
}
var myQuestions = [
  {
    question: "Inside which HTML element do we put JavaScript?",
    answers: {
      a: 'javascript',
      b: 'js',
      c: 'script'
    },
    correctAnswer: 'c'
  },
  {
    question: "What is the correct JavaScript syntax to write 'Hello World'?",
    answers: {
      a: 'response.write(Hello World)',
      b: '"Hello World"',
      c: 'document.write("Hello World")'
    },
    correctAnswer: 'c'
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    answers: {
      a: '<Body> section',
      b: '<Head> section',
      c: 'A and B'
    },
    correctAnswer: 'c'
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    answers: {
      a: 'alert("Hello World")',
      b: 'msgBox("Hello World")',
      c: 'alertBox("Hello World")'
    },
    correctAnswer: 'a'
  },
  {
    question: "How do you create a function?",
    answers: {
      a: 'function:myFunction()',
      b: 'function myFunction()',
      c: 'myFunction():function'
    },
    correctAnswer: 'b'
  },
  {
    question: " How do you write a conditional statement for executing some statements only if i' is NOT equal to 5?",
    answers: {
      a: "if i==5 then",
      b: "if (i==5)",
      c: "if i=5 then"
    },
    correctAnswer: 'b'
  },
  {
    question: "How can you add a comment in a JavaScript?",
    answers: {
      a: "//This is a comment",
      b: "'This is a comment",
      c: "<!--This is a comment-->"
    },
    correctAnswer: 'a'
  },
  {
    question: "How do you wrn JavaScript, the following loop will execute ________ times: 'for (x=1; x<11; x++)ite 'Hello World' in an alert box?'",
    answers: {
      a: '9',
      b: '10',
      c: 'Unable to determine'
    },
    correctAnswer: 'b'
  },
],

function showQuestions() {
 console.log(myQuestions);
}

function showQuestions(questions, quizContainer) {
  // we'll need a place to store the output and the answer choices
  var output = [];
  var answers;

  // for each question...
  for (var i = 0; i < questions.length; i++) {

    // first reset the list of answers
    answers = [];

    // for each available answer to this question...
    for (letter in questions[i].answers) {

      // ...add an html radio button
      answers.push(
        '<label>'
        + '<input type="radio" name="question' + i + '" value="' + letter + '">'
        + letter + ': '
        + questions[i].answers[letter]
        + '</label>'
      );
    }

    // add this question and its answers to the output
    output.push(
      '<div class="question">' + questions[i].question + '</div>'
      + '<div class="answers">' + answers.join('') + '</div>'
    );
  }

  // finally combine our output list into one string of html and put it on the page
  quizContainer.innerHTML = output.join('');
}

submitButton.onclick = function () {
  showResults(questions, quizContainer, resultsContainer);
}
