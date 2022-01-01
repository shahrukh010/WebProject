'use strict';

console.log('hello world');

const score0El= document.querySelector('#score--0');
const score1El= document.getElementById('score--1');
const dice1El = document.querySelector('.dice');
const btnNew  = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const playerEl0 = document.querySelector('.player--0');
const playerEl1 = document.querySelector('.player--1');

      
      score0El.textContent=0;
      score1El.textContent=0;
 //     dice1El.classList.add('hidden');

let currentScore = 0;
let activePlayer=0;
let score = [0,0];
let holdscore=0;
let flag = false;

btnRoll.addEventListener('click', function(){

    if(!flag){
    //Generate random number for dice
    const random = Math.trunc(Math.random()*6)+1;
      //console.log(random);
      //console.log('click');

    //display dice before display first remove hidden if contain dice
//    dice1El.classList.remove('hidden');
    dice1El.src = `images/dice-${random}.png`;

    if(random !=1){
        //adding currentScore
        score[activePlayer] = score[activePlayer] +random;
        console.log(activePlayer);
        holdscore = random;
      document.getElementById(`current--${activePlayer}`).textContent=random;
    }
    else{
       //switching player
//       current[activePlayer] = 0;
       document.getElementById(`current--${activePlayer}`).textContent=0;
       activePlayer = activePlayer ===0 ?1:0;
       playerEl0.classList.toggle('player--active');
       playerEl1.classList.toggle('player--active');


       }
}});

    btnHold.addEventListener('click', function(){

        if(!flag){
      if(score[activePlayer] >=20){
//          console.log(score[activePlayer]);
          document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
          document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
          dice1El.classList.add('hidden');
          flag = true;

      }
//     document.getElementById(`current--${activePlayer}`).textContent=0;
     document.getElementById(`score--${activePlayer}`).textContent=score[activePlayer];

    }});


btnNew.addEventListener('click', function(){

    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
    score0El.textContent =0;
    score1El.textContent =0;
    score[0] = 0;
    score[1] = 0;
    dice1El.classList.remove('hidden');
    flag = false;
    
});
