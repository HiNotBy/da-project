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
        x += 50
    }
});

yes();

function gameLoop(){
    ctx.clearRect(0, 0, 500, 500);
    for(var i = 0; i < 500; i = i + 1){
        for(var n = 0; n < 500; n = n + 1){
            ctx.fillStyle = "red"
            ctx.fillRect(n*100, i*100, 50,50);
        }
    }

    for(var i = 0; i < 500; i = i + 1){
        for(var n = 0; n < 500; n = n + 1){
            ctx.fillStyle = "blue"
            ctx.fillRect((n*100 + 50), (i*100 + 50), 50,50);
        }
    }
    ctx.fillRect(x-25, y-25, 50, 50);

    requestAnimationFrame(gameloop());
}
