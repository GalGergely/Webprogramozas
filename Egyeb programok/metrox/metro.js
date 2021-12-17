var canvas = document.getElementById("canvas");
var body = document.getElementById("body");
var delbutton = document.getElementById("delete");
var ctx = canvas.getContext("2d");
let prevTime = performance.now();

var kor = document.getElementById("o");
var ex = document.getElementById("x");
var two = document.getElementById("2");
var three = document.getElementById("3");
var four = document.getElementById("4");
var five = document.getElementById("5");
var six = document.getElementById("6");

var bef = document.getElementById("befejezett");
var at = document.getElementById("atszallas");
var ures = document.getElementById("ures");
var pont = document.getElementById("pont");

//images
hatter = new Image();
hatter.src = 'src/table.png';
xpng = new Image();
xpng.src = 'src/x.png';
twopng = new Image();
twopng.src = 'src/2.png';
threepng = new Image();
threepng.src = 'src/3.png';
fourpng = new Image();
fourpng.src = 'src/4.png';
fivepng = new Image();
fivepng.src = 'src/5.png';
sixpng = new Image();
sixpng.src = 'src/6.png';
korpng = new Image();
korpng.src = 'src/kor.png';

class Pics {
    constructor(x, y, shape) {
      this.x = x;
      this.y = y;
      this.shape = shape;
    }
}
let pics = [];
let selected = "ex"

//event liteners to know what to draw
ex.addEventListener("click", function() {selected = "ex"});
two.addEventListener("click", function() {selected = "two"});
three.addEventListener("click", function() {selected = "three"});
four.addEventListener("click", function() {selected = "four"});
five.addEventListener("click", function() {selected = "five"});
six.addEventListener("click", function() {selected = "six"});
kor.addEventListener("click", function() {selected = "kor"});

//event lisners for calculating the finish points
bef.addEventListener("input", calculate)
at.addEventListener("input", calculate)
ures.addEventListener("input", calculate)

function calculate() {
    pont.value=parseInt(bef.value)+parseInt(at.value)-parseInt(ures.value);
}
//delete function
delbutton.addEventListener("click" , function () {
    pics.pop();
})
function gameloop(now = performance.now()) {
    prevTime = now
    ctx.drawImage(hatter, 0, 0);
    drawXes();
    drawTable();
    requestAnimationFrame(gameloop);
}
//set up the canvas and the page
body.style.backgroundColor="#A5B1B1";
canvas.style.backgroundColor="#A5B1B1";
// draw to canvas
function drawXes() {
    for (let i = 0; i < pics.length; i++) {
        if (pics[i].shape=="ex") {
            ctx.drawImage(xpng, pics[i].x, pics[i].y);
        }
        if (pics[i].shape=="two") {
            ctx.drawImage(twopng, pics[i].x, pics[i].y);
        }
        if (pics[i].shape=="three") {
            ctx.drawImage(threepng, pics[i].x, pics[i].y);
        }
        if (pics[i].shape=="four") {
            ctx.drawImage(fourpng, pics[i].x, pics[i].y);
        }
        if (pics[i].shape=="five") {
            ctx.drawImage(fivepng, pics[i].x, pics[i].y);
        }
        if (pics[i].shape=="six") {
            ctx.drawImage(sixpng, pics[i].x, pics[i].y);
        }
        if (pics[i].shape=="kor") {
            ctx.drawImage(korpng, pics[i].x, pics[i].y);
        }
    }
}
table2 = new Image();
table2.src = 'src/table2.png';
function drawTable() {
    ctx.drawImage(table2, 1200, 100);
}
//mouse listener
function getMousePosition(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    x = event.clientX - rect.left;
    y = event.clientY - rect.top;
    console.log(x,y);
    x-=15;
    y-=15;
    console.log(selected);
    let tmp= new Pics(x,y,selected);
    pics.push(tmp);

}

canvas.addEventListener("click", function (e) {
    getMousePosition(canvas, e);
})

gameloop();