const newButton = document.querySelector('#new')
const table = document.querySelector('#table')
const game = document.querySelector('#game')
let tomb = []

newButton.addEventListener('click', kattintas);
table.addEventListener('click', nemtudom);
function nemtudom(e) {
    if(e.target.className=="played")
    {
        e.target.classList.remove('played');
        for( var i = 0; i < tomb.length; i++){ 
            if ( tomb[i] == e.target.textContent) { 
                tomb.splice(i, 1); 
            }
        }
    }
    else
    {
        tomb.push(e.target.textContent)
        e.target.className="played"
    }
    var nodesSameClass = table.getElementsByClassName("played");
    console.log(nodesSameClass.length);
}   
function kattintas(e) {
    e.target.previousElementSibling.disabled=true
    this.disabled=true
    console.log(game.value);
    if(game.value==5)
    {
        otosLotto()
    }
    if(game.value==6)
    {
        otosLohatosLottotto()
    }
    if(game.value==7)
    {
        skandinavLotto()
    }


}
function otosLotto() {
    //10 sor × 9 oszlop
    let cntr=1;
    let str=""
    for(let i=0; i<10; i++)
    {
        str+="<tr>";
        for(let j=0; j<9; j++)
        {
            str+="<td>"+cntr+"</td>";
            cntr++;
        }
        str+="</tr>";
    }
    table.innerHTML=`${str}`;
}
function hatosLotto() {
    //10 sor × 9 oszlop
    let cntr=1;
    let str;
    for(let i=0; i<5; i++)
    {
        str+="<tr>";
        for(let j=0; j<9; j++)
        {
            str+="<td>"+cntr+"</td>";
            cntr++;
        }
        str+="</tr>";
    }
    table.innerHTML=`${str}`;
}
function skandinavLotto() {
    //10 sor × 9 oszlop
    let cntr=1;
    let str;
    for(let i=0; i<5; i++)
    {
        str+="<tr>";
        for(let j=0; j<7; j++)
        {
            str+="<td>"+cntr+"</td>";
            cntr++;
        }
        str+="</tr>";
    }
    table.innerHTML=`${str}`;
}

function delegate(parent, type, selector, handler) {
    parent.addEventListener(type, function (event) {
        const targetElement = event.target.closest(selector)
        if (this.contains(targetElement)) handler.call(targetElement, event)
    })
}

function drawLottery(n){
    const limits = {5 : 90, 6 : 45, 7 : 35}
    if (!limits.hasOwnProperty(n)) return [];
    const limit = limits[n]
    let draw = []
    while (draw.length < n){
        let rand = Math.floor(Math.random() * limit) + 1
        if (!draw.includes(rand)) draw.push(rand)
    }
    return draw.sort((u, v) => u - v)
}
