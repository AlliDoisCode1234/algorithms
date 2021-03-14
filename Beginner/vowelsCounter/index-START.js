/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/


// // _______Iterative Approach_______ // // 
//
//
//

// const vowels = ["a", "e", "i", "o", "u"]

// function vowelsCounter(text) {  
//     // Initialize counter
//     let count = 0;

//     // Loop through text to test if each char is a vowel
//     for (let letter of text.toLowerCase()) {
//         if(vowels.includes(letter)) {
//             count++
//         }
//     }
//     // return number of vowels
//     return count
// }




// // _______RegEx Approach_______ // //
//
//
//

function vowelsCounter(text){
    // Search text with Regex and store all matching instances
    let matchingInstances = text.match(/[aeiou]/gi);

    // check if matching instances exist then calculate length
    if(matchingInstances){
        // return number of vowels
        return matchingInstances.length
    } else{
        return 0
    }
}







module.exports = vowelsCounter;
