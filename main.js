let maxx = 19;
let maxy = 9;
let playerA = {
  x: 19,
  y: 9,
  width: 50,
  height: 50
};

let playerB = {
  x: 0,
  y: 0,
  width: 50,
  height: 50,
};

const canvas = document.getElementById("turtle");
const ctx = canvas.getContext("2d");

window.addEventListener("keydown", function(event) {
  if (event.key === "ArrowUp") {
    if (playerA.y > 0);{
      playerA.y -= 1;
    }
  }

  if (event.key === "ArrowDown") {
    if (playerA.y < maxy);{
      playerA.y += 1;
    }
  }

  if (event.key === "ArrowLeft") {
    if (playerA.x > 0);{
      playerA.x -= 1;
    }
  }

  if (event.key === "ArrowRight") {
    if (playerA.x < maxx){
      playerA.x += 1;
    }
  }

  if (event.key === "w") {
    if (playerB.y > 0);{
      playerB.y -= 1;
    }
  }

  if (event.key === "s") {
    if (playerB.y < maxy);{
      playerB.y += 1;
    }
  }

  if (event.key === "a") {
    if (playerB.x > 0);{
      playerB.x -= 1;
    }
  }

  if (event.key === "d") {
    if (playerB.x < maxx){
      playerB.x += 1;
    }
  }
});

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#aa6666";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#813c3c78";

  for (let i = 0; i < canvas.height; i++) {
    for (let n = 0; n < canvas.width; n++) {
      ctx.fillRect(n * 100, i * 100, 50, 50);
      ctx.fillRect(n * 100 + 50, i * 100 + 50, 50, 50);
    }
  }
  
  ctx.fillStyle = "red";
  ctx.fillRect(playerA.x*50, playerA.y*50, playerA.width, playerA.height);
  ctx.fillStyle = "blue";
  ctx.fillRect(playerB.x*50, playerB.y*50, playerB.width, playerB.height);

  requestAnimationFrame(gameLoop);
}

gameLoop();


function collision(object1, object2) {
  return (
    object1.x < object2.x + object2.width &&
    object1.x + object1.width > object2.x &&
    object1.y < object2.y + object2.height &&
    object1.y + object1.height > object2.y
  );
}
