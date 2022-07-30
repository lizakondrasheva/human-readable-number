module.exports = function toReadable (numbe) {
  const numberWords = {
      0: 'zero',
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine',
      10: 'ten',
  }

  function getNumberWord(number) {
      if (numberWords.hasOwnProperty(number)) {
          return numberWords[number]
      } else {
          return false
      }
  }

  const numb = process.argv[2]
    console.log(getNumberWord(numb))
    console.log('hello')
}
