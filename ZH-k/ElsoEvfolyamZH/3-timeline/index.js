const animButton = document.querySelector('#animation');
const leftButton = document.querySelector('#left');
const rightButton = document.querySelector('#right');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
let prevTime = performance.now();

let pixelsPerYear = 5;
let origoYear = 1000;
let dt = 0.2;
let lines=[]
let animstart=false
animButton.addEventListener('click', function (params) {
    animstart=true
})

rightButton.addEventListener('click', function (event) {
    origoYear=origoYear+10
})
leftButton.addEventListener('click', function (event) {
    origoYear=origoYear-10
})

function createLines() {
    currentyear=1000;
    for (let i = 0; i < 8; i++) {
        lines.push(currentyear)
        currentyear+=50;
    }
}
createLines();
function drawLines(params) {
    let counter=0;
    for (let i = 0; i < lines.length; i++) {
    ctx.fillStyle="red"
    ctx.fillRect((lines[i]-origoYear)*pixelsPerYear,0,2,400);
    ctx.fillStyle="black"
    ctx.font = "10px Arial";
    ctx.fillText(lines[i],(lines[i]-origoYear)*pixelsPerYear, 10);
    counter=counter+250;
    }
}
function drawArpads() {
    for (let i = 0; i < arpads.length; i++) {
        ctx.fillStyle="green"
        ctx.fillRect((arpads[i].from - origoYear) * pixelsPerYear,50,(arpads[i].to-arpads[i].from) * pixelsPerYear,50);  
        ctx.fillStyle="black"
        ctx.font = "10px Arial";
        ctx.fillText(arpads[i].name+" "+arpads[i].from+" "+arpads[i].to,(arpads[i].from - origoYear) * pixelsPerYear, 60);
    }
}
function drawPlantanegets() {
    for (let i = 0; i < plantanegets.length; i++) {
        ctx.fillStyle="red"
        ctx.fillRect((plantanegets[i].from - origoYear) * pixelsPerYear,150,(plantanegets[i].to-plantanegets[i].from) * pixelsPerYear,50);  
        ctx.fillStyle="black"
        ctx.font = "10px Arial";
        ctx.fillText(plantanegets[i].name+" "+plantanegets[i].from+" "+plantanegets[i].to,(plantanegets[i].from - origoYear) * pixelsPerYear, 160); 
    }
}

function loop(now = performance.now()) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    prevTime = now
    drawLines();
    drawArpads();
    drawPlantanegets();
    if(animstart==true){
        origoYear=origoYear+dt;
    }
    requestAnimationFrame(loop);
}
loop();
