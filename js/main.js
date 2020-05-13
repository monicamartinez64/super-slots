/*----- constants -----*/
const slotFigures = [
    {1: "../imgs/lemon.jpg"},
    {2: "../imgs/diamond.jpg"},
    {3: "../imgs/cherry.jpg"},
    {4: "../imgs/grape.jpg"},
    {5: "../imgs/shamrock.jpg"},
    {6: "../imgs/plum.jpg"},
    {7: "../imgs/seven.jpg"},
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
const slot1 = document.querySelector('#slot1 img');
const slot2 = document.querySelector('#slot2 img');
const slot3 = document.querySelector('#slot3 img');
const spinBtn = document.getElementById('spin');
const resetBtn = document.getElementById('reset');
const element = document.querySelector('.my-element');
element.style.setProperty('--animate-duration', '0.5s');

/*----- event listeners -----*/
spinBtn.addEventListener('click', spin);
resetBtn.addEventListener('click', reset);

/*----- functions -----*/
init();

function init () {

}

function render() {
    console.log(userSpin);
    slot1.src = Object.values(userSpin[0]);
    slot2.src = Object.values(userSpin[1]);
    slot3.src = Object.values(userSpin[2]);
    // slot1.src = slotFigures[userSpin[0].value];
    // slot2.src = slotFigures[userSpin[1].value];
    // slot3.src = slotFigures[userSpin[2].value];
}

//Above function is rendering the entire object, however, only the value in that object is needed.

function spin() {
    userSpin[0] = getRandomInt();
    userSpin[1] = getRandomInt();
    userSpin[2] = getRandomInt();
    render();
}

function getRandomInt(){
    let slots = Object.keys(slotFigures); //Need in order for spin button to work
    let spinIdx = Math.floor(Math.random() * slotFigures.length);
    return slots[spinIdx];
}

function checkWin(){
    if (includes = winningCombos.some(a => userSpin.every((v, i) => v === a[i])) === true) {
        return "Jackpot!";
    } else {
        return "Spin Again";
    }
    }

function reset() {
    
}



// const backgroundImageEl = document.getElementById('image');
// const oldImg = '../images/tree.png';
// const newImg = '../images/guyontree.png';
// flashBackground(oldImg, newImg);
// function flashBackground(oldImg, newImg) {
//     setTimeout(() => {
//         backgroundImageEl.src = newImg
//     }, 100)
//     setTimeout(() => {
//         backgroundImageEl.src = oldImg
//     }, 200)
//     setTimeout(() => {
//         backgroundImageEl.src = newImg
//     }, 300)
//     setTimeout(() => {
//         backgroundImageEl.src = oldImg
//     }, 400)
//     setTimeout(() => {
//         backgroundImageEl.src = newImg
//     }, 500)
//     setTimeout(() => {
//         backgroundImageEl.src = oldImg
//     }, 600)
//     setTimeout(() => {
//         backgroundImageEl.src = newImg
//     }, 700)
// }