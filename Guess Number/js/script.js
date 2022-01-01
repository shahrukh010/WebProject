'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent ='Currect Number';
console.log(document.querySelector('.message').textContent);


document.querySelector('.number').textContent =13;
document.querySelector('.score').textContent =10;
console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value=22;
console.log(document.querySelector('.guess').value);

*/
//document.querySelector('.guess').value=55;

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highScore=0;

const displayMessage = function(message){
    document.querySelector('.message').textContent=message;
}
document.querySelector('.check').addEventListener('click',function(){

    const guess = Number(document.querySelector('.guess').value);
    //console.log(guess,typeof guess);
    if(!guess){
//        document.querySelector('.message').textContent =' No Number!';
       displayMessage('No Number');
//        return;
    }
    else if(secretNumber === guess){
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem';
//        document.querySelector('.message').textContent='Correct Number';
        displayMessage('Correct Number');
        document.querySelector('.number').textContent=secretNumber;

        if(score > highScore){
            highScore = score;
        }
        document.querySelector('.highscore').textContent=highScore;
    }

    else if(guess !=secretNumber){

            if(score>1){
            
    displayMessage(document.querySelector('.message').textContent=guess > secretNumber? document.querySelector('.message').textContent ='Number To High':document.querySelector('.message').textContent='Number To Low');
                score--;
               document.querySelector('.score').textContent=score; 
            }
            else{
                //document.querySelector('.message').textContent='You Lost Game!';
                displayMessage('You Lost Game');
                document.querySelector('.score').textContent=0;
            }
    }
});

/**    
    // do refectoring code
    else if(guess < secretNumber){
            
            if(score>1){
            document.querySelector('.message').textContent='number is to Low';
                score--;
               document.querySelector('.score').textContent=score; 
            }
            else{
                document.querySelector('.message').textContent ='You lost Game';
                document.querySelector('.score').textContent=0;
            }
    }
    else if(guess > secretNumber){
        if(score>1){
        document.querySelector('.message').textContent='number to High';
        score--;
        document.querySelector('.score').textContent=score;
        }
        else{
            document.querySelector('.message').textContent='You lost Game';
            document.querySelector('.score').textContent=0;
        }
    }
});
*/

document.querySelector('.again').addEventListener('click', function(){

    displayMessage('Start guessing...');
    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;
    //console.log(secretNumber);
    document.querySelector('.score').textContent=score;
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
});

