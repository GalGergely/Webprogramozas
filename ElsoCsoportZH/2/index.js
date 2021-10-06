const csuszka = document.querySelector('#tilt-angle');
const main = document.querySelector('#main');
const degree = document.querySelector('#degree');
console.log(csuszka);
console.log(main);
console.log(degree);
csuszka.addEventListener('input', onValue);
function onValue() {
    degree.innerHTML=csuszka.value;
    console.log(main.getPropertyValue('transform'));
    main.transform=`rotateX(${csuszka.value}deg)`
}
