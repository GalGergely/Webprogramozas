// Data
const word = 'alma';
const buttons = 'aábcdeéfghiíjklmnoóöőpqrstuúüűxyz';
const guesses = [];

// Selected elements
const wordDiv = document.querySelector('#the-word');
const lettersDiv = document.querySelector('#letters');

// Event handlers
lettersDiv.addEventListener('click', onLetterClick);
function onLetterClick(e) {
  // console.log(e.target);
  if (e.target.matches('button')) {
    // Read input
    const letter = e.target.innerHTML;
    // Process
    guesses.push(letter);
    console.log(guesses);
    // Write output
    // declarative
    wordDiv.innerHTML =
      word
        .split('')
        .map(letter => 
          `<span>${guesses.includes(letter) ? letter : ''}</span>`)
        .join('');
    // imperative
    e.target.disabled = true;
  }
}

// Page load
wordDiv.innerHTML =
  word.split('').map(letter => `<span></span>`).join('');
lettersDiv.innerHTML =
  buttons
    .split('')
    .map(letter => `<button>${letter}</button>`)
    .join('');

