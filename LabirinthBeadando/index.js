//back to game button
var backtogame = document.getElementById("backtogame");
var jatekleiras = document.getElementById("jatekleiras");
backtogame.addEventListener('click', function () {
    jatekleiras.hidden = true;
    menudiv.hidden = false;
});
//menu canvas
var menu = document.getElementById("menu");
var cardperplayer = document.getElementById("cape");
var gameovercanvas = document.getElementById("gameover");
var ctg = gameovercanvas.getContext("2d");
var menudiv = document.getElementById("menudiv");
var input = document.getElementById("input");
var inputCheckbox = document.getElementById("inputCheckbox");
var checked = false;
inputCheckbox.addEventListener('change', function () {
    if (this.checked) {
        checked = true
    } else {
        checked = false
    }
});
var cty = menu.getContext("2d");
hatter = new Image();
hatter.src = 'src/menu/hatter.png';
startgame = new Image();
startgame.src = 'src/menu/startgamebutton.png';
numberop = new Image();
numberop.src = 'src/menu/numberop.png';
arrowOn = new Image();
arrowOn.src = 'src/menu/arrows.png';
info = new Image();
info.src = 'src/menu/info.png';
cape = new Image();
cape.src = 'src/menu/cape.png';
let prev2Time = performance.now();
function menuloop(now = performance.now()) {
    prev2Time = now
    cty.drawImage(hatter, 0, 0);
    cty.drawImage(startgame, 250, 100);
    cty.drawImage(numberop, 250, 250);
    cty.drawImage(info, 250, 500);
    cty.drawImage(arrowOn, 350, 400);
    cty.drawImage(cape, 350, 600);
    requestAnimationFrame(menuloop);
}
menuloop();

//game canvas
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
let prevTime = performance.now();
rotate = new Image();
rotate.src = 'src/rotate.png';
okbutton = new Image();
okbutton.src = 'src/okbutton.png';
naruto = new Image();
naruto.src = 'src/characters/naruto.png';
sasuke = new Image();
sasuke.src = 'src/characters/sasuke.png';
sakura = new Image();
sakura.src = 'src/characters/sakura.png';
kakashi = new Image();
kakashi.src = 'src/characters/kakashi.png';
card = new Image();
card.src = 'src/card.png';

//arrows downs
arrowDown1 = new Image();
arrowDown1.src = 'src/arrows/arrowDown.png';
arrowDown2 = new Image();
arrowDown2.src = 'src/arrows/arrowDown.png';
arrowDown3 = new Image();
arrowDown3.src = 'src/arrows/arrowDown.png';
//arrows ups
arrowUp1 = new Image();
arrowUp1.src = 'src/arrows/arrowUp.png';
arrowUp2 = new Image();
arrowUp2.src = 'src/arrows/arrowUp.png';
arrowUp3 = new Image();
arrowUp3.src = 'src/arrows/arrowUp.png';
//arrows lefts
arrowLeft1 = new Image();
arrowLeft1.src = 'src/arrows/arrowLeft.png';
arrowLeft2 = new Image();
arrowLeft2.src = 'src/arrows/arrowLeft.png';
arrowLeft3 = new Image();
arrowLeft3.src = 'src/arrows/arrowLeft.png';
//arrow rights
arrowRight1 = new Image();
arrowRight1.src = 'src/arrows/arrowRight.png';
arrowRight2 = new Image();
arrowRight2.src = 'src/arrows/arrowRight.png';
arrowRight3 = new Image();
arrowRight3.src = 'src/arrows/arrowRight.png';

//brains
//opening cards
let cards = [];
for (let i = 0; i < 24; i++) {
    cards.push(i)
}
shuffle(cards);
playerLookingFor = []
playerPoints = [0, 0, 0, 0]
cardCounter = 0;
started = false
cardPositions = generatePosition();
changeCardPositions();
finalCards = [];
generateCards();
function generatePosition() {
    var min = 0;
    var max = 43;
    var stop = 24;  //Number of numbers to extract

    var numbers = [];

    for (let i = 0; i < stop; i++) {
        var n = Math.floor(Math.random() * max) + min;
        var check = numbers.includes(n);

        if (check === false) {
            numbers.push(n);
        } else {
            while (check === true) {
                n = Math.floor(Math.random() * max) + min;
                check = numbers.includes(n);
                if (check === false) {
                    numbers.push(n);
                }
            }
        }
    }
    return numbers;
}
function changeCardPositions() {
    for (let i = 0; i < cardPositions.length; i++) {
        if (cardPositions[i] == 0) {
            cardPositions[i] = 44;
        }
        if (cardPositions[i] == 6) {
            cardPositions[i] = 45;
        }
        if (cardPositions[i] == 42) {
            cardPositions[i] = 46;
        }
        if (cardPositions[i] == 0) {
            cardPositions[i] = 47;
        }
    }
}
function generateCards() {
    for (let i = 0; i < 24; i++) {
        finalCards.push({ source: cards[i], position: cardPositions[i] })
    }
}
function restart() {
    playerPositions = [0, 6, 48, 42];
    let tiles = [];
    playerPoints = [0, 0, 0, 0]
    for (let i = 0; i < 34; i++) {
        tiles.push(i);
    }
    finalTiles = [];
    shuffle(tiles);
    createTiles(tiles);
    insertFixTiles(finalTiles, fixTiles);
    let cards = [];
    for (let i = 0; i < 24; i++) {
        cards.push(i)
    }
    shuffle(cards);
    cardPositions = generatePosition();
    changeCardPositions();
    finalCards = [];
    generateCards();
}
//round system
numberOfPlayers = 4;
currnetPlayer = 0;
pushed = false;
function round() {
    if (currnetPlayer < (numberOfPlayers - 1)) {
        currnetPlayer++;
    }
    else if (currnetPlayer == (numberOfPlayers - 1)) {
        currnetPlayer = 0;
    }
    pushed = false;
    requestAnimationFrame(gameloop);
}
//give cards each player
function playersFirstCard() {
    for (let i = 0; i < numberOfPlayers; i++) {
        playerLookingFor.push(finalCards[i]);
        cardCounter++;
        started = true;
        console.log(playerLookingFor[i]);
    }
}
function findsCard() {
    for (let i = 0; i < numberOfPlayers; i++) {
        if (playerPositions[i] == playerLookingFor[i].position) {
            giveCards(i);
            playerPoints[i] = playerPoints[i] + 1;
            round();
            console.log('gotit');
        }
    }
}
function cardsMoved(index) {
    for (let j = 0; j < numberOfPlayers; j++) {
        if (playerLookingFor[j].source == finalCards[index].source) {
            playerLookingFor[j] = finalCards[index];
            console.log("csere");
            console.log(playerLookingFor[j]);
        }
    }
}
PlayerFinished = [false, false, false, false]
function giveCards(index) {
    if (playerPoints[index] + 1 < cardsNeeded) {
        playerLookingFor[index] = finalCards[cardCounter];
        cardCounter++;
    }
    else {
        playerLookingFor[index] = 100;
        console.log("celegyenes");
        PlayerFinished[index] = true;
    }

}
function checkIfGameOver() {
    if (playerPositions[0] == 0 && PlayerFinished[0] == true) {
        gameover(0);
        restart();
    }
    if (playerPositions[1] == 6 && PlayerFinished[1] == true) {
        gameover(1);
        restart();
    }
    if (playerPositions[2] == 48 && PlayerFinished[2] == true) {
        gameover(2);
        restart();
    }
    if (playerPositions[3] == 42 && PlayerFinished[3] == true) {
        gameover(3);
        restart();
    }
}

