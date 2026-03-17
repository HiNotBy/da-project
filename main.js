for(var i = 0; i < 500; i = i + 50){
    for(var i = 0; i < 500; i = i + 50){
        
    }
}







let x = 250;
let y = 250;
const canvas = document.getElementById("turtle");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "green";

window.addEventListener('keydown', function(event) {
    if(event.key === "ArrowUp") {
        y = y - 50
        ctx.clearRect(0, 0, 500, 500);
        ctx.fillRect(x-25, y-25, 50, 50);
    }
});

window.addEventListener('keydown', function(event) {
    if(event.key === "ArrowDown") {
        y = y + 50
        ctx.clearRect(0, 0, 500, 500);
        ctx.fillRect(x-25, y-25, 50, 50);
    }
});

window.addEventListener('keydown', function(event) {
    if(event.key === "ArrowLeft") {
        x = x - 50
        ctx.clearRect(0, 0, 500, 500);
        ctx.fillRect(x-25, y-25, 50, 50);
    }
});

window.addEventListener('keydown', function(event) {
    if(event.key === "ArrowRight") {
        x = x + 50
        ctx.clearRect(0, 0, 500, 500);
        ctx.fillRect(x-25, y-25, 50, 50);
    }
});