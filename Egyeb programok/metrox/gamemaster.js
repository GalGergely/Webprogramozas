var canvas = document.getElementById("canvas");
var body = document.getElementById("body");
var ctx = canvas.getContext("2d");
let prevTime = performance.now();
issixinplace=true;
function gameloop(now = performance.now()) {
    console.log(deck.length);
    prevTime = now
    drawDeck();
    drawCard();
    drawPoints();
    requestAnimationFrame(gameloop);
}
//draw cardsleft
function drawPoints() {
    ctx.fillStyle = "#A5B1B1"
    ctx.fillRect(815, 525, 200, 110)
    ctx.fillStyle = "black"
    ctx.font = "20px Arial";
    ctx.fillText(deck.length + " kártya van vissza!",815, 550);

}
//draw deck
back = new Image();
back.src = 'gamemaster/back.png';
cardsleft=true
function drawDeck() {
    if(cardsleft==true)
    {
        ctx.drawImage(back, 700, 200);
    }
}
//draw card
twoskip = new Image();
twoskip.src = 'gamemaster/2skip.png';
threeskip = new Image();
threeskip.src = 'gamemaster/3skip.png';
three = new Image();
three.src = 'gamemaster/3.png';
four = new Image();
four.src = 'gamemaster/4.png';
five = new Image();
five.src = 'gamemaster/5.png';
six = new Image();
six.src = 'gamemaster/6.png';
ex = new Image();
ex.src = 'gamemaster/x.png';
o = new Image();
o.src = 'gamemaster/o.png';
function drawCard(i) {
    dt=i/1000;
    if (card==3) {
        ctx.drawImage(three, 300, 200);
    }
    if (card==4) {
        ctx.drawImage(four, 300, 200);
    }
    if (card==5) {
        ctx.drawImage(five, 300, 200);
    }
    if (card==6) {
        deck=["2skip","2skip","3skip",3,3,3,4,4,4,5,5,6,"x","x","0"];
        shuffle(deck);
        card="";
        ctx.drawImage(six, 300, 200);
    }
    if (card=="0") {
        ctx.drawImage(o, 300, 200);
    }
    if (card=="x") {
        ctx.drawImage(ex, 300, 200);
    }
    if (card=="2skip") {
        ctx.drawImage(twoskip, 300, 200);
    }
    if (card=="3skip") {
        ctx.drawImage(threeskip, 300, 200);
    }
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

//deck
deck=["2skip","2skip","3skip",3,3,3,4,4,4,5,5,6,"x","x","0"];
card="";
shuffle(deck);
console.log(deck);

body.style.backgroundColor="#A5B1B1";
canvas.style.backgroundColor="#A5B1B1";

//mouse listener
function getMousePosition(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    x = event.clientX - rect.left;
    y = event.clientY - rect.top;
    console.log(x,y);
    onMyClick(x,y);
}

function onMyClick(x,y) {
    if(x>700 && x<890 && y>200 && y<500) {
        card=deck.pop();
    }
}

canvas.addEventListener("click", function (e) {
    getMousePosition(canvas, e);
})

gameloop();