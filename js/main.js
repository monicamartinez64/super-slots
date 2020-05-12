/*----- constants -----*/
//Set up image lookup

const slotFigures = [
    {1: "../imgs/lemon.jpg"},
    {2: "../imgs/diamond.jpg"},
    {3: "../imgs/cherry.jpg"},
    {4: "../imgs/grape.jpg"},
    {5: "../imgs/shamrock.jpg"},
    {6: "../imgs/plum.jpg"},
    {7: "../imgs/seven.jpg"},//done
    {8: "../imgs/crown.jpg"},
    {9: "../imgs/spade.jpg"},
    {10: "../imgs/bar.jpg"},
    {11: "../imgs/star.jpg"},
    {12: "../imgs/bell.jpg"},
]

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

const userSpin = [];

/*----- app's state (variables) -----*/





/*----- cached element references -----*/
const machine = document.getElementById('machine');
const slot1 = document.getElementById('slot1');
const slot2 = document.getElementById('slot2');
const slot3 = document.getElementById('slot3');
const spinBtn = document.getElementById('spin');
const resetBtn = document.getElementById('reset');

/*----- event listeners -----*/
// document.querySelector('spin').addEventListener('click', spin);
spinBtn.addEventListener('click', spin);
resetBtn.addEventListener('click', reset);
// document.querySelector('reset').addEventListener('click', reset);



/*----- functions -----*/
init();

function init () {

}

function render() {
    slot1.innerText = userSpin[0];
    slot2.innerText = userSpin[1];
    slot3.innerText = userSpin[2];
}

function spin() {
    userSpin[0] = getRandomInt();
    userSpin[1] = getRandomInt();
    userSpin[2] = getRandomInt();
    //Determine Winner
    if (userSpin = winningCombos[idx]) {

    }
    render();
}

function getRandomInt(){
    let slots = Object.keys(slotFigures);
    let spinIdx = Math.floor(Math.random() * slotFigures.length);
    return slots[spinIdx];
}


function reset () {
    userSpin[0] = 0
    userSpin[1] = 0
    userSpin[2] = 0
    render();
}
