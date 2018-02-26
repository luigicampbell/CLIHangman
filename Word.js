const Letter = require('./Letter');
// Word value

const Word = function(value)
{
  this.value = value;
  this.letters = this.value.split('')
       .map(letter =>
        new Letter(letter)
      );
  this.prevState = this.render();
};

Word.prototype = {
  render: function(){
    const tokens = this.letters.map( letter => {
      return letter.display();
    });
    return tokens.join(' ');
  },
  checkUserGuess: function(userGuess){
    this.prevState = this.render();
    this.letters.map(letter => {
      letter.checkLetter(userGuess);
    });
  }
}
// Checks user guess against every letter in list
// Function to build letter objects
// List of letters (objects) in word

module.exports = Word;
