// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


function anagrams(stringA, stringB) {
 
  const strA = stringA.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');
  
  const strB = stringB.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');
  
  return strA === strB
 };

 
// function anagrams(stringA, stringB) {
//   const strA = stringA.toLowerCase().replace(/[^a-z]/g, '');
//   const strB = stringB.toLowerCase().replace(/[^\w]/g, '');
  
//   const charMapA = buildCharMap(strA) 
//   const charMapB = buildCharMap(strB) 

//   if ( Object.keys(charMapA).length !== Object.keys(charMapB).length ) return false

//   for (let char in charMapA ) {
//     if ( charMapA[char] !== charMapB[char] ) {
//       return false
//     }
//   }


//  return true
// }
// function buildCharMap(str) {
//   let charMap = {};
//   for (let char of str) {
//     // if (!charMap[char]) charMap[char] = 0;
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//   return charMap;
// }

module.exports = anagrams;
