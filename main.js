let x = 250;
let y = 250;
const canvas = document.getElementById("turtle");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "green";

window.addEventListener('keydown', function(event) {
    if(event.key === "ArrowUp") {
        y -= 50;
    }
});

window.addEventListener('keydown', function(event) {
    if(event.key === "ArrowDown") {
        y += 50;
    }
});

window.addEventListener('keydown', function(event) {
    if(event.key === "ArrowLeft") {
        x -= 50;
    }
});

window.addEventListener('keydown', function(event) {
    if(event.key === "ArrowRight") {
        x += 50;
    }
});

function runGame(){
        ctx.clearRect(0, 0, 500, 500);
        ctx.fillRect(x, y, 50, 50);
        requestAnimationFrame(runGame);
}

runGame();