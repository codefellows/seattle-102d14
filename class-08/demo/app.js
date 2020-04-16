'use strict';

var userName = prompt('What is your SITH name? (No Darth or Lord Titles)');
var isSithLordOrMaster = 'nope'


while( (isSithLordOrMaster != 'YES') && (isSithLordOrMaster != 'NO') ){
    isSithLordOrMaster = prompt('Are you a Sith Lord? (yes or no)').toUpperCase();
}

if(isSithLordOrMaster === 'NO'){
    var wannaBeSith = prompt('Are you aspiring to be a Sith?').toLowerCase();
}

function isTraining(){
    if (isSithLordOrMaster === 'YES'){
        alert('Welcome Darth ' + userName);
    }

    else if (wannaBeSith === 'no'){
        alert('Sith or Sith trainees only.  Beat it before I Force Choke you!!!');
        document.write('<h1>' + userName + 'Is About to get Force Choked!' + '<h1>');
    }
    else if (wannaBeSith === 'yes'){
        alert('Welcome to the Dark Side.  We have masks here!')
    }
}

function forceGuessingGame() {
 
    var correctAnswer = 32;

    for(var i = 0; i < 8; i = i + 1){
        var numberGuess = prompt('Please Guess a Number between 1 and 100');
        if(numberGuess == correctAnswer){
            alert('You are a true Sith Lord');
            break;
        } else {
            alert('Sorry, please try again!');
        }
        if (i == '7') {
            alert('You are no Sith!');
            isSithLordOrMaster = 'NO';
        }
    }
}

function darthFunction(){
    if(isSithLordOrMaster === 'YES'){
        document.write('<h1>' + 'Welcome Darth ' + userName + '! What is thy Bidding?' + '<h1>');
    }
}

function forceChoke() {
    if((isSithLordOrMaster === 'NO') && (wannaBeSith === 'yes')){
        document.write('<h3>' + 'The Dark Side of the Force is strong in ' + userName + '!' + '<h3>');
    }
}

isTraining();
forceGuessingGame();
darthFunction();
forceChoke();
