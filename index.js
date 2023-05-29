function isPalindrome(word) {
  // Write your algorithm here
  const wordToLower = word.toLowerCase();
  const reversedOrder = wordToLower.split("").reverse().join("");
  console.log(wordToLower)
  console.log(reversedOrder)
  return wordToLower === reversedOrder
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
