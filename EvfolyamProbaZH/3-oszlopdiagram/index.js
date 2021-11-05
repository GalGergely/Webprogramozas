red = document.getElementById("red")
redSpan = document.getElementById("redSpan")
green = document.getElementById("green")
greenSpan = document.getElementById("greenSpan")
blue = document.getElementById("blue")
blueSpan = document.getElementById("blueSpan")
canvas = document.getElementById("canvas")
animate = document.getElementById("animate")
var ctx = canvas.getContext("2d");
let prevTime = performance.now();
itson = false;
animate.addEventListener('change', function () {
    if (this.checked) {
        itson = true;
    } else {
        itson = false;
    }
});
function asd() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    redSpan.innerHTML = red.value;
    greenSpan.innerHTML = green.value;
    blueSpan.innerHTML = blue.value;
    ctx.fillStyle = "red"
    ctx.fillRect(0, 400 - red.value, 100, red.value);
    ctx.fillStyle = "green"
    ctx.fillRect(100, 400 - green.value, 100, green.value);
    ctx.fillStyle = "blue"
    ctx.fillRect(200, 400 - blue.value, 100, blue.value);
}
red.addEventListener('input', asd)
green.addEventListener('input', asd)
blue.addEventListener('input', asd)
function changeValues() {
    if (Math.random() < 0.5) {
        red.value++
        red.value++
    }
    else {
        red.value--
        red.value--
    }
    if (Math.random() < 0.5) {
        blue.value++
        blue.value++
    }
    else {
        blue.value--
        blue.value--
    }
    if (Math.random() < 0.5) {
        green.value++;
        green.value++;
    }
    else {
        green.value--;
        green.value--;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    redSpan.innerHTML = red.value;
    greenSpan.innerHTML = green.value;
    blueSpan.innerHTML = blue.value;
    ctx.fillStyle = "red"
    ctx.fillRect(0, 400 - red.value, 100, red.value);
    ctx.fillStyle = "green"
    ctx.fillRect(100, 400 - green.value, 100, green.value);
    ctx.fillStyle = "blue"
    ctx.fillRect(200, 400 - blue.value, 100, blue.value);
}

function gameloop(now = performance.now()) {
    prevTime = now
    if (itson == true) {
        changeValues();
    }
    if (parseInt(redSpan.innerHTML) > parseInt(greenSpan.innerHTML) && parseInt(redSpan.innerHTML) > parseInt(blueSpan.innerHTML)) {
        ctx.fillStyle = "black"
        ctx.fillRect(0, 400 - redSpan.innerHTML, 300, 4);
    }
    if (parseInt(blueSpan.innerHTML) > parseInt(greenSpan.innerHTML) && parseInt(blueSpan.innerHTML) > parseInt(redSpan.innerHTML)) {
        ctx.fillStyle = "black"
        ctx.fillRect(0, 400 - blueSpan.innerHTML, 300, 4);
    }
    if (parseInt(greenSpan.innerHTML) > parseInt(blueSpan.innerHTML) && parseInt(greenSpan.innerHTML) > parseInt(redSpan.innerHTML)) {
        console.log("green");
        ctx.fillStyle = "black"
        ctx.fillRect(0, 400 - greenSpan.innerHTML, 300, 4);
    }
    requestAnimationFrame(gameloop);
}
gameloop();