function gameover(szam) {
    canvas.hidden = true;
    gameovercanvas.hidden = false;
    ctg.fillStyle = "gray"
    ctg.fillRect(0, 0, 1000, 800)
    ctg.fillStyle = "red"
    ctg.font = "200px ArcadeClassic";
    ctg.fillText("Game Over", 50, 200);
    ctg.fillStyle = "black"
    ctg.font = "50px ArcadeClassic";
    ctg.fillText((szam + 1) + "player won", 100, 300);
    ctg.fillText("press esc to restart", 100, 400);
}
//key bindings
document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        if (pushed == true) {
            moveUp(currnetPlayer);
        }
    }
    else if (e.keyCode == '40') {
        if (pushed == true) {
            moveDown(currnetPlayer);
        }

    }
    else if (e.keyCode == '37') {
        if (pushed == true) {
            moveLeft(currnetPlayer);
        }

    }
    else if (e.keyCode == '39') {
        if (pushed == true) {
            moveRight(currnetPlayer);
        }

    }
    else if (e.keyCode == '13' && pushed == true) {
        round();
    }
    else if (e.which == '27') {
        refresh();
    }

}
function refresh() {
    setTimeout(function () {
        location.reload()
    }, 100);
}


//player positions
let x;
let y;
playerPositions = [0, 6, 48, 42];

