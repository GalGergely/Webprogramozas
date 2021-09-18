const button = document.querySelector('#button');
const inp = document.querySelector('#input')
const random = document.querySelector('#randomkiiras')
const picture = document.querySelector('#pic')
button.addEventListener('click', onSearch);
function onSearch() {
    const link = inp.value;
    picture.src = link;

}
