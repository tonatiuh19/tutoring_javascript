'use strict';

//console.log(document.querySelector('.check').textContent);
let generalNumber = Math.trunc(Math.random()*20)+1;
let score = 10;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    if(!guess){
        document.querySelector('.message').textContent = 'There is no number';
    }else if(guess === generalNumber){
        document.querySelector('.message').textContent = 'The number is correct';
        document.querySelector('.number').textContent = generalNumber;
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('body').style.backgroundColor ='#60b347';

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }else if(guess < generalNumber){
        if(score <= 0){
            document.querySelector('.message').textContent = 'You lose :(';
            document.querySelector('body').style.backgroundColor ='#b34747';
        }else{
            document.querySelector('.message').textContent = 'The number is low';
            score--;
            document.querySelector('.score').textContent = score;
        }
    }else if(guess > generalNumber){
        if(score <= 0){
            document.querySelector('.message').textContent = 'You lose :(';
            document.querySelector('body').style.backgroundColor ='#b34747';
        }else{
            document.querySelector('.message').textContent = 'The number is High';
            score--;
            document.querySelector('.score').textContent = score;
        }
    }
});

document.querySelector('.again').addEventListener('click', function(){
    score = 10;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor ='#222';
    document.querySelector('.number').style.width = '15rem';
    generalNumber = Math.trunc(Math.random()*20)+1;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
});

