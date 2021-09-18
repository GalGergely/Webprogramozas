const button = document.querySelector('#button');
const inp = document.querySelector('#input')
const felsorolo = document.querySelector('#felsorolo')
button.addEventListener('click', onSearch);
let array = [];
let array2 = [];
function onSearch() {
    let anyad=inp.value;
    anyad++;
    for(let i=1; i<anyad; i++){
        for(let j=1; j<anyad; j++){
            array2.push(i*j);
        }
        array.push(array2);
        array2 = [];
    }
    console.log(array);
}

