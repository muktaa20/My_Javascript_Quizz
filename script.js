const question = [
    {
      question: "Do you love me?",
      answeres: [
        { text: "Yes, because you are intelligent", correct: false },
        { text: "Yes, because you are so cute", correct: false },
        { text: "Yes, because you are my everything &  wife", correct: true },
        { text: "Yes, because you are smart", correct: false },
      ],
    },
    {
      question: "What makes you fall for me more?",
      answeres: [
        { text: "Your smile", correct: true },
        { text: "Your cooking", correct: false },
        { text: "Your heart", correct: false },
        { text: "Your dressing style", correct: false },
      ],
    },
    {
      question: "How often do you think about me?",
      answeres: [
        { text: "Once a day", correct: false },
        { text: "Every hour", correct: false },
        { text: "All the time", correct: true },
        { text: "Only when I'm bored", correct: false },
      ],
    },
    {
      question: "What’s your favorite thing about us?",
      answeres: [
        { text: "The endless laughs", correct: true },
        { text: "Our matching outfits", correct: false },
        { text: "The cute selfies", correct: false },
        { text: "How we understand each other", correct: false },
      ],
    },
    {
      question: "What do you see in our future?",
      answeres: [
        { text: "Lots of travel & memories", correct: true },
        { text: "Just chilling", correct: false },
        { text: "Getting rich", correct: false },
        { text: "A cozy home together", correct: false },
      ],
    },
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
  