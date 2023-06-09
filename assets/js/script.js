(function () {

  function buildQuiz() {
    const output = [];

    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        const answers = [];

        for (letter in currentQuestion.answers) {

          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        output.push(
          `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
        );
      }
    );

    quizContainer.innerHTML = output.join('');
  }

  function showResults() {


    const answerContainers = quizContainer.querySelectorAll('.answers');

    let numCorrect = 0;
    let secLeft = 100;

    myQuestions.forEach((currentQuestion, questionNumber) => {
      // var secondsLeft = 100;
      // const end = secondsLeft === 0;

      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;


      if (userAnswer === currentQuestion.correctAnswer) {

        numCorrect++;
        secLeft + 5;

        answerContainers[questionNumber].style.color = 'lightgreen';
      }

    
      else {

        answerContainers[questionNumber].style.color = 'red';
      }
    });


    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if (currentSlide === 0) {
      previousButton.style.display = 'none';
    }
    else {
      previousButton.style.display = 'inline-block';
    }
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else {
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  // Variables
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
   
    {
      question: "What does HTML stand for?",
      answers: {
        a: "Hyper Text Preprocessor",
        b: "Hyper Text Markup Language",
        c: "Hyper Text Multiple Language",
        d: "Hyper Tool Multi Language"
      },
      correctAnswer: "b"
    },
    {
      question: "What does CSS stand for?",
      answers: {
        a: "Common Style Sheet",
        b: "Colorful Style Sheet",
        c: "Computer Style Sheet",
        d: "Cascading Style Sheet"
      },
      correctAnswer: "d"
    },
    {
      question: "Which tool can you use to ensure code quality?",
      answers: {
        a: "Angular",
        b: "jQuery",
        c: "RequireJS",
        d: "ESLint"
      },
      correctAnswer: "d"
    },
    {
      question: "can you create a website without CSS",
      answers: {
        a: "yes",
        b: "no",
      },
      correctAnswer: "a"
    },
  ];

  buildQuiz()
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;
  console.log(currentSlide);

 showSlide(currentSlide);
  submitButton.addEventListener('click', showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
  
});


// Selects element by class