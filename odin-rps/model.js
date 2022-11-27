"use strict";

// Helper functions
let p = (arg) => console.log(arg);

// Capitilize first letter string
let capFirst = (string) => string.charAt(0).toUpperCase() + string.slice(1);


// Main functions
function computerPlay () {
    const signs = ['Rock','Paper','Scissors'];
    // This is how you pick an item randomly from an array in JS
    return signs[Math.floor(Math.random() * signs.length)];
}


function playRound (playerSelection, computerSelection = computerPlay()) {
    // if (playerSelection === undefined) console.log('It happened.');

    let ps = capFirst(playerSelection.toLowerCase());
    let cs = capFirst(computerSelection.toLowerCase());
    //First test for tie
    if (ps === cs) {
        return `You tie! ${ps} is equal to ${cs}`;
    } else {
        //Then test for each possible player input
        if (ps === 'Rock') {
            if (cs === 'Scissors'){
                return `You win! ${ps} beats ${cs}!`
            } else {
                return `You lose! ${ps} gets beaten by ${cs}!`
            }
        }
        else if (ps === 'Paper') {
            if (cs === 'Rock'){
                return `You win! ${ps} beats ${cs}!`
            } else {
                return `You lose! ${ps} gets beaten by ${cs}!`
            }
        }
        else if (ps === 'Scissors') {
            if (cs === 'Paper'){
                return `You win! ${ps} beats ${cs}!`
            } else {
                return `You lose! ${ps} gets beaten by ${cs}!`
            }
        }
    }
    return `${playerSelection} is invalid.`;
}


function updateScore (score, result) {
    let res = result.slice(0,5);
    if (res === "You w") { // Player wins
        score[0] += 1;
    } else if (res === "You l") { // Computer wins
        score[1] += 1;
    } 
}


function showScore(score) {
    return ` Player: ${score[0]} | Computer ${score[1]}`;
}

function isGamerOver() {
    return (score[0] == totalScore || score[1] == totalScore);
}

// CONTROLLER LOGIC
const score = [0,0];
const totalScore = 5;

function playNdisplay (e) {
    if (score[0] == totalScore) {
        resultDisplay.textContent = 'Game Over! Player wins 5 rounds!';
    } else if (score[1] == totalScore) {
        resultDisplay.textContent = 'Game Over! Computer wins 5 rounds!';
    } else {
        const pSign = e.target.value;
        const result = playRound(pSign);
        resultDisplay.textContent = result;
        updateScore(score, result);
    }
    scoreDisplay.textContent = showScore(score);
}

const waitToPlay = (e) => {
    let timer = 0;
    if (!isGamerOver()) {
        resultDisplay.textContent = 'Calculating result...';
        timer = 300;
    }
    setTimeout(playNdisplay, timer, e);
};

const scoreDisplay = document.querySelector('.current-score');
scoreDisplay.textContent = showScore(score);
const resultDisplay = document.querySelector('.result-display');
const playerInput = document.querySelectorAll('.sign');
playerInput.forEach(btn => btn.addEventListener('click', waitToPlay));