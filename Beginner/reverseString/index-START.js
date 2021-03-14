/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/

// // _______Logic_______ // //

// receives one parameter a string
// we want to reverse that string in order
// return reversed string


// // _______4 Ways To Solve_______ // //
//
//

// 1) Chaining in-built methods
// 2) Using a For-Loop
// 3) Recursion Method
// 4) Using .reduce()


// // _______Chaining in-built methods_______ // // 
//
//
//


// function reverseString(text) {
//     return text.split("").reverse().join("")
// }

// Refactor to use ES6 syntax' spread operator

// const reverseString = text => {
//     return [...text].reverse().join('')
// }


// // // _______The For-Loop Way_______ // //
// //
// //
// //


// function reverseString(text) {
//     let result = ""

//     for(let i = text.length - 1; i >= 0; i--){
//         result += text[i]
//     }
//     return result
// }

// // Refactor to use ES6 syntax' for...of loop

// const reverseString = text => {
//     let result = "";

//     for(let char of text){
//         result = char + result
//     }
//     return result
// }

// // // _______The Recursive Way_______ // //
// //
// //
// //

// function reverseString(text) {
//     if (text === "") {
//         return ""
//     } else {
//         return reverseString(text.substr(1)) + text[0]
//     }
    
// }



// // // _______Using .reduce()_______ // //
// //
// //
// //

// const reverseString = text => text.split("").reduce((accumulator, char) => char + accumulator, '')

// // Using reduce() with spread operator

const reverseString = text => [...text].reduce((accumulator, char) => char + accumulator, '')

module.exports = reverseString