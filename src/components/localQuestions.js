export const localQuestions = [
  // --- JavaScript Master ---
  {
    _id: "js_1",
    category: "JavaScript Master",
    difficulty: "Easy",
    question: "What is the output of `console.log(typeof NaN)`?",
    options: ["number", "NaN", "undefined", "object"],
    answer: "number",
    hint: "Even though it stands for 'Not-a-Number', it is technically a numeric data type in JavaScript.",
    explanation: "According to the ECMAScript standard, `NaN` is a special value belonging to the Number type. Therefore, `typeof NaN` yields 'number'."
  },
  {
    _id: "js_2",
    category: "JavaScript Master",
    difficulty: "Medium",
    question: "Which of the following is NOT a closures use case in JavaScript?",
    options: ["Data encapsulation / private variables", "Currying", "Function memoization", "Deep cloning objects"],
    answer: "Deep cloning objects",
    hint: "Closures preserve the lexical scope. Object cloning is a structural duplication task.",
    explanation: "Closures allow a function to access variables from an outer lexical scope even after that scope has closed. They are perfect for private state, currying, and memoization, but have nothing to do with deep cloning objects."
  },
  {
    _id: "js_3",
    category: "JavaScript Master",
    difficulty: "Hard",
    question: "What is the value of `result` after executing: `const result = [1, 2, 3].map(num => { if (num > 1) return; return num * 2; })`?",
    options: ["[2, undefined, undefined]", "[2, null, null]", "[2, 4, 6]", "[2]"],
    answer: "[2, undefined, undefined]",
    hint: "The map function always returns an array of the exact same length. If a map callback returns nothing, it implicitly returns undefined.",
    explanation: "Array.prototype.map creates a new array with the results of calling a function on every element. For elements 2 and 3, the callback executes the `if` block, returning nothing (which implicitly evaluates to `undefined`). For 1, it returns `1 * 2 = 2`."
  },
  {
    _id: "js_4",
    category: "JavaScript Master",
    difficulty: "Easy",
    question: "Which keyword is used to prevent any modification to an existing object (i.e. making it read-only)?",
    options: ["Object.freeze()", "Object.seal()", "Object.lock()", "const"],
    answer: "Object.freeze()",
    hint: "It completely freezes the object, making it immutable. Even existing properties cannot be changed.",
    explanation: "`Object.freeze()` prevents new properties from being added, existing properties from being removed, and existing property values from being modified. `Object.seal()` prevents adding/removing but allows editing values."
  },
  {
    _id: "js_5",
    category: "JavaScript Master",
    difficulty: "Medium",
    question: "What will `console.log(1 + '2' + 3)` output in JavaScript?",
    options: ["123", "6", "NaN", "15"],
    answer: "123",
    hint: "Operation runs from left to right. Adding a number and a string coerces the number into a string.",
    explanation: "First, `1 + '2'` is evaluated. Since `'2'` is a string, JavaScript performs string concatenation, resulting in `'12'`. Then, `'12' + 3` is evaluated, resulting in `'123'`."
  },
  {
    _id: "js_6",
    category: "JavaScript Master",
    difficulty: "Hard",
    question: "What is the main difference between microtasks and macrotasks in the Event Loop?",
    options: [
      "Microtasks execute immediately after the current script, before the render phase.",
      "Macrotasks execute before microtasks.",
      "Microtasks are handled by the GPU.",
      "There is no difference; they run in the same queue."
    ],
    answer: "Microtasks execute immediately after the current script, before the render phase.",
    hint: "Promises and MutationObservers schedule microtasks, while setTimeout and setInterval schedule macrotasks.",
    explanation: "At the end of each task in the event loop, the microtask queue is completely flushed before moving on to the next macrotask or rendering. This means microtasks run with higher priority than macrotasks like `setTimeout`."
  },

  // --- React Essentials ---
  {
    _id: "react_1",
    category: "React Essentials",
    difficulty: "Easy",
    question: "Which React hook is used to perform side effects in functional components?",
    options: ["useEffect", "useState", "useContext", "useReducer"],
    answer: "useEffect",
    hint: "It replaces lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount.",
    explanation: "The `useEffect` Hook lets you perform side effects (data fetching, subscriptions, manual DOM changes) in function components."
  },
  {
    _id: "react_2",
    category: "React Essentials",
    difficulty: "Medium",
    question: "What does the `useCallback` hook return?",
    options: ["A memoized version of the callback function", "The output value of the callback function", "A promise reference", "A state variable"],
    answer: "A memoized version of the callback function",
    hint: "It is used to optimize performance when passing callbacks to optimized child components.",
    explanation: "`useCallback` returns a memoized version of the callback that only changes if one of the dependencies has changed. This prevents unnecessary renders of child components."
  },
  {
    _id: "react_3",
    category: "React Essentials",
    difficulty: "Hard",
    question: "In React, what happens when you call a state setter function with the exact same value as the current state?",
    options: [
      "React bails out without rendering the children or firing effects.",
      "React throws a re-render error.",
      "React re-renders the component but doesn't commit changes to the DOM.",
      "The component enters an infinite loop."
    ],
    answer: "React bails out without rendering the children or firing effects.",
    hint: "React uses Object.is comparison algorithm to see if state has changed.",
    explanation: "React uses the `Object.is` algorithm to compare the new state with the current state. If they are equal, React will bail out of rendering children or firing effects, optimizing performance."
  },
  {
    _id: "react_4",
    category: "React Essentials",
    difficulty: "Easy",
    question: "What is the purpose of the 'key' prop in React lists?",
    options: [
      "To help React identify which items have changed, been added, or been removed.",
      "To securely encrypt list elements.",
      "To style individual elements uniquely.",
      "To bind click event handlers automatically."
    ],
    answer: "To help React identify which items have changed, been added, or been removed.",
    hint: "It gives elements a stable identity during DOM diffing.",
    explanation: "Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity."
  },
  {
    _id: "react_5",
    category: "React Essentials",
    difficulty: "Medium",
    question: "How does React's Context API avoid 'prop drilling'?",
    options: [
      "By passing data through the component tree without having to pass props down manually at every level.",
      "By storing state directly in the browser's cookies.",
      "By converting functional components into class components.",
      "By compiling props into CSS Custom Properties."
    ],
    answer: "By passing data through the component tree without having to pass props down manually at every level.",
    hint: "It acts as a broadcast channel that nested children can tune into.",
    explanation: "Context provides a way to pass values down the component tree without explicitly routing props through every intermediary level of the component hierarchy."
  },
  {
    _id: "react_6",
    category: "React Essentials",
    difficulty: "Hard",
    question: "What is the correct way to handle cleanup logic in a `useEffect` hook?",
    options: [
      "Return a function from the effect callback.",
      "Pass a cleanup parameter into the dependency array.",
      "Call the `effect.cleanup()` method inside the component.",
      "React functional components clean up state automatically; no action is needed."
    ],
    answer: "Return a function from the effect callback.",
    hint: "React runs this returned function when the component unmounts or before re-running the effect.",
    explanation: "If your effect returns a function, React will run it when it is time to clean up. This is useful for clearing subscriptions, timers, or event listeners."
  },

  // --- CSS & Web Design ---
  {
    _id: "css_1",
    category: "CSS & Web Design",
    difficulty: "Easy",
    question: "In the CSS Box Model, which area is situated between the border and the element content?",
    options: ["Padding", "Margin", "Outline", "Glow"],
    answer: "Padding",
    hint: "It adds space inside the border, pushing content inward.",
    explanation: "Padding is the space inside the border, wrapping the core content. Margin is the spacing outside the border."
  },
  {
    _id: "css_2",
    category: "CSS & Web Design",
    difficulty: "Medium",
    question: "What is the difference between `position: absolute` and `position: fixed`?",
    options: [
      "Absolute is relative to its nearest positioned ancestor; fixed is relative to the viewport.",
      "Fixed is relative to its parent container; absolute is relative to the screen.",
      "Absolute components cannot be scrolled; fixed components can.",
      "There is no difference; they behave identically in modern browsers."
    ],
    answer: "Absolute is relative to its nearest positioned ancestor; fixed is relative to the viewport.",
    hint: "Fixed elements stay in the same place even when the page is scrolled.",
    explanation: "`position: fixed` positions an element relative to the browser window (viewport), so it stays static during scroll. `position: absolute` positions relative to the nearest parent that has a position other than static."
  },
  {
    _id: "css_3",
    category: "CSS & Web Design",
    difficulty: "Hard",
    question: "Which of the following Flexbox property combinations centers a child item horizontally and vertically inside a container with `flex-direction: column`?",
    options: [
      "justify-content: center; align-items: center;",
      "text-align: center; margin: auto 0;",
      "align-content: center; justify-items: center;",
      "flex-wrap: wrap; place-self: center;"
    ],
    answer: "justify-content: center; align-items: center;",
    hint: "Regardless of flex direction, these two control spacing along the main axis and cross axis.",
    explanation: "`justify-content` controls alignment along the main axis (which is vertical when direction is column). `align-items` controls alignment along the cross axis (horizontal when direction is column). Combining both centers items completely."
  },
  {
    _id: "css_4",
    category: "CSS & Web Design",
    difficulty: "Easy",
    question: "What does the CSS media query `prefers-color-scheme` check?",
    options: [
      "The user's operating system dark/light theme preference.",
      "The color resolution capabilities of the monitor.",
      "The level of ambient light around the device.",
      "Whether the user is color blind."
    ],
    answer: "The user's operating system dark/light theme preference.",
    hint: "It helps developers automatically apply dark mode stylesheet rules.",
    explanation: "The `prefers-color-scheme` CSS media feature is used to detect if the user has requested the system use a light or dark color theme."
  },
  {
    _id: "css_5",
    category: "CSS & Web Design",
    difficulty: "Medium",
    question: "What is the purpose of the CSS property `backdrop-filter`?",
    options: [
      "It applies graphical effects (like blur or color shifting) to the area behind an element.",
      "It filters out background images that fail to load.",
      "It creates 3D depth buffers for canvas rendering.",
      "It blocks user clicks from reaching underlying layered elements."
    ],
    answer: "It applies graphical effects (like blur or color shifting) to the area behind an element.",
    hint: "It is crucial for building modern 'glassmorphism' card overlays.",
    explanation: "`backdrop-filter` lets you apply graphical effects—such as blurring or color-shifting—to the area behind an element. Since it applies to everything behind the element, you can create frosty, translucent surfaces."
  },

  // --- AI & Python Basics ---
  {
    _id: "ai_1",
    category: "AI & Python Basics",
    difficulty: "Easy",
    question: "In Python, which built-in function returns the number of items in a list?",
    options: ["len()", "count()", "size()", "length()"],
    answer: "len()",
    hint: "It is short for 'length'.",
    explanation: "The `len()` function is a built-in Python function that returns the length (the number of items) of an object, such as a list, string, tuple, or dictionary."
  },
  {
    _id: "ai_2",
    category: "AI & Python Basics",
    difficulty: "Medium",
    question: "What is the purpose of a list comprehension in Python?",
    options: [
      "To write a shorter, more readable syntax for creating a new list based on existing lists.",
      "To compress a list into binary format to save storage.",
      "To sort list elements automatically.",
      "To search a list for matching keys using binary search."
    ],
    answer: "To write a shorter, more readable syntax for creating a new list based on existing lists.",
    hint: "It fits a for-loop and action onto a single line inside square brackets.",
    explanation: "List comprehension offers a shorter syntax when you want to create a new list based on the values of an existing list, making Python code more expressive and pythonic."
  },
  {
    _id: "ai_3",
    category: "AI & Python Basics",
    difficulty: "Hard",
    question: "In machine learning, what does the term 'Overfitting' mean?",
    options: [
      "The model performs exceptionally well on the training data but fails to generalize to new, unseen testing data.",
      "The model does not have enough parameters to capture the training dataset patterns.",
      "The training process takes too long due to excessive hardware specs.",
      "The dataset is too small to fit the model's structure."
    ],
    answer: "The model performs exceptionally well on the training data but fails to generalize to new, unseen testing data.",
    hint: "It happens when the model memorizes the noise in the training set instead of learning the underlying features.",
    explanation: "Overfitting occurs when a machine learning model fits the training data too closely, capturing noise and details that do not generalize well to unseen validation/test datasets."
  },
  {
    _id: "ai_4",
    category: "AI & Python Basics",
    difficulty: "Easy",
    question: "Which of the following Python data structures is mutable?",
    options: ["List", "Tuple", "String", "Frozenset"],
    answer: "List",
    hint: "You can append, sort, or modify elements in place.",
    explanation: "Lists are mutable, meaning their elements can be changed, added, or deleted after creation. Strings and Tuples are immutable."
  },
  {
    _id: "ai_5",
    category: "AI & Python Basics",
    difficulty: "Medium",
    question: "In a neural network, what is the primary role of an 'Activation Function'?",
    options: [
      "To introduce non-linearity into the network, allowing it to learn complex patterns.",
      "To initialize the weights of synapses randomly.",
      "To terminate the training loop once the target threshold is reached.",
      "To encrypt data during forward propagation."
    ],
    answer: "To introduce non-linearity into the network, allowing it to learn complex patterns.",
    hint: "Without it, no matter how many layers a neural network has, it would behave like a simple linear regression model.",
    explanation: "Activation functions introduce non-linear properties to the neural network. Without non-linearity, a neural network is just a linear combination of its inputs, preventing it from modeling complex datasets."
  }
];
