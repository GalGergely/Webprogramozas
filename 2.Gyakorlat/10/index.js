const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const inp1 = document.querySelector('#input1')
const list = document.querySelector('#list')
let i = 0;
let max = 10;
let min = -10;
inp1.value=i;
plus.addEventListener('click', add);
function add() {
    if(i==max){
        inp1.value=i;
    }
    else{
        i++;
        inp1.value=i;
    }
}
minus.addEventListener('click', kivon);
function kivon() {
    if(i==min){
        inp1.value=i;
    }
    else{
        i--;
        inp1.value=i;
    }
}