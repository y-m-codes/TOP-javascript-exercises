const palindromes = function(string) {
  let stringLowerCase = string.toLowerCase();
  let stringCleaned = stringLowerCase.replace(/[^a-zA-Z\d]/g, "");

  function reverseString(string) {
    let reversedString = "";
    for (i = string.length - 1; i >= 0; i--) {
        reversedString += string[i];
    }
    return reversedString
  };

  let stringInReverse = reverseString(stringCleaned);

  if (stringCleaned === stringInReverse) {
    return true
  } else {
    return false
  };
};

const testString = "A car, a man, a maraca";

console.log(palindromes(testString));
console.log(palindromes("Rats live on no evil star."));
console.log(palindromes("Lid off a daffodil."));
console.log(palindromes("Animal loots foliated detail of stool lamina."));
console.log(palindromes("A nut for a jar of tuna."));


// Do not edit below this line
module.exports = palindromes;
