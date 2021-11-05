const canvas = document.querySelector('#flappy-canvas')
const ctx = canvas.getContext('2d');
let prevTime = performance.now();
const oszlopok = []
const RES = 150;    // px, felső és alsó oszlop közötti rés
const OSZLOP_TAVOLSAG = 300;  // px, egymást követő oszlopok közötti távolság
const OSZLOP_SEBESSEG = -200;  // px, az oszlopok vízszintes sebessége
let GameState = {
    INGAME : 0,
    GAMEOVER : 1,
}

let gameState = GameState.INGAME;

const bird = { 
    x: 50,
    y : canvas.height/2 - 25,
    width:20,
    height:20,
    vy:100,
    ay:1000,
}


function random(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}
function ujOszlop() {
    const h = random(10, canvas.height / 2);
    oszlopok.push(
        {
            x: canvas.width,
            y: 0,
            width: 30,
            height: h,
        },
        {
            x: canvas.width,
            y: h + RES,
            width: 30,
            height: canvas.height - RES - h,
        },
    );
}
function utkozikE(a, b) {
    return !(
        b.y + b.magassag  < a.y ||
        a.x + a.szelesseg < b.x ||
        a.y + a.magassag  < b.y ||
        b.x + b.szelesseg < a.x
    );
}

function gameLoop(now = performance.now()) {
    const dt = (now - prevTime) / 1000;
    prevTime = now;
    update(dt);
    draw();
    if(gameState === GameState.INGAME) {
        requestAnimationFrame(gameLoop);
    }



}
function update(dt) {
    //bird.y +=2
    bird.vy += bird.ay*dt;
    bird.y += bird.vy * dt;
    const lastColumn = oszlopok[ oszlopok.length - 1]
    if(oszlopok.length == 0 ||  lastColumn.x < canvas.width - OSZLOP_TAVOLSAG)
    {
        ujOszlop();
    }
    //oszlop
    oszlopok.forEach(oszlopok => {
        oszlopok.x += OSZLOP_SEBESSEG * dt;
        if(utkozikE(bird, oszlopok))
        {
            gameState=GameState.GAMEOVER;
        }
    })
    
}
function draw(params) {
    ctx.fillStyle = 'lightblue';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    
    ctx.fillStyle = 'brown';
    ctx.fillRect(bird.x, bird.y, bird.width, bird.height);

    base_image = new Image();
    base_image.src = 'bird.png';
    ctx.drawImage(base_image, bird.x-12, bird.y-18);

    //oszlopok
    oszlopok.forEach(oszlop => {
        ctx.fillStyle = 'green'
        ctx.fillRect(oszlop.x, oszlop.y, oszlop.width, oszlop.height)
    })
    if(gameState === GameState.GAMEOVER)
    {
        ctx.fillStyle = 'red';
        ctx.font = '100px serif';
        ctx.fillText('Game Over', 50, 100);
    }
}

document.addEventListener('keydown', function(e) {
    bird.vy = -400;
})

//bird
//var img = document.createElement("img")
//img.src = "bird.png"
//ctx.drawImage(img,50,canvas.height/2 - 25,30,50)

gameLoop();