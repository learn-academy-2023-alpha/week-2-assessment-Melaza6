// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Alpha 2023"
// console.log(cohort.split(""))

// a) Your answer:  This will log out an array and every letter including spaces as a new element within the array.

// b) Verify and explain: ['A', 'l', 'p', 'h', 'a', ' ', '2', '0','2', '3'], The built-in method .split() turns any string into an array without altering the string, but if we use quotes ("") as a parameter, .split() will turn every character in the string as an element in an array.  *NOTE* Spaces in an string are also cosider a characters by this built-in method.

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: A greeting saying  'Hello, LEARN Student' 
// b) Verify and explain: undefined.   After verifying, we realize the result we get is 'undefine'. becuase this function doesn have a return statement.

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
// console.log(multipliedByTwo)

// a) Your answer: An array with each value multiply by 2. The following array as a resutl: [8, 10, 12, 14, 16]
// b) Verify and explain: [ 8, 10, 12, 14, 16 ], .map() is a high-order funchtion that will interact and iterate with every element given in an array. In this case were are telling it to go into every element (number) and multiply it by 2 (number * 2), and bring the its return as a new array. 

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: An array with only number that are odd. The following array as a resutl: [11, 13, 15]
// b) Verify and explain:[ 11, 13, 15 ], .filter() is a high-order function that is also known an alternative to conditional statmens to some, in this case were are telling it to go into the array and only return all those that when divided by 2 its retunr is not zero. 

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: A string  saying "JavaScript"
// b) Verify and explain: JavaScript, asking the console to go in this function "myCodingSkills", find the following object "languages" and return whatever this object has at its first index [0]. *NOTE* all arrays start with an index of zero "0" at their first element. 
