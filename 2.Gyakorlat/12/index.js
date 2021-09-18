const button = document.querySelector('#button');
const inp1 = document.querySelector('#input1')
const inp2 = document.querySelector('#input2')
const inp3 = document.querySelector('#input3')
const list = document.querySelector('#list')
button.addEventListener('click', calculate);
function calculate() {
    let toke=inp1.value;
    let kamat=inp2.value;
    let ev=inp3.value;
    let lista=[];
    for(let i=1; i<ev; i++){
        toke=parseInt(toke)+parseInt(toke*(kamat/100));
        lista.push(toke);
    }
    list.innerHTML=listGenerator(lista)
}

function listGenerator(lista) {
    return lista.map((toke, index) => `<li>${index+1}.ev: ${toke}</li>`).join('');
}
