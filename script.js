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
  },

  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    answeres: [
      { text: "var", correct: false },
      { text: "let", correct: false },
      { text: "const", correct: false },
      { text: "All of the above", correct: true },
    ],
  },
  {
    question: "What is the output of `typeof null` in JavaScript?",
    answeres: [
      { text: "null", correct: false },
      { text: "undefined", correct: false },
      { text: "object", correct: true },
      { text: "function", correct: false },
    ],
  },
  {
    question: "Which method is used to convert JSON data to a JavaScript object?",
    answeres: [
      { text: "JSON.parse()", correct: true },
      { text: "JSON.stringify()", correct: false },
      { text: "JSON.toObject()", correct: false },
      { text: "JSON.convert()", correct: false },
    ],
  },
  {
    question: "What will `2 + '2'` return in JavaScript?",
    answeres: [
      { text: "'4'", correct: false },
      { text: "4", correct: false },
      { text: "'22'", correct: true },
      { text: "NaN", correct: false },
    ],
  },
  {
    question: "Which method is used to add an element at the end of an array?",
    answeres: [
      { text: "push()", correct: true },
      { text: "pop()", correct: false },
      { text: "shift()", correct: false },
      { text: "unshift()", correct: false },
    ],
  },
  {
    question: "What is a closure in JavaScript?",
    answeres: [
      { text: "Function with no return value", correct: false },
      { text: "Nested function with access to outer scope", correct: true },
      { text: "Function that closes the app", correct: false },
      { text: "Function used for debugging", correct: false },
    ],
  },
  {
    question: "Which hook is used to manage state in a React functional component?",
    answeres: [
      { text: "useEffect", correct: false },
      { text: "useReducer", correct: false },
      { text: "useState", correct: true },
      { text: "useMemo", correct: false },
    ],
  },
  {
    question: "What does JSX stand for?",
    answeres: [
      { text: "JavaScript XML", correct: true },
      { text: "Java Syntax Extension", correct: false },
      { text: "JavaScript Extension", correct: false },
      { text: "Java Extended Syntax", correct: false },
    ],
  },
  {
    question: "Which lifecycle method is called after a component is rendered?",
    answeres: [
      { text: "componentWillMount", correct: false },
      { text: "componentDidMount", correct: true },
      { text: "render", correct: false },
      { text: "constructor", correct: false },
    ],
  },
  {
    question: "Which hook replaces componentDidMount in functional components?",
    answeres: [
      { text: "useState", correct: false },
      { text: "useEffect", correct: true },
      { text: "useContext", correct: false },
      { text: "useReducer", correct: false },
    ],
  },
  {
    question: "In React, keys are used to:",
    answeres: [
      { text: "Identify which items have changed", correct: true },
      { text: "Style elements", correct: false },
      { text: "Bind event handlers", correct: false },
      { text: "Store state", correct: false },
    ],
  },
  {
    question: "How do you lift state up in React?",
    answeres: [
      { text: "By moving it to the parent component", correct: true },
      { text: "By using useEffect", correct: false },
      { text: "By using useReducer", correct: false },
      { text: "By calling setState from child", correct: false },
    ],
  },
  {
    question: "Which method is used to update the state in a React class component?",
    answeres: [
      { text: "updateState()", correct: false },
      { text: "this.setState()", correct: true },
      { text: "changeState()", correct: false },
      { text: "setState()", correct: false },
    ],
  },
  {
    question: "What is the default port for React development server?",
    answeres: [
      { text: "3000", correct: true },
      { text: "8080", correct: false },
      { text: "5000", correct: false },
      { text: "8000", correct: false },
    ],
  },
  {
    question: "Which command is used to create a new React app?",
    answeres: [
      { text: "npm start react-app", correct: false },
      { text: "create-react-app", correct: true },
      { text: "npm create app", correct: false },
      { text: "npx react-init", correct: false },
    ],
  },
  {
    question: "Which hook is used for side effects in React?",
    answeres: [
      { text: "useState", correct: false },
      { text: "useEffect", correct: true },
      { text: "useMemo", correct: false },
      { text: "useCallback", correct: false },
    ],
  },
  {
    question: "What is the virtual DOM in React?",
    answeres: [
      { text: "A copy of the real DOM", correct: true },
      { text: "A new web browser", correct: false },
      { text: "A real DOM replacement", correct: false },
      { text: "An HTML file", correct: false },
    ],
  },
  {
    question: "What does `props` stand for in React?",
    answeres: [
      { text: "Properties", correct: true },
      { text: "Prototypes", correct: false },
      { text: "Proper state", correct: false },
      { text: "Provisions", correct: false },
    ],
  },
  {
    question: "Which of the following is true about React?",
    answeres: [
      { text: "React is a framework", correct: false },
      { text: "React is a library", correct: true },
      { text: "React is a database", correct: false },
      { text: "React is an API", correct: false },
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
  
