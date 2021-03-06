var inquirer = require('inquirer');
const Word = require('./Word');
const Wordbank = require('./wordbank');
const pusheenWithLove =`
**   **
**************  *****
**$$$$  ****   $$*******
* $$$$$$$$$   $$* **   *$**
*  $    $$$$$* $* *$$$$$$$$$**
*  $$$$$$$$$$$$$ $$$$$$$$$**$$*
$$  $$$$$$$ $$$$$$$$ $$$$$$$$$$$$
*$ *$$$$$$$$$$$*$*$*$    *****$***
**$$ $$$$$$*$ **    [[[[[[[   [[[
**$**$$**$$$@@     [  #####  ## #
*$$$*****$$$$$$         ..###   ###
**$$$$$$$$ [[$$ ##        +++   ###
$$$$$$**[[  [[$$    #          ##
$$$***#[  #     ###      #   ##
$$$$$$ ##++ #+        ## ######
$$$$$#  ###       ##       ##
$$$$$#   ##            ######
$$$### ##      ##    #####
$#$ #  +##  #   ##  ## #
$$$$     #   +++#######
$$*      ##############
*$$# #  ++     ++++        ######
$$###         ++###      ##      ++
$# +#      #######+     +##+   ## ##
*#+ ##     ++###+###    +  ###+     ##
## ##+#  # ++ +++++##  +  #++##       ##
##+#  ##  ++##+     ###++ ##++           #
##+ +   ++  +##+  +   +######## #          #
###+     ++++##          ++ # # ##+         ##
####  +        ++            +++++# ## ##+        #
###++   +                           ##############+ +##+##
##+       ##                         ++#+ ++#########++##  "
####+                                    +#+ +++###############
###                                       ++++++#+++++##########
##+                                            ++ +     ####+++++
##                              ++               +++        ##  ++
##+                  ++                         +++++ +  # # ##+++
#      ++  +           ++                       ++@++ ++##### # ++
#    +   ####+                                +++++++###++####+##
#    +   ####+                                +++++++###++####+##
#   +    ###++                               +++++######## #######
#  +++    ####++++@                          +++++++++###   ###  #
#+ #+      ###++++++++                            ++++++#   ##+++#
##+ +      #### #####++++                          ++++##    ###++
##++      ###########++                          ++++++#      ## +
###+      ##########+++                             #++#        ##
#+  +    +########++                         ++##########
###+        # ###+++++                         +++++#####
###+  +      #  ##+++                          +++++#######
##++##+     ##   ##++  ##                       ###########
##+##+     ###  ######              #####     ###++++#####
##  ##     ##      ##  ######  ++              #+  ######
##+#       ##      ##  ######+++++             ++ #######
### #+    ###       ##  ########                  ## ####
######+    ##       ##++    ##+                  ## ## ##
+###  ####+##       ##                            +     #+
##++ +  ######      ##                                  ##
+##       ++ #     +#                 @@@                #
+#         + #    ##                                    ##
## +       # #    #                                      #+
##+        # #    # +                                    #+
##+        # #    ## ###                                ###
##+  +     ###    ##    ####                            +##
#++     #  ##+   +#  ########                          ####
##++        ##    ## ++   ####                         #####
##++       ++    #         +##         ##            ######
+# +        +#   +#           +#+      #####         ######+
# +       +#    #           +#+   ############           +##
# +      ##    +#           +###+  ######### +###++      +#
##++  + #     #     #             ###   #  #######++     #
##++  + #     ##             +### #+#  #+####        #
##+    +##    ##     ##         +###++#   #++####        #
# + +  +#     #                 +#+++# #+++###+         #
#      #     # +++++           +#+++# #+++###++        ##
+#      #     #    #####+        +#+++# #+++####++        #
# ##    ###   ###++           ++##+++# #+++####          #
########  ##  ###              ###++## ##++##             #
### ##     ## ##                ###########               #
##+ ###      #####              #########                 #
##### ###     ##+               ## ## ###                 +
########## #  ##++             +++###++++                 +
########## #  #++              ++##### ++++                ++
++## ++  ++  ## #+               ++### #++++               +
########### ## #+            ++++##+++++++                +
##+++  #  #### ++           ++### #+++++++              ++
#+####    ##++          +++##+ #####++ +             ++
##### + + ### ++++      ++###  #####++ +            ++
########### #++++    ++###  #####++ +             +
+###+ ##### ++ ++ +   +#      +# #++  +            +
##############  ##       +### ++            ++
####+++++###+  ##         ## ++           +++
#####+++#####  ##          ##+#            ++
########+###++  #           ###             +
###### # ## #  #           ##++            +
## ## ## ## ## #           # # ##         +
####  #  ++ # ##           +#  #+         +
## ++       # ##            #####         ++
######  #   +###             ####+         +
# ####      ####             #####+         +
+#+ ## +#### ##               ####+++  +     #
##  #  #######               ###### ###   ##
#    ##  #  ###                 ######+++   ##
#########  #####                 ######+++   #
## # # ## # # #                   ## # #
##  # +  #  ##                    +## + + +
# ###   #     #                     # ### #
#  ###+++     #+                    ## ++  #
## #####      ##                    ## ## ####
# ######       #                    ## # +  +
# + + +#       #                     # + + + +
# +  ##       #                     # + + + +
#+ ++##     ##                      # # #+ +
#+ + +     +#                      ### # +
# + + +      #                      +# + +
# + +  +     #                       ### ##
# ###++     ##                        ## #
#  #      ##                        ####
# #      #+                         ###
## #   ###                          ##
## #   ##                          ##
### ## #
+##  +##
##    #
+#    #
+#++   "
## +   #
##+     ##
# #     +#
#+      ###
+# +    ++#
##   +   +#
## +     +##
###       #+#
#+         + #
##           +##
#+ # # # +#    #
##+ #  # #   ##
#+##+#  ####+
`;

// 1A Pick a random word from the wordbank
// 1B Create a word object from that word
var word;
var wordStr;
function startGame(){
  console.log('starting a new game');
  word = new Word(Wordbank[Math.floor(Math.random() * Wordbank.length)]);
  wordStr = word.render();
  console.log(word.render());
  askUser();
}
// 3 Tell it to buildLetters/Call the fx
// word.buildLetters();



// 4 Show user the render

// 5 Ask for input




let countdown = 6;

function askUser(){
  inquirer.prompt([
    {
      type: 'input',
      name: 'userGuess',
      message: 'Guess a Letter!'
    }
  ]).then(answer => {
    const guess = answer.userGuess;

    if(countdown > 1){

      console.log(`You guessed: ${guess}`);
      word.checkUserGuess(guess);

      var newWord = word.render();

      if (word.prevState != newWord){
        wordStr = newWord;
        console.log('Gettin warmer!');
        console.log(`Chances: ${countdown}`);
        console.log(word.render());
        askUser();
      } else {
        console.log('Ooops..');
        countdown -= 1;
        console.log(`Chances: ${countdown}`);
        console.log(word.render());
        // if word == correctword
        // 'playAgainPrompt'
        // else {
        // askUser
      //}

        askUser();
      }
      // console.log(this.proceed);

    }
    else{
      // New inquirer
      // invoke 'playAgainPrompt'
      playAgainPrompt();

    };
  });
};
function playAgainPrompt() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'continue',
      message: 'type "y" to try again else I will sleeeep'
    }]
  ).then(answer => {
      const tryAgain = answer.continue;
      if (tryAgain === 'y'){
        startGame();
      }
      else if(tryAgain !== 'y'){
        console.log(pusheenWithLove);
      }
    });
}
startGame();
