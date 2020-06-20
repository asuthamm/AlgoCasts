// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // method #1
  // reversed = ""
  // for (let i = str.length-1; i >= 0; i-- ) {
  //   reversed += str[i]
  // }
  // return reversed

  // method #2
  // let reversed = "";
  // for (let char of str) {             // new for format
  //   reversed = char + reversed;
  //   console.log(reversed)
  // }
  // return reversed

  // method #3
  // return str.split("").reverse().join("");

  // return str.split("").reduce((rev, char) => char + rev, "");
  return (str === '') ? '' : reverse(str.substr(1)) + str.charAt(0);
}

module.exports = reverse;
