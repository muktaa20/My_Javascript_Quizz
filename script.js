const question = [
  {
    question: "What does HTML stand for?",
    answeres: [
      { text: "Hyper Trainer Marking Language", correct: false },
      { text: "Hyper Text Markup Language", correct: true },
      { text: "Hyper Text Markdown Language", correct: false },
      { text: "Home Tool Markup Language", correct: false },
    ],
  },
  {
    question: "Which language is used for styling web pages?",
    answeres: [
      { text: "HTML", correct: false },
      { text: "JQuery", correct: false },
      { text: "CSS", correct: true },
      { text: "XML", correct: false },
    ],
  },
  {
    question: "Which is not a JavaScript framework?",
    answeres: [
      { text: "Python Script", correct: true },
      { text: "JQuery", correct: false },
      { text: "NodeJS", correct: false },
      { text: "ReactJS", correct: false },
    ],
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    answeres: [
      { text: "//", correct: true },
      { text: "/* */", correct: false },
      { text: "#", correct: false },
      { text: "<!-- -->", correct: false },
    ],
  },
  {
    question: "What does CSS stand for?",
    answeres: [
      { text: "Creative Style Sheets", correct: false },
      { text: "Colorful Style Sheets", correct: false },
      { text: "Computer Style Sheets", correct: false },
      { text: "Cascading Style Sheets", correct: true },
    ],
  }
];

  
  const questionelement = document.getElementById("question");
  const ansbtns = document.getElementById("ans");
  const nextbtn = document.getElementById("nextbtn");
  
  let currentQuestionindex = 0;
  let score = 0;
  
  function startquiz() {
    currentQuestionindex = 0;
    score = 0;
    nextbtn.innerHTML = "Next";
    showquestion();
  }
  
  function showquestion() {
    resetstate();
    let currentQuestion = question[currentQuestionindex];
    let questionno = currentQuestionindex + 1;
    questionelement.innerHTML = questionno + ". " + currentQuestion.question;
  
    currentQuestion.answeres.forEach((answere) => {
      const button = document.createElement("button");
      button.innerHTML = answere.text;
      button.classList.add("btn");
      ansbtns.appendChild(button);
      if (answere.correct) {
        button.dataset.correct = answere.correct;
      }
      button.addEventListener("click", selectAnswere);
    });
  }
  
  function resetstate() {
    nextbtn.style.display = "none";
    while (ansbtns.firstChild) ansbtns.removeChild(ansbtns.firstChild);
  }
  
  function selectAnswere(e) {
    const selectbtn = e.target;
    const iscorrect = selectbtn.dataset.correct === "true";
    if (iscorrect) {
      selectbtn.classList.add("correct");
      score++;
    } else {
      selectbtn.classList.add("incorrect");
    }
  
    Array.from(ansbtns.children).forEach((button) => {
      if (button.dataset.correct === "true") {
        button.classList.add("correct");
      }
      button.disabled = true;
    });
    nextbtn.style.display = "block";
  }
  
  function showScore() {
    resetstate();
    questionelement.innerHTML = `You scored ${score} out of ${question.length}`;
    nextbtn.innerHTML = "Play Again";
    nextbtn.style.display = "block";
  }
  
  function handleNextButton() {
    currentQuestionindex++;
    if (currentQuestionindex < question.length) {
      showquestion();
    } else {
      showScore();
    }
  }
  
  nextbtn.addEventListener("click", () => {
    if (currentQuestionindex < question.length) {
      handleNextButton();
    } else {
      startquiz();
    }
  });
  
  startquiz();
  
