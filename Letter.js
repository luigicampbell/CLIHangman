var char = " ";
var guessed = false;
let proceed = false;

const Letter = function(character)
{
  this.char = character;
  this.guessed = false;
};

// Every instance inherits the prototype with this syntax

Letter.prototype.display = function()
{
  if(this.guessed)
  {
    return this.char;
    // return this.proceed = true;
    // console.log(this.proceed);
  }
  else
  {
    return "_";
    // return this.proceed = false;
  }
};

Letter.prototype.checkLetter = function (guessedChar){
  if (this.char === guessedChar){
    this.guessed = true;
 }
};

module.exports = Letter;
