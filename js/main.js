/*----- constants -----*/
const lemon = 1;
const diamond = 2;
const cherry = 3;
const grape = 4;
const shamrock = 5;
const plum = 6;
const seven = 7;
const crown = 8;
const spade = 9;
const bar = 10;
const star = 11;
const bell = 12;

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
    [12, 12, 12],``
];

/*----- app's state (variables) -----*/





/*----- cached element references -----*/
const slots = document.querySelectorAll('slots');
const machine = document.getElementById('machine');
const slot1 = document.getElementById('slot1');
const slot2 = document.getElementById('slot2');
const slot3 = document.getElementById('slot3');

/*----- event listeners -----*/
document.querySelector('button').addEventListener('click', spin);




/*----- functions -----*/
init();

function spin() {

}

function render() {

}

function init () {

}
