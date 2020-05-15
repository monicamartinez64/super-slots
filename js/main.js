/*----- constants -----*/
const slotFigures = {
    1: "https://i.imgur.com/hbwrmPy.jpg",
    2: "https://i.imgur.com/OkQu6gc.jpg",
    3: "https://i.imgur.com/pqSqvkV.jpg",
    4: "https://i.imgur.com/cshOjli.jpg",
    5: "https://i.imgur.com/08hkMh3.jpg",
    6: "https://i.imgur.com/xVNCEld.jpg",
    7: "https://i.imgur.com/DXYRIHS.jpg",
    8: "https://i.imgur.com/vACkDaf.jpg",
    9: "https://i.imgur.com/uqEXEfe.jpg",
    10: "https://i.imgur.com/rC1CHBu.jpg",
    11: "https://i.imgur.com/B8Ed9BN.jpg",
    12: "https://i.imgur.com/suQ2N2U.jpg",
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
    displayEl.innerText = "0";
    slot1.src = "https://i.imgur.com/hbwrmPy.jpg"
    slot2.src = "https://i.imgur.com/hbwrmPy.jpg"
    slot3.src = "https://i.imgur.com/hbwrmPy.jpg"
    gameResult.innerText = "Place your bet to spin:"
    inputEl.value = 0;
}

function render() {
    slot1.src = slotFigures[userSpin[0]];
    slot2.src = slotFigures[userSpin[1]];
    slot3.src = slotFigures[userSpin[2]];
    displayEl.innerText = betOutcome;
}

function spin() {
    if (inputEl.value > 0) {
     userSpin[0] = getRandomInt();
    userSpin[1] = getRandomInt();
    userSpin[2] = getRandomInt();
    gameResult.innerText = placeBets();
    render();   
    }
}

function getRandomInt() {
    let number;
    number = Math.ceil(Math.random() * possibleSpins.length - 1)
    return possibleSpins[number];
}

function winBet () {
    betOutcome = betOutcome + parseInt(inputEl.value) * userSpin[0];
    return `Jackpot! You won $${inputEl.value * userSpin[0]}`;
}

function loseBet () {
    return `Spin Again`;
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