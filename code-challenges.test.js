// ASSESSMENT 2: Coding Practical Questions with Jest

const { string } = require("yargs")

// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// describe("myFunction", () => {
//     it("what is expected of the function", () => {
//       expect(myFunction()).toEqual("the expected return")
//     })
//   })

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

describe("divBy3", () => {
    it("takes a object as an argument and decides if the number inside it is evenly divisible by three or not.", () => {
        expect(divBy3(object1)).toEqual("15 is divisible by three")
        expect(divBy3(object2)).toEqual("0 is divisible by three")
        expect(divBy3(object3)).toEqual("-7 is not divisible by three")

    })
})


// FAIL  ./code-challenges.test.js
// ● Test suite failed to run

//   Your test suite must contain at least one test.

//     at onResult (node_modules/@jest/core/build/TestScheduler.js:133:18)
//     at node_modules/@jest/core/build/TestScheduler.js:254:19
//     at node_modules/emittery/index.js:363:13
//         at Array.map (<anonymous>)
//     at Emittery.emit (node_modules/emittery/index.js:361:23)

// Test Suites: 1 failed, 1 total
// Tests:       0 total
// Snapshots:   0 total
// Time:        0.507 s


const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

// b) Create the function that makes the test pass.
// pseudo code:
// input: a code that would take an object
// output: returns a statement if the object is divisible or not
// create a functon called divBy3 for numbers divisible by three (3) and takes an object as a parameter
// make a conditional statement that brings the value of the key within the object being use.
    // the conditionla statement returns a string stating whether the value is divisible or not

const divBy3 = (object) =>{
    if(object.number % 3 === 0){
        return `${object.number} is divisible by three`
    }else if (object.number % 3 !==0){
        return `${object.number} is not divisible by three`
    }
}

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

describe("capitalization", () => {
    it("takes in an array of words and returns an array with all the words capitalized.", () => {
      expect(capitalization(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
      expect(capitalization(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])

    })
  })

// ----->
//  FAIL  ./code-challenges.test.js
//   divBy3
//   ✓ test with expect statements for each of the variables provided. (3 ms)
// capitalization
//   ✕ test with expect statements for each of the variables provided.


// b) Create the function that makes the test pass.
// pseudo code: 
// input: A code that would take an array with strings
// output: returns every string capitalize only at the first character
// create a code named capitalization that takes an array as a parameter
// return the following:
    //  use the high order function .map() on the array
    //  use buil-in method .charAt() identifing the first index of each string within the array 
        // use built-in method .toUpperCase() to capitalize the index requested
    // then concatenate using '+' (since we are working with the index of the charaters in the string) 
    // lastly use the built-in method .slice() to select only the first character in the string. 


const capitalization = (array) =>{
    return array.map((value) => value.charAt(0).toUpperCase() + value.slice(1))
}

// PASS  ./code-challenges.test.js
// divBy3
//   ✓ test with expect statements for each of the variables provided. (3 ms)
// capitalization
//   ✓ test with expect statements for each of the variables provided. (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

describe("indexFirstVowel", () => {
        it("takes in a string and logs the index of the first vowel.", () => {
          expect(indexFirstVowel(vowelTester1)).toEqual(1)
          expect(indexFirstVowel(vowelTester2)).toEqual(0)
          expect(indexFirstVowel(vowelTester3)).toEqual(2)
        })
      })

// FAIL  ./code-challenges.test.js
// divBy3
// ✓ takes a object as an argument and decides if the number inside it is evenly divisible by three or not. (3 ms)
// capitalization
// ✓ takes in an array of words and returns an array with all the words capitalized. (1 ms)
// indexFirstVowel
// ✕ takes in a string and logs the index of the first vowel.
    

// b) Create the function that makes the test pass.



const indexFirstVowel = (string) =>{
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    return string.filter((value, index) =>{
        return values.indexOf(vowels)})
    }
    
    // for(i = 0; i < string.length(); i++){
    //     if (vowels.indexOf(i) >= 0)
    //         return value = i
    // }return value
    
    