/////move
function moveUp(index) {
    if (finalTiles[playerPositions[index]].type == "kanyar") {
        if (finalTiles[playerPositions[index]].exit == 1 || finalTiles[playerPositions[index]].exit == 4) {
            if (playerPositions[index] - 7 >= 0) {
                if (finalTiles[playerPositions[index] - 7].type == "kanyar") {
                    if (finalTiles[playerPositions[index] - 7].exit == 2 || finalTiles[playerPositions[index] - 7].exit == 3) {
                        playerPositions[index] = playerPositions[index] - 7;
                    }
                }
                else if (finalTiles[playerPositions[index] - 7].type == "egyenes") {
                    if (finalTiles[playerPositions[index] - 7].exit == 1) {
                        playerPositions[index] = playerPositions[index] - 7;
                    }
                }
                else if (finalTiles[playerPositions[index] - 7].type == "haromagu") {
                    if (finalTiles[playerPositions[index] - 7].exit == 1 || finalTiles[playerPositions[index] - 7].exit == 2 || finalTiles[playerPositions[index] - 7].exit == 3) {
                        playerPositions[index] = playerPositions[index] - 7;
                    }
                }
            }
        }
    }
    else if (finalTiles[playerPositions[index]].type == "egyenes") {
        if (finalTiles[playerPositions[index]].exit == 1) {
            if (playerPositions[index] - 7 >= 0) {
                if (finalTiles[playerPositions[index] - 7].type == "kanyar") {
                    if (finalTiles[playerPositions[index] - 7].exit == 2 || finalTiles[playerPositions[index] - 7].exit == 3) {
                        playerPositions[index] = playerPositions[index] - 7;
                    }
                }
                else if (finalTiles[playerPositions[index] - 7].type == "egyenes") {
                    if (finalTiles[playerPositions[index] - 7].exit == 1) {
                        playerPositions[index] = playerPositions[index] - 7;
                    }
                }
                else if (finalTiles[playerPositions[index] - 7].type == "haromagu") {
                    if (finalTiles[playerPositions[index] - 7].exit == 1 || finalTiles[playerPositions[index] - 7].exit == 2 || finalTiles[playerPositions[index] - 7].exit == 3) {
                        playerPositions[index] = playerPositions[index] - 7;
                    }
                }
            }
        }
    }
    else if (finalTiles[playerPositions[index]].type == "haromagu") {
        if (finalTiles[playerPositions[index]].exit == 1 || finalTiles[playerPositions[index]].exit == 3 || finalTiles[playerPositions[index]].exit == 4) {
            if (playerPositions[index] - 7 >= 0) {
                if (finalTiles[playerPositions[index] - 7].type == "kanyar") {
                    if (finalTiles[playerPositions[index] - 7].exit == 2 || finalTiles[playerPositions[index] - 7].exit == 3) {
                        playerPositions[index] = playerPositions[index] - 7;
                    }
                }
                else if (finalTiles[playerPositions[index] - 7].type == "egyenes") {
                    if (finalTiles[playerPositions[index] - 7].exit == 1) {
                        playerPositions[index] = playerPositions[index] - 7;
                    }
                }
                else if (finalTiles[playerPositions[index] - 7].type == "haromagu") {
                    if (finalTiles[playerPositions[index] - 7].exit == 1 || finalTiles[playerPositions[index] - 7].exit == 2 || finalTiles[playerPositions[index] - 7].exit == 3) {
                        playerPositions[index] = playerPositions[index] - 7;
                    }
                }
            }
        }
    }
}
function moveDown(index) {
    if (finalTiles[playerPositions[index]].type == "kanyar") {
        if (finalTiles[playerPositions[index]].exit == 2 || finalTiles[playerPositions[index]].exit == 3) {
            if (playerPositions[index] + 7 <= 48) {
                if (finalTiles[playerPositions[index] + 7].type == "kanyar") {
                    if (finalTiles[playerPositions[index] + 7].exit == 1 || finalTiles[playerPositions[index] + 7].exit == 4) {
                        playerPositions[index] = playerPositions[index] + 7;
                    }
                }
                else if (finalTiles[playerPositions[index] + 7].type == "egyenes") {
                    if (finalTiles[playerPositions[index] + 7].exit == 1) {
                        playerPositions[index] = playerPositions[index] + 7;
                    }
                }
                else if (finalTiles[playerPositions[index] + 7].type == "haromagu") {
                    if (finalTiles[playerPositions[index] + 7].exit == 1 || finalTiles[playerPositions[index] + 7].exit == 3 || finalTiles[playerPositions[index] + 7].exit == 4) {
                        playerPositions[index] = playerPositions[index] + 7;
                    }
                }
            }
        }
    }
    else if (finalTiles[playerPositions[index]].type == "egyenes") {
        if (finalTiles[playerPositions[index]].exit == 1) {
            if (playerPositions[index] + 7 <= 48) {
                if (finalTiles[playerPositions[index] + 7].type == "kanyar") {
                    if (finalTiles[playerPositions[index] + 7].exit == 1 || finalTiles[playerPositions[index] + 7].exit == 4) {
                        playerPositions[index] = playerPositions[index] + 7;
                    }
                }
                else if (finalTiles[playerPositions[index] + 7].type == "egyenes") {
                    if (finalTiles[playerPositions[index] + 7].exit == 1) {
                        playerPositions[index] = playerPositions[index] + 7;
                    }
                }
                else if (finalTiles[playerPositions[index] + 7].type == "haromagu") {
                    if (finalTiles[playerPositions[index] + 7].exit == 1 || finalTiles[playerPositions[index] + 7].exit == 3 || finalTiles[playerPositions[index] + 7].exit == 4) {
                        playerPositions[index] = playerPositions[index] + 7;
                    }
                }
            }
        }
    }
    else if (finalTiles[playerPositions[index]].type == "haromagu") {
        if (finalTiles[playerPositions[index]].exit == 1 || finalTiles[playerPositions[index]].exit == 2 || finalTiles[playerPositions[index]].exit == 3) {
            if (playerPositions[index] + 7 <= 48) {
                if (finalTiles[playerPositions[index] + 7].type == "kanyar") {
                    if (finalTiles[playerPositions[index] + 7].exit == 1 || finalTiles[playerPositions[index] + 7].exit == 4) {
                        playerPositions[index] = playerPositions[index] + 7;
                    }
                }
                else if (finalTiles[playerPositions[index] + 7].type == "egyenes") {
                    if (finalTiles[playerPositions[index] + 7].exit == 1) {
                        playerPositions[index] = playerPositions[index] + 7;
                    }
                }
                else if (finalTiles[playerPositions[index] + 7].type == "haromagu") {
                    if (finalTiles[playerPositions[index] + 7].exit == 1 || finalTiles[playerPositions[index] + 7].exit == 3 || finalTiles[playerPositions[index] + 7].exit == 4) {
                        playerPositions[index] = playerPositions[index] + 7;
                    }
                }
            }
        }
    }
}
function moveRight(index) {
    if (finalTiles[playerPositions[index]].type == "kanyar") {
        if (finalTiles[playerPositions[index]].exit == 1 || finalTiles[playerPositions[index]].exit == 2) {
            if (playerPositions[index] != 6 && playerPositions[index] != 13 && playerPositions[index] != 20 && playerPositions[index] != 27 && playerPositions[index] != 34 && playerPositions[index] != 41 && playerPositions[index] != 48) {
                if (finalTiles[playerPositions[index] + 1].type == "kanyar") {
                    if (finalTiles[playerPositions[index] + 1].exit == 3 || finalTiles[playerPositions[index] + 1].exit == 4) {
                        playerPositions[index] = playerPositions[index] + 1;
                    }
                }
                else if (finalTiles[playerPositions[index] + 1].type == "egyenes") {
                    if (finalTiles[playerPositions[index] + 1].exit == 2) {
                        playerPositions[index] = playerPositions[index] + 1;
                    }
                }
                else if (finalTiles[playerPositions[index] + 1].type == "haromagu") {
                    if (finalTiles[playerPositions[index] + 1].exit == 2 || finalTiles[playerPositions[index] + 1].exit == 3 || finalTiles[playerPositions[index] + 1].exit == 4) {
                        playerPositions[index] = playerPositions[index] + 1;
                    }
                }
            }
        }
    }
    else if (finalTiles[playerPositions[index]].type == "egyenes") {
        if (finalTiles[playerPositions[index]].exit == 2) {
            if (playerPositions[index] != 6 && playerPositions[index] != 13 && playerPositions[index] != 20 && playerPositions[index] != 27 && playerPositions[index] != 34 && playerPositions[index] != 41 && playerPositions[index] != 48) {
                if (finalTiles[playerPositions[index] + 1].type == "kanyar") {
                    if (finalTiles[playerPositions[index] + 1].exit == 3 || finalTiles[playerPositions[index] + 1].exit == 4) {
                        playerPositions[index] = playerPositions[index] + 1;
                    }
                }
                else if (finalTiles[playerPositions[index] + 1].type == "egyenes") {
                    if (finalTiles[playerPositions[index] + 1].exit == 2) {
                        playerPositions[index] = playerPositions[index] + 1;
                    }
                }
                else if (finalTiles[playerPositions[index] + 1].type == "haromagu") {
                    if (finalTiles[playerPositions[index] + 1].exit == 2 || finalTiles[playerPositions[index] + 1].exit == 3 || finalTiles[playerPositions[index] + 1].exit == 4) {
                        playerPositions[index] = playerPositions[index] + 1;
                    }
                }
            }
        }
    }
    else if (finalTiles[playerPositions[index]].type == "haromagu") {
        if (finalTiles[playerPositions[index]].exit == 1 || finalTiles[playerPositions[index]].exit == 2 || finalTiles[playerPositions[index]].exit == 4) {
            if (playerPositions[index] != 6 && playerPositions[index] != 13 && playerPositions[index] != 20 && playerPositions[index] != 27 && playerPositions[index] != 34 && playerPositions[index] != 41 && playerPositions[index] != 48) {
                if (finalTiles[playerPositions[index] + 1].type == "kanyar") {
                    if (finalTiles[playerPositions[index] + 1].exit == 3 || finalTiles[playerPositions[index] + 1].exit == 4) {
                        playerPositions[index] = playerPositions[index] + 1;
                    }
                }
                else if (finalTiles[playerPositions[index] + 1].type == "egyenes") {
                    if (finalTiles[playerPositions[index] + 1].exit == 2) {
                        playerPositions[index] = playerPositions[index] + 1;
                    }
                }
                else if (finalTiles[playerPositions[index] + 1].type == "haromagu") {
                    if (finalTiles[playerPositions[index] + 1].exit == 2 || finalTiles[playerPositions[index] + 1].exit == 3 || finalTiles[playerPositions[index] + 1].exit == 4) {
                        playerPositions[index] = playerPositions[index] + 1;
                    }
                }
            }
        }
    }
}
function moveLeft(index) {
    if (finalTiles[playerPositions[index]].type == "kanyar") {
        if (finalTiles[playerPositions[index]].exit == 3 || finalTiles[playerPositions[index]].exit == 4) {
            if (playerPositions[index] != 0 && playerPositions[index] != 7 && playerPositions[index] != 14 && playerPositions[index] != 21 && playerPositions[index] != 28 && playerPositions[index] != 35 && playerPositions[index] != 42) {
                if (finalTiles[playerPositions[index] - 1].type == "kanyar") {
                    if (finalTiles[playerPositions[index] - 1].exit == 1 || finalTiles[playerPositions[index] - 1].exit == 2) {
                        playerPositions[index] = playerPositions[index] - 1;
                    }
                }
                else if (finalTiles[playerPositions[index] - 1].type == "egyenes") {
                    if (finalTiles[playerPositions[index] - 1].exit == 2) {
                        playerPositions[index] = playerPositions[index] - 1;
                    }
                }
                else if (finalTiles[playerPositions[index] - 1].type == "haromagu") {
                    if (finalTiles[playerPositions[index] - 1].exit == 1 || finalTiles[playerPositions[index] - 1].exit == 2 || finalTiles[playerPositions[index] - 1].exit == 4) {
                        playerPositions[index] = playerPositions[index] - 1;
                    }
                }
            }
        }
    }
    else if (finalTiles[playerPositions[index]].type == "egyenes") {
        if (finalTiles[playerPositions[index]].exit == 2) {
            if (playerPositions[index] != 0 && playerPositions[index] != 7 && playerPositions[index] != 14 && playerPositions[index] != 21 && playerPositions[index] != 28 && playerPositions[index] != 35 && playerPositions[index] != 42) {
                if (finalTiles[playerPositions[index] - 1].type == "kanyar") {
                    if (finalTiles[playerPositions[index] - 1].exit == 1 || finalTiles[playerPositions[index] - 1].exit == 2) {
                        playerPositions[index] = playerPositions[index] - 1;
                    }
                }
                else if (finalTiles[playerPositions[index] - 1].type == "egyenes") {
                    if (finalTiles[playerPositions[index] - 1].exit == 2) {
                        playerPositions[index] = playerPositions[index] - 1;
                    }
                }
                else if (finalTiles[playerPositions[index] - 1].type == "haromagu") {
                    if (finalTiles[playerPositions[index] - 1].exit == 1 || finalTiles[playerPositions[index] - 1].exit == 2 || finalTiles[playerPositions[index] - 1].exit == 4) {
                        playerPositions[index] = playerPositions[index] - 1;
                    }
                }
            }
        }
    }
    else if (finalTiles[playerPositions[index]].type == "haromagu") {
        if (finalTiles[playerPositions[index]].exit == 2 || finalTiles[playerPositions[index]].exit == 3 || finalTiles[playerPositions[index]].exit == 4) {
            if (playerPositions[index] != 0 && playerPositions[index] != 7 && playerPositions[index] != 14 && playerPositions[index] != 21 && playerPositions[index] != 28 && playerPositions[index] != 35 && playerPositions[index] != 42) {
                if (finalTiles[playerPositions[index] - 1].type == "kanyar") {
                    if (finalTiles[playerPositions[index] - 1].exit == 1 || finalTiles[playerPositions[index] - 1].exit == 2) {
                        playerPositions[index] = playerPositions[index] - 1;
                    }
                }
                else if (finalTiles[playerPositions[index] - 1].type == "egyenes") {
                    if (finalTiles[playerPositions[index] - 1].exit == 2) {
                        playerPositions[index] = playerPositions[index] - 1;
                    }
                }
                else if (finalTiles[playerPositions[index] - 1].type == "haromagu") {
                    if (finalTiles[playerPositions[index] - 1].exit == 1 || finalTiles[playerPositions[index] - 1].exit == 2 || finalTiles[playerPositions[index] - 1].exit == 4) {
                        playerPositions[index] = playerPositions[index] - 1;
                    }
                }
            }
        }
    }
}

//creating the random tiles
//creating random integer
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

