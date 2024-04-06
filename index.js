// Define a function called isPalindrome that takes a single argument, word.
function isPalindrome(word) {
  // Initialize a variable called reversedWord and set it equal to an empty string.
  let reversedWord = "";

  // Iterate through each character of the word from the end to the beginning.
  for (let i = word.length - 1; i >= 0; i--) {
    // Concatenate each character to the reversedWord variable.
    reversedWord += word[i];
  }

  // Check if the reversedWord is equal to the original word.
  // If they are equal, return true. If not, return false.
  return reversedWord === word;
}

/*
  Pseudocode:
  1. Define a function called isPalindrome that takes a single argument, word.
  2. Initialize a variable called reversedWord and set it equal to an empty string.
  3. Iterate through each character of the word from the end to the beginning.
  4. Concatenate each character to the reversedWord variable.
  5. Check if the reversedWord is equal to the original word.
  6. If they are equal, return true.
  7. If not, return false.
*/

// Test cases
console.log("Expecting: true");
console.log("=>", isPalindrome("racecar"));

console.log("");

console.log("Expecting: false");
console.log("=>", isPalindrome("robot"));

// Additional test cases
console.log("");

console.log("Expecting: true");
console.log("=>", isPalindrome("level"));

console.log("");

console.log("Expecting: false");
console.log("=>", isPalindrome("hello"));

// Export the isPalindrome function to make it accessible from other files
module.exports = isPalindrome;

