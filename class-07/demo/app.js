'use strict';

console.log('Im alive');

var userName = prompt('What is your SITH name? (No Darth or Lord Titles)');

var isSithLordOrMaster = prompt('Are you a Sith Lord?').toUpperCase();

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

function askNewSithQuestion() {
    var newQuestion = prompt('Can you beat Master Yoda');
    console.log(newQuestion);
}

function askNewSithQuestion() {
    var newQuestion = prompt('Can you beat Master Yoda');
    console.log(newQuestion);
}

function add(a, b){
    console.log(a + b);
    return a + b;
}

var c = 10;
add(c,34); // 44

c = add(5,10); c = 15

// add(45,45);
// add(99,1);

isTraining();
darthFunction();
forceChoke();
askNewSithQuestion();
add(c,34); // 49