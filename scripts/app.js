let editedPlayer= 0;
let activePlayer=0;

let players=[
    {
        name: '',
        Symbol: 'X'
    },
    {
        name: '',
        Symbol: '0'
    },
]

const playerConfigOverlayElement= document.getElementById('config-overlay');
const backdropElement= document.getElementById('back-drop');
const formELement = document.querySelector('form');
const errorsOutputElement= document.getElementById('config-errors');
const gameAreaElement = document.getElementById('active-game');
const gameBoardElement= document.getElementById('game-board');
const activePlayerNameElement = document.getElementById('active-player-name');

const EditPlyer1BtnElement= document.getElementById('edit-player-1-btn')
const EditPlyer2BtnElement= document.getElementById('edit-player-2-btn')
const cancelCOnfigBtnElenent= document.getElementById('cancel-config-btn');
const startNewGameElement = document.getElementById('start-game-btn');
// const gameFieldElements= document.querySelectorAll('#game-board li');

EditPlyer1BtnElement.addEventListener('click', openPlayerConfig);
EditPlyer2BtnElement.addEventListener('click', openPlayerConfig);

cancelCOnfigBtnElenent.addEventListener('click', closePlayerCOnfig);
backdropElement.addEventListener('click', closePlayerCOnfig);

formELement.addEventListener('submit', savePlayerConfig);
startNewGameElement.addEventListener('click', startNewGame);

// for (const gameFieldElement of gameFieldElements){
//     gameAreaElement.addEventListener('click',selectGameField);
// }

gameBoardElement.addEventListener('click', selectGameField);