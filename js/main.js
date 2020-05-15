/*----- constants -----*/
const slotFigures = {
    1: "../imgs/lemon.jpg",
    2: "../imgs/diamond.jpg",
    3: "../imgs/cherry.jpg",
    4: "../imgs/grape.jpg",
    5: "../imgs/shamrock.jpg",
    6: "../imgs/plum.jpg",
    7: "../imgs/seven.jpg",
    8: "../imgs/crown.jpg",
    9: "../imgs/spade.jpg",
    10: "../imgs/bar.jpg",
    11: "../imgs/star.jpg",
    12: "../imgs/bell.jpg",
}

const winningCombos = [
    [1, 1, 1],
    [2, 2, 2],
    [3, 3, 3],
    [4, 4, 4],
    [5, 5, 5],
    [6, 6, 6],
    [7, 7, 7],
    [8, 8, 8],
    [9, 9, 9],
    [10, 10, 10],
    [11, 11, 11],
    [12, 12, 12],
];

possibleSpins = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 
                3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
                3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
                4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
                4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
                5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
                5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
                6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,
                6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,
                7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
                7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
                8, 8, 8, 8, 8, 8, 8, 8,
                8, 8, 8, 8, 8, 8, 8, 8,
                9, 9, 9, 9, 9, 9, 9,
                9, 9, 9, 9, 9, 9, 9,
                10, 10, 10, 10, 10,
                10, 10, 10, 10, 10,
                11, 11, 11, 11,
                11, 11, 11, 11,
                12, 12, 12,
                12, 12, 12
                ];

/*----- app's state (variables) -----*/
const userSpin = [];
let betOutcome = 0;

/*----- cached element references -----*/
const machine = document.getElementById('machine');
const slots = document.getElementById('slots');
const slot1 = document.querySelector('#slot1 img');
const slot2 = document.querySelector('#slot2 img');
const slot3 = document.querySelector('#slot3 img');
const spinBtn = document.getElementById('spin');
const resetBtn = document.getElementById('reset');
const displayEl = document.getElementById('display');
const inputEl = document.getElementById('input');
const gameResult = document.getElementById('winloss');

/*----- event listeners -----*/
spinBtn.addEventListener('click', spin);
resetBtn.addEventListener('click', reset);

/*----- functions -----*/
init();
    
function init () {
    betOutcome = 0;
}

function render() {
    if (inputEl.value > 0){
    slot1.src = slotFigures[userSpin[0]];
    slot2.src = slotFigures[userSpin[1]];
    slot3.src = slotFigures[userSpin[2]];
    displayEl.innerText = betOutcome;
    } else {
        alert("Please place a bet to spin");
    }
}

function spin() {
    userSpin[0] = getRandomInt();
    userSpin[1] = getRandomInt();
    userSpin[2] = getRandomInt();
    gameResult.innerText = placeBets();
    render();
}

function getRandomInt() {
    let number;
    number = Math.ceil(Math.random() * possibleSpins.length)
    return possibleSpins[number];
}

function winBet () {
    betOutcome = parseInt(inputEl.value) * userSpin[0];
    return `Jackpot! You won $${inputEl.value * userSpin[0]}`;
}

function loseBet () {
    betOutcome = parseInt(inputEl.value) - userSpin[0];
    return `Spin Again You lost $${userSpin[0]}`;
}

function placeBets(){
    if (includes = winningCombos.some(a => userSpin.every((v, i) => v === a[i])) === true) {
        return winBet();
    } else {
        return loseBet();
    }
    render();
    }

function reset() {
    init();
}

//Undefined value thrown in every now and then??
//Place bets function resets every time the spin button is hit -- it does not continue to add or subtract

//Toggle between reset and play again button
//Make slots flash when user hits spin
//Make slots flash and render random images based on a timer