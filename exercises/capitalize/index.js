// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const capArr = []

  for ( let word of str.split(' ') ) {
     capArr.push( word[0].toUpperCase() + word.slice(1) )
  }
  return capArr.join(' ')
}
module.exports = capitalize;
