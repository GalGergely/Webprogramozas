const button = document.querySelector('#button');
const inp = document.querySelector('#input')
const inp2 = document.querySelector('#input2')
button.addEventListener('click', onSearch);
function onSearch() {
    tmp = inp.value;
    inp.value = inp2.value;
    inp2.value = tmp;

}
