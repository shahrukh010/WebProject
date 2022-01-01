'use strict';

console.log('hello js');

const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const btnOpen = document.querySelectorAll('.show-modal');

for(let i=0;i<btnOpen.length;i++)
    console.log(btnOpen[i].textContent);

/****************************************************************************************************/
/****************************************************************************************************/


const openModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

for(let index=0;index<btnOpen.length;index++)
btnOpen[index].addEventListener('click', openModal); 

const modalClose = function(){

    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnCloseModal.addEventListener('click', modalClose);

overlay.addEventListener('click', modalClose);

document.addEventListener('keydown',function(e){

    if(e.key==='Escape' && !modal.classList.contains('hidde'))
        modalClose();
});