//crate fill and shuffle the temperary tiles array
let tiles = [];
for (let i = 0; i < 34; i++) {
    tiles.push(i);
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
//crating final tiles array
finalTiles = [];
function createTiles(tiles) {
    for (let i = 0; i < 34; i++) {
        let type;
        let exitnumb;
        if (tiles[i] < 13) {
            type = "egyenes";
            exitnumb = randomIntFromInterval(1, 2);
        }
        if (tiles[i] >= 13 && tiles[i] < 28) {
            type = "kanyar"
            exitnumb = randomIntFromInterval(1, 4);
        }
        if (tiles[i] >= 28) {
            type = "haromagu"
            exitnumb = randomIntFromInterval(1, 4);
        }
        finalTiles.push({ number: tiles[i], type: type, exit: exitnumb })
    }
}
shuffle(tiles);
createTiles(tiles);

//creating the fix tiles in the correct rotation
let fixTiles = [
    {
        number: 40,
        type: "kanyar",
        exit: 2
    },
    {
        number: 41,
        type: "haromagu",
        exit: 2
    },
    {
        number: 42,
        type: "haromagu",
        exit: 2
    },
    {
        number: 43,
        type: "kanyar",
        exit: 3
    },
    //3.sor
    {
        number: 44,
        type: "haromagu",
        exit: 1
    },
    {
        number: 45,
        type: "haromagu",
        exit: 1
    },
    {
        number: 46,
        type: "haromagu",
        exit: 2
    },
    {
        number: 47,
        type: "egyenes",
        exit: 1
    },
    {
        number: 48,
        type: "haromagu",
        exit: 1
    },
    {
        number: 49,
        type: "haromagu",
        exit: 1
    },
    {
        number: 50,
        type: "haromagu",
        exit: 3
    },
    {
        number: 51,
        type: "egyenes",
        exit: 1
    },
    {
        number: 52,
        type: "kanyar",
        exit: 1
    },
    {
        number: 53,
        type: "haromagu",
        exit: 4
    },
    {
        number: 54,
        type: "haromagu",
        exit: 4
    },
    {
        number: 55,
        type: "kanyar",
        exit: 4
    }
]
//inserting in the fix tiles in their pleaces
function insertFixTiles(finalTiles, fixTiles) {
    finalTiles.splice(0, 0, fixTiles[0]);
    finalTiles.splice(2, 0, fixTiles[1]);
    finalTiles.splice(4, 0, fixTiles[2]);
    finalTiles.splice(6, 0, fixTiles[3]);
    //
    finalTiles.splice(14, 0, fixTiles[4]);
    finalTiles.splice(16, 0, fixTiles[5]);
    finalTiles.splice(18, 0, fixTiles[6]);
    finalTiles.splice(20, 0, fixTiles[7]);
    //
    finalTiles.splice(28, 0, fixTiles[8]);
    finalTiles.splice(30, 0, fixTiles[9]);
    finalTiles.splice(32, 0, fixTiles[10]);
    finalTiles.splice(34, 0, fixTiles[11]);
    //
    finalTiles.splice(42, 0, fixTiles[12]);
    finalTiles.splice(44, 0, fixTiles[13]);
    finalTiles.splice(46, 0, fixTiles[14]);
    finalTiles.splice(48, 0, fixTiles[15]);
}
insertFixTiles(finalTiles, fixTiles);
//at this point the finalTiles array is done, and ready to draw with all the directions

//the actual game loop
function gameloop(now = performance.now()) {
    prevTime = now
    drawTiles(finalTiles);
    drawStartingTiles();
    drawCharacters();
    drawArrows();
    drawRotateButton();
    ctx.drawImage(card, 850, 100)
    if (checked == true) {
        drawCharacterControl();
    }
    drawWhosTurn();
    if (started == true) {
        drawCards();
        findsCard();
        drawActualCard();
        drawPoints();
    }
    if (pushed == true) {
        drawOkButton();
    }
    if (pushed == false) {
        eraseOkButton();
    }
    checkIfGameOver();
    requestAnimationFrame(gameloop);
}

//data
let GameState = {
    INGAME: 0,
    GAMEOVER: 1,
}
let gamestate = GameState.GAMEOVER;

//rotate the 49th piece
function rotateTile(e) {
    if (finalTiles[49].type == "egyenes") {
        if (finalTiles[49].exit == 1) {
            finalTiles[49].exit = 2
        }
        else {
            finalTiles[49].exit = 1;
        }
    }
    else {
        if (finalTiles[49].exit == 4) {
            finalTiles[49].exit = 1
        }
        else {
            finalTiles[49].exit = finalTiles[49].exit + 1;
        }
    }
    drawTiles(finalTiles);
    drawCharacters();
    drawArrows();
    drawRotateButton();
}


//draw to canvas
//draw points
function drawPoints() {
    ctx.fillStyle = "gray"
    ctx.fillRect(815, 525, 200, 110)
    icantmakeaname = 550;
    for (let i = 0; i < numberOfPlayers; i++) {
        ctx.fillStyle = "black"
        ctx.font = "20px Arial";
        ctx.fillText("Player" + (i + 1) + " points: " + playerPoints[i], 815, icantmakeaname);
        icantmakeaname = icantmakeaname + 25;
    }
}
//draw whos turn is it
function drawWhosTurn(params) {
    if (currnetPlayer == 0) {
        ctx.fillStyle = "gray"
        ctx.fillRect(850, 25, 100, 50)
        player = new Image();
        player.src = 'src/players/player1.png';
        ctx.drawImage(player, 850, 25)
    }
    if (currnetPlayer == 1) {
        ctx.fillStyle = "gray"
        ctx.fillRect(850, 25, 100, 50)
        player = new Image();
        player.src = 'src/players/player2.png';
        ctx.drawImage(player, 850, 25)
    }
    if (currnetPlayer == 2) {
        ctx.fillStyle = "gray"
        ctx.fillRect(850, 25, 100, 50)
        player = new Image();
        player.src = 'src/players/player3.png';
        ctx.drawImage(player, 850, 25)
    }
    if (currnetPlayer == 3) {
        ctx.fillStyle = "gray"
        ctx.fillRect(850, 25, 100, 50)
        player = new Image();
        player.src = 'src/players/player4.png';
        ctx.drawImage(player, 850, 25)
    }
}
//draw the cards
function drawCards() {
    for (let i = 0; i < numberOfPlayers * cardsNeeded; i++) {
        tmp = new Image();
        tmp.src = 'src/logos/' + finalCards[i].source + '.png';
        if (finalCards[i].position == 49) {
            ctx.drawImage(tmp, 875, 375)
        }
        else {
            actualposition = (finalCards[i].position);
            actualRow = actualposition % 7;
            actualposition = (finalCards[i].position);
            actualCol = Math.floor(actualposition / 7)
            ctx.drawImage(tmp, (actualRow * 100) + 75, (actualCol * 100) + 75)
        }
    }
}
//draw the character control arrow
function drawCharacterControl() {
    arrowDown = new Image();
    arrowDown.src = 'src/arrows/arrowDown.png';
    arrowUp = new Image();
    arrowUp.src = 'src/arrows/arrowUp.png';
    arrowLeft = new Image();
    arrowLeft.src = 'src/arrows/arrowLeft.png';
    arrowRight = new Image();
    arrowRight.src = 'src/arrows/arrowRight.png';
    ctx.drawImage(arrowUp, 875, 650);
    ctx.drawImage(arrowDown, 875, 700);
    ctx.drawImage(arrowLeft, 825, 700);
    ctx.drawImage(arrowRight, 925, 700);
}

//draw arrows
function drawArrows() {
    ctx.drawImage(arrowDown1, 175, 0);
    ctx.drawImage(arrowDown2, 375, 0);
    ctx.drawImage(arrowDown3, 575, 0);

    ctx.drawImage(arrowUp1, 175, 750);
    ctx.drawImage(arrowUp2, 375, 750);
    ctx.drawImage(arrowUp3, 575, 750);

    ctx.drawImage(arrowLeft1, 750, 175);
    ctx.drawImage(arrowLeft2, 750, 375);
    ctx.drawImage(arrowLeft3, 750, 575);

    ctx.drawImage(arrowRight1, 0, 175);
    ctx.drawImage(arrowRight2, 0, 375);
    ctx.drawImage(arrowRight3, 0, 575);
}
//draw ok button
function drawOkButton(params) {
    ctx.drawImage(okbutton, 850, 450)
}
function eraseOkButton(params) {
    ctx.fillStyle = "gray";
    ctx.fillRect(850, 450, 100, 50)
}

//draw button
function drawRotateButton(params) {
    ctx.drawImage(rotate, 850, 300)
}

//draw the colored starting tiles
function drawStartingTiles(params) {
    pink = new Image();
    pink.src = 'src/starttiles/sakura.png';
    blue = new Image();
    blue.src = 'src/starttiles/sasuke.png';
    orange = new Image();
    orange.src = 'src/starttiles/naruto.png';
    green = new Image();
    green.src = 'src/starttiles/kakashi.png';
    ctx.drawImage(pink, 675, 675);
    ctx.drawImage(orange, 75, 75);
    ctx.drawImage(blue, 675, 75);
    ctx.drawImage(green, 75, 675);

}

//draw characters
function drawCharacters() {
    if (numberOfPlayers == 2) {
        if (playerPositions[0] != playerPositions[1]) {
            //p1
            let xCord = playerPositions[0] % 7;
            let yCord = Math.floor(playerPositions[0] / 7);
            ctx.drawImage(naruto, (xCord * 100) + 75, (yCord * 100) + 55);
            //p2
            xCord = playerPositions[1] % 7;
            yCord = Math.floor(playerPositions[1] / 7);
            ctx.drawImage(sasuke, (xCord * 100) + 75, (yCord * 100) + 55);
        }
        else {
            //p1
            let xCord = playerPositions[0] % 7;
            let yCord = Math.floor(playerPositions[0] / 7);
            ctx.drawImage(naruto, (xCord * 100) + 50, (yCord * 100) + 55);
            //p2
            xCord = playerPositions[1] % 7;
            yCord = Math.floor(playerPositions[1] / 7);
            ctx.drawImage(sasuke, (xCord * 100) + 100, (yCord * 100) + 55);
        }
    }
    if (numberOfPlayers == 3) {
        if (playerPositions[0] == playerPositions[1]) {
            //p1
            let xCord = playerPositions[0] % 7;
            let yCord = Math.floor(playerPositions[0] / 7);
            ctx.drawImage(naruto, (xCord * 100) + 50, (yCord * 100) + 55);
            //p2
            xCord = playerPositions[1] % 7;
            yCord = Math.floor(playerPositions[1] / 7);
            ctx.drawImage(sasuke, (xCord * 100) + 100, (yCord * 100) + 55);
            //p3
            xCord = playerPositions[2] % 7;
            yCord = Math.floor(playerPositions[2] / 7);
            ctx.drawImage(sakura, (xCord * 100) + 75, (yCord * 100) + 55);
        }
        else if (playerPositions[0] == playerPositions[2]) {
            //p1
            let xCord = playerPositions[0] % 7;
            let yCord = Math.floor(playerPositions[0] / 7);
            ctx.drawImage(naruto, (xCord * 100) + 50, (yCord * 100) + 55);
            //p2
            xCord = playerPositions[1] % 7;
            yCord = Math.floor(playerPositions[1] / 7);
            ctx.drawImage(sasuke, (xCord * 100) + 75, (yCord * 100) + 55);
            //p3
            xCord = playerPositions[2] % 7;
            yCord = Math.floor(playerPositions[2] / 7);
            ctx.drawImage(sakura, (xCord * 100) + 100, (yCord * 100) + 55);
        }
        else if (playerPositions[1] == playerPositions[2]) {
            //p1
            let xCord = playerPositions[0] % 7;
            let yCord = Math.floor(playerPositions[0] / 7);
            ctx.drawImage(naruto, (xCord * 100) + 75, (yCord * 100) + 55);
            //p2
            xCord = playerPositions[1] % 7;
            yCord = Math.floor(playerPositions[1] / 7);
            ctx.drawImage(sasuke, (xCord * 100) + 50, (yCord * 100) + 55);
            //p3
            xCord = playerPositions[2] % 7;
            yCord = Math.floor(playerPositions[2] / 7);
            ctx.drawImage(sakura, (xCord * 100) + 100, (yCord * 100) + 55);
        }
        else if (playerPositions[0] == playerPositions[2] == playerPositions[1]) {
            //p1
            let xCord = playerPositions[0] % 7;
            let yCord = Math.floor(playerPositions[0] / 7);
            ctx.drawImage(naruto, (xCord * 100) + 50, (yCord * 100) + 55);
            //p2
            xCord = playerPositions[1] % 7;
            yCord = Math.floor(playerPositions[1] / 7);
            ctx.drawImage(sasuke, (xCord * 100) + 75, (yCord * 100) + 55);
            //p3
            xCord = playerPositions[2] % 7;
            yCord = Math.floor(playerPositions[2] / 7);
            ctx.drawImage(sakura, (xCord * 100) + 100, (yCord * 100) + 55);
        }
        else {
            //p1
            let xCord = playerPositions[0] % 7;
            let yCord = Math.floor(playerPositions[0] / 7);
            ctx.drawImage(naruto, (xCord * 100) + 75, (yCord * 100) + 55);
            //p2
            xCord = playerPositions[1] % 7;
            yCord = Math.floor(playerPositions[1] / 7);
            ctx.drawImage(sasuke, (xCord * 100) + 75, (yCord * 100) + 55);
            //p3
            xCord = playerPositions[2] % 7;
            yCord = Math.floor(playerPositions[2] / 7);
            ctx.drawImage(sakura, (xCord * 100) + 75, (yCord * 100) + 55);
        }

    }
    if (numberOfPlayers == 4) {
        //p1
        let xCord = playerPositions[0] % 7;
        let yCord = Math.floor(playerPositions[0] / 7);
        ctx.drawImage(naruto, (xCord * 100) + 50, (yCord * 100) + 50, 25, 50);
        //p2
        xCord = playerPositions[1] % 7;
        yCord = Math.floor(playerPositions[1] / 7);
        ctx.drawImage(sasuke, (xCord * 100) + 100, (yCord * 100) + 100, 25, 50);
        //p3
        xCord = playerPositions[2] % 7;
        yCord = Math.floor(playerPositions[2] / 7);
        ctx.drawImage(sakura, (xCord * 100) + 50, (yCord * 100) + 50, 25, 50);
        //p4
        xCord = playerPositions[3] % 7;
        yCord = Math.floor(playerPositions[3] / 7);
        ctx.drawImage(kakashi, (xCord * 100) + 100, (yCord * 100) + 100, 25, 50);
    }
}

//draw +1
function drawPlusOne() {
    ctx.drawImage(tmp, rowCntr, colCntr, 100, 50);
}


//
let rowCntr = 0;
let colCntr = 0;

function drawTiles(finalTiles) {
    rowCntr = 0;
    colCntr = 0;
    for (i = 0; i < 50; i++) {
        if (i == 49) {
            rowCntr = 800;
            colCntr = 300;

        }
        if (finalTiles[i].type == "kanyar") {
            if (finalTiles[i].exit == 1) {
                tmp = new Image();
                tmp.src = 'src/kanyar1.png';
                ctx.drawImage(tmp, rowCntr + 50, colCntr + 50);
            }
            if (finalTiles[i].exit == 2) {
                tmp = new Image();
                tmp.src = 'src/kanyar2.png';
                ctx.drawImage(tmp, rowCntr + 50, colCntr + 50);
            }
            if (finalTiles[i].exit == 3) {
                tmp = new Image();
                tmp.src = 'src/kanyar3.png';
                ctx.drawImage(tmp, rowCntr + 50, colCntr + 50);
            }
            if (finalTiles[i].exit == 4) {
                tmp = new Image();
                tmp.src = 'src/kanyar4.png';
                ctx.drawImage(tmp, rowCntr + 50, colCntr + 50);
            }
        }
        if (finalTiles[i].type == "haromagu") {
            if (finalTiles[i].exit == 1) {
                tmp = new Image();
                tmp.src = 'src/3agu1.png';
                ctx.drawImage(tmp, rowCntr + 50, colCntr + 50);
            }
            if (finalTiles[i].exit == 2) {
                tmp = new Image();
                tmp.src = 'src/3agu2.png';
                ctx.drawImage(tmp, rowCntr + 50, colCntr + 50);
            }
            if (finalTiles[i].exit == 3) {
                tmp = new Image();
                tmp.src = 'src/3agu3.png';
                ctx.drawImage(tmp, rowCntr + 50, colCntr + 50);
            }
            if (finalTiles[i].exit == 4) {
                tmp = new Image();
                tmp.src = 'src/3agu4.png';
                ctx.drawImage(tmp, rowCntr + 50, colCntr + 50);
            }
        }
        if (finalTiles[i].type == "egyenes") {
            if (finalTiles[i].exit == 1) {
                tmp = new Image();
                tmp.src = 'src/egyenes1.png';
                ctx.drawImage(tmp, rowCntr + 50, colCntr + 50);
            }
            if (finalTiles[i].exit == 2) {
                tmp = new Image();
                tmp.src = 'src/egyenes2.png';
                ctx.drawImage(tmp, rowCntr + 50, colCntr + 50);
            }
        }


        rowCntr = rowCntr + 100;
        if (rowCntr == 700) {
            rowCntr = 0;
            colCntr = colCntr + 100;
        }
    }
    rowCntr = 0;
    colCntr = 0;
}

ctx.fillStyle = "gray";
ctx.fillRect(0, 0, canvas.width, canvas.height);
//draw what the player looks for
function drawActualCard() {
    tmp = new Image()
    tmp.src = 'src/logos/' + playerLookingFor[currnetPlayer].source + '.png'
    ctx.drawImage(tmp, 875, 175);
}


//start the game



//klick on elements


//get mouse position

function checkMouseKlickOnArrow() {
    //down
    if (x > 180 && x < 220 && y > 1 && y < 45) {
        tmp = finalTiles[49];
        finalTiles.splice(49, 1, finalTiles[43]);
        finalTiles.splice(43, 1, finalTiles[36]);
        finalTiles.splice(36, 1, finalTiles[29]);
        finalTiles.splice(29, 1, finalTiles[22]);
        finalTiles.splice(22, 1, finalTiles[15]);
        finalTiles.splice(15, 1, finalTiles[8]);
        finalTiles.splice(8, 1, finalTiles[1]);
        finalTiles.splice(1, 1, tmp);
        // move the cards
        for (let i = 0; i < finalCards.length; i++) {
            if (finalCards[i].position == 49) {
                finalCards[i].position = 1;
                cardsMoved(i);
            }
            else if (finalCards[i].position == 43) {
                finalCards[i].position = 49;
                cardsMoved(i);
            }
            else if (finalCards[i].position == 1 || finalCards[i].position == 8 || finalCards[i].position == 15 || finalCards[i].position == 22 || finalCards[i].position == 29 || finalCards[i].position == 36) {
                finalCards[i].position = finalCards[i].position + 7;
                cardsMoved(i);
            }
        }
        //move the character if in this row
        for (let i = 0; i < playerPositions.length; i++) {
            if (playerPositions[i] == 43) {
                playerPositions[i] = 1;
            }
            else if (playerPositions[i] == 8 || playerPositions[i] == 15 || playerPositions[i] == 22 || playerPositions[i] == 29 || playerPositions[i] == 36 || playerPositions[i] == 1) {
                playerPositions[i] = playerPositions[i] + 7;
            }
        }
        pushed = true;
    }
    //380-420, 0-45
    if (x > 380 && x < 420 && y > 1 && y < 45) {
        tmp = finalTiles[49];
        finalTiles.splice(49, 1, finalTiles[45]);
        finalTiles.splice(45, 1, finalTiles[38]);
        finalTiles.splice(38, 1, finalTiles[31]);
        finalTiles.splice(31, 1, finalTiles[24]);
        finalTiles.splice(24, 1, finalTiles[17]);
        finalTiles.splice(17, 1, finalTiles[10]);
        finalTiles.splice(10, 1, finalTiles[3]);
        finalTiles.splice(3, 1, tmp);
        //movecards
        for (let i = 0; i < finalCards.length; i++) {
            if (finalCards[i].position == 49) {
                finalCards[i].position = 3;
                cardsMoved(i);
            }
            else if (finalCards[i].position == 45) {
                finalCards[i].position = 49;
                cardsMoved(i);
            }
            else if (finalCards[i].position == 3 || finalCards[i].position == 10 || finalCards[i].position == 17 || finalCards[i].position == 24 || finalCards[i].position == 31 || finalCards[i].position == 38) {
                finalCards[i].position = finalCards[i].position + 7;
                cardsMoved(i);
            }
        }
        //move the character if in this row
        for (let i = 0; i < playerPositions.length; i++) {
            if (playerPositions[i] == 45) {
                playerPositions[i] = 3;
            }
            else if (playerPositions[i] == 3 || playerPositions[i] == 10 || playerPositions[i] == 17 || playerPositions[i] == 24 || playerPositions[i] == 31 || playerPositions[i] == 38) {
                playerPositions[i] = playerPositions[i] + 7;
            }
        }
        pushed = true;
    }
    if (x > 580 && x < 620 && y > 1 && y < 45) {
        tmp = finalTiles[49];
        finalTiles.splice(49, 1, finalTiles[47]);
        finalTiles.splice(47, 1, finalTiles[40]);
        finalTiles.splice(40, 1, finalTiles[33]);
        finalTiles.splice(33, 1, finalTiles[26]);
        finalTiles.splice(26, 1, finalTiles[19]);
        finalTiles.splice(19, 1, finalTiles[12]);
        finalTiles.splice(12, 1, finalTiles[5]);
        finalTiles.splice(5, 1, tmp);
        //movecards
        for (let i = 0; i < finalCards.length; i++) {
            if (finalCards[i].position == 49) {
                finalCards[i].position = 5;
                cardsMoved(i);
            }
            else if (finalCards[i].position == 47) {
                finalCards[i].position = 49;
                cardsMoved(i);
            }
            else if (finalCards[i].position == 5 || finalCards[i].position == 12 || finalCards[i].position == 19 || finalCards[i].position == 26 || finalCards[i].position == 33 || finalCards[i].position == 40) {
                finalCards[i].position = finalCards[i].position + 7;
                cardsMoved(i);
            }
        }
        //move the character if in this row
        for (let i = 0; i < playerPositions.length; i++) {
            if (playerPositions[i] == 47) {
                playerPositions[i] = 5;
            }
            else if (playerPositions[i] == 5 || playerPositions[i] == 12 || playerPositions[i] == 19 || playerPositions[i] == 26 || playerPositions[i] == 33 || playerPositions[i] == 40) {
                playerPositions[i] = playerPositions[i] + 7;
            }
        }
        pushed = true;
    }
    //right azaz jobbra tolas.nem jobbra nyil
    if (x > 1 && x < 45 && y > 180 && y < 220) {
        tmp = finalTiles[49];
        finalTiles.splice(49, 1, finalTiles[13]);
        finalTiles.splice(13, 1, finalTiles[12]);
        finalTiles.splice(12, 1, finalTiles[11]);
        finalTiles.splice(11, 1, finalTiles[10]);
        finalTiles.splice(10, 1, finalTiles[9]);
        finalTiles.splice(9, 1, finalTiles[8]);
        finalTiles.splice(8, 1, finalTiles[7]);
        finalTiles.splice(7, 1, tmp);
        //moveccards
        for (let i = 0; i < finalCards.length; i++) {
            if (finalCards[i].position == 49) {
                finalCards[i].position = 7;
                cardsMoved(i);
            }
            else if (finalCards[i].position == 13) {
                finalCards[i].position = 49;
                cardsMoved(i);
            }
            else if (finalCards[i].position == 7 || finalCards[i].position == 8 || finalCards[i].position == 9 || finalCards[i].position == 10 || finalCards[i].position == 11 || finalCards[i].position == 12) {
                finalCards[i].position = finalCards[i].position + 1;
                cardsMoved(i);
            }
        }
        //move the character if in this row
        for (let i = 0; i < playerPositions.length; i++) {
            if (playerPositions[i] == 13) {
                playerPositions[i] = 7;
            }
            else if (playerPositions[i] == 7 || playerPositions[i] == 12 || playerPositions[i] == 11 || playerPositions[i] == 10 || playerPositions[i] == 9 || playerPositions[i] == 8) {
                playerPositions[i] = playerPositions[i] + 1;
            }
        }
        pushed = true;
    }
    if (x > 1 && x < 45 && y > 380 && y < 420) {
        tmp = finalTiles[49];
        finalTiles.splice(49, 1, finalTiles[27]);
        finalTiles.splice(27, 1, finalTiles[26]);
        finalTiles.splice(26, 1, finalTiles[25]);
        finalTiles.splice(25, 1, finalTiles[24]);
        finalTiles.splice(24, 1, finalTiles[23]);
        finalTiles.splice(23, 1, finalTiles[22]);
        finalTiles.splice(22, 1, finalTiles[21]);
        finalTiles.splice(21, 1, tmp);
        //moveccards
        for (let i = 0; i < finalCards.length; i++) {
            if (finalCards[i].position == 49) {
                finalCards[i].position = 21;
                cardsMoved(i);
            }
            else if (finalCards[i].position == 27) {
                finalCards[i].position = 49;
                cardsMoved(i);
            }
            else if (finalCards[i].position == 21 || finalCards[i].position == 22 || finalCards[i].position == 23 || finalCards[i].position == 24 || finalCards[i].position == 25 || finalCards[i].position == 26) {
                finalCards[i].position = finalCards[i].position + 1;
                cardsMoved(i);
            }
        }
        //move the character if in this row
        for (let i = 0; i < playerPositions.length; i++) {
            if (playerPositions[i] == 27) {
                playerPositions[i] = 21;
            }
            else if (playerPositions[i] == 21 || playerPositions[i] == 22 || playerPositions[i] == 23 || playerPositions[i] == 24 || playerPositions[i] == 25 || playerPositions[i] == 26) {
                playerPositions[i] = playerPositions[i] + 1;
            }
        }
        pushed = true;
    }
    if (x > 1 && x < 45 && y > 580 && y < 620) {
        tmp = finalTiles[49];
        finalTiles.splice(49, 1, finalTiles[41]);
        finalTiles.splice(41, 1, finalTiles[40]);
        finalTiles.splice(40, 1, finalTiles[39]);
        finalTiles.splice(39, 1, finalTiles[38]);
        finalTiles.splice(38, 1, finalTiles[37]);
        finalTiles.splice(37, 1, finalTiles[36]);
        finalTiles.splice(36, 1, finalTiles[35]);
        finalTiles.splice(35, 1, tmp);
        //moveccards
        for (let i = 0; i < finalCards.length; i++) {
            if (finalCards[i].position == 49) {
                finalCards[i].position = 35;
                cardsMoved(i);
            }
            else if (finalCards[i].position == 41) {
                finalCards[i].position = 49;
                cardsMoved(i);
            }
            else if (finalCards[i].position == 35 || finalCards[i].position == 36 || finalCards[i].position == 37 || finalCards[i].position == 38 || finalCards[i].position == 39 || finalCards[i].position == 40) {
                finalCards[i].position = finalCards[i].position + 1;
                cardsMoved(i);
            }
        }
        //move the character if in this row
        for (let i = 0; i < playerPositions.length; i++) {
            if (playerPositions[i] == 41) {
                playerPositions[i] = 35;
            }
            else if (playerPositions[i] == 35 || playerPositions[i] == 36 || playerPositions[i] == 37 || playerPositions[i] == 38 || playerPositions[i] == 39 || playerPositions[i] == 40) {
                playerPositions[i] = playerPositions[i] + 1;
            }
        }
        pushed = true;
    }
    //left
    if (x > 750 && x < 800 && y > 180 && y < 220) {
        tmp = finalTiles[49];
        finalTiles.splice(49, 1, finalTiles[7]);
        finalTiles.splice(7, 1, finalTiles[8]);
        finalTiles.splice(8, 1, finalTiles[9]);
        finalTiles.splice(9, 1, finalTiles[10]);
        finalTiles.splice(10, 1, finalTiles[11]);
        finalTiles.splice(11, 1, finalTiles[12]);
        finalTiles.splice(12, 1, finalTiles[13]);
        finalTiles.splice(13, 1, tmp);
        //moveccards
        for (let i = 0; i < finalCards.length; i++) {
            if (finalCards[i].position == 49) {
                finalCards[i].position = 13;
                cardsMoved(i);
            }
            else if (finalCards[i].position == 7) {
                finalCards[i].position = 49;
                cardsMoved(i);
            }
            else if (finalCards[i].position == 13 || finalCards[i].position == 8 || finalCards[i].position == 9 || finalCards[i].position == 10 || finalCards[i].position == 11 || finalCards[i].position == 12) {
                finalCards[i].position = finalCards[i].position - 1;
                cardsMoved(i);
            }
        }
        //move the character if in this row
        for (let i = 0; i < playerPositions.length; i++) {
            if (playerPositions[i] == 7) {
                playerPositions[i] = 13;
            }
            else if (playerPositions[i] == 8 || playerPositions[i] == 9 || playerPositions[i] == 10 || playerPositions[i] == 11 || playerPositions[i] == 12 || playerPositions[i] == 13) {
                playerPositions[i] = playerPositions[i] - 1;
            }
        }
        pushed = true;
    }
    if (x > 750 && x < 800 && y > 380 && y < 420) {
        tmp = finalTiles[49];
        finalTiles.splice(49, 1, finalTiles[21]);
        finalTiles.splice(21, 1, finalTiles[22]);
        finalTiles.splice(22, 1, finalTiles[23]);
        finalTiles.splice(23, 1, finalTiles[24]);
        finalTiles.splice(24, 1, finalTiles[25]);
        finalTiles.splice(25, 1, finalTiles[26]);
        finalTiles.splice(26, 1, finalTiles[27]);
        finalTiles.splice(27, 1, tmp);
        //moveccards
        for (let i = 0; i < finalCards.length; i++) {
            if (finalCards[i].position == 49) {
                finalCards[i].position = 27;
                cardsMoved(i);
            }
            else if (finalCards[i].position == 21) {
                finalCards[i].position = 49;
                cardsMoved(i);
            }
            else if (finalCards[i].position == 27 || finalCards[i].position == 22 || finalCards[i].position == 23 || finalCards[i].position == 24 || finalCards[i].position == 25 || finalCards[i].position == 26) {
                finalCards[i].position = finalCards[i].position - 1;
                cardsMoved(i);
            }
        }
        //move the character if in this row
        for (let i = 0; i < playerPositions.length; i++) {
            if (playerPositions[i] == 21) {
                playerPositions[i] = 27;
            }
            else if (playerPositions[i] == 22 || playerPositions[i] == 23 || playerPositions[i] == 24 || playerPositions[i] == 25 || playerPositions[i] == 26 || playerPositions[i] == 27) {
                playerPositions[i] = playerPositions[i] - 1;
            }
        }
        pushed = true;
    }
    if (x > 750 && x < 800 && y > 580 && y < 620) {
        tmp = finalTiles[49];
        finalTiles.splice(49, 1, finalTiles[35]);
        finalTiles.splice(35, 1, finalTiles[36]);
        finalTiles.splice(36, 1, finalTiles[37]);
        finalTiles.splice(37, 1, finalTiles[38]);
        finalTiles.splice(38, 1, finalTiles[39]);
        finalTiles.splice(39, 1, finalTiles[40]);
        finalTiles.splice(40, 1, finalTiles[41]);
        finalTiles.splice(41, 1, tmp);
        //moveccards
        for (let i = 0; i < finalCards.length; i++) {
            if (finalCards[i].position == 49) {
                finalCards[i].position = 41;
                cardsMoved(i);
            }
            else if (finalCards[i].position == 35) {
                finalCards[i].position = 49;
                cardsMoved(i);
            }
            else if (finalCards[i].position == 41 || finalCards[i].position == 36 || finalCards[i].position == 37 || finalCards[i].position == 38 || finalCards[i].position == 39 || finalCards[i].position == 40) {
                finalCards[i].position = finalCards[i].position - 1;
                cardsMoved(i);
            }
        }
        //move the character if in this row
        for (let i = 0; i < playerPositions.length; i++) {
            if (playerPositions[i] == 35) {
                playerPositions[i] = 41;
            }
            else if (playerPositions[i] == 36 || playerPositions[i] == 37 || playerPositions[i] == 38 || playerPositions[i] == 39 || playerPositions[i] == 40 || playerPositions[i] == 41) {
                playerPositions[i] = playerPositions[i] - 1;
            }
        }
        pushed = true;
    }
    //up
    if (x > 180 && x < 220 && y > 750 && y < 800) {
        tmp = finalTiles[49];
        finalTiles.splice(49, 1, finalTiles[1]);
        finalTiles.splice(1, 1, finalTiles[8]);
        finalTiles.splice(8, 1, finalTiles[15]);
        finalTiles.splice(15, 1, finalTiles[22]);
        finalTiles.splice(22, 1, finalTiles[29]);
        finalTiles.splice(29, 1, finalTiles[36]);
        finalTiles.splice(36, 1, finalTiles[43]);
        finalTiles.splice(43, 1, tmp);
        // move the cards
        for (let i = 0; i < finalCards.length; i++) {
            if (finalCards[i].position == 49) {
                finalCards[i].position = 41;
            }
            else if (finalCards[i].position == 1) {
                finalCards[i].position = 49;
            }
            else if (finalCards[i].position == 43 || finalCards[i].position == 8 || finalCards[i].position == 15 || finalCards[i].position == 22 || finalCards[i].position == 29 || finalCards[i].position == 36) {
                finalCards[i].position = finalCards[i].position - 7;
            }
            cardsMoved(i);
        }
        //move the character if in this row
        for (let i = 0; i < playerPositions.length; i++) {
            if (playerPositions[i] == 1) {
                playerPositions[i] = 43;
            }
            else if (playerPositions[i] == 8 || playerPositions[i] == 15 || playerPositions[i] == 22 || playerPositions[i] == 29 || playerPositions[i] == 36 || playerPositions[i] == 43) {
                playerPositions[i] = playerPositions[i] - 7;
            }
        }
        pushed = true;
    }
    if (x > 380 && x < 420 && y > 750 && y < 800) {
        tmp = finalTiles[49];
        finalTiles.splice(49, 1, finalTiles[3]);
        finalTiles.splice(3, 1, finalTiles[10]);
        finalTiles.splice(10, 1, finalTiles[17]);
        finalTiles.splice(17, 1, finalTiles[24]);
        finalTiles.splice(24, 1, finalTiles[31]);
        finalTiles.splice(31, 1, finalTiles[38]);
        finalTiles.splice(38, 1, finalTiles[45]);
        finalTiles.splice(45, 1, tmp);
        // move the cards
        for (let i = 0; i < finalCards.length; i++) {
            if (finalCards[i].position == 49) {
                finalCards[i].position = 45;
            }
            else if (finalCards[i].position == 3) {
                finalCards[i].position = 49;
            }
            else if (finalCards[i].position == 45 || finalCards[i].position == 10 || finalCards[i].position == 17 || finalCards[i].position == 24 || finalCards[i].position == 31 || finalCards[i].position == 38) {
                finalCards[i].position = finalCards[i].position - 7;
            }
            cardsMoved(i);
        }
        //move the character if in this row
        for (let i = 0; i < playerPositions.length; i++) {
            if (playerPositions[i] == 3) {
                playerPositions[i] = 45;
            }
            else if (playerPositions[i] == 45 || playerPositions[i] == 10 || playerPositions[i] == 17 || playerPositions[i] == 24 || playerPositions[i] == 31 || playerPositions[i] == 38) {
                playerPositions[i] = playerPositions[i] - 7;
            }
        }
        pushed = true;
    }
    if (x > 580 && x < 620 && y > 750 && y < 800) {
        tmp = finalTiles[49];
        finalTiles.splice(49, 1, finalTiles[5]);
        finalTiles.splice(5, 1, finalTiles[12]);
        finalTiles.splice(12, 1, finalTiles[19]);
        finalTiles.splice(19, 1, finalTiles[26]);
        finalTiles.splice(26, 1, finalTiles[33]);
        finalTiles.splice(33, 1, finalTiles[40]);
        finalTiles.splice(40, 1, finalTiles[47]);
        finalTiles.splice(47, 1, tmp);
        //xd nemtom nem masoltam de kartya mozgatas tudod
        for (let i = 0; i < finalCards.length; i++) {
            if (finalCards[i].position == 49) {
                finalCards[i].position = 47;
            }
            else if (finalCards[i].position == 5) {
                finalCards[i].position = 49;
            }
            else if (finalCards[i].position == 47 || finalCards[i].position == 12 || finalCards[i].position == 19 || finalCards[i].position == 26 || finalCards[i].position == 33 || finalCards[i].position == 40) {
                finalCards[i].position = finalCards[i].position - 7;
            }

        }
        //move the character if in this row
        for (let i = 0; i < playerPositions.length; i++) {
            if (playerPositions[i] == 5) {
                playerPositions[i] = 47;
            }
            else if (playerPositions[i] == 47 || playerPositions[i] == 12 || playerPositions[i] == 19 || playerPositions[i] == 26 || playerPositions[i] == 33 || playerPositions[i] == 40) {
                playerPositions[i] = playerPositions[i] - 7;
            }
        }
        pushed = true;
    }
}
function checkMouseKlickOnMoveArrow() {
    if (x > 850 && y > 300 && x < 950 && y < 350) {
        rotateTile();
    }
    if (checked == true) {
        if (x > 880 && x < 915 && y < 700 && y > 650) {
            if (pushed == true) {
                moveUp(currnetPlayer);
            }
        }
        if (x > 920 && x < 970 && y < 740 && y > 710) {
            if (pushed == true) {
                moveRight(currnetPlayer);
            }
        }
        if (x > 880 && x < 915 && y < 750 && y > 700) {
            if (pushed == true) {
                moveDown(currnetPlayer);
            }
        }
        if (x > 825 && x < 875 && y < 740 && y > 710) {
            if (pushed == true) {
                moveLeft(currnetPlayer);
            }
        }
    }
    if (pushed == true) {
        if (x > 850 && x < 950 && y < 500 && y > 450) {
            round();
        }
    }
}

function getMousePosition(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    x = event.clientX - rect.left;
    y = event.clientY - rect.top;
    if (pushed == false) {
        checkMouseKlickOnArrow();
    }
    checkMouseKlickOnMoveArrow()
}

function startTheGame() {
    if (menux < 740 && menux > 260 && menuy > 110 && menuy < 220) {
        numberOfPlayers = input.value;
        cardsNeeded = cardperplayer.value;
        gameloop();
        playersFirstCard();
        menudiv.hidden = true;
        gameovercanvas.hidden = true;
        canvas.hidden = false;
    }
    if (menux < 750 && menux > 250 && menuy > 525 && menuy < 600) {
        menudiv.hidden = true;
        jatekleiras.hidden = false;
    }
}
function getMousePositionMenu(menu, event) {
    let rect = menu.getBoundingClientRect();
    menux = event.clientX - rect.left;
    menuy = event.clientY - rect.top;
    startTheGame();
    console.log(menux, menuy);
}

canvas.addEventListener("click", function (e) {
    getMousePosition(canvas, e);
})
menu.addEventListener("click", function (e) {
    getMousePositionMenu(menu, e);
})
