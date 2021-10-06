//Data + business logic
const word = 'alma';
const buttons = "aábcdeéfghiíjkljmnoóöőpqrstuúüűxyz";
const guesses = [];
const MAX_BAD_ATTEMPTS = 9;
let gameState = 'game'; //'won' 'lost'

function badAttempts(word, guesses) {
    return guesses.filter( e => !word.includes(e)).length;
}

function isWon() {
    return word.split('').every(letter => guesses.includes(letter));
}

//Selected elements
const wordDiv = document.querySelector('#the-word');
const lettersDiv = document.querySelector('#letters');
const socreDiv = document.querySelector('#score');
const endOfGameDiv = document.querySelector('#end-of-game');
const endOfGameDivSpan = document.querySelector('#end-of-game span');

//HTML generátorok
function genWord(word, guesses, gameState) {
    return word.split('').map(letter => 
        `<span class="${gameState === "lost" && !guesses.includes(letter) ? 'missing' : ''}">
            ${guesses.includes(letter) || gameState === 'lost' ? letter : ''}
        </span>`).join('');
}
function genScore() {
    return `Bad attempts: ${badAttempts(word, guesses)} / ${MAX_BAD_ATTEMPTS}`;
}

//Page load
wordDiv.innerHTML =  genWord(word, guesses);

lettersDiv.innerHTML = 
    buttons.split('').map(letter => `<button>${letter}</button>`).join('');

//Event handlers

lettersDiv.addEventListener('click', onLetterClick);

function onLetterClick(e) 
{
    if(e.target.matches('button'))
    {
        //Read input
        const guessedLetter = e.target.innerHTML;
        //Process
        guesses.push(guessedLetter);
        const bads = badAttempts(word, guesses);
        if (bads >= MAX_BAD_ATTEMPTS) {
            gameState = 'lost';
        }
        if(isWon(word,guesses)){
            gameState = 'won';
        }
        //Write output

        //declerative
        wordDiv.innerHTML = genWord(word,guesses,gameState);
        socreDiv.innerHTML = genScore();

        //imperative
        e.target.disabled = true;
        const svgEl = document.querySelector(`svg *:nth-child(${bads})`)
        svgEl?.classList.add('show');
        if(gameState === 'lost') {
            endOfGameDiv.hidden = false;
            endOfGameDivSpan.innerHTML = gameState === 'lost' ? 'You lost!' : 'You won!';
            lettersDiv.hidden = true;
        }
        if(gameState === 'won'){
            wordDiv.classList.add('won');
        }
    }
}