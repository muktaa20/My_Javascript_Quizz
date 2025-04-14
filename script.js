const question = [
  {
    question: "What is the difference between 'Pass by Value' and 'Pass by Reference' in JavaScript?",
    answeres: [
      {
        text: "Pass by value copies the actual value; pass by reference copies the memory address.",
        correct: true
      },
      {
        text: "Pass by reference duplicates the data to prevent side effects.",
        correct: false
      },
      {
        text: "Pass by value only applies to objects, not primitives.",
        correct: false
      },
      {
        text: "Both pass by value and reference behave the same in JavaScript.",
        correct: false
      }
    ]
  },
  {
    question: "What is the difference between map() and filter() in JavaScript?",
    answeres: [
      {
        text: "map() transforms each element and returns a new array; filter() returns elements that meet a condition.",
        correct: true
      },
      {
        text: "filter() modifies the original array; map() does not.",
        correct: false
      },
      {
        text: "map() only works with numbers; filter() only works with strings.",
        correct: false
      },
      {
        text: "Both map() and filter() return the same output for any array.",
        correct: false
      }
    ]
  },
  {
    question: "What is the main difference between map() and forEach() in JavaScript?",
    answeres: [
      {
        text: "map() returns a new array; forEach() does not return anything.",
        correct: true
      },
      {
        text: "forEach() returns a new array of the same length; map() does not.",
        correct: false
      },
      {
        text: "map() modifies the original array; forEach() does not.",
        correct: false
      },
      {
        text: "forEach() is used only for numbers; map() is used for strings.",
        correct: false
      }
    ]
  },
  {
    question: "Which statement correctly describes the difference between call(), apply(), and bind() in JavaScript?",
    answeres: [
      {
        text: "call() and apply() invoke the function immediately, while bind() returns a new function.",
        correct: true
      },
      {
        text: "bind() and apply() call the function immediately, while call() returns a new function.",
        correct: false
      },
      {
        text: "call() and bind() are identical and interchangeable.",
        correct: false
      },
      {
        text: "apply() and bind() are used for asynchronous calls only.",
        correct: false
      }
    ]
  },
  {
    question: "List out some key features of ES6?",
    answeres: [
      { text: "Let/Const, Arrow Functions, Classes, Promises", correct: true },
      { text: "Hoisting, Callbacks, Prototypes", correct: false },
      { text: "CSS modules and Sass support", correct: false },
      { text: "jQuery integration", correct: false }
    ]
  },
  {
    question: "What’s the spread operator in JavaScript?",
    answeres: [
      { text: "It expands an array or object into individual elements", correct: true },
      { text: "It merges two objects", correct: false },
      { text: "It slices arrays", correct: false },
      { text: "It's used only in loops", correct: false }
    ]
  },
  {
    question: "What is rest operator in JavaScript?",
    answeres: [
      { text: "It combines multiple elements into a single array or object", correct: true },
      { text: "It removes extra parameters", correct: false },
      { text: "It pauses execution", correct: false },
      { text: "It’s used for copying", correct: false }
    ]
  },
  {
    question: "What is temporal dead zone?",
    answeres: [
      { text: "The time between declaring a variable with let/const and its initialization", correct: true },
      { text: "A bug in the time library", correct: false },
      { text: "The time taken for setTimeout to trigger", correct: false },
      { text: "A runtime exception in a loop", correct: false }
    ]
  },
  {
    question: "What is a polyfill in JavaScript?",
    answeres: [
      { text: "Code that implements a feature on older browsers that do not support it", correct: true },
      { text: "A CSS-only patch for layout issues", correct: false },
      { text: "A tool to compress code", correct: false },
      { text: "An HTML element", correct: false }
    ]
  },
  {
    question: "What is prototype in JavaScript?",
    answeres: [
      { text: "An object from which other objects inherit properties", correct: true },
      { text: "A function keyword", correct: false },
      { text: "A reserved class name", correct: false },
      { text: "A CSS style", correct: false }
    ]
  },
  {
    question: "What is an IIFE (Immediately Invoked Function Expression) in JavaScript?",
    answeres: [
      {
        text: "A function that runs immediately after it is defined",
        correct: true
      },
      {
        text: "A function that only runs after a delay",
        correct: false
      },
      {
        text: "A method to create a global function",
        correct: false
      },
      {
        text: "A built-in JavaScript method to handle async operations",
        correct: false
      }
    ]
  },
  {
    question: "What are the different datatypes in JavaScript?",
    answeres: [
      { text: "String, Number, Boolean, Null, Undefined, Symbol, BigInt, Object", correct: true },
      { text: "HTML, CSS, JS, JSON", correct: false },
      { text: "Variables, Functions, Loops", correct: false },
      { text: "Primitive, Non-Primitive, Reference", correct: false }
    ]
  },
  {
    question: "What is the difference between authentication and authorization?",
    answeres: [
      { text: "Authentication verifies who the user is; Authorization determines what they can access.", correct: true },
      { text: "Authentication checks permissions; Authorization checks identity.", correct: false },
      { text: "Authentication and Authorization are the same.", correct: false },
      { text: "Authorization happens before authentication.", correct: false }
    ]
  },
  {
    question: "What is the key difference between null and undefined in JavaScript?",
    answeres: [
      { text: "null means a variable has no value; undefined means a variable was declared but not assigned", correct: true },
      { text: "They are exactly the same and can be used interchangeably", correct: false },
      { text: "undefined is used for objects only", correct: false },
      { text: "null is the default value for uninitialized variables", correct: false }
    ]
  },
  {
    question: "What is the output of 3 + 2 + '7'?",
    answeres: [
      { text: "5 + '7' => '57'", correct: true },
      { text: "5 + 7 => 12", correct: false },
      { text: "3 + 2 + '7' => '327'", correct: false },
      { text: "Invalid operation", correct: false }
    ]
  },
  {
    question: "What is the difference between slice and splice in JavaScript?",
    answeres: [
      { text: "slice() returns a shallow copy of a portion of an array without modifying the original array.", correct: true },
      { text: "splice() modifies the original array by adding or removing elements.", correct: true },
      { text: "slice() can only be used to add elements to an array.", correct: false },
      { text: "splice() returns a new array without changing the original array.", correct: false }
    ]
  },{
    question: "What is destructuring?",
    answeres: [
      {
        text: "Destructuring is a JavaScript feature that allows unpacking values from arrays or properties from objects into distinct variables.",
        correct: true
      },
      {
        text: "Destructuring is a method used to encrypt data in JavaScript.",
        correct: false
      },
      {
        text: "Destructuring refers to deleting variables or functions from the scope.",
        correct: false
      },
      {
        text: "Destructuring is a way to combine multiple objects into one.",
        correct: false
      }
    ]
  },
  {
    question: "What is setTimeout in JavaScript?",
    answeres: [
      {
        text: "setTimeout is a function that executes a piece of code after a specified delay (in milliseconds).",
        correct: true
      },
      {
        text: "setTimeout is used to execute code repeatedly at fixed intervals.",
        correct: false
      },
      {
        text: "setTimeout immediately blocks the execution of further code until the timeout finishes.",
        correct: false
      },
      {
        text: "setTimeout is used to cancel ongoing asynchronous operations.",
        correct: false
      }
    ]
  },
  {
    question: "What is setInterval in JavaScript?",
    answeres: [
      { text: "setInterval repeatedly executes a function at specified intervals.", correct: true },
      { text: "setInterval executes a function only once after a delay.", correct: false },
      { text: "setInterval is used to stop a running interval.", correct: false },
      { text: "setInterval is a blocking, synchronous method.", correct: false }
    ]
  },
  {
    question: "What are Promises in JavaScript?",
   answeres: [
      { text: "Promises represent the eventual completion or failure of an asynchronous operation.", correct: true },
      { text: "Promises are used only for synchronous code execution.", correct: false },
      { text: "A promise can be in only one state at a time: fulfilled.", correct: false },
      { text: "Promises block the main thread while executing.", correct: false }
    ]
  },
  {
    question: "What is a closure in JavaScript?",
   answeres: [
      { text: "A closure is a function that has access to its own scope, the outer function's scope, and the global scope.", correct: true },
      { text: "A closure is a function that can only access global variables.", correct: false },
      { text: "Closures are used only in loops to improve performance.", correct: false },
      { text: "Closures cannot remember variables once the outer function has executed.", correct: false }
    ]
  },
  {
    question: "What are callbacks in JavaScript?",
    answeres: [
      {
        text: "Callbacks are functions passed as arguments to other functions and executed after the completion of that function's operation.",
        correct: true
      },
      {
        text: "Callbacks provide a way to handle asynchronous operations in JavaScript, allowing code to continue executing while waiting for operations to complete.",
        correct: true
      },
      {
        text: "Callbacks are special objects that can only be used with setTimeout() and setInterval() functions.",
        correct: false
      },
      {
        text: "Callbacks are a synchronous programming technique that blocks code execution until the operation completes.",
        correct: false
      }
    ]
  },
  {
    question: "What are Higher Order Functions in JavaScript?",
    answeres: [
      {
        text: "Functions that take one or more functions as arguments or return a function as their result.",
        correct: true
      },
      {
        text: "Functions like map(), filter(), and reduce() that operate on arrays and take callback functions.",
        correct: true
      },
      {
        text: "Functions that can only be defined inside classes or objects.",
        correct: false
      },
      {
        text: "Functions that run with higher execution priority in the JavaScript engine.",
        correct: false
      }
    ]
  },
  {
    question: "What is the difference between == and === in JavaScript?",
    answeres: [
      {
        text: "== performs type coercion before comparison, while === compares both value and type without coercion.",
        correct: true
      },
      {
        text: "=== is a strict equality operator that returns true only if both operands have the same type and value.",
        correct: true
      },
      {
        text: "== and === are interchangeable and produce the same results in all scenarios.",
        correct: false
      },
      {
        text: "=== can only be used for comparing primitive values, not objects or arrays.",
        correct: false
      }
    ]
  },
  {
    question: "What is Hoisting?",
    answeres: [
      {
        text: "JavaScript's default behavior of moving declarations to the top of their scope before code execution.",
        correct: true
      },
      {
        text: "Variable and function declarations are hoisted, but initializations are not.",
        correct: true
      },
      {
        text: "Hoisting affects all variable declarations equally, regardless of whether they use var, let, or const.",
        correct: false
      },
      {
        text: "Hoisting physically moves code to the top of the file during runtime execution.",
        correct: false
      }
    ]
  },
  {
    question: "What are the differences between let, var and const?",
    answeres: [
      {
        text: "var is function-scoped, while let and const are block-scoped.",
        correct: true
      },
      {
        text: "const creates variables whose reference cannot be reassigned after initialization, while let and var allow reassignment.",
        correct: true
      },
      {
        text: "let and const declarations are not hoisted, while var declarations are hoisted to the top of their scope.",
        correct: false
      },
      {
        text: "const variables prevent modification of array elements or object properties.",
        correct: false
      }
    ]
  },
  {
    question: "What are limitations of arrow functions?",
    answeres: [
      {
        text: "Arrow functions don't have their own 'this' context; they inherit it from the surrounding scope.",
        correct: true
      },
      {
        text: "Arrow functions cannot be used as constructors or with the 'new' keyword.",
        correct: true
      },
      {
        text: "Arrow functions can always replace regular functions without changing behavior.",
        correct: false
      },
      {
        text: "Arrow functions have better performance than regular functions in all scenarios.",
        correct: false
      }
    ]
  },
  {
    question: "What is the difference between Shallow copy and deep copy?",
    answeres: [
      {
        text: "A shallow copy duplicates only the top-level properties, with nested objects still referencing the original objects.",
        correct: true
      },
      {
        text: "A deep copy duplicates every object referenced in the original, creating completely independent copies.",
        correct: true
      },
      {
        text: "Object.assign() and spread operator always create deep copies of objects.",
        correct: false
      },
      {
        text: "There is no performance difference between shallow and deep copy operations.",
        correct: false
      }
    ]
  },
  {
    question: "What is event bubbling?",
    answeres: [
      {
        text: "Event bubbling is a propagation mechanism where an event triggered on a nested element bubbles up through its ancestors in the DOM tree.",
        correct: true
      },
      {
        text: "Events first trigger on the target element and then propagate upward to parent elements.",
        correct: true
      },
      {
        text: "Event bubbling is the default behavior for all JavaScript events and cannot be prevented.",
        correct: false
      },
      {
        text: "Event bubbling only occurs when using inline event handlers in HTML.",
        correct: false
      }
    ]
  },
  {
    question: "What is event capturing?",
    answeres: [
      {
        text: "Event capturing is a propagation mechanism where events are first captured by the outermost element and then propagate inward to the target element.",
        correct: true
      },
      {
        text: "Event capturing occurs before event bubbling in the event propagation cycle.",
        correct: true
      },
      {
        text: "Event capturing is enabled by default in all modern browsers.",
        correct: false
      },
      {
        text: "Event.stopPropagation() can stop bubbling but has no effect on the capturing phase.",
        correct: false
      }
    ]
  },
  {
    question: "What is 'this' in JavaScript and how does it behave in various scenarios?",
    answeres: [
      {
        text: "In a regular function, 'this' refers to the object that called the function or the global object if called without context.",
        correct: true
      },
      {
        text: "In arrow functions, 'this' is lexically bound and inherits its value from the surrounding scope.",
        correct: true
      },
      {
        text: "'this' always refers to the same value throughout the entire JavaScript application.",
        correct: false
      },
      {
        text: "The value of 'this' cannot be explicitly set or modified once a function is defined.",
        correct: false
      }
    ]
  },
  {
    question: "How do you optimize the performance of a JavaScript application?",
    answeres: [
      {
        text: "Minimize DOM manipulations by batching updates and using document fragments.",
        correct: true
      },
      {
        text: "Use efficient data structures, memoization, and optimize loops to reduce computational complexity.",
        correct: true
      },
      {
        text: "Always use arrow functions instead of regular functions for better performance.",
        correct: false
      },
      {
        text: "Optimization is only necessary for server-side JavaScript applications, not browser applications.",
        correct: false
      }
    ]
  },
  {
    question: "What is meant by debouncing and throttling?",
    answeres: [
      {
        text: "Debouncing delays the execution of a function until after a specified time has elapsed since the last time it was invoked.",
        correct: true
      },
      {
        text: "Throttling limits how often a function can be called in a given time period, ensuring it executes at a regular interval.",
        correct: true
      },
      {
        text: "Debouncing and throttling are identical techniques with different names.",
        correct: false
      },
      {
        text: "These techniques are only useful for server-side code and have no application in browser environments.",
        correct: false
      }
    ]
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

// Enhanced showScore function with congratulation message
function showScore() {
  resetstate();
  
  // Create a congratulation message based on score
  let congratsMessage = "";
  const percentage = (score / question.length) * 100;
  
  if (percentage >= 80) {
    congratsMessage = "Excellent job! Congratulations on your great score!";
  } else if (percentage >= 60) {
    congratsMessage = "Good work! Congratulations!";
  } else if (percentage >= 40) {
    congratsMessage = "Nice effort! Keep practicing!";
  } else {
    congratsMessage = "Thank you for taking the quiz. Try again!";
  }
  
  // Display score and congratulation message
  questionelement.innerHTML = `
    <div class="score-display">
      <h2>Quiz Completed!</h2>
      <p>You scored ${score} out of ${question.length}</p>
      <p class="congrats">${congratsMessage}</p>
    </div>
  `;
  
  nextbtn.innerHTML = "Play Again";
  nextbtn.style.display = "block";
  
  // Add simple styles for the score display
  const scoreStyles = `
    .score-display {
      text-align: center;
      padding: 20px;
      background-color: #f9f9f9;
      border-radius: 10px;
      margin-top: 20px;
    }
    .congrats {
      color: #4CAF50;
      font-weight: bold;
      margin-top: 10px;
    }
  `;
  
  // Add the styles to the document
  const styleElement = document.createElement('style');
  styleElement.textContent = scoreStyles;
  document.head.appendChild(styleElement);
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
