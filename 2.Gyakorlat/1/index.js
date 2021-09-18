const button = document.querySelector('#search');
const random = document.querySelector('#randomkiiras')
button.addEventListener('click', onSearch);
function onSearch() {
    random.innerHTML = "Hello World!"

}
