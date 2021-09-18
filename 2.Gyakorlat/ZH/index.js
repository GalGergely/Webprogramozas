const button = document.querySelector('#button');
const hue = document.querySelector('#hue');
const saturation = document.querySelector('#saturation');
const lightness = document.querySelector('#lightness');
const inp = document.querySelector('#inp');
const test = document.querySelector('#test');
hue.addEventListener('click', calculate);
saturation.addEventListener('click', calculate);
lightness.addEventListener('click', calculate);
button.addEventListener('click', calculate);
function calculate() {
    inp.value=stringGenerator(hue,saturation,lightness);
    test.style.backgroundColor=inp.value;
}

function stringGenerator(hue,saturation,lightness)
{
 return "hsl(" + hue.value + ", " + saturation.value + "%, " + lightness.value + "%)"
}