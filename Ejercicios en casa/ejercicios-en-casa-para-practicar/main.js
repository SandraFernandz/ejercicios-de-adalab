'use strict';

//given a specific string, converte it to array and reverse it.

console.log('ready :');
const n = '8989778';
console.log(n);

function digitize(m) {
  const mString = String(m);
  console.log(mString);
  const makeArray = Array.from(mString);
  console.log(makeArray);
  const reversedArray = makeArray.reverse();
  return console.log(reversedArray);
}

digitize(9348);

console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]
console.log(Array.from('jelis'));

/*Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

*/

function abbrevName(name) {
  const checkForBlank = name.indexOf(' ');
  const firstCapital = name.charAt(0).toUpperCase();
  const secondCapital = name.charAt(Number(checkForBlank) + 1).toUpperCase();
  const capitalLettersOfName = `${firstCapital}.${secondCapital}.`;

  return console.log(capitalLettersOfName);
}

abbrevName('mar nom');
console.log(abbrevName);
