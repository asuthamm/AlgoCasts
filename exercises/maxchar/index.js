// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charHash = {};
  let max = 0;
  let maxChar = "";

  for (let char of str) {
    if (charHash[char]) {
      charHash[char]++;
    } else {
      charHash[char] = 1;
    }
  }

  for (let char in charHash) {
    if (charHash[char] > max) {
      max = charHash[char];
      maxChar = char;
    }
  }
  return maxChar;
}

module.exports = maxChar;
