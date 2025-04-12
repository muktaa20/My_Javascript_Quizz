const question = [
  {
    question: "What best describes the 'var' keyword in JavaScript?",
    answeres: [
      { text: "Block scoped and cannot be reassigned", correct: false },
      { text: "Function scoped and can be reassigned", correct: true },
      { text: "Block scoped and can’t be redeclared", correct: false },
      { text: "Lexically scoped and immutable", correct: false },
    ],
  },

  {
    question: "What best describes the 'const' keyword in JavaScript?",
    answeres: [
      { text: "Block scoped and cannot be reassigned", correct: true },
      { text: "Function scoped and can be redeclared", correct: false },
      { text: "Accessible before declaration due to hoisting", correct: false },
      { text: "Block scoped and can be reassigned", correct: false },
    ],
  },
  {
    question: "What best describes the 'let' keyword in JavaScript?",
    answeres: [
      { text: "Block scoped and can be reassigned", correct: true },
      { text: "Globally scoped and cannot be reassigned", correct: false },
      { text: "Function scoped and immutable", correct: false },
      { text: "Block scoped and cannot be reassigned", correct: false },
    ],
  },
  {
    question: "What is considered a block in JavaScript?",
    answeres: [
      { text: "A set of square brackets", correct: false },
      { text: "A set of opening and closing curly brackets", correct: true },
      { text: "Parentheses", correct: false },
      { text: "A line of code ending with a semicolon", correct: false },
    ],
  },
  {
    question: "Which of the following is a primitive data type in JavaScript?",
    answeres: [
      { text: "Object", correct: false },
      { text: "Array", correct: false },
      { text: "Symbol", correct: true },
      { text: "RegExp", correct: false },
    ],
  },
  {
    question: "Which value represents the absence of any object value?",
    answeres: [
      { text: "undefined", correct: false },
      { text: "null", correct: true },
      { text: "false", correct: false },
      { text: "0", correct: false },
    ],
  },
  {
    question:
      "What is true about a variable that has not been assigned a value?",
    answeres: [
      { text: "It is set to null", correct: false },
      { text: "It is set to 0", correct: false },
      { text: "It is undefined", correct: true },
      { text: "It throws an error", correct: false },
    ],
  },
  {
    question:
      "Which of the following is a non-primitive data type in JavaScript?",
    answeres: [
      { text: "String", correct: false },
      { text: "Boolean", correct: false },
      { text: "Object", correct: true },
      { text: "Symbol", correct: false },
    ],
  },
  {
    question: "What does the '+' operator do in JavaScript?",
    answeres: [
      { text: "Subtraction", correct: false },
      { text: "Multiplication", correct: false },
      { text: "Addition", correct: true },
      { text: "Modulus", correct: false },
    ],
  },
  {
    question: "Which operator checks both value and type equality?",
    answeres: [
      { text: "==", correct: false },
      { text: "=", correct: false },
      { text: "===", correct: true },
      { text: "!=", correct: false },
    ],
  },
  {
    question: "Which of the following is a logical AND operator in JavaScript?",
    answeres: [
      { text: "&&", correct: true },
      { text: "||", correct: false },
      { text: "!", correct: false },
      { text: "&", correct: false },
    ],
  },
  {
    question: "What is the correct syntax for an arrow function in JavaScript?",
    answeres: [
      { text: "function => name()", correct: false },
      { text: "const name = (param) => { }", correct: true },
      { text: "function name(param) =>", correct: false },
      { text: "let name() => { }", correct: false },
    ],
  },
  {
    question: "What does the 'if' statement do in JavaScript?",
    answeres: [
      {
        text: "Specifies code that runs when a condition is false",
        correct: false,
      },
      { text: "Specifies code that runs unconditionally", correct: false },
      {
        text: "Specifies code that runs when a condition is true",
        correct: true,
      },
      { text: "Specifies multiple cases to run", correct: false },
    ],
  },
  {
    question: "Which statement runs code if the 'if' condition is false?",
    answeres: [
      { text: "if", correct: false },
      { text: "switch", correct: false },
      { text: "else", correct: true },
      { text: "continue", correct: false },
    ],
  },
  {
    question: "Which statement is used to check multiple conditions?",
    answeres: [
      { text: "if only", correct: false },
      { text: "else only", correct: false },
      { text: "if...else if...else", correct: true },
      { text: "switch only", correct: false },
    ],
  },
  {
    question: "What is the purpose of the 'switch' statement in JavaScript?",
    answeres: [
      { text: "To handle multiple conditional branches", correct: true },
      { text: "To loop over arrays", correct: false },
      { text: "To declare variables", correct: false },
      { text: "To compare booleans only", correct: false },
    ],
  },
  {
    question: "What keyword is used to exit a case in a switch statement?",
    answeres: [
      { text: "exit", correct: false },
      { text: "stop", correct: false },
      { text: "break", correct: true },
      { text: "end", correct: false },
    ],
  },
  {
    question: "What is the default case in a switch statement used for?",
    answeres: [
      { text: "It runs if none of the cases match", correct: true },
      { text: "It always runs first", correct: false },
      { text: "It must appear before all cases", correct: false },
      { text: "It breaks the loop", correct: false },
    ],
  },
  {
    question: "What is the ternary operator used for?",
    answeres: [
      { text: "To write a compact if-else", correct: true },
      { text: "To declare variables", correct: false },
      { text: "To perform loops", correct: false },
      { text: "To compare strings", correct: false },
    ],
  },
  {
    question: "Which of the following is the correct ternary syntax?",
    answeres: [
      { text: "condition ? exprIfTrue : exprIfFalse", correct: true },
      { text: "if (condition) ? expr1 : expr2", correct: false },
      { text: "condition ? ifTrue() elseFalse()", correct: false },
      { text: "condition : true ? false", correct: false },
    ],
  },
  {
    question: "Which of the following is NOT a falsy value in JavaScript?",
    answeres: [
      { text: "0", correct: false },
      { text: "false", correct: false },
      { text: "[]", correct: true },
      { text: "null", correct: false },
    ],
  },
  {
    question: "Which of the following is a truthy value?",
    answeres: [
      { text: "false", correct: false },
      { text: "0", correct: false },
      { text: "undefined", correct: false },
      { text: "'hello'", correct: true },
    ],
  },

  {
    question: "How do you declare a string in JavaScript?",
    answeres: [
      { text: "let variableName = 'Hello world'", correct: true },
      { text: "let variableName = Hello world", correct: false },
      { text: "let variableName = Hello_world", correct: false },
      { text: "string variableName = 'Hello world'", correct: false },
    ],
  },
  {
    question: "What does the escape sequence \\n represent in a string?",
    answeres: [
      { text: "A tab space", correct: false },
      { text: "A backslash", correct: false },
      { text: "A new line", correct: true },
      { text: "A form feed", correct: false },
    ],
  },
  {
    question:
      "Which escape character is used for a single quote inside a string?",
    answeres: [
      { text: "\\'", correct: true },
      { text: "\\q", correct: false },
      { text: '\\"', correct: false },
      { text: "\\$", correct: false },
    ],
  },
  {
    question: "What does the escape character \\t stand for?",
    answeres: [
      { text: "New line", correct: false },
      { text: "Backslash", correct: false },
      { text: "Horizontal tab", correct: true },
      { text: "Carriage return", correct: false },
    ],
  },
  {
    question: "What is the purpose of the escape character \\\\ in a string?",
    answeres: [
      { text: "To create a newline", correct: false },
      { text: "To include a double quote", correct: false },
      { text: "To include a backslash", correct: true },
      { text: "To break the string", correct: false },
    ],
  },
  {
    question: "Which escape sequence represents a double quote?",
    answeres: [
      { text: '\\"', correct: true },
      { text: "\\'", correct: false },
      { text: "\\\\", correct: false },
      { text: "\\b", correct: false },
    ],
  },
  {
    question: "What does the escape sequence \\b represent in a string?",
    answeres: [
      { text: "Backslash", correct: false },
      { text: "Backspace", correct: true },
      { text: "Break", correct: false },
      { text: "Boolean", correct: false },
    ],
  },
  {
    question: "Which escape character is used to insert a carriage return?",
    answeres: [
      { text: "\\r", correct: true },
      { text: "\\f", correct: false },
      { text: "\\n", correct: false },
      { text: "\\v", correct: false },
    ],
  },
  {
    question: "What does the escape sequence \\f do in JavaScript strings?",
    answeres: [
      { text: "Adds a form feed", correct: true },
      { text: "Adds a newline", correct: false },
      { text: "Adds a horizontal tab", correct: false },
      { text: "Adds a backslash", correct: false },
    ],
  },
  {
    question: "What does \\v stand for in JavaScript string escape characters?",
    answeres: [
      { text: "Vertical tab", correct: true },
      { text: "Void", correct: false },
      { text: "Version", correct: false },
      { text: "Variable", correct: false },
    ],
  },

  {
    question: "Which method returns the number of characters in a string?",
    answeres: [
      { text: "string.size", correct: false },
      { text: "string.length", correct: true },
      { text: "string.count()", correct: false },
      { text: "string.len()", correct: false },
    ],
  },
  {
    question: "What does 'string[index]' return in JavaScript?",
    answeres: [
      { text: "An array of characters", correct: false },
      { text: "The entire string", correct: false },
      { text: "A single character at that index", correct: true },
      { text: "An object of the string", correct: false },
    ],
  },
  {
    question: "What does 'string.split(\" \")' do?",
    answeres: [
      { text: "Splits the string into an array of characters", correct: false },
      { text: "Removes all spaces", correct: false },
      { text: "Splits the string into an array of words", correct: true },
      { text: "Converts string to lower case", correct: false },
    ],
  },
  {
    question: "What is the output of 'string.toLowerCase()'?",
    answeres: [
      { text: "String converted to uppercase", correct: false },
      { text: "Original string remains unchanged", correct: false },
      { text: "String converted to lowercase", correct: true },
      { text: "Length of the string", correct: false },
    ],
  },
  {
    question: "Which method returns a single character from a specific index?",
    answeres: [
      { text: "string.charAt(index)", correct: true },
      { text: "string.char(index)", correct: false },
      { text: "string.get(index)", correct: false },
      { text: "string.at(index)", correct: false },
    ],
  },
  {
    question: "What does 'string.replace(old, new)' do?",
    answeres: [
      { text: "Adds a substring to the end", correct: false },
      { text: "Replaces a substring with a new one", correct: true },
      { text: "Deletes the substring", correct: false },
      { text: "Changes case of the string", correct: false },
    ],
  },
  {
    question: "Which method checks if a string contains another substring?",
    answeres: [
      { text: "string.contains()", correct: false },
      { text: "string.has()", correct: false },
      { text: "string.includes()", correct: true },
      { text: "string.index()", correct: false },
    ],
  },
  {
    question: "What does 'string.substr(start, length)' return?",
    answeres: [
      { text: "String from start to end of line", correct: false },
      { text: "Portion of string starting at a given index", correct: true },
      { text: "Index number", correct: false },
      { text: "Nothing, it modifies original string", correct: false },
    ],
  },
  {
    question: "What will 'string.split(\"\")' return?",
    answeres: [
      { text: "An array of individual characters", correct: true },
      { text: "A string with all spaces removed", correct: false },
      { text: "An error", correct: false },
      { text: "A reversed string", correct: false },
    ],
  },
  {
    question:
      "Which method gives the index of the first occurrence of a value?",
    answeres: [
      { text: "string.lastIndexOf()", correct: false },
      { text: "string.search()", correct: false },
      { text: "string.indexOf()", correct: true },
      { text: "string.findIndex()", correct: false },
    ],
  },
  {
    question: "What does 'string.lastIndexOf(value)' do?",
    answeres: [
      { text: "Returns the index of first match", correct: false },
      { text: "Returns index of last match from end", correct: true },
      { text: "Removes value from end", correct: false },
      { text: "Adds value to start", correct: false },
    ],
  },
  {
    question:
      "Which method returns a portion of a string without modifying the original?",
    answeres: [
      { text: "string.substr()", correct: false },
      { text: "string.slice()", correct: true },
      { text: "string.splice()", correct: false },
      { text: "string.part()", correct: false },
    ],
  },
  {
    question: "What does 'string.toUpperCase()' do?",
    answeres: [
      { text: "Returns the string unchanged", correct: false },
      { text: "Returns a lowercase version of the string", correct: false },
      { text: "Returns an uppercase version of the string", correct: true },
      { text: "Returns the number of uppercase letters", correct: false },
    ],
  },

  {
    question: "Which method adds an element to the end of an array?",
    answeres: [
      { text: "shift()", correct: false },
      { text: "unshift()", correct: false },
      { text: "push()", correct: true },
      { text: "pop()", correct: false },
    ],
  },
  {
    question: "Which method removes the last element from an array?",
    answeres: [
      { text: "pop()", correct: true },
      { text: "shift()", correct: false },
      { text: "splice()", correct: false },
      { text: "unshift()", correct: false },
    ],
  },
  {
    question: "What does 'array[index]' return?",
    answeres: [
      { text: "The index of the array", correct: false },
      { text: "A specific value from the array", correct: true },
      { text: "The last element of the array", correct: false },
      { text: "Length of the array", correct: false },
    ],
  },
  {
    question: "Which method adds an element to the beginning of an array?",
    answeres: [
      { text: "push()", correct: false },
      { text: "unshift()", correct: true },
      { text: "splice()", correct: false },
      { text: "pop()", correct: false },
    ],
  },
  {
    question: "Which method removes the first element from an array?",
    answeres: [
      { text: "shift()", correct: true },
      { text: "pop()", correct: false },
      { text: "push()", correct: false },
      { text: "slice()", correct: false },
    ],
  },
  {
    question: "What does the splice(fromIndex, count) method do?",
    answeres: [
      { text: "Adds elements to an array", correct: false },
      {
        text: "Removes elements from an array starting at a given index",
        correct: true,
      },
      { text: "Returns a sliced array", correct: false },
      { text: "Sorts the array", correct: false },
    ],
  },
  {
    question: "Which method creates a shallow copy of part of an array?",
    answeres: [
      { text: "slice()", correct: true },
      { text: "splice()", correct: false },
      { text: "concat()", correct: false },
      { text: "copy()", correct: false },
    ],
  },
  {
    question: "Which method joins multiple arrays into one?",
    answeres: [
      { text: "join()", correct: false },
      { text: "concat()", correct: true },
      { text: "merge()", correct: false },
      { text: "combine()", correct: false },
    ],
  },
  {
    question: "Which method returns the number of elements in an array?",
    answeres: [
      { text: "array.count", correct: false },
      { text: "array.length", correct: true },
      { text: "array.size()", correct: false },
      { text: "array.total", correct: false },
    ],
  },
  {
    question: "What does 'array.reverse()' do?",
    answeres: [
      { text: "Sorts the array alphabetically", correct: false },
      { text: "Returns a reversed copy", correct: false },
      {
        text: "Reverses the order of elements in the original array",
        correct: true,
      },
      { text: "Flips the array vertically", correct: false },
    ],
  },
  {
    question: "Which method returns a string of array values?",
    answeres: [
      { text: "join()", correct: true },
      { text: "concat()", correct: false },
      { text: "split()", correct: false },
      { text: "slice()", correct: false },
    ],
  },
  {
    question: "What does the 'includes()' method check in an array?",
    answeres: [
      { text: "If the array is empty", correct: false },
      { text: "If a certain value exists in the array", correct: true },
      { text: "If the array has duplicates", correct: false },
      { text: "If the array has more than one type", correct: false },
    ],
  },
  {
    question: "Which method sorts an array alphabetically by default?",
    answeres: [
      { text: "sort()", correct: true },
      { text: "order()", correct: false },
      { text: "reverse()", correct: false },
      { text: "arrange()", correct: false },
    ],
  },
  {
    question: "Which method returns the first index of a specified value?",
    answeres: [
      { text: "indexOf()", correct: true },
      { text: "lastIndexOf()", correct: false },
      { text: "findIndex()", correct: false },
      { text: "getIndex()", correct: false },
    ],
  },
  {
    question: "What does 'lastIndexOf()' return in arrays?",
    answeres: [
      { text: "The index of the first occurrence", correct: false },
      { text: "The value of the last element", correct: false },
      { text: "The last index of a given value", correct: true },
      { text: "The length of the array", correct: false },
    ],
  },
  {
    question: "What does 'toString()' do for arrays?",
    answeres: [
      { text: "Adds a new element to the end", correct: false },
      { text: "Converts the array to a string", correct: true },
      { text: "Returns array length", correct: false },
      { text: "Deletes all elements", correct: false },
    ],
  },

  {
    question: "What is the correct syntax for a 'for' loop in JavaScript?",
    answeres: [
      { text: "for (initialization; condition; increment)", correct: true },
      { text: "for (condition; increment; initialization)", correct: false },
      { text: "for (increment; condition; initialization)", correct: false },
      { text: "for (initialization; increment; condition)", correct: false },
    ],
  },
  {
    question:
      "Which loop checks the condition *before* executing the code block?",
    answeres: [
      { text: "do...while loop", correct: false },
      { text: "while loop", correct: true },
      { text: "for...in loop", correct: false },
      { text: "for...of loop", correct: false },
    ],
  },
  {
    question:
      "Which loop executes the code block at least once before checking the condition?",
    answeres: [
      { text: "for loop", correct: false },
      { text: "while loop", correct: false },
      { text: "do...while loop", correct: true },
      { text: "for...of loop", correct: false },
    ],
  },
  {
    question: "Which loop is best for iterating over object properties?",
    answeres: [
      { text: "for...of", correct: false },
      { text: "for...in", correct: true },
      { text: "for loop", correct: false },
      { text: "while loop", correct: false },
    ],
  },
  {
    question:
      "Which loop is used to iterate over iterable objects like arrays or strings?",
    answeres: [
      { text: "for...in", correct: false },
      { text: "while", correct: false },
      { text: "for...of", correct: true },
      { text: "do...while", correct: false },
    ],
  },
  {
    question:
      "In a for loop, what does the first statement (st1) typically do?",
    answeres: [
      { text: "Defines the stopping condition", correct: false },
      { text: "Updates the loop variable", correct: false },
      { text: "Initializes the loop variable", correct: true },
      { text: "Breaks the loop", correct: false },
    ],
  },
  {
    question: "In a for loop, what does the second statement (st2) represent?",
    answeres: [
      { text: "A console log", correct: false },
      { text: "The condition to run the loop", correct: true },
      { text: "The increment step", correct: false },
      { text: "The loop counter", correct: false },
    ],
  },
  {
    question:
      "In a for loop, what does the third statement (st3) typically do?",
    answeres: [
      { text: "Increments or decrements the loop variable", correct: true },
      { text: "Breaks the loop", correct: false },
      { text: "Checks the condition", correct: false },
      { text: "Declares the variable", correct: false },
    ],
  },

  {
    question:
      "Which array method executes a provided function once for each array element?",
    answeres: [
      { text: "map()", correct: false },
      { text: "forEach()", correct: true },
      { text: "filter()", correct: false },
      { text: "reduce()", correct: false },
    ],
  },
  {
    question:
      "Which method returns a new array based on the results of calling a function on every element?",
    answeres: [
      { text: "forEach()", correct: false },
      { text: "filter()", correct: false },
      { text: "map()", correct: true },
      { text: "some()", correct: false },
    ],
  },
  {
    question:
      "Which method returns a new array with elements that pass a provided test?",
    answeres: [
      { text: "map()", correct: false },
      { text: "filter()", correct: true },
      { text: "reduce()", correct: false },
      { text: "forEach()", correct: false },
    ],
  },
  {
    question:
      "Which method returns the index of the first element that satisfies the testing function?",
    answeres: [
      { text: "findIndex()", correct: true },
      { text: "filter()", correct: false },
      { text: "map()", correct: false },
      { text: "some()", correct: false },
    ],
  },
  {
    question:
      "Which method tests whether at least one element passes a provided test?",
    answeres: [
      { text: "every()", correct: false },
      { text: "some()", correct: true },
      { text: "forEach()", correct: false },
      { text: "reduce()", correct: false },
    ],
  },
  {
    question:
      "Which method tests whether all elements pass a provided function?",
    answeres: [
      { text: "some()", correct: false },
      { text: "every()", correct: true },
      { text: "filter()", correct: false },
      { text: "map()", correct: false },
    ],
  },
  {
    question:
      "Which method reduces array values into a single value from left to right?",
    answeres: [
      { text: "reduceRight()", correct: false },
      { text: "filter()", correct: false },
      { text: "reduce()", correct: true },
      { text: "map()", correct: false },
    ],
  },
  {
    question:
      "Which method reduces array values into a single value from right to left?",
    answeres: [
      { text: "reduce()", correct: false },
      { text: "reduceRight()", correct: true },
      { text: "map()", correct: false },
      { text: "forEach()", correct: false },
    ],
  },
  {
    question: "In JavaScript, which data types are copied by reference?",
    answeres: [
      { text: "Number and String", correct: false },
      { text: "Boolean and Null", correct: false },
      { text: "Object and Array", correct: true },
      { text: "Undefined and Symbol", correct: false },
    ],
  },
  {
    question: "What happens when you assign an object to another variable?",
    answeres: [
      { text: "It creates a deep copy", correct: false },
      {
        text: "It copies all primitive values inside the object",
        correct: false,
      },
      { text: "Both variables reference the same object", correct: true },
      { text: "It converts the object to a string", correct: false },
    ],
  },
  {
    question: "Which statement is true about primitive values in JavaScript?",
    answeres: [
      { text: "They are copied by reference", correct: false },
      { text: "They are stored in the heap", correct: false },
      { text: "They are immutable and copied by value", correct: true },
      { text: "They are always passed by reference", correct: false },
    ],
  },
  {
    question:
      "How do you make a copy of an object without referencing the original?",
    answeres: [
      { text: "Using spread syntax {...obj}", correct: true },
      { text: "By assigning it directly to another variable", correct: false },
      { text: "Using the typeof operator", correct: false },
      { text: "By wrapping it in an array", correct: false },
    ],
  },

  {
    question: "What does the Math.abs() method do in JavaScript?",
    answers: [
      { text: "Returns the square of x", correct: false },
      { text: "Returns the absolute value of x", correct: true },
      { text: "Returns the logarithm of x", correct: false },
      { text: "Returns the cube of x", correct: false },
    ],
  },
  {
    question: "What does the Math.acos() method do in JavaScript?",
    answers: [
      { text: "Returns the arccosine of x, in radians", correct: true },
      { text: "Returns the sine of x", correct: false },
      { text: "Returns the cosine of x", correct: false },
      { text: "Returns the square root of x", correct: false },
    ],
  },
  {
    question: "What does the Math.acosh() method do in JavaScript?",
    answers: [
      { text: "Returns the inverse cosine of x", correct: false },
      { text: "Returns the hyperbolic arccosine of x", correct: true },
      { text: "Returns the arc sine of x", correct: false },
      { text: "Returns the hyperbolic sine of x", correct: false },
    ],
  },
  {
    question: "What does the Math.asin() method do in JavaScript?",
    answers: [
      { text: "Returns the arcsine of x, in radians", correct: true },
      { text: "Returns the square root of x", correct: false },
      { text: "Returns the sine of x", correct: false },
      { text: "Returns the cosine of x", correct: false },
    ],
  },
  {
    question: "What does the Math.asinh() method do in JavaScript?",
    answers: [
      { text: "Returns the hyperbolic arcsine of x", correct: true },
      { text: "Returns the inverse sine of x", correct: false },
      { text: "Returns the inverse cosine of x", correct: false },
      { text: "Returns the hyperbolic cosine of x", correct: false },
    ],
  },
  {
    question: "What does the Math.atan() method do in JavaScript?",
    answers: [
      {
        text: "Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians",
        correct: true,
      },
      { text: "Returns the tangent of x", correct: false },
      { text: "Returns the arc sine of x", correct: false },
      { text: "Returns the arc cosine of x", correct: false },
    ],
  },

  {
    question: "What does the Math.atan2() method do in JavaScript?",
    answers: [
      {
        text: "Returns the arctangent of the quotient of its arguments",
        correct: true,
      },
      { text: "Returns the arctangent of x", correct: false },
      { text: "Returns the sine of x", correct: false },
      { text: "Returns the cosine of x", correct: false },
    ],
  },
  {
    question: "What does the Math.atanh() method do in JavaScript?",
    answers: [
      { text: "Returns the inverse hyperbolic tangent of x", correct: false },
      { text: "Returns the hyperbolic arctangent of x", correct: true },
      { text: "Returns the inverse sine of x", correct: false },
      { text: "Returns the arc cosine of x", correct: false },
    ],
  },
  {
    question: "What does the Math.cbrt() method do in JavaScript?",
    answers: [
      { text: "Returns the cubic root of x", correct: true },
      { text: "Returns the square root of x", correct: false },
      { text: "Returns the inverse of x", correct: false },
      { text: "Returns the exponential of x", correct: false },
    ],
  },
  {
    question: "What does the Math.ceil() method do in JavaScript?",
    answers: [
      {
        text: "Returns x, rounded upwards to the nearest integer",
        correct: true,
      },
      {
        text: "Returns x, rounded downwards to the nearest integer",
        correct: false,
      },
      { text: "Returns the fractional part of x", correct: false },
      { text: "Returns the absolute value of x", correct: false },
    ],
  },
  {
    question: "What does the Math.cos() method do in JavaScript?",
    answers: [
      { text: "Returns the cosine of x (x is in radians)", correct: true },
      { text: "Returns the sine of x (x is in radians)", correct: false },
      { text: "Returns the tangent of x (x is in radians)", correct: false },
      { text: "Returns the inverse cosine of x", correct: false },
    ],
  },
  {
    question: "What does the Math.cosh() method do in JavaScript?",
    answers: [
      { text: "Returns the hyperbolic cosine of x", correct: true },
      { text: "Returns the square root of x", correct: false },
      { text: "Returns the logarithm of x", correct: false },
      { text: "Returns the inverse tangent of x", correct: false },
    ],
  },
  {
    question: "What does the Math.exp() method do in JavaScript?",
    answers: [
      { text: "Returns the value of Ex", correct: true },
      { text: "Returns the natural logarithm of x", correct: false },
      { text: "Returns the square root of x", correct: false },
      { text: "Returns the inverse exponential of x", correct: false },
    ],
  },
  {
    question: "What does the Math.floor() method do in JavaScript?",
    answers: [
      {
        text: "Returns x, rounded downwards to the nearest integer",
        correct: true,
      },
      {
        text: "Returns x, rounded upwards to the nearest integer",
        correct: false,
      },
      { text: "Returns the fractional part of x", correct: false },
      { text: "Returns the logarithm of x", correct: false },
    ],
  },
  {
    question: "What does the Math.log() method do in JavaScript?",
    answers: [
      { text: "Returns the natural logarithm (base E) of x", correct: true },
      { text: "Returns the logarithm of x to base 10", correct: false },
      { text: "Returns the logarithm of x to base 2", correct: false },
      { text: "Returns the logarithm of x to base 5", correct: false },
    ],
  },
  {
    question: "What does the Math.max() method do in JavaScript?",
    answers: [
      { text: "Returns the number with the highest value", correct: true },
      { text: "Returns the number with the lowest value", correct: false },
      { text: "Returns the square root of x", correct: false },
      { text: "Returns the sum of all arguments", correct: false },
    ],
  },
  {
    question: "What does the Math.min() method do in JavaScript?",
    answers: [
      { text: "Returns the number with the lowest value", correct: true },
      { text: "Returns the number with the highest value", correct: false },
      { text: "Returns the square root of x", correct: false },
      { text: "Returns the sum of all arguments", correct: false },
    ],
  },
  {
    question: "What does the Math.pow() method do in JavaScript?",
    answers: [
      { text: "Returns the value of x to the power of y", correct: true },
      { text: "Returns the square root of x", correct: false },
      { text: "Returns the logarithm of x to the power of y", correct: false },
      { text: "Returns the sum of x and y", correct: false },
    ],
  },
  {
    question: "What does the Math.random() method do in JavaScript?",
    answers: [
      { text: "Returns a random number between 0 and 1", correct: true },
      { text: "Returns a random number between -1 and 1", correct: false },
      { text: "Returns a random integer", correct: false },
      { text: "Returns a random number between 1 and 100", correct: false },
    ],
  },
  {
    question: "What does the Math.round() method do in JavaScript?",
    answers: [
      { text: "Rounds x to the nearest integer", correct: true },
      { text: "Rounds x to the nearest multiple of 10", correct: false },
      { text: "Rounds x to the nearest multiple of 100", correct: false },
      { text: "Rounds x to the nearest decimal", correct: false },
    ],
  },
  {
    question: "What does the Math.sign() method do in JavaScript?",
    answers: [
      {
        text: "Returns if x is negative, null, or positive (-1, 0, 1)",
        correct: true,
      },
      { text: "Returns the sign of x as a boolean", correct: false },
      { text: "Returns the absolute value of x", correct: false },
      { text: "Returns whether x is odd or even", correct: false },
    ],
  },
  {
    question: "What does the Math.sin() method do in JavaScript?",
    answers: [
      { text: "Returns the sine of x (x is in radians)", correct: true },
      { text: "Returns the cosine of x (x is in radians)", correct: false },
      { text: "Returns the tangent of x (x is in radians)", correct: false },
      { text: "Returns the arc sine of x", correct: false },
    ],
  },
  {
    question: "What does the Math.sinh() method do in JavaScript?",
    answers: [
      { text: "Returns the hyperbolic sine of x", correct: false },
      { text: "Returns the square root of x", correct: true },
      { text: "Returns the inverse cosine of x", correct: false },
      { text: "Returns the sine of x", correct: false },
    ],
  },
  {
    question: "What does the Math.sqrt() method do in JavaScript?",
    answers: [
      { text: "Returns the square root of x", correct: true },
      { text: "Returns the cubic root of x", correct: false },
      { text: "Returns the inverse of x", correct: false },
      { text: "Returns the logarithm of x", correct: false },
    ],
  },
  {
    question: "What does the Math.tan() method do in JavaScript?",
    answers: [
      { text: "Returns the tangent of an angle", correct: true },
      { text: "Returns the sine of an angle", correct: false },
      { text: "Returns the cosine of an angle", correct: false },
      { text: "Returns the hyperbolic tangent of x", correct: false },
    ],
  },
  {
    question: "What does the Math.tanh() method do in JavaScript?",
    answers: [
      { text: "Returns the hyperbolic tangent of a number", correct: true },
      { text: "Returns the square root of a number", correct: false },
      { text: "Returns the tangent of a number", correct: false },
      { text: "Returns the sine of a number", correct: false },
    ],
  },
  {
    question: "What does the Math.trunc() method do in JavaScript?",
    answers: [
      { text: "Returns the integer part of a number (x)", correct: true },
      { text: "Returns the fractional part of a number", correct: false },
      { text: "Rounds a number down", correct: false },
      { text: "Rounds a number up", correct: false },
    ],
  },
  {
    question: "What does the Date.getFullYear() method do in JavaScript?",
    answers: [
      { text: "Gets the year as a four digit number (yyyy)", correct: true },
      { text: "Gets the year as a two digit number", correct: false },
      { text: "Gets the month as a number", correct: false },
      { text: "Gets the day as a number", correct: false },
    ],
  },
  {
    question: "What does the Date.getMonth() method do in JavaScript?",
    answers: [
      { text: "Gets the month as a number (0-11)", correct: true },
      { text: "Gets the month as a number (1-12)", correct: false },
      { text: "Gets the year as a number", correct: false },
      { text: "Gets the weekday as a number", correct: false },
    ],
  },
  {
    question: "What does the Date.getDate() method do in JavaScript?",
    answers: [
      { text: "Gets the day as a number (1-31)", correct: true },
      { text: "Gets the hour as a number", correct: false },
      { text: "Gets the minute as a number", correct: false },
      { text: "Gets the second as a number", correct: false },
    ],
  },
  {
    question: "What does the Date.getHours() method do in JavaScript?",
    answers: [
      { text: "Gets the hour (0-23)", correct: true },
      { text: "Gets the minute (0-59)", correct: false },
      { text: "Gets the second (0-59)", correct: false },
      { text: "Gets the year (yyyy)", correct: false },
    ],
  },
  {
    question: "What does the Date.getMinutes() method do in JavaScript?",
    answers: [
      { text: "Gets the minute (0-59)", correct: true },
      { text: "Gets the second (0-59)", correct: false },
      { text: "Gets the millisecond (0-999)", correct: false },
      { text: "Gets the hour (0-23)", correct: false },
    ],
  },
  {
    question: "What does the Date.getTime() method do in JavaScript?",
    answers: [
      {
        text: "Gets the time (milliseconds since January 1, 1970)",
        correct: true,
      },
      { text: "Gets the current date", correct: false },
      { text: "Gets the weekday", correct: false },
      { text: "Gets the year", correct: false },
    ],
  },
  {
    question: "What does the Date.getDay() method do in JavaScript?",
    answers: [
      { text: "Gets the weekday as a number (0-6)", correct: true },
      { text: "Gets the day of the month (1-31)", correct: false },
      { text: "Gets the year (yyyy)", correct: false },
      { text: "Gets the hour (0-23)", correct: false },
    ],
  },
  {
    question: "What does the Date.now() method do in JavaScript?",
    answers: [
      {
        text: "Gets the time (milliseconds since January 1, 1970)",
        correct: true,
      },
      { text: "Gets the current date", correct: false },
      { text: "Gets the year (yyyy)", correct: false },
      { text: "Gets the minute (0-59)", correct: false },
    ],
  },
  {
    question: "What does the Date.getSeconds() method do in JavaScript?",
    answers: [
      { text: "Gets the second (0-59)", correct: true },
      { text: "Gets the millisecond (0-999)", correct: false },
      { text: "Gets the minute (0-59)", correct: false },
      { text: "Gets the hour (0-23)", correct: false },
    ],
  },
  {
    question: "What does the Date.getMilliseconds() method do in JavaScript?",
    answers: [
      { text: "Gets the millisecond (0-999)", correct: true },
      { text: "Gets the second (0-59)", correct: false },
      { text: "Gets the minute (0-59)", correct: false },
      { text: "Gets the hour (0-23)", correct: false },
    ],
  },
  {
    question: "What does the Date.getUTCDate() method do in JavaScript?",
    answers: [
      { text: "Same as getDate(), but returns the UTC date", correct: true },
      { text: "Same as getMonth(), but returns the UTC month", correct: false },
      { text: "Same as getHours(), but returns the UTC hour", correct: false },
      { text: "Same as getTime(), but returns the UTC time", correct: false },
    ],
  },
  {
    question: "What does the Date.getUTCDay() method do in JavaScript?",
    answers: [
      { text: "Same as getDay(), but returns the UTC day", correct: true },
      { text: "Same as getDate(), but returns the UTC date", correct: false },
      { text: "Same as getMonth(), but returns the UTC month", correct: false },
      {
        text: "Same as getFullYear(), but returns the UTC year",
        correct: false,
      },
    ],
  },
  {
    question: "What does the Date.getUTCFullYear() method do in JavaScript?",
    answers: [
      {
        text: "Same as getFullYear(), but returns the UTC year",
        correct: true,
      },
      { text: "Same as getMonth(), but returns the UTC month", correct: false },
      { text: "Same as getDate(), but returns the UTC date", correct: false },
      { text: "Same as getHours(), but returns the UTC hour", correct: false },
    ],
  },
  {
    question: "What does the Date.getUTCMonth() method do in JavaScript?",
    answers: [
      { text: "Same as getMonth(), but returns the UTC month", correct: true },
      {
        text: "Same as getFullYear(), but returns the UTC year",
        correct: false,
      },
      { text: "Same as getDay(), but returns the UTC day", correct: false },
      { text: "Same as getDate(), but returns the UTC date", correct: false },
    ],
  },
  {
    question: "What does the Date.getUTCHours() method do in JavaScript?",
    answers: [
      { text: "Same as getHours(), but returns the UTC hour", correct: true },
      {
        text: "Same as getMinutes(), but returns the UTC minutes",
        correct: false,
      },
      {
        text: "Same as getSeconds(), but returns the UTC seconds",
        correct: false,
      },
      {
        text: "Same as getMilliseconds(), but returns the UTC milliseconds",
        correct: false,
      },
    ],
  },
  {
    question: "What does the Date.setDate() method do in JavaScript?",
    answers: [
      { text: "Sets the day as a number (1-31)", correct: true },
      { text: "Sets the hour as a number (0-23)", correct: false },
      { text: "Sets the second as a number (0-59)", correct: false },
      { text: "Sets the year as a number", correct: false },
    ],
  },
  {
    question: "What does the Date.setFullYear() method do in JavaScript?",
    answers: [
      { text: "Sets the year (optionally month and day)", correct: true },
      { text: "Sets the month (0-11)", correct: false },
      { text: "Sets the minute (0-59)", correct: false },
      { text: "Sets the day (1-31)", correct: false },
    ],
  },
  {
    question: "What does the Date.setMonth() method do in JavaScript?",
    answers: [
      { text: "Sets the month (0-11)", correct: true },
      { text: "Sets the day (1-31)", correct: false },
      { text: "Sets the hour (0-23)", correct: false },
      { text: "Sets the second (0-59)", correct: false },
    ],
  },
  {
    question: "What does the Date.setHours() method do in JavaScript?",
    answers: [
      { text: "Sets the hour (0-23)", correct: true },
      { text: "Sets the minute (0-59)", correct: false },
      { text: "Sets the second (0-59)", correct: false },
      { text: "Sets the millisecond (0-999)", correct: false },
    ],
  },
  {
    question: "What does the Date.setMinutes() method do in JavaScript?",
    answers: [
      { text: "Sets the minutes (0-59)", correct: true },
      { text: "Sets the hours (0-23)", correct: false },
      { text: "Sets the seconds (0-59)", correct: false },
      { text: "Sets the milliseconds (0-999)", correct: false },
    ],
  },
  {
    question: "What does the Date.setSeconds() method do in JavaScript?",
    answers: [
      { text: "Sets the seconds (0-59)", correct: true },
      { text: "Sets the minutes (0-59)", correct: false },
      { text: "Sets the hours (0-23)", correct: false },
      { text: "Sets the milliseconds (0-999)", correct: false },
    ],
  },
  {
    question: "What does the Date.setMilliseconds() method do in JavaScript?",
    answers: [
      { text: "Sets the milliseconds (0-999)", correct: true },
      { text: "Sets the seconds (0-59)", correct: false },
      { text: "Sets the minutes (0-59)", correct: false },
      { text: "Sets the hours (0-23)", correct: false },
    ],
  },
  {
    question: "What does the Date.setTime() method do in JavaScript?",
    answers: [
      {
        text: "Sets the time (milliseconds since January 1, 1970)",
        correct: true,
      },
      { text: "Sets the year (yyyy)", correct: false },
      { text: "Sets the month (0-11)", correct: false },
      { text: "Sets the day (1-31)", correct: false },
    ],
  },
  {
    question: "What does the Date.new Date() constructor do in JavaScript?",
    answers: [
      {
        text: "Creates a new date object with the current date and time",
        correct: true,
      },
      {
        text: "Creates a new date object with a specified date",
        correct: false,
      },
      { text: "Creates a new date object from a date string", correct: false },
      {
        text: "Creates a new date object as zero time plus milliseconds",
        correct: false,
      },
    ],
  },

  {
    question: "What does the Window.alert() method do in JavaScript?",
    answers: [
      {
        text: "Displays an alert box with a message & an OK button",
        correct: true,
      },
      { text: "Opens a new browser window", correct: false },
      { text: "Moves the window to the specified position", correct: false },
      { text: "Displays a dialog box for input", correct: false },
    ],
  },
  {
    question: "What does the Window.atob() method do in JavaScript?",
    answers: [
      { text: "Decodes a base-64 encoded string", correct: true },
      { text: "Encodes a string in base-64", correct: false },
      { text: "Removes focus from the current window", correct: false },
      { text: "Displays an alert box with a message", correct: false },
    ],
  },
  {
    question: "What does the Window.blur() method do in JavaScript?",
    answers: [
      { text: "Removes focus from the current window", correct: true },
      { text: "Opens a new browser window", correct: false },
      { text: "Moves the window to the specified position", correct: false },
      {
        text: "Scrolls the document to the specified coordinates",
        correct: false,
      },
    ],
  },
  {
    question: "What does the Window.btoa() method do in JavaScript?",
    answers: [
      { text: "Encodes a string in base-64", correct: true },
      { text: "Decodes a base-64 encoded string", correct: false },
      { text: "Sets focus to the current window", correct: false },
      { text: "Clears a timer set with setInterval()", correct: false },
    ],
  },
  {
    question: "What does the Window.clearInterval() method do in JavaScript?",
    answers: [
      { text: "Clears a timer set with setInterval()", correct: true },
      { text: "Sets a timer to run at specified intervals", correct: false },
      { text: "Closes the current window", correct: false },
      { text: "Resizes the window by the specified pixels", correct: false },
    ],
  },
  {
    question: "What does the Window.clearTimeout() method do in JavaScript?",
    answers: [
      { text: "Clears a timer set with setTimeout()", correct: true },
      {
        text: "Sets a timer to run after a specified number of milliseconds",
        correct: false,
      },
      {
        text: "Moves a window relative to its current position",
        correct: false,
      },
      { text: "Prints the content of the current window", correct: false },
    ],
  },
  {
    question: "What does the Window.close() method do in JavaScript?",
    answers: [
      { text: "Closes the current window", correct: true },
      { text: "Opens a new browser window", correct: false },
      { text: "Sets focus to the current window", correct: false },
      { text: "Moves a window to the specified position", correct: false },
    ],
  },
  {
    question: "What does the Window.confirm() method do in JavaScript?",
    answers: [
      {
        text: "Displays a dialog box with a message and an OK and a Cancel button",
        correct: true,
      },
      { text: "Displays an alert box with a message", correct: false },
      { text: "Sets focus to the current window", correct: false },
      { text: "Moves the window to the specified position", correct: false },
    ],
  },
  {
    question:
      "What does the Window.getComputedStyle() method do in JavaScript?",
    answers: [
      {
        text: "Gets the current computed CSS styles applied to an element",
        correct: true,
      },
      {
        text: "Returns a reference to the current window's document",
        correct: false,
      },
      {
        text: "Moves a window relative to its current position",
        correct: false,
      },
      {
        text: "Resizes the window to the specified width and height",
        correct: false,
      },
    ],
  },
  {
    question: "What does the Window.getSelection() method do in JavaScript?",
    answers: [
      {
        text: "Returns a Selection object representing the range of text selected by the user",
        correct: true,
      },
      {
        text: "Gets the current computed CSS styles applied to an element",
        correct: false,
      },
      { text: "Sets focus to the current window", correct: false },
      { text: "Closes the current window", correct: false },
    ],
  },
  {
    question: "What does the Window.matchMedia() method do in JavaScript?",
    answers: [
      {
        text: "Returns a MediaQueryList object representing the specified CSS media query string",
        correct: true,
      },
      { text: "Resizes the window by the specified pixels", correct: false },
      { text: "Moves a window to the specified position", correct: false },
      { text: "Sets focus to the current window", correct: false },
    ],
  },
  {
    question: "What does the Window.focus() method do in JavaScript?",
    answers: [
      { text: "Sets focus to the current window", correct: true },
      {
        text: "Moves the window relative to its current position",
        correct: false,
      },
      { text: "Opens a new browser window", correct: false },
      {
        text: "Resizes the window to the specified width and height",
        correct: false,
      },
    ],
  },
  {
    question: "What does the Window.moveBy() method do in JavaScript?",
    answers: [
      {
        text: "Moves a window relative to its current position",
        correct: true,
      },
      { text: "Sets focus to the current window", correct: false },
      {
        text: "Scrolls the document to the specified coordinates",
        correct: false,
      },
      { text: "Closes the current window", correct: false },
    ],
  },
  {
    question: "What does the Window.moveTo() method do in JavaScript?",
    answers: [
      { text: "Moves a window to the specified position", correct: true },
      { text: "Opens a new browser window", correct: false },
      {
        text: "Moves a window relative to its current position",
        correct: false,
      },
      { text: "Resizes the window by the specified pixels", correct: false },
    ],
  },
  {
    question: "What does the Window.open() method do in JavaScript?",
    answers: [
      { text: "Opens a new browser window", correct: true },
      { text: "Moves the window to the specified position", correct: false },
      { text: "Resizes the window by the specified pixels", correct: false },
      { text: "Sets focus to the current window", correct: false },
    ],
  },
  {
    question: "What does the Window.print() method do in JavaScript?",
    answers: [
      { text: "Prints the content of the current window", correct: true },
      { text: "Opens a new browser window", correct: false },
      { text: "Moves a window to the specified position", correct: false },
      { text: "Resizes the window by the specified pixels", correct: false },
    ],
  },
  {
    question: "What does the Window.prompt() method do in JavaScript?",
    answers: [
      {
        text: "Displays a dialog box that prompts the visitor for input",
        correct: true,
      },
      {
        text: "Displays a dialog box with a message and an OK and a Cancel button",
        correct: false,
      },
      { text: "Sets focus to the current window", correct: false },
      { text: "Closes the current window", correct: false },
    ],
  },
  {
    question:
      "What does the Window.requestAnimationFrame() method do in JavaScript?",
    answers: [
      {
        text: "Requests the browser to call a function to update an animation before the next repaint",
        correct: true,
      },
      {
        text: "Sets a timer to run after a specified number of milliseconds",
        correct: false,
      },
      { text: "Resizes the window by the specified pixels", correct: false },
      { text: "Moves the window to the specified position", correct: false },
    ],
  },
  {
    question: "What does the Window.resizeBy() method do in JavaScript?",
    answers: [
      { text: "Resizes the window by the specified pixels", correct: true },
      { text: "Sets focus to the current window", correct: false },
      { text: "Opens a new browser window", correct: false },
      { text: "Closes the current window", correct: false },
    ],
  },
  {
    question: "What does the Window.resizeTo() method do in JavaScript?",
    answers: [
      {
        text: "Resizes the window to the specified width and height",
        correct: true,
      },
      { text: "Sets focus to the current window", correct: false },
      { text: "Opens a new browser window", correct: false },
      { text: "Moves the window to the specified position", correct: false },
    ],
  },
  {
    question: "What does the Window.scrollBy() method do in JavaScript?",
    answers: [
      { text: "Scrolls the document by the number of pixels", correct: true },
      {
        text: "Scrolls the document to the specified coordinates",
        correct: false,
      },
      { text: "Moves the window to the specified position", correct: false },
      { text: "Resizes the window by the specified pixels", correct: false },
    ],
  },
  {
    question: "What does the Window.scrollTo() method do in JavaScript?",
    answers: [
      {
        text: "Scrolls the document to the specified coordinates",
        correct: true,
      },
      { text: "Moves the window to the specified position", correct: false },
      { text: "Sets focus to the current window", correct: false },
      { text: "Closes the current window", correct: false },
    ],
  },
  {
    question: "What does the Window.stop() method do in JavaScript?",
    answers: [
      { text: "Stops the window from loading", correct: true },
      { text: "Opens a new browser window", correct: false },
      {
        text: "Scrolls the document to the specified coordinates",
        correct: false,
      },
      { text: "Sets focus to the current window", correct: false },
    ],
  },
  {
    question: "What does the onblur event do in JavaScript?",
    answers: [
      { text: "When a user leaves an input field", correct: true },
      {
        text: "When a user changes the content of an input field",
        correct: false,
      },
      { text: "When an input field gets focus", correct: false },
      { text: "When input text is selected", correct: false },
    ],
  },
  {
    question: "What does the onchange event do in JavaScript?",
    answers: [
      {
        text: "When a user changes the content of an input field",
        correct: true,
      },
      { text: "When a user leaves an input field", correct: false },
      { text: "When an input field gets focus", correct: false },
      { text: "When input text is selected", correct: false },
    ],
  },
  {
    question: "What does the onfocus event do in JavaScript?",
    answers: [
      { text: "When an input field gets focus", correct: true },
      { text: "When a user leaves an input field", correct: false },
      { text: "When input text is selected", correct: false },
      {
        text: "When a user changes the content of an input field",
        correct: false,
      },
    ],
  },
  {
    question: "What does the onselect event do in JavaScript?",
    answers: [
      { text: "When input text is selected", correct: true },
      { text: "When an input field gets focus", correct: false },
      { text: "When a user leaves an input field", correct: false },
      {
        text: "When a user changes the content of an input field",
        correct: false,
      },
    ],
  },
  {
    question: "What does the onsubmit event do in JavaScript?",
    answers: [
      { text: "When a user clicks the submit button", correct: true },
      { text: "When a user leaves an input field", correct: false },
      { text: "When input text is selected", correct: false },
      { text: "When an input field gets focus", correct: false },
    ],
  },
  {
    question: "What does the onreset event do in JavaScript?",
    answers: [
      { text: "When a user clicks the reset button", correct: true },
      { text: "When a user clicks the submit button", correct: false },
      { text: "When an input field gets focus", correct: false },
      { text: "When input text is selected", correct: false },
    ],
  },
  {
    question: "What does the onclick event do in JavaScript?",
    answers: [
      { text: "When the user clicks on an element", correct: true },
      {
        text: "When the user right-clicks on an element to open a context menu",
        correct: false,
      },
      { text: "When the pointer is moved onto an element", correct: false },
      { text: "When the pointer is moved out of an element", correct: false },
    ],
  },
  {
    question: "What does the ondblclick event do in JavaScript?",
    answers: [
      { text: "When the user double-clicks on an element", correct: true },
      { text: "When the user clicks on an element", correct: false },
      { text: "When the user right-clicks on an element", correct: false },
      { text: "When the pointer is moved out of an element", correct: false },
    ],
  },
  {
    question: "What does the onmouseenter event do in JavaScript?",
    answers: [
      { text: "When the pointer is moved onto an element", correct: true },
      { text: "When the pointer is moved out of an element", correct: false },
      { text: "When the user clicks on an element", correct: false },
      {
        text: "When the pointer is moving while it is over an element",
        correct: false,
      },
    ],
  },
  {
    question: "What does the onmouseleave event do in JavaScript?",
    answers: [
      { text: "When the pointer is moved out of an element", correct: true },
      { text: "When the pointer is moved onto an element", correct: false },
      { text: "When the user clicks on an element", correct: false },
      {
        text: "When the pointer is moving while it is over an element",
        correct: false,
      },
    ],
  },
  {
    question: "What does the onmousedown event do in JavaScript?",
    answers: [
      {
        text: "When the user presses a mouse button over an element",
        correct: true,
      },
      {
        text: "When the user releases a mouse button over an element",
        correct: false,
      },
      { text: "When the pointer is moved onto an element", correct: false },
      { text: "When the pointer is moved out of an element", correct: false },
    ],
  },
  {
    question: "What does the onmouseup event do in JavaScript?",
    answers: [
      {
        text: "When a user releases a mouse button over an element",
        correct: true,
      },
      {
        text: "When the user presses a mouse button over an element",
        correct: false,
      },
      { text: "When the pointer is moved onto an element", correct: false },
      { text: "When the pointer is moved out of an element", correct: false },
    ],
  },
  {
    question: "What does the onmouseover event do in JavaScript?",
    answers: [
      {
        text: "When the pointer is moved onto an element or onto one of its children",
        correct: true,
      },
      { text: "When the pointer is moved out of an element", correct: false },
      {
        text: "When the user presses a mouse button over an element",
        correct: false,
      },
      {
        text: "When the user releases a mouse button over an element",
        correct: false,
      },
    ],
  },
  {
    question: "What does the onmouseout event do in JavaScript?",
    answers: [
      {
        text: "When a user moves the mouse pointer out of an element or out of one of its children",
        correct: true,
      },
      {
        text: "When the pointer is moved onto an element or one of its children",
        correct: false,
      },
      { text: "When the user clicks on an element", correct: false },
      {
        text: "When the user presses a mouse button over an element",
        correct: false,
      },
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
