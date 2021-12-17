const bekezdes = document.querySelector('#bekezdes');
const szinek = document.querySelector('#szinek');
console.log(zold);
szinek.addEventListener('click', onKlick);
function onKlick(e) {
    console.log(e.target.style.backgroundColor);
    bekezdes.style.backgroundColor=e.target.style.backgroundColor
}